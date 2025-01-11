import React from "react";
import { useParams } from "react-router-dom";
import LessonPagePhoto from "../lingo/LessonPagePhoto";
import LessonPickWord from "../lingo/LessonPickWord";

const lessonTasks = {
  unit_1: {
    1: "photo", // LessonPagePhoto
    2: "pick_word", // LessonPickWord
  },
  unit_2: {
    1: "photo",
    2: "pick_word",
  },
};

const Lessons = () => {
  const { unit, lessonId } = useParams();

  const taskType = lessonTasks[unit]?.[lessonId];

  switch (taskType) {
    case "photo":
      return <LessonPagePhoto />;
    case "pick_word":
      return <LessonPickWord />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Lesson not found or unsupported task type!
          </h1>
        </div>
      );
  }
};

export default Lessons;
