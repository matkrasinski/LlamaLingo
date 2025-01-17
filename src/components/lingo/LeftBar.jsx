import React from 'react';
import {Link, useLocation } from 'react-router-dom'

const LeftBar = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col gap-5 p-5">
            
            <Link className="mb-5  mt-5 hidden text-3xl font-bold text-[#58cc02] lg:block">
                Llamalingo
            </Link>
            <Link 
                to="/main"
                className={`flex items-center gap-3 rounded-xl  px-2 py-1 text-sm font-bold uppercase
                    ${location.pathname === "/main" ? "border-2 border-[#84d8ff] bg-[#ddf4ff] text-blue-400" : "text-gray-700"}
                `}
            >
                <img src="/icons/learn.png" className={`w-16 h-16`}/>
                Learn
            </Link>
            
            <Link 
                to="/profile"
                className={`flex items-center gap-3 rounded-xl  px-2 py-1 text-sm font-bold uppercase
                    ${location.pathname === "/shop" ? "border-2 border-[#84d8ff] bg-[#ddf4ff] text-blue-400" : "text-gray-700"}
                `}
            >
                <img src="/icons/profile.png" className={`w-16 h-16`}/>
                Profile</Link>
        </div>
    )
}

export default LeftBar;