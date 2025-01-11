import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageHeader from "../lingo/LanguageHeader";
import { LanguageCarousel } from "../lingo/LanguageCarousel";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white">
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <img src="favicon.ico" className="h-fit w-7/12 md:w-[450px]"></img>
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            The free, fun, and effective way to learn a language!
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              to="/register"
              className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
            >
              Get started
            </Link>
            <button
              onClick={() => navigate("/login")} // Navigate to /login
              className="w-full rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-8 py-3 font-bold uppercase transition hover:bg-[#204b82] md:min-w-[320px]"
            >
              I already have an account
            </button>
          </div>
        </div>
      </div>
      <LanguageCarousel />
    </main>
  );
};

export default Home;
