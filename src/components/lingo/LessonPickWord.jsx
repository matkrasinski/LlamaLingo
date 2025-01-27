import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { toast } from 'react-toastify';
import { useBoundStore } from "../../hooks/useBoundStore";


const LessonPickWord = ({ health, changeHealth, indexUnit, indexLesson, indexTask, units }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [checked, setChecked] = useState(false);
  const { user, updateUserProgress } = useBoundStore();

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  const correctAnswer = units[indexUnit].tiles[indexLesson].tasks[indexTask].answer;
  const answerTiles = useMemo(() => shuffle([...correctAnswer]), [correctAnswer]);
  const navigate = useNavigate();

  const handleCheck = () => {
    if (selectedAnswers.length !== correctAnswer.length) {
      toast("Please pick all words first.");
      return false;
    }

    const selectedWords = selectedAnswers.map((i) => answerTiles[i]);

    for (let i = 0; i < selectedWords.length; i++) {
      if (selectedWords[i] !== correctAnswer[i]) {
        setChecked(true);
        setIsCorrect(false);
        changeHealth();
        return false;
      }
    }

    setChecked(true);
    setIsCorrect(true);

    if (indexTask + 1 === 3) {
      const courseCode = user.courses[0]?.code; // Assume the first course is active
      const unitKey = `unit${indexUnit + 1}`;
      const lessonKey = String(indexLesson + 1);

      if (courseCode) {
        const progress = {
          [String(courseCode)]: {
            [unitKey]: {
              [lessonKey]: "done",
            },
          },
        };

        // Add or update the progress in Zustand store
        updateUserProgress(progress);
        // const courseCodes = user.courses.map((course) => course.code);
        // setDocFromCollection('users',user.uid,{courses: courseCodes ,progress:progress});
      }
    }

    return true;
  };


  const handleNext = () => {
    setSelectedAnswers([]);
    setIsCorrect(null);
    setChecked(false);
    if (health === 0 || indexTask + 2 > units[indexUnit].tiles[indexLesson].tasks.length) {
      navigate('/main');
    } else {
      const currentUrl = window.location.pathname;
      const nextTask = units[indexUnit].tiles[indexLesson].tasks[indexTask + 1].taskType;
      const updatedUrl = currentUrl.replace(
        /\/lessons\/(\d+)\/(\d+)\/(\d+)\/\w+$/,
        `/lessons/${indexUnit + 1}/${indexLesson + 1}/${indexTask + 2}/${nextTask}`
      );
      navigate(updatedUrl);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-5 mb-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Put words in the right order
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-b-2 border-t-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
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

export default LessonPickWord;
