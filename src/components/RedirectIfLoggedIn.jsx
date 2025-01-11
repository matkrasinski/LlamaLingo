import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const RedirectIfLoggedIn = ({ children }) => {
  const { userLoggedIn } = useAuth();

  if (userLoggedIn) {
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;
