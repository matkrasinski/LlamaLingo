import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LessonPagePhoto from "../lingo/LessonPagePhoto";
import LessonPickWord from "../lingo/LessonPickWord";
import LessonPageSentence from "../lingo/LessonPageSentence";
import { useBoundStore } from "../../hooks/useBoundStore";

const Lessons = () => {
  const { unit, lessonId, taskId } = useParams();
  const { user } = useBoundStore();

  const indexUnit = unit-1;
  const indexLesson = lessonId-1;
  const indexTask = taskId-1;

  const [health,setHealth] = useState(1);
  // choose language
  const language = user.courses[0];

  const changeHealth = () => {
    const newHealth = health-1;
    setHealth(newHealth);
  };

  switch (indexTask) {
    case 0:
      return <LessonPagePhoto health = {health} changeHealth={changeHealth} indexUnit={indexUnit} indexLesson={indexLesson} indexTask={indexTask} units={language.units}/>;
    case 1:
      return <LessonPickWord health = {health} changeHealth={changeHealth} indexUnit={indexUnit} indexLesson={indexLesson} indexTask={indexTask} units={language.units}/>;
    case 2:
      return <LessonPageSentence health = {health} changeHealth={changeHealth} indexUnit={indexUnit} indexLesson={indexLesson} indexTask={indexTask} units={language.units}/>;
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
