import React from "react";
import languages from "../../utils/languages.js";
import { courses, coursesObj } from "../../utils/units.js"; // Key-value pair object
import { useBoundStore } from "../../hooks/useBoundStore";
import { Flag } from "../lingo/Flag.jsx";
import { Link } from "react-router-dom";

const LanguageSelect = () => {
  const { setLanguage, user, addUserCourses } = useBoundStore();

  const handleLanguageSelect = (language) => {
    const { code } = language;

    // Access the course units directly using the key-value structure
    const newCourse = {
      ...language,
      units: coursesObj[code] || [], // Use the code as the key to get units
    };

    // Check if the course already exists
    if (!user.courses.some((course) => course.code === code)) {
      addUserCourses(newCourse); // Add course to the store
    }

    // Set the selected language in the store
    setLanguage(language);
  };

  return (
    <div className="flex justify-between items-center pt-14 px-4">
      <section className="mx-auto grid w-full max-w-5xl grow grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {languages.map((language) => (
          <Link
            key={language.code}
            to="/main"
            onClick={() => handleLanguageSelect(language)}
            className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-gray-400 px-5 py-8 text-xl font-bold"
          >
            <Flag language={language} />
            <span>{language.name}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default LanguageSelect;
