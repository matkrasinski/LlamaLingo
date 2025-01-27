import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useBoundStore } from "../hooks/useBoundStore";
import { getUserCoursesFromFirebase } from "../firebase/db";

const RedirectIfLoggedIn = ({ children }) => {
  const { userLoggedIn } = useAuth();
  const { user } = useBoundStore();
  const [userCourseCodes, setUserCourseCodes] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    if (userLoggedIn && user?.uid) {
      setLoading(true);
      getUserCoursesFromFirebase(user.uid)
        .then((courses) => {
          setUserCourseCodes(courses);
        })
        .catch((error) => {
          console.error("Error fetching user courses:", error);
          setUserCourseCodes([]);
        })
        .finally(() => {
          setTimeout(() => setLoading(false), 500);
        });
    } else {
      setLoading(false);
    }
  }, [userLoggedIn, user]);

  if (!userLoggedIn) {
    return children;
  }

  if (!userLoggedIn || loading || userCourseCodes === null) {
    return <div>Loading...</div>; 
  }

  if (userCourseCodes && userCourseCodes.length > 0) {
    return <Navigate to="/main" replace />;
  } else {
    return <Navigate to="/languageSelect" replace />;
  }

  // return children;
};

export default RedirectIfLoggedIn;
