import React from "react";
import { WomanSvg, BoySvg, AppleSvg } from "../Svgs";

const LessonPage = () => {
  const handleOptionClick = (word) => {
    alert(`You selected: ${word}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Which word matches the picture?</h1>
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        {/* Option 1: Woman */}
        <div
          onClick={() => handleOptionClick("Woman")}
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center"
        >
          <WomanSvg />
          <span className="text-gray-700 text-lg font-medium">Woman</span>
        </div>

        {/* Option 2: Boy */}
        <div
          onClick={() => handleOptionClick("Boy")}
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center"
        >
          <BoySvg />
          <span className="text-gray-700 text-lg font-medium">Boy</span>
        </div>

        {/* Option 3: Apple */}
        <div
          onClick={() => handleOptionClick("Apple")}
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-100 transition cursor-pointer flex flex-col items-center"
        >
          <AppleSvg />
          <span className="text-gray-700 text-lg font-medium">Apple</span>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
