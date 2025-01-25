import React from "react";
import { useRef, useState } from "react";
import { WomanSvg, BoySvg, AppleSvg } from "../Svgs";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { ToastContainer, toast } from 'react-toastify';
import done from "../../utils/coursesDone.json"
import { useBoundStore } from "../../hooks/useBoundStore";
import { setDocFromCollection } from "../../firebase/db";
import { toast } from 'react-toastify';


const addElementToLanguage = (data, language, unitElement, lessonElement) => {
  console.log(data[language][`unit${unitElement}`]?.[String(lessonElement)])

  if(data[language][`unit${unitElement}`]){
    data[language][`unit${unitElement}`][String(lessonElement)] = "done";
  }
  
};

const LessonPickWord = ({ health, changeHealth, indexUnit, indexLesson, indexTask, units }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [checked, setChecked] = useState(false);
  const { user,addUserProgress,updateUserProgress } = useBoundStore();

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  const correctAnswer = units[indexUnit].tiles[indexLesson].tasks[indexTask].answer;
  const answerTiles = useMemo(() => shuffle([...correctAnswer]), [correctAnswer]);
  console.log(health)
  const navigate = useNavigate();

  const handleCheck = () => {
    if (selectedAnswers.length !== correctAnswer.length) {
      toast("Please pick all world first.");
      return false;
    }

    const selectedWords = selectedAnswers.map((i) => answerTiles[i]);

    for (let i = 0; i < selectedWords.length; i++) {
      if (selectedWords[i] !== correctAnswer[i]) {
        //alert("Wrong." + selectedWords[i] + ", "+ correctAnswer[i]);
        setChecked(true);
        setIsCorrect(false);
        changeHealth();
        return false;
      }
    }
    setChecked(true);
    setIsCorrect(true);
    // addElementToLanguage(done, 'es', indexUnit+1, indexLesson + 1)
    
    if(user.progress[user.courses[0].code]=== undefined || user.progress[user.courses[0].code][`unit${indexUnit+1}`] === undefined || user.progress[user.courses[0].code][`unit${indexUnit+1}`][indexLesson+1] === undefined){
      const progress = {}
      progress['courses'] = {}
      progress['courses'][user.courses[0].code] = {}
      progress['courses'][user.courses[0].code][`unit${indexUnit+1}`] = {}
      progress['courses'][user.courses[0].code][`unit${indexUnit+1}`][indexLesson+1] = 'done'
      // console.log(progress)
      // setDocFromCollection('users',user.uid, progress);
      addUserProgress(progress);
    }
    console.log(user)
    
    return true;
  };

  const handleNext = () => {
    setSelectedAnswers([]);
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
      // console.log(updatedUrl)
      // console.log(nextTask)
      navigate(updatedUrl);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">Put words in the right order</h1> */}
      <div className="flex flex-col items-center gap-5 mb-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          {/* <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          /> */}
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Put words in the right order
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              {/* <WomanSvg />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                Tutto per tutto
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div> */}
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
