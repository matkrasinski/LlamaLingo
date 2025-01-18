import { collection, doc, setDoc } from "firebase/firestore";

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

const sp = [
  {
    unitNumber: 1,
    description: "xd",
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
    ],
  }
]

export const courses = [
  { code: "ar", units: units },
  { code: "bn", units: units },
  { code: "cs", units: units },
  { code: "de", units: units },
  { code: "el", units: units },
  { code: "en", units: units },
  { code: "es", units: sp },
  { code: "fr", units: units },
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
  // de: units,
  // el: units,
  en: units,
  es: units,
  fr: units,
  // hi: units,
  // hu: units,
  // id: units,
  // it: units,
  // ja: units,
  // ko: units,
  // nl: units,
  pl: units,
  // pt: units,
  // ro: units,
  // ru: units,
  // th: units,
  // tl: units,
  // tr: units,
  uk: units,
  vi: units,
  // cn: units,
};


// TODO do poprawki taka konstukcja jka wyzej
export async function loadCoursesToFirestore(db) {
  // Iterate over each language in coursesObj
  //  { uk: {}, en: {}}
  for (const [languageCode, units] of Object.entries(coursesObj)) {
    console.log(`Processing language: ${languageCode}`);
    let unitCounter = 0; // Counter for unit numbers

    // Iterate over each unit for the current language
    for (const unit of units) {
      unitCounter++;
      let tileCounter = 0; // Counter for tiles within the unit

      // Iterate over each tile in the unit
      for (const tile of unit.tiles) {
        tileCounter++;
        let taskCounter = 0; // Counter for tasks within the tile

        // Iterate over each task in the tile
        for (const task of tile.tasks) {
          taskCounter++;
          const lessonId = `lesson_${languageCode}_unit${unitCounter}_tile${tileCounter}_task${taskCounter}`;
          const lessonData = {
            languageCode,
            unitNumber: unit.unitNumber,
            unitDescription: unit.description,
            tileType: tile.type,
            tileDescription: tile.description || "",
            task,
          };

          // Add lesson data to Firestore
          try {
            await setDoc(doc(collection(db, "lessons"), lessonId), lessonData);
            console.log(`Added lesson: ${lessonId}`);
          } catch (error) {
            console.error(`Error adding lesson ${lessonId}:`, error);
          }
        }
      }
    }
  }
  console.log("Finished uploading all lessons.");
}
