import { collection, doc, setDoc } from "firebase/firestore";
import { fr } from "../components/lingo/courses/fr";
import { es } from "../components/lingo/courses/es";

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
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book",
        description: "Good morning",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "star",
        description: "Greet people",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book",
        description: "A date",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "trophy",
        description: "Unit 1 review",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
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
            question: ['Gdzie jest samica?'],
            answer: 'Woman'
          },
          {
            question: ['like', 'my', 'professor', 'i'],
            answer: ['i', 'like', 'my', 'professor']
          },
          {
            ogQuestion: 'kolano rośnie szybko',
            question: ['Knee', 'fast'],
            answer: 'grow'
          }
        ]
      },
      {
        type: "dumbbell", description: "Personalized practice",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "One thing",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "star", description: "Get around in a city",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "A very big family",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "star", description: "Greet people",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "The red jacket",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "dumbbell", description: "Personalized practice",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "trophy", description: "Unit 2 review",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
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
        type: "fast-forward", description: "Order food and drink",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "The passport",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "star", description: "Order food and drinks",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "The honeymoon",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "star", description: "Get around in a city",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "treasure",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "dumbbell", description: "Personalized practice",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "book", description: "Doctor Eddy",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
      {
        type: "trophy", description: "Unit 2 review",
        tasks: [
          {
            question: ['Which word matches the picture?'],
            answer: 'Apple'
          },
          {
            question: ['Amurika', 'great', 'again', 'make'],
            answer: ['make', 'Amurika', 'great', 'again']
          },
          {
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          }
        ]
      },
    ],
  },
];

export const courses = [
  { code: "ar", units: units },
  { code: "bn", units: units },
  { code: "cs", units: units },
  { code: "de", units: units },
  { code: "el", units: units },
  { code: "en", units: units },
  { code: "es", units: es },
  { code: "fr", units: fr },
  { code: "hi", units: units },
  { code: "hu", units: units },
  { code: "id", units: units },
  { code: "it", units: units },
  { code: "ja", units: units },
  { code: "ko", units: units },
  { code: "code-NL", units: units },
  { code: "pl", units: units },
  { code: "pt", units: units },
  { code: "ro", units: units },
  { code: "ru", units: units },
  { code: "th", units: units },
  { code: "tl", units: units },
  { code: "tr", units: units },
  { code: "uk", units: units },
  { code: "vi", units: units },
  { code: "code-CN", units: units },
];

export const coursesObj = {
  // ar: units,
  // bn: units,
  // cs: units,
  de: units,
  // el: units,
  en: units,
  es: es,
  fr: fr,
  // hi: units,
  // hu: units,
  // id: units,
  // it: units,
  // ja: units,
  // ko: units,
  // nl: units,
  // pl: units,
  // pt: units,
  // ro: units,
  // ru: units,
  // th: units,
  // tl: units,
  // tr: units,
  // uk: units,
  vi: units,
  // cn: units,
};

export async function loadCoursesToFirestore(db) {
  console.log('Loading courses to firestore')
  for (const [languageCode, units] of Object.entries(coursesObj)) {
    console.log(`Processing language: ${languageCode}`);
    const unitData = {
      units: units
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
