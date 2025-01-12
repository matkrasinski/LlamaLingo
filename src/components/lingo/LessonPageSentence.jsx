import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LessonPageSentence = () => {
  const [userInput, setUserInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const correctAnswer = 'dias';
  const navigate = useNavigate();
  const handleCheckAnswer = () => {
    setChecked(true);
    setIsCorrect(userInput.trim().toLowerCase() === correctAnswer);
  };

  const handleNext = () => {
    setUserInput('');
    setIsCorrect(null);
    setChecked(false);
    navigate('/main');
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          {/* <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          /> */}
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Complete the sentence
          </h1>

          <div className="w-full">
            <p>Dzien dobry Panie Siarra</p>
            <p>
              Buenos
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border rounded p-1 mx-1"
              />
              Señor Siarra
            </p>
          </div>
          {!checked && (
            <button
              onClick={handleCheckAnswer}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
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
        </section>

      </div>

      {/* <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      /> */}
    </div>
  );
};

export default LessonPageSentence;
