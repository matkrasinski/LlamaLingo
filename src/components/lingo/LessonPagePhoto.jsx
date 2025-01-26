import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WomanSvg, BoySvg, AppleSvg } from "../Svgs";
import { toast } from 'react-toastify';
import { getWoman, getMan, getApple } from "./courses/photoTranslations";

const LessonPagePhoto = ({ health, changeHealth, indexUnit, indexLesson, indexTask, language }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [checked, setChecked] = useState(false); // Tracks whether the check button was clicked
  const { unit, lessonId } = useParams();
  const units = language.units
  const languageCode = language.code
  const correctAnswer = units[indexUnit].tiles[indexLesson].tasks[indexTask].answer;
  const question = units[indexUnit].tiles[indexLesson].tasks[indexTask].question;
  const navigate = useNavigate();

  const handleOptionClick = (word) => {
    setSelectedOption(word);
    setChecked(false); // Reset the check state if a new option is selected
  };

  const handleCheck = () => {
    if (selectedOption) {
      console.log('language: ' + JSON.stringify(language))
      console.log('selectedOption: ' + selectedOption)
      console.log('correctAnswer: ' + correctAnswer)
      setIsCorrect(selectedOption === correctAnswer);
      setChecked(true);
      if (selectedOption !== correctAnswer) {
        changeHealth();
      }
    } else {
      toast("Please select an option first.");
    }
  };

  const handleNext = () => {
    // Logic for moving to the next question goes here
    // alert("Moving to the next question...");
    setSelectedOption(null);
    setIsCorrect(null);
    setChecked(false);
    console.log(health);
    if (health === 0 || indexTask + 2 > units[indexUnit].tiles[indexLesson].tasks.length) {
      navigate('/main');
    } else {
      const currentUrl = window.location.pathname;
      const nextTask = units[indexUnit].tiles[indexLesson].tasks[indexTask + 1].taskType;
      const updatedUrl = currentUrl.replace(
        /\/lessons\/(\d+)\/(\d+)\/(\d+)\/\w+$/,
        `/lessons/${indexUnit + 1}/${indexLesson + 1}/${indexTask + 2}/${nextTask}`
      );
      console.log(updatedUrl)
      console.log(nextTask)
      navigate(updatedUrl);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      Unit: {unit}, Lesson: {lessonId}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{question}</h1>

      <div className="grid grid-cols-3 gap-6 max-w-4xl mb-6">
        <div
          onClick={() => !checked && handleOptionClick(getWoman(languageCode))}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === getWoman(languageCode) ? "border-4 border-blue-500" : ""
            } ${checked ? "pointer-events-none opacity-50" : ""}`}
        >
          <WomanSvg />
          <span className="text-gray-700 text-lg font-medium">{getWoman(languageCode)}</span>
        </div>

        <div
          onClick={() => !checked && handleOptionClick(getMan(languageCode))}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === getMan(languageCode) ? "border-4 border-blue-500" : ""
            } ${checked ? "pointer-events-none opacity-50" : ""}`}
        >
          <BoySvg />
          <span className="text-gray-700 text-lg font-medium">{getMan(languageCode)}</span>
        </div>

        <div
          onClick={() => !checked && handleOptionClick(getApple(languageCode))}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === getApple(languageCode) ? "border-4 border-blue-500" : ""
            } ${checked ? "pointer-events-none opacity-50" : ""}`}
        >
          <AppleSvg />
          <span className="text-gray-700 text-lg font-medium">{getApple(languageCode)}</span>
        </div>
      </div>

      {/* Check Button */}
      {!checked && (
        <button
          onClick={handleCheck}
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Check
        </button>
      )}

      {checked && (
        <div
          className={`mt-6 w-full max-w-4xl py-4 text-center text-white font-bold text-lg rounded-lg ${isCorrect ? "bg-green-500" : "bg-red-500"
            }`}
        >
          {/* Feedback Text */}
          <div>{isCorrect ? "Correct! Great job!" : "Incorrect! Try again."}</div>

          {/* Next Button with Added Spacing */}
          <button
            onClick={handleNext}
            className="mt-6 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonPagePhoto;
