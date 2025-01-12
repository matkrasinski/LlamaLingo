import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LessonPagePhoto from "../lingo/LessonPagePhoto";
import LessonPickWord from "../lingo/LessonPickWord";
import LessonPageSentence from "../lingo/LessonPageSentence";

const lessonTasks = {
  unit_1: {
    1: ["photo", "pick_word", "sentence"],
    2: ["photo", "pick_word"],
  },
  unit_2: {
    1: ["photo", "pick_word", "sentence"],
    2: ["photo", "quiz"],
  },
};

const Lessons = () => {
  const { unit, lessonId, taskId } = useParams();

  const tasks = lessonTasks[unit]?.[lessonId];
  const taskType = tasks ? tasks[parseInt(taskId) - 1] : null;
  const [health,setHealth] = useState(1);

  const changeHealth = () => {
    const newHealth = health-1;
    setHealth(newHealth);
  };

  switch (taskType) {
    case "photo":
      return <LessonPagePhoto health = {health} changeHealth={changeHealth}/>;
    case "pick_word":
      return <LessonPickWord health = {health} changeHealth={changeHealth}/>;
    case "sentence":
      return <LessonPageSentence health = {health} changeHealth={changeHealth}/>;
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
