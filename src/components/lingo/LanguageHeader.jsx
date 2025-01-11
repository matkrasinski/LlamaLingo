import React from "react";
import { Link } from "react-router-dom";
import { LanguageDropDown } from "./LanguageDropDown";

const LanguageHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
      <Link className="text-4xl" to="/">
        llamalingo
      </Link>
      <LanguageDropDown />
    </header>
  );
}

export default LanguageHeader;
