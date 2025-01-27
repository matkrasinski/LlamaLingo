import { collection, doc, setDoc } from "firebase/firestore";

const tasks = [
  {
    sentence: "Yo ___ en la casa.",
    options: ["nado", "corro", "vivo"],
    correct_answer: "vivo",
    level: "easy",
  },
  {
    sentence: "Ellos ___ a jugar fútbol.",
    options: ["van", "come", "leer"],
    correct_answer: "van",
    level: "easy",
  },
  {
    sentence: "Nosotros ___ la comida en el restaurante.",
    options: ["escribimos", "pedimos", "cantamos"],
    correct_answer: "pedimos",
    level: "medium",
  },
  {
    sentence: "El profesor ___ sobre la historia de España.",
    options: ["baila", "enseña", "compra"],
    correct_answer: "enseña",
    level: "medium",
  },
  {
    sentence: "Si ___ más temprano, no habríamos llegado tarde.",
    options: ["hubiéramos dormido", "hubiéramos salido", "hubiéramos comido"],
    correct_answer: "hubiéramos salido",
    level: "hard",
  },
  {
    sentence: "Ella ___ una carta a su amiga.",
    options: ["escribe", "corre", "bebe"],
    correct_answer: "escribe",
    level: "easy",
  },
  {
    sentence: "Nosotros ___ a la tienda todos los días.",
    options: ["vamos", "canta", "lee"],
    correct_answer: "vamos",
    level: "easy",
  },
  {
    sentence: "Ellos ___ en el parque.",
    options: ["juegan", "duermen", "corremos"],
    correct_answer: "juegan",
    level: "easy",
  },
  {
    sentence: "Tú ___ muy bien en la clase.",
    options: ["aprendes", "comes", "bailas"],
    correct_answer: "aprendes",
    level: "easy",
  },
  {
    sentence: "Yo ___ libros interesantes.",
    options: ["leo", "bebo", "nado"],
    correct_answer: "leo",
    level: "easy",
  },
  {
    sentence: "Nosotros ___ la televisión por la noche.",
    options: ["vemos", "dormimos", "comemos"],
    correct_answer: "vemos",
    level: "easy",
  },
  {
    sentence: "Ustedes ___ español muy bien.",
    options: ["hablan", "escriben", "corren"],
    correct_answer: "hablan",
    level: "easy",
  },
  {
    sentence: "Ellos ___ la cena juntos.",
    options: ["preparan", "leen", "bailan"],
    correct_answer: "preparan",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ en la piscina los fines de semana.",
    options: ["nadamos", "cantamos", "escribimos"],
    correct_answer: "nadamos",
    level: "medium",
  },
  {
    sentence: "El estudiante ___ la lección en voz alta.",
    options: ["lee", "come", "bebe"],
    correct_answer: "lee",
    level: "medium",
  },
  {
    sentence: "Mi hermano ___ la guitarra en la banda.",
    options: ["toca", "bebe", "corre"],
    correct_answer: "toca",
    level: "medium",
  },
  {
    sentence: "Los niños ___ con sus juguetes.",
    options: ["juegan", "escriben", "nadan"],
    correct_answer: "juegan",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ café en la mañana.",
    options: ["bebemos", "leemos", "corremos"],
    correct_answer: "bebemos",
    level: "medium",
  },
  {
    sentence: "Él ___ muy rápido.",
    options: ["corre", "bebe", "escribe"],
    correct_answer: "corre",
    level: "easy",
  },
  {
    sentence: "Ellos ___ a la biblioteca todos los días.",
    options: ["van", "beben", "escriben"],
    correct_answer: "van",
    level: "easy",
  },
  {
    sentence: "Nosotros ___ muchas películas.",
    options: ["vemos", "corremos", "bebemos"],
    correct_answer: "vemos",
    level: "easy",
  },
  {
    sentence: "Ellos ___ juntos todas las tardes.",
    options: ["estudian", "comen", "bailan"],
    correct_answer: "estudian",
    level: "medium",
  },
  {
    sentence: "Ella ___ una canción bonita.",
    options: ["canta", "come", "bebe"],
    correct_answer: "canta",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ la casa todos los días.",
    options: ["limpiamos", "escribimos", "corremos"],
    correct_answer: "limpiamos",
    level: "medium",
  },
  {
    sentence: "El médico ___ a muchos pacientes.",
    options: ["atiende", "bebe", "escribe"],
    correct_answer: "atiende",
    level: "medium",
  },
  {
    sentence: "Ellos ___ a sus amigos en el parque.",
    options: ["conocen", "corren", "leen"],
    correct_answer: "conocen",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ muchas cosas nuevas.",
    options: ["aprendemos", "bailamos", "dormimos"],
    correct_answer: "aprendemos",
    level: "medium",
  },
  {
    sentence: "Ellos ___ la tarea juntos.",
    options: ["hacen", "comen", "beben"],
    correct_answer: "hacen",
    level: "medium",
  },
  {
    sentence: "Ellos siempre ___ la verdad.",
    options: ["dicen", "comen", "corren"],
    correct_answer: "dicen",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ el coche en el garaje.",
    options: ["guardamos", "bailamos", "escribimos"],
    correct_answer: "guardamos",
    level: "medium",
  },
  {
    sentence: "Los estudiantes ___ en la mañana.",
    options: ["desayunan", "corren", "beben"],
    correct_answer: "desayunan",
    level: "medium",
  },
  {
    sentence: "Ellos ___ la música alta.",
    options: ["escuchan", "beben", "escriben"],
    correct_answer: "escuchan",
    level: "medium",
  },
  {
    sentence: "Nosotros siempre ___ en el trabajo.",
    options: ["almorzamos", "escribimos", "bailamos"],
    correct_answer: "almorzamos",
    level: "medium",
  },
  {
    sentence: "Ellos ___ una carta al director.",
    options: ["escriben", "comen", "beben"],
    correct_answer: "escriben",
    level: "medium",
  },
  {
    sentence: "Ustedes ___ mucho en sus clases.",
    options: ["aprenden", "corren", "beben"],
    correct_answer: "aprenden",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ todos los días.",
    options: ["trabajamos", "bailamos", "escribimos"],
    correct_answer: "trabajamos",
    level: "medium",
  },
  {
    sentence: "Ellos ___ en el parque los fines de semana.",
    options: ["corren", "escriben", "bailan"],
    correct_answer: "corren",
    level: "medium",
  },
  {
    sentence: "Nosotros ___ juntos en el equipo.",
    options: ["jugamos", "bailamos", "escribimos"],
    correct_answer: "jugamos",
    level: "medium",
  },
  {
    sentence: "Él siempre ___ sus tareas a tiempo.",
    options: ["entrega", "bebe", "come"],
    correct_answer: "entrega",
    level: "hard",
  },
  {
    sentence: "Ellos ___ la película anoche.",
    options: ["vieron", "comieron", "durmieron"],
    correct_answer: "vieron",
    level: "hard",
  },
  {
    sentence: "Nosotros ___ el examen con éxito.",
    options: ["superamos", "corremos", "escribimos"],
    correct_answer: "superamos",
    level: "hard",
  },
  {
    sentence: "El ___ la reunión.",
    options: ["coordinó", "comió", "bailó"],
    correct_answer: "coordinó",
    level: "hard",
  },
  {
    sentence: "Ellos ___ el proyecto juntos.",
    options: ["completaron", "bailaron", "escribieron"],
    correct_answer: "completaron",
    level: "hard",
  },
  {
    sentence: "Nosotros ___ la conferencia.",
    options: ["asistimos", "escribimos", "corremos"],
    correct_answer: "asistimos",
    level: "hard",
  },
  {
    sentence: "Ellos siempre ___ sus promesas.",
    options: ["cumplen", "comen", "bailan"],
    correct_answer: "cumplen",
    level: "hard",
  },
  {
    sentence: "Nosotros ___ el coche al taller.",
    options: ["llevaron", "bailaron", "escribieron"],
    correct_answer: "llevaron",
    level: "hard",
  },
  {
    sentence: "Ellos ___ a la playa de vacaciones.",
    options: ["fueron", "comieron", "durmieron"],
    correct_answer: "fueron",
    level: "hard",
  },
];

// task_<lang>_<level>_<nr>

export async function loadSampleTasks(db) {
  let counter = { hard: 0, easy: 0, medium: 0 };
  const tasksRef = collection(db, "tasks");
  for (let task of tasks) {
    const id = `task_es_${task.level}_${counter[task.level]}`;
    await setDoc(doc(tasksRef, id), task);
    counter[task.level]++;
  }
}
