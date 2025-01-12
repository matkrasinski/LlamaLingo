const units = [
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
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Dzien dobry Panie Siarra', 'Buenos ', ' Señor Siarra']}
        ],
        answers: [
          {Photo: 'Apple'},
          {Word: ['make', 'Amurika', 'great', 'again']},
          {Sentence: ['dias']}
        ]
      },
      {
        type: "book",
        description: "Good morning",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Nie mam pomysłu na pytanie', 'I do not have ', ' on question']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['hamster', 'play', 'on', 'ukulele', 'becouse', 'roe', 'cachalot']},
          {Sentence: ['idea']}
        ]
      },
      {
        type: "star",
        description: "Greet people",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Muszę coś wymyślić', 'I have to ', ' something']}
        ],
        answers: [
          {Photo: 'Apple'},
          {Word: ['I', 'love', 'big', 'pizzas']},
          {Sentence: ['come up with']}
        ]
      },
      { type: "treasure",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Ta kobieta ma nibieską sukienkę', 'That women have a blue ', '']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['I', 'have', 'taken', 'a', 'credit']},
          {Sentence: ['skirt']}
        ]
       },
      { type: "book", 
        description: "A date",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['We no zamów pizzę', 'Could you ', ' a pizza?']}
        ],
        answers: [
          {Photo: 'Apple'},
          {Word: ['This', 'monkey', 'is', 'very', 'funny']},
          {Sentence: ['order']}
        ]
       },
      { type: "trophy", 
        description: "Unit 1 review" ,
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Poszedłem do sklepu i spotkałem Pawła', 'I went to the shop and I ', ' Pawel']}
        ],
        answers: [
          {Photo: 'Boy'},
          {Word: ['I', 'love', 'cotton', 'candy']},
          {Sentence: ['met']}
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
      { type: "fast-forward", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "One thing" },
      { type: "treasure" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
];

export default units;
