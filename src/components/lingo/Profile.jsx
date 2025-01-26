import LeftBar from "./LeftBar";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useBoundStore } from "../../hooks/useBoundStore";


const Profile = () => {
    const {
        wakeLock,
        isWakeLockActive,
        requestWakeLock,
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

            <div className="col-span-9 p-4">Tak </div>
        </div>
    )
}

export default Profile;
