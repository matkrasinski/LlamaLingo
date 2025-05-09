import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import Main from "./components/main";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
import LanguageSelect from "./components/lingo/LanguageSelect";
import Lessons from "./components/lessons";
import SplashScreen from "./components/lingo/SplashScreen";
import Profile from "./components/lingo/Profile";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import {
  getDocsFromCollection,
  getUserCoursesFromFirebase,
  getUserProgressesFromFirebase,
} from "./firebase/db";
import { useEffect } from "react";
import { useBoundStore } from "./hooks/useBoundStore";
import { ToastContainer } from "react-toastify";

function App() {
  const setCourses = useBoundStore((state) => state.setCourses);
  const { user, setUserCourses, coursesAll, addUserProgress } = useBoundStore();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await getDocsFromCollection("courses");
        if (courses) {
          setCourses(courses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [setCourses]);

  useEffect(() => {
    /*
    { code: 'de', units: Array(3) }
    */
    if (user && user.uid) {
      const fetchUserCourses = async () => {
        try {
          const userCourseCodes = await getUserCoursesFromFirebase(user.uid);
          const fullCourses = userCourseCodes.map((code) => {
            return { code: code, units: coursesAll[code] || [] };
          });
          setUserCourses(fullCourses);
        } catch (error) {
          console.error("Error fetching user courses:", error);
        }
      };

      fetchUserCourses();
    }
  }, [user.uid, coursesAll, setUserCourses]);

  useEffect(() => {
    if (user && user.uid) {
      const fetchUserProgress = async () => {
        try {
          const userProgress= await getUserProgressesFromFirebase(user.uid);
          addUserProgress(userProgress);
        } catch (error) {
          console.error("Error fetching user progress:", error);
        }
      }

      fetchUserProgress();
    }
  }, [user.uid, addUserProgress])

  const routesArray = [
    {
      path: "*",
      element: (
        <div>
          <SplashScreen />
          <Home />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <RedirectIfLoggedIn>
          <Login />
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/register",
      element: (
        <RedirectIfLoggedIn>
          <Register />
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/main",
      element: (
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>
      ),
    },
    {
      path: "/lessons/:unit/:lessonId/:taskId/:taskType",
      element: (
        <ProtectedRoute>
          <Lessons />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/languageSelect",
      element: (
        <ProtectedRoute>
          <LanguageSelect />
        </ProtectedRoute>
      ),
    },
    {
      path: "/Profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
  ];

  const routesElement = useRoutes(routesArray);
  return (
    <div>
      <AuthProvider>
        <div className="w-full min-h-screen flex flex-col overflow-hidden">{routesElement}</div>
      </AuthProvider>
      <ToastContainer hideProgressBar/>
    </div>
  );
}

export default App;
