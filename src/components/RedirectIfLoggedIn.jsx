import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const RedirectIfLoggedIn = ({ children }) => {
  const { userLoggedIn } = useAuth();

  if (userLoggedIn) {
    //TODO Jak będzie już ustawiony język dla danego konta, to przechodzimy od razu do /main
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;
