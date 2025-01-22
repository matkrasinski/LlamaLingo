import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WomanSvg, BoySvg, AppleSvg } from "../Svgs";

const LessonPagePhoto = ({ health,changeHealth,indexUnit,indexLesson,indexTask,units}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [checked, setChecked] = useState(false); // Tracks whether the check button was clicked
  const { unit, lessonId } = useParams();
  const correctAnswer = units[indexUnit].tiles[indexLesson].tasks[indexTask].answer;
  const question = units[indexUnit].tiles[indexLesson].tasks[indexTask].question;
  const navigate = useNavigate();

  const handleOptionClick = (word) => {
    setSelectedOption(word);
    setChecked(false); // Reset the check state if a new option is selected
  };

  const handleCheck = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption === correctAnswer);
      setChecked(true);
      if (selectedOption !== correctAnswer){
        changeHealth();
      }
    } else {
      alert("Please select an option first.");
    }
  };

  const handleNext = () => {
    // Logic for moving to the next question goes here
    // alert("Moving to the next question...");
    setSelectedOption(null);
    setIsCorrect(null);
    setChecked(false);
    console.log(health);
    if (health === 0){
      navigate('/main');
    } else {
      const currentUrl = window.location.pathname;
    const updatedUrl = currentUrl.replace(/\/(\d+)$/, (match, p1) => `/${parseInt(p1, 10) + 1}`);
    navigate(updatedUrl);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      Unit: {unit}, Lesson: {lessonId}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{question}</h1>

      <div className="grid grid-cols-3 gap-6 max-w-4xl mb-6">
        <div
          onClick={() => handleOptionClick("Woman")}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === "Woman" ? "border-4 border-blue-500" : ""
            }`}
        >
          <WomanSvg />
          <span className="text-gray-700 text-lg font-medium">Woman</span>
        </div>

        <div
          onClick={() => handleOptionClick("Boy")}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === "Boy" ? "border-4 border-blue-500" : ""
            }`}
        >
          <BoySvg />
          <span className="text-gray-700 text-lg font-medium">Boy</span>
        </div>

        <div
          onClick={() => handleOptionClick("Apple")}
          className={`bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center ${selectedOption === "Apple" ? "border-4 border-blue-500" : ""
            }`}
        >
          <AppleSvg />
          <span className="text-gray-700 text-lg font-medium">Apple</span>
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
