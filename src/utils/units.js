import { collection, doc, setDoc } from "firebase/firestore";
import {
  ar,
  bn,
  fr,
  es,
  cs,
  de,
  el,
  hi,
  hu,
  id,
  it,
  ja,
  ko,
  nl,
  pl,
  pt,
  ro,
  ru,
  th,
  tl,
  tr,
  uk,
  vi,
  zh,
} from "../components/lingo/courses/data";

export const units = [
  {
    unitNumber: 1,
    description: "Form basic sentences, greet people",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    tiles: [
      {
        type: "star",
        description: "Form basic sentences",
        tasks: [
          {
            taskType: "",
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "Good morning",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "star",
        description: "Greet people",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "A date",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "trophy",
        description: "Unit 1 review",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Get around in a city",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      {
        type: "fast-forward",
        description: "Get around in a city",
        tasks: [
          {
            question: ["Gdzie jest samica?"],
            answer: "Woman",
          },
          {
            question: ["like", "my", "professor", "i"],
            answer: ["i", "like", "my", "professor"],
          },
          {
            ogQuestion: "kolano rośnie szybko",
            question: ["Knee", "fast"],
            answer: "grow",
          },
        ],
      },
      {
        type: "dumbbell",
        description: "Personalized practice",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "One thing",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "star",
        description: "Get around in a city",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "A very big family",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "star",
        description: "Greet people",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "The red jacket",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "dumbbell",
        description: "Personalized practice",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "trophy",
        description: "Unit 2 review",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
    ],
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      {
        type: "fast-forward",
        description: "Order food and drink",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "The passport",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "star",
        description: "Order food and drinks",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "The honeymoon",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "star",
        description: "Get around in a city",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "dumbbell",
        description: "Personalized practice",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "book",
        description: "Doctor Eddy",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
      {
        type: "trophy",
        description: "Unit 2 review",
        tasks: [
          {
            question: ["Which word matches the picture?"],
            answer: "Apple",
          },
          {
            question: ["Amurika", "great", "again", "make"],
            answer: ["make", "Amurika", "great", "again"],
          },
          {
            ogQuestion: "Dzien dobry Panie Siarra",
            question: ["Buenos", "Señor Siarra"],
            answer: "dias",
          },
        ],
      },
    ],
  },
];

export const courses = [
  { code: "ar", units: ar },
  { code: "bn", units: bn },
  { code: "cs", units: cs },
  { code: "de", units: de },
  { code: "el", units: el },
  { code: "en", units: units },
  { code: "es", units: es },
  { code: "fr", units: fr },
  { code: "hi", units: hi },
  { code: "hu", units: hu },
  { code: "id", units: id },
  { code: "it", units: it },
  { code: "ja", units: ja },
  { code: "ko", units: ko },
  { code: "code-NL", units: nl },
  { code: "pl", units: pl },
  { code: "pt", units: pt },
  { code: "ro", units: ro },
  { code: "ru", units: ru },
  { code: "th", units: th },
  { code: "tl", units: tl },
  { code: "tr", units: tr },
  { code: "uk", units: uk },
  { code: "vi", units: vi },
  { code: "code-CN", units: zh },
];

export const coursesObj = {
  ar: ar,
  bn: bn,
  cs: cs,
  de: de,
  el: el,
  en: units,
  es: es,
  fr: fr,
  hi: hi,
  hu: hu,
  id: id,
  it: it,
  ja: ja,
  ko: ko,
  nl: nl,
  pl: pl,
  pt: pt,
  ro: ro,
  ru: ru,
  th: th,
  tl: tl,
  tr: tr,
  uk: uk,
  vi: vi,
  cn: zh,
};

export async function loadCoursesToFirestore(db) {
  console.log("Loading courses to firestore");
  for (const [languageCode, units] of Object.entries(coursesObj)) {
    console.log(`Processing language: ${languageCode}`);
    const unitData = {
      units: units,
    };

    try {
      await setDoc(doc(collection(db, "courses"), languageCode), unitData);
      console.log(`Added course: ${languageCode}`);
    } catch (error) {
      console.error(`Error adding lesson ${languageCode}:`, error);
    }
  }
  console.log("Finished uploading all lessons.");
}
