import React from "react";
import Header from "../header";
import languages from '../../utils/languages.js';
import { Flag } from '../lingo/Flag.jsx';
import { Link } from "react-router-dom"


const LanguageSelect = () => {
  return (
    <div className="flex justify-between items-center pt-14 px-4">
      <section className="mx-auto grid w-full max-w-5xl grow grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {languages.map((language) => (
          <Link
          key = {language.name}
          to="/main"
          className={
            "flex cursor-pointer flex-col items-center rounded-2xl border-2 border-gray-400 px-5 py-8 text-xl font-bold"
          }
          >
          <Flag language={language} />
          <span>{language.name}</span>
          </Link>
        ))}
        </section>
      <Header></Header>
    </div>
  )
}

export default LanguageSelect;
