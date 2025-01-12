import React from "react";
import { useParams } from "react-router-dom";
import LessonPagePhoto from "../lingo/LessonPagePhoto";
import LessonPickWord from "../lingo/LessonPickWord";

const lessonTasks = {
  unit_1: {
    1: ["photo", "pick_word", "quiz"],
    2: ["photo", "pick_word"],
  },
  unit_2: {
    1: ["photo", "pick_word", "quiz"],
    2: ["photo", "quiz"],
  },
};

const Lessons = () => {
  const { unit, lessonId, taskId } = useParams();

  const tasks = lessonTasks[unit]?.[lessonId];
  const taskType = tasks ? tasks[parseInt(taskId) - 1] : null;

  switch (taskType) {
    case "photo":
      return <LessonPagePhoto />;
    case "pick_word":
      return <LessonPickWord />;
    case "quiz":
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800">Quiz Task</h1>
        </div>
      );
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Task not found or unsupported task type!
          </h1>
        </div>
      );
  }
};

export default Lessons;
