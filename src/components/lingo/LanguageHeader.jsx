import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageDropDown } from "./LanguageDropDown";
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
const LanguageHeader = () => {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
      <Link className="text-4xl" to="/">
        llamalingo
      </Link>
      <LanguageDropDown />
      {
        userLoggedIn
          ?
          <>
            <button onClick={() => { doSignOut().then(() => { navigate('/home') }) }} className='text-sm text-blue-600 underline'>Logout</button>
          </>
          :
          <>
            <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
            <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
          </>
      }
    </header>
  );
}

export default LanguageHeader;
