import LeftBar from "./LeftBar";
import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useBoundStore } from "../../hooks/useBoundStore";

const Collapsible = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-2 mb-2">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{label}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="pl-4 pt-2">{children}</div>}
    </div>
  );
};

const DataView = ({ progress }) => {
  const renderData = (progress) => {
    return Object.entries(progress).map(([key, value]) => {
      if (typeof value === "object") {
        return (
          <Collapsible key={key} label={key}>
            {renderData(value)}
          </Collapsible>
        );
      } else {
        return (
          <div key={key} className="pl-4">
            {key}: <span className="text-green-600">{value}</span>
          </div>
        );
      }
    });
  };

  return <div className="p-4">{renderData(progress)}</div>;
};

const Profile = () => {
  const {
    wakeLock,
    isWakeLockActive,
    requestWakeLock,
    user
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
    <div className="grid grid-cols-12 h-screen gap-4">
      <div className="col-span-3 p-4"><LeftBar /></div>
      <DataView progress={user.progress} />
      <div className="col-span-9 p-4">Tak </div>
    </div>
  )
}

export default Profile;
