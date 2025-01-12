// import React from "react";
// import { useRef, useState } from "react";
// import { WomanSvg, BoySvg, AppleSvg } from "../Svgs";

// const LessonPage2 = () => {
//   const [selectedAnswers, setSelectedAnswers] =  useState([]);

//   const answerTiles = ["America", "make", "again", "greate"];
//   const correctAnswer = ["make", "America", 'greate', "again"];

//   // const handleOptionClick = (word) => {
//   //   alert(`You selected: ${word}`);
//   // };


//   return (
//     <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
//       <div className="flex grow flex-col items-center gap-5">
//         <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
//           {/* <ProgressBar
//             correctAnswerCount={correctAnswerCount}
//             totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
//             setQuitMessageShown={setQuitMessageShown}
//             hearts={hearts}
//           /> */}
//         </div>
//         <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
//           <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
//             Complete the sentence
//           </h1>

//           <div className="w-full">

//             <div className="flex min-h-[60px] flex-wrap gap-1 border-b-2 border-t-2 border-gray-200 py-1">
//               {selectedAnswers.map((i) => {
//                 return (
//                   <button
//                     key={i}
//                     className="rounded-2xl border-2 border-b-4 border-b-4 border-gray-200 p-2 text-gray-700"
//                     onClick={() => {
//                       setSelectedAnswers((selectedAnswers) => {
//                         return selectedAnswers.filter((x) => x !== i);
//                       });
//                     }}
//                   >
//                     {answerTiles[i]}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center gap-1">
//             {answerTiles.map((answerTile, i) => {
//               return (
//                 <button
//                   key={i}
//                   className={
//                     selectedAnswers.includes(i)
//                       ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
//                       : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
//                   }
//                   disabled={selectedAnswers.includes(i)}
//                   onClick={() =>
//                     setSelectedAnswers((selectedAnswers) => {
//                       if (selectedAnswers.includes(i)) {
//                         return selectedAnswers;
//                       }
//                       return [...selectedAnswers, i];
//                     })
//                   }
//                 >
//                   {answerTile}
//                 </button>
//               );
//             })}
//           </div>
//         </section>
//       </div>

//       {/* <CheckAnswer
//         correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
//         correctAnswerShown={correctAnswerShown}
//         isAnswerCorrect={isAnswerCorrect}
//         isAnswerSelected={selectedAnswers.length > 0}
//         onCheckAnswer={onCheckAnswer}
//         onFinish={onFinish}
//         onSkip={onSkip}
//       />

//       <QuitMessage
//         quitMessageShown={quitMessageShown}
//         setQuitMessageShown={setQuitMessageShown}
//       /> */}
//     </div>
//   );
// };

// export default LessonPage2;
