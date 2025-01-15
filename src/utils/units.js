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
      { type: "fast-forward", description: "Get around in a city",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Dzien dobry, witam w mojej kuchni', 'Good Morning, ', ' in my kitchen']}
        ],
        answers: [
          {Photo: 'Apple'},
          {Word: ['Welcome', 'in', 'my', 'kitchen']},
          {Sentence: ['welcome']}
        ]
       },
      { type: "dumbbell", description: "Personalized practice",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Kupiłem butelkę z wodą w żabce', 'I bought a ', ' of water']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Cocacola', 'is', 'very', 'tasty']},
          {Sentence: ['bottle']}
        ]
       },
      { type: "book", description: "One thing",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['W szafie mam trzy koszulki i skarpetkę', 'In the wardrobe I have a thee ', ' and a sock']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Wardrobe', 'is', 'very', 'big']},
          {Sentence: ['shirts']}
        ]
       },
      { type: "treasure", 
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Wczoraj widziałem zółwia', 'I saw a ', ' yesterday']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Turtles', 'do', 'not', 'like', 'plastic']},
          {Sentence: ['turtle']}
        ]
       },
      { type: "star", description: "Get around in a city",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Karolina ma bardzo duży samochód', 'Karolina have very', 'car']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['This', 'car', 'is', 'very', 'loud']},
          {Sentence: ['big']}
        ]
       },
      { type: "book", description: "A very big family",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Kampania w tej grze jest bardzo trudna', 'A campain in that ', ' is very hard']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Tom', 'like', 'play', 'in', 'Call of Duty']},
          {Sentence: ['game']}
        ]
       },
      { type: "star", description: "Greet people",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Lubisz jabłka?', 'Do you ', ' apples?']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Apples', 'are', 'very', 'good', 'fruit']},
          {Sentence: ['like']}
        ]
       },
      { type: "book", description: "The red jacket",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['To jest żart bracie', 'I is a ', ' bro']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Pranks', 'are', 'very', 'dangerous']},
          {Sentence: ['prank']}
        ]
       },
      { type: "treasure",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Muszę zacząć pisanie książki', 'I have to ', ' write the book']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Reading', 'books', 'is', 'very', 'important']},
          {Sentence: ['start']}
        ]
       },
      { type: "dumbbell", description: "Personalized practice",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['Miałem sen o żółwiach', 'I had a ', ' about turtles']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Dreams', 'can', 'be', 'very', 'odd']},
          {Sentence: ['dream']}
        ]
       },
      { type: "trophy", description: "Unit 2 review",
        questions: [
          {Photo: ''}, //tutaj pytaniem jest obrazek
          {Word: ''}, // tasowana odpowiedź w zadaniu
          {Sentence: ['To hest ostatnie zadanie', 'This is the ', ' task']}
        ],
        answers: [
          {Photo: 'Women'},
          {Word: ['Tasks', 'are', 'almoust', 'finished']},
          {Sentence: ['last']}
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
