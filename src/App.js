import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import Main from "./components/main";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
import LanguageSelect from "./components/lingo/LanguageSelect";
import Lessons from "./components/lessons";
import SplashScreen from "./components/lingo/SplashScreen";


import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import { getCourses } from "./firebase/db";

function App() {
  // const elo = async () => {
  //   await getCourses();
  // }
  // elo()
  const routesArray = [
    {
      path: "*",
      element: <Home />,
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
      path: "/lessons/:unit/:lessonId/:taskId",
      element: (
        <ProtectedRoute>
          <Lessons />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/languageSelect",
      element: <LanguageSelect />,
    },
  ];

  const routesElement = useRoutes(routesArray);
  return (
    <div><SplashScreen />
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
    </div>
  );
}

export default App;

