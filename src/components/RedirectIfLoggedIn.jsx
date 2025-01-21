import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useBoundStore } from "../hooks/useBoundStore";

const RedirectIfLoggedIn = ({ children }) => {
  const { userLoggedIn } = useAuth();
  const { user } = useBoundStore();
  console.log('len' + user.courses.length);

  if (userLoggedIn && user.courses.length === 0) {
    return <Navigate to="/languageSelect" replace />;
  } 
  else if (userLoggedIn && user.courses.length !== 0) {
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;
