import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { useBoundStore } from "./hooks/useBoundStore";
import { getDocsFromCollection, getUserCoursesFromFirebase } from "./firebase/db";
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

// Import react-toastify components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const setCourses = useBoundStore((state) => state.setCourses);
  const { user, setUserCourses, coursesAll } = useBoundStore();

  // Handle Wake Lock API
  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          const wakeLockObj = await navigator.wakeLock.request("screen");
          console.log("Wake Lock is active");

          // Reapply wake lock if it gets released
          wakeLockObj.addEventListener("release", () => {
            console.log("Wake Lock was released");
          });
        } else {
          console.log("Wake Lock API is not supported in this browser.");
          toast.warning("Wake Lock API is not supported in this browser."); // Show warning if not supported
        }
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
        toast.error(`Wake Lock Error: ${err.message}`); // Show error notification on failure
      }
    };

    // Request wake lock when app is mounted
    requestWakeLock();

    // Cleanup on unmount
    return () => {
      if ("wakeLock" in navigator) {
        navigator.wakeLock.release();
        console.log("Wake Lock released");
      }
    };
  }, []);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await getDocsFromCollection("courses");
        if (courses) {
          setCourses(courses);
          toast.success("Courses loaded successfully!"); // Success notification when courses are loaded
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Failed to load courses. Please try again!"); // Error notification on failure
      }
    };

    fetchCourses();
  }, [setCourses]);

  // Fetch user courses
  useEffect(() => {
    if (user && user.uid) {
      const fetchUserCourses = async () => {
        try {
          const userCourseCodes = await getUserCoursesFromFirebase(user.uid);

          const fullCourses = userCourseCodes.map((code) => {
            return { code: code, units: coursesAll[code] || [] };
          });

          setUserCourses(fullCourses);
          toast.success("User courses loaded successfully!"); // Success notification for user courses
        } catch (error) {
          console.error("Error fetching user courses:", error);
          toast.error("Failed to load user courses. Please try again!"); // Error notification for user courses
        }
      };

      fetchUserCourses();
    }
  }, [user.uid, coursesAll, setUserCourses]);

  // Define routes
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
          <Lessons />
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
      path: "/profile",
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
        <div className="w-full h-screen flex flex-col">{routesElement}</div>
      </AuthProvider>
      {/* ToastContainer is where the toast notifications will be rendered */}
      <ToastContainer
        autoClose={5000}  // Toast will auto close after 5 seconds
        hideProgressBar={false}  // Show progress bar
        newestOnTop={false}  // Newest toast appears at the bottom
        closeButton={true}  // Enable close button on toast
        pauseOnHover={false}  // Pause progress bar when hovering
        draggable={true}  // Allow dragging of toasts
      />
    </div>
  );
}

export default App;
