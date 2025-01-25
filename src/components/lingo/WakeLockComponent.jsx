import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const WakeLockComponent = () => {
  const [wakeLock, setWakeLock] = useState(null);
  const [isWakeLockActive, setIsWakeLockActive] = useState(false);

  const requestWakeLock = async () => {
    try {
      if ("wakeLock" in navigator) {
        const wakeLockObj = await navigator.wakeLock.request("screen");
        setWakeLock(wakeLockObj);
        setIsWakeLockActive(true);

        console.log("Wake Lock is active");
        toast.success("Wake Lock is now active!");

        // Listen for release events
        wakeLockObj.addEventListener("release", () => {
          console.log("Wake Lock was released");
          setIsWakeLockActive(false);
          toast.info("Wake Lock was released.");
        });
      } else {
        console.log("Wake Lock API is not supported in this browser.");
        toast.warning("Wake Lock API is not supported in this browser.");
      }
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
      toast.error(`Wake Lock Error: ${err.message}`);
    }
  };

  const releaseWakeLock = () => {
    if (wakeLock) {
      wakeLock.release();
      setWakeLock(null);
      setIsWakeLockActive(false);
      console.log("Wake Lock released manually");
      toast.info("Wake Lock released manually.");
    }
  };

  useEffect(() => {
    return () => {
      if (wakeLock) {
        wakeLock.release();
        console.log("Wake Lock released on unmount");
      }
    };
  }, [wakeLock]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Wake Lock Manager</h1>

      <div className="flex gap-4">
        <button
          onClick={requestWakeLock}
          disabled={isWakeLockActive}
          className={`bg-green-500 text-white px-6 py-2 rounded-lg shadow-md transition-all hover:bg-green-600 disabled:opacity-50`}
        >
          Lock Screen
        </button>

        <button
          onClick={releaseWakeLock}
          disabled={!isWakeLockActive}
          className={`bg-red-500 text-white px-6 py-2 rounded-lg shadow-md transition-all hover:bg-red-600 disabled:opacity-50`}
        >
          Unlock Screen
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        {isWakeLockActive ? "Wake Lock is currently active." : "Wake Lock is inactive."}
      </p>
    </div>
  );
};

export default WakeLockComponent;
