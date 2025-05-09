import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { getFirebaseToken } from "../../firebase/firebase";
import WakeLockComponent from "./WakeLockComponent";

const LeftBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNotificationBanner, setShowNotificationBanner] = useState(Notification.permission === 'default');

    const handleClickOutside = (event) => {
        if (!event.target.closest('.leftbar-container') && !event.target.closest('.menu-button')) {
            setIsMenuOpen(false);
        }
    };

    const handleGetFirebaseToken = () => {
        getFirebaseToken()
            .then((firebaseToken) => {
                console.log('Firebase token: ', firebaseToken);
                if (firebaseToken) {
                    setShowNotificationBanner(false);
                }
            })
            .catch((err) => console.error('An error occured while retrieving firebase token. ', err))
    }
    return (
        <>
            <button
                className="menu-button lg:hidden fixed top-4 left-4 bg-gray-200 p-2 rounded-lg shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img src="/icons/hamburger.png" alt="Menu" className="w-8 h-8" />
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
            )}

            <div className={`leftbar-container fixed top-0 left-0 h-full bg-white shadow-lg p-4 flex flex-col gap-6 
                transition-transform duration-300 z-50 overflow-y-auto
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:w-1/4 md:min-w-[250px] max-w-[300px] overflow-hidden
        `}>
                {showNotificationBanner && (
                    <div className="bg-green-100 border border-green-500 text-green-800 p-4 flex items-center justify-between rounded-xl shadow-md min-w-[240px]">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold">
                                Enable push notifications for a better experience!
                            </span>
                        </div>
                        <button
                            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-md"
                            onClick={handleGetFirebaseToken}
                        >
                            Grant Permission
                        </button>
                    </div>
                )}

                <Link className="mb-8 mt-5 text-3xl font-extrabold text-[#58cc02] lg:block">
                    Llamalingo
                </Link>
                <Link
                    to="/main"
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 text-lg font-bold uppercase transition-all
                    ${location.pathname === "/main"
                            ? "border-2 border-[#84d8ff] bg-[#ddf4ff] text-blue-600 shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        }
                `}
                >
                    <img
                        src="/icons/learn.png"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
                        alt="Learn Icon"
                    />
                    <span className="text-sm sm:text-base md:text-lg font-bold uppercase">
                        Learn
                    </span>
                </Link>

                <Link
                    to="/profile"
                    // onClick={() => setIsModalOpen(true)}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all
                    ${location.pathname === "/profile"
                            ? "border-2 border-[#84d8ff] bg-[#ddf4ff] text-blue-600 shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        }
                `
                    }
                >
                    <img
                        src="/icons/profile.png"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
                        alt="Profile Icon"
                    />
                    <span className="text-sm sm:text-base md:text-lg font-bold uppercase">
                        Profile
                    </span>
                </Link>

                <WakeLockComponent />
                {userLoggedIn && (
                    <button
                        onClick={() => {
                            doSignOut().then(() => {
                                navigate('/');
                            });
                        }}
                        className="mt-auto flex items-center gap-4 rounded-xl px-4 py-3 text-lg font-bold uppercase text-red-600 bg-red-100 hover:bg-red-200 transition-all"
                    >
                        Logout
                    </button>
                )}
            </div>
        </>
    );
};

export default LeftBar;
