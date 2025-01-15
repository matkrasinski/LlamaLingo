import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useBoundStore } from "../../hooks/useBoundStore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    const { setUser, resetUser } = useBoundStore.getState();
    if (user) {
      const uid = user.uid
      setCurrentUser({ ...user, uid });

      // check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      // check if the auth provider is google or not
    //   const isGoogle = user.providerData.some(
    //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
    //   );
    //   setIsGoogleUser(isGoogle);

      setUser({
        uid: user.uid,
      });
      setUserLoggedIn(true);

    } else {
      resetUser();
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
