import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
const LanguageHeader = () => {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  const isSmallScreen = window.innerWidth < 640;
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
      {/* Logo on the far left */}
      <div className="flex items-center">
        <Link className="text-4xl" to="/">
          llamalingo
        </Link>
      </div>

      {/* Navigation buttons on the far right */}
      <div className="flex items-center space-x-2">
        {userLoggedIn ? (
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate('/home');
              });
            }}
            className="text-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 px-4 py-2 rounded shadow-md"
          >
            Logout
          </button>
        ) : (
          !isSmallScreen && (
          <>
            <Link
              className="rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-4 py-2 transition hover:bg-[#204b82]"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="rounded-2xl border-b-4 border-green-700 bg-green-600 px-4 py-2 text-center font-bold transition hover:border-green-600 hover:bg-green-500 "
              to="/register"
            >
              Register New Account
            </Link>
          </>)
        )}
      </div>
    </header>

  );
}

export default LanguageHeader;
