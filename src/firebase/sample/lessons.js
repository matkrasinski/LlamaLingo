import { collection, doc, setDoc } from "firebase/firestore";

const lessons = [
  {
    lesson_id: "lesson",
    tasks: ["task_es_easy_1", "task_es_easy_2", "task_es_easy_3"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_easy_4", "task_es_easy_5", "task_es_easy_6"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_easy_7", "task_es_easy_8", "task_es_easy_9"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_easy_10", "task_es_easy_11", "task_es_easy_12"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_1", "task_es_medium_2", "task_es_medium_3"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_4", "task_es_medium_5", "task_es_medium_6"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_7", "task_es_medium_8", "task_es_medium_9"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_10", "task_es_medium_11", "task_es_medium_12"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_13", "task_es_medium_14", "task_es_medium_15"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_16", "task_es_medium_17", "task_es_medium_18"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_19", "task_es_medium_20", "task_es_medium_21"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_22", "task_es_medium_23", "task_es_medium_24"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_medium_25", "task_es_medium_26", "task_es_medium_27"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_hard_1", "task_es_hard_2", "task_es_hard_3"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_hard_4", "task_es_hard_5", "task_es_hard_6"],
  },
  {
    lesson_id: "lesson",
    tasks: ["task_es_hard_7", "task_es_hard_8", "task_es_hard_9"],
  },
];

// lesson_<lang>_<level>_<nr>
export async function loadSampleLessons(db) {
  let counter = { hard: 0, easy: 0, medium: 0 };
  const tasksRef = collection(db, "lessons");

  for (let lesson of lessons) {
    const level = getLevel(lesson.tasks);

    const id = `lesson_es_${level}_${counter[level]}`;
    await setDoc(doc(tasksRef, id), lesson);

    counter[level]++;
  }
}

function getLevel(tasks) {
  for (let task of tasks) {
    if (task.includes("hard")) {
      return "hard";
    } else if (task.includes("easy")) {
      return "easy";
    } else if (task.includes("medium")) {
      return "medium";
    }
  }
}
