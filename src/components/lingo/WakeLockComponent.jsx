import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useBoundStore } from "../../hooks/useBoundStore";

const WakeLockComponent = () => {
  const {
    wakeLock,
    isWakeLockActive,
    requestWakeLock,
    releaseWakeLock,
  } = useBoundStore();

  useEffect(() => {
    // Handle visibility changes to reacquire Wake Lock
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible" && isWakeLockActive && !wakeLock) {
        await requestWakeLock(); // Reacquire the Wake Lock
        toast.info("Wake Lock reacquired after visibility change.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isWakeLockActive, wakeLock, requestWakeLock]);

  useEffect(() => {
    // Automatically reacquire Wake Lock on component mount if it's active
    if (isWakeLockActive && !wakeLock) {
      requestWakeLock();
    }
  }, [isWakeLockActive, wakeLock, requestWakeLock]);

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
