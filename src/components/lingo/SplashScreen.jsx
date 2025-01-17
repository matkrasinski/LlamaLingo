import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ffffff", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <img src="/icons/favicon.ico" alt="Splash Logo" style={{ width: 600 }} />
    </div>
  );
};

export default SplashScreen;