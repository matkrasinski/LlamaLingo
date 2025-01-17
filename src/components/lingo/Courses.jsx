import React, { useState } from "react";
import { Flag } from "./Flag";
import { units } from "../../utils/units";
import languages from "../../utils/languages";
import { useBoundStore } from "../../hooks/useBoundStore";

export const courses = [
  {
    code: "es",
    units: units,
  },
  {
    code: "en",
    units: units,
  },
  {
    code: "pl",
    units: units,
  },
];

const Courses = () => {
  const [currentCourses, setCurrentCourses] = useState(courses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Access user state and addUserCourses from the store
  const { user, addUserCourses } = useBoundStore();

  const handleCourseClick = (code) => {
    // Move the clicked course to the top
    setCurrentCourses((prevCourses) => {
      const clickedCourse = prevCourses.find((course) => course.code === code);
      const remainingCourses = prevCourses.filter((course) => course.code !== code);
      return [clickedCourse, ...remainingCourses];
    });
  };

  const handleAddCourse = (code) => {
    // Check if the course is already added
    if (currentCourses.find((course) => course.code === code)) {
      alert("Course already added!");
      return;
    }

    // Find the selected language by code
    const selectedLanguage = languages.find((language) => language.code === code);
    if (selectedLanguage) {
      // Add course to the state and also update the store
      setCurrentCourses((prevCourses) => [
        ...prevCourses,
        { code: selectedLanguage.code, units: units },
      ]);

      // Add the course to the user store (Persisting the courses in the store)
      addUserCourses({ code: selectedLanguage.code, units: units });

      setIsModalOpen(false); // Close the modal after adding the course
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {currentCourses.map((course) => {
          const language = languages.find((lang) => lang.code === course.code);
          return (
            <div
              key={course.code}
              className="flex flex-col items-center border rounded-lg p-4 shadow-md bg-white cursor-pointer hover:bg-gray-100"
              onClick={() => handleCourseClick(course.code)}
            >
              {language && (
                <>
                  <Flag language={language} width={64} />
                  <span className="mt-2 text-lg font-semibold">{language.name}</span>
                  <span className="text-sm text-gray-600">{language.nativeName}</span>
                </>
              )}
            </div>
          );
        })}
      </div>

      <h2 className="text-xl font-bold mb-4">Add a New Course</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-200"
      >
        Select a Language
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking the background
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto" // Max height + scroll
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when inside modal
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Add a New Course</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
              {languages.map((language) => (
                <div
                  key={language.code}
                  className="flex flex-col items-center border rounded-lg p-4 shadow-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleAddCourse(language.code)}
                >
                  <Flag language={language} width={32} />
                  <span className="mt-2 text-sm font-semibold">{language.name}</span>
                  <span className="text-xs text-gray-600">{language.nativeName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
