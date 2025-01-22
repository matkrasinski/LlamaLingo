import React, { useState, useEffect } from "react";
import { Flag } from "./Flag";
import languages from "../../utils/languages";
import { useBoundStore } from "../../hooks/useBoundStore";
import { setDocFromCollection } from "../../firebase/db";
import { ToastContainer, toast } from 'react-toastify';
const Courses = () => {
  const [currentCourses, setCurrentCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, coursesAll, addUserCourses, updateUserCourses } = useBoundStore();

  useEffect(() => {
    if (user.uid) {
      const syncToFirebase = async () => {
        try {
          const courseCodes = user.courses.map((course) => course.code);

          await setDocFromCollection("users", user.uid, { courses: courseCodes });
          console.log("User course codes synced to Firebase:", courseCodes);
        } catch (error) {
          console.error("Error syncing user course codes to Firebase:", error);
        }
      };

      syncToFirebase();
    }
  }, [user.courses, user.uid]);

  useEffect(() => {
    setCurrentCourses(user.courses || []);
  }, [user.courses]);


  const handleCourseClick = (code) => {
    const clickedCourse = currentCourses.find((course) => course.code === code);
    const remainingCourses = currentCourses.filter((course) => course.code !== code);
    const updatedCourses = [clickedCourse, ...remainingCourses];

    // Update store and state
    setCurrentCourses(updatedCourses);
    updateUserCourses(updatedCourses);
  };

  const handleAddCourse = (code) => {
    if (currentCourses.find((course) => course.code === code)) {
      toast("Course already added!");
      return;
    }

    const selectedLanguage = languages.find((language) => language.code === code);
    if (selectedLanguage) {
      const newCourse = { code: selectedLanguage.code, units: coursesAll[code] || [] };
      const updatedCourses = [...currentCourses, newCourse];

      // Update store and state
      setCurrentCourses(updatedCourses);
      addUserCourses(newCourse);

      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <ToastContainer/>
      <h2 className="text-xl font-bold mb-4">Your Courses</h2>

      {currentCourses.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          You have no courses yet. Add a new course!
        </div>
      ) : (
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
      )}

      <h2 className="text-xl font-bold mb-4">Add a New Course</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-200"
      >
        Select a Language
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
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

