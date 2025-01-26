export const ar = [
  {
    unitNumber: 1,
    description: "Introduction",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      {
        type: "fast-forward", description: "Order food and drink",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is Apple?',
            options: ['امرأة','رجل','تفاح'],
            answer: 'تفاح'
          },
          {
            taskType:'translate',
            ogQuestion: 'صباح الخير سيد سيارا',
            question: ['مرحبا', 'سيارا'],
            answer: 'سيد'
          },
          {
            taskType:'pickWords',
            answer: ['أنا', 'أحب', 'التفاح']
          },
        ]
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Basic conversation",
    backgroundColor: "bg-[#ff5733]",
    textColor: "text-[#ff5733]",
    borderColor: "border-[#c44128]",
    tiles: [
      {
        type: "chat", description: "Greetings",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is woman?',
            options: ['امرأة','رجل','تفاح'],
            answer: 'امرأة'
          },
        ]
      },
    ],
  },
];

export const bn = [
  {
    unitNumber: 1,
    description: "Introduction",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      {
        type: "fast-forward", description: "Order food and drink",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is Apple?',
            options: ['মহিলা','পুরুষ','আপেল'],
            answer: 'আপেল'
          },
          {
            taskType:'translate',
            ogQuestion: 'সুপ্রভাত সিয়া',
            question: ['হ্যালো', 'সিয়া'],
            answer: 'মহোদয়'
          },
          {
            taskType:'pickWords',
            answer: ['আমি', 'আপেল', 'পছন্দ', 'করি']
          },
        ]
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Basic conversation",
    backgroundColor: "bg-[#ff5733]",
    textColor: "text-[#ff5733]",
    borderColor: "border-[#c44128]",
    tiles: [
      {
        type: "chat", description: "Greetings",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is woman?',
            options: ['মহিলা','পুরুষ','আপেল'],
            answer: 'মহিলা'
          },
        ]
      },
    ],
  },
];

export const es = [
  {
    unitNumber: 1,
    description: "Spanish",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      {
        type: "fast-forward", description: "Order food and drink",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is Apple?',
            options: ['Mujer','Niño','Manzana'],
            answer: 'Manzana'
          },
          {
            taskType:'translate',
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Buenos', 'Señor Siarra'],
            answer: 'dias'
          },
          {
            taskType:'pickWords',
            answer: ['yo', 'soy', 'el', 'nino']
          },
        ]
      },
      {
        type: "book", description: "The passport",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is boy?',
            options: ['Woman','Boy','Apple'],
            answer: 'Boy'
          },
          {
            taskType:'pickWords',
            answer: ['yo', 'bebo', 'aqua']
          },
          {
            taskType:'translate',
            ogQuestion: 'Ja potrzebuje chleba',
            question: ['Yo', 'un pan'],
            answer: 'neccesito'
          }
        ]
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Basic conversation",
    backgroundColor: "bg-[#ff5733]",
    textColor: "text-[#ff5733]",
    borderColor: "border-[#c44128]",
    tiles: [
      {
        type: "chat", description: "Greetings",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is woman?',
            options: ['Mujer','Niño','Manzana'],
            answer: 'Mujer'
          },
          {
            taskType:'pickWords',
            answer: ['yo', 'neccesito', 'aqua']
          },
          {
            taskType:'translate',
            ogQuestion: 'Ja potrzebuje jablka',
            question: ['Yo', 'una manzana'],
            answer: 'neccesito'
          }
        ]
      },
    ],
  },
];

export const fr = [
  {
    unitNumber: 1,
    description: "Introduction",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      {
        type: "fast-forward", description: "Order food and drink",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is Apple?',
            options: ['Femme','Garçon','Pomme'],
            answer: 'Pomme'
          },
          {
            taskType:'translate',
            ogQuestion: 'Dzien dobry Panie Siarra',
            question: ['Bonjour', 'Siarra'],
            answer: 'Monsieur'
          },
          {
            taskType:'pickWords',
            answer: ['je', 'suis', 'le', 'garçon']
          },
        ]
      },
      {
        type: "book", description: "The passport",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is boy?',
            options: ['Femme','Garçon','Pomme'],
            answer: 'Garçon'
          },
          {
            taskType:'pickWords',
            answer: ['je', 'bois', 'de l\'eau']
          },
          {
            taskType:'translate',
            ogQuestion: 'J\'ai besoin de pain',
            question: ['Je', 'besoin de pain'],
            answer: 'ai'
          }
        ]
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Basic conversation",
    backgroundColor: "bg-[#ff5733]",
    textColor: "text-[#ff5733]",
    borderColor: "border-[#c44128]",
    tiles: [
      {
        type: "chat", description: "Greetings",
        tasks: [
          {
            taskType:'pickPhoto',
            question: 'Which word is woman?',
            options: ['Femme','Garçon','Pomme'],
            answer: 'Femme'
          },
          {
            taskType:'pickWords',
            answer: ['je', 'besoin', 'de l\'eau']
          },
          {
            taskType:'translate',
            ogQuestion: 'J\'ai besoin de pomme',
            question: ['Je', 'une pomme'],
            answer: 'ai'
          }
        ]
      },
    ],
  },
];

export const cs = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Žena','Chlapec','Jabko'],
              answer: 'Jabko'
            },
            {
              taskType:'translate',
              ogQuestion: 'Dobrý den pane Siarra',
              question: ['Ahoj', 'Siarra'],
              answer: 'Pane'
            },
            {
              taskType:'pickWords',
              answer: ['já', 'mám', 'jablko']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Žena','Chlapec','Jabko'],
              answer: 'Žena'
            },
          ]
        },
      ],
    },
];

export const de = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Frau','Junge','Apfel'],
              answer: 'Apfel'
            },
            {
              taskType:'translate',
              ogQuestion: 'Guten Tag Herr Siarra',
              question: ['Hallo', 'Siarra'],
              answer: 'Herr'
            },
            {
              taskType:'pickWords',
              answer: ['Ich', 'mag', 'den', 'Apfel']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Frau','Junge','Apfel'],
              answer: 'Frau'
            },
          ]
        },
      ],
    },
];

export const el = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Γυναίκα','Άνδρας','Μήλο'],
              answer: 'Μήλο'
            },
            {
              taskType:'translate',
              ogQuestion: 'Καλημέρα κύριε Σιάρα',
              question: ['Γεια σου', 'Σιάρα'],
              answer: 'Κύριε'
            },
            {
              taskType:'pickWords',
              answer: ['Μου', 'αρέσει', 'το', 'μήλο']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Γυναίκα','Άνδρας','Μήλο'],
              answer: 'Γυναίκα'
            },
          ]
        },
      ],
    },
];

export const hi = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['महिला','पुरुष','सेब'],
              answer: 'सेब'
            },
            {
              taskType:'translate',
              ogQuestion: 'नमस्ते श्रीमान सियारा',
              question: ['नमस्कार', 'सियारा'],
              answer: 'श्रीमान'
            },
            {
              taskType:'pickWords',
              answer: ['मुझे', 'सेब', 'अच्छा', 'लगता है']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['महिला','पुरुष','सेब'],
              answer: 'महिला'
            },
          ]
        },
      ],
    },
];

export const hu = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Nő','Fiú','Alma'],
              answer: 'Alma'
            },
            {
              taskType:'translate',
              ogQuestion: 'Jó napot Uram Siarra',
              question: ['Hello', 'Siarra'],
              answer: 'Uram'
            },
            {
              taskType:'pickWords',
              answer: ['Szeretem', 'az', 'almát']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Nő','Fiú','Alma'],
              answer: 'Nő'
            },
          ]
        },
      ],
    },
];

export const id = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Wanita','Laki-laki','Apel'],
              answer: 'Apel'
            },
            {
              taskType:'translate',
              ogQuestion: 'Selamat pagi Tuan Siarra',
              question: ['Halo', 'Siarra'],
              answer: 'Tuan'
            },
            {
              taskType:'pickWords',
              answer: ['Saya', 'suka', 'apel']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Wanita','Laki-laki','Apel'],
              answer: 'Wanita'
            },
          ]
        },
      ],
    },
];

export const it = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Donna','Ragazzo','Mela'],
              answer: 'Mela'
            },
            {
              taskType:'translate',
              ogQuestion: 'Buongiorno Signor Siarra',
              question: ['Ciao', 'Siarra'],
              answer: 'Signor'
            },
            {
              taskType:'pickWords',
              answer: ['Mi', 'piace', 'la', 'mela']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Donna','Ragazzo','Mela'],
              answer: 'Donna'
            },
          ]
        },
      ],
    },
];

export const ja = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['女性','男性','リンゴ'],
              answer: 'リンゴ'
            },
            {
              taskType:'translate',
              ogQuestion: 'おはようございますシアラさん',
              question: ['こんにちは', 'シアラ'],
              answer: 'さん'
            },
            {
              taskType:'pickWords',
              answer: ['私は', 'リンゴ', 'が', '好きです']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['女性','男性','リンゴ'],
              answer: '女性'
            },
          ]
        },
      ],
    },
];

export const ko = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['여성','남성','사과'],
              answer: '사과'
            },
            {
              taskType:'translate',
              ogQuestion: '안녕하세요 시아라 씨',
              question: ['안녕', '시아라'],
              answer: '씨'
            },
            {
              taskType:'pickWords',
              answer: ['나는', '사과', '를', '좋아해요']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['여성','남성','사과'],
              answer: '여성'
            },
          ]
        },
      ],
    },
];

export const nl = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Vrouw','Jongen','Appel'],
              answer: 'Appel'
            },
            {
              taskType:'translate',
              ogQuestion: 'Goedemorgen meneer Siarra',
              question: ['Hallo', 'Siarra'],
              answer: 'Meneer'
            },
            {
              taskType:'pickWords',
              answer: ['Ik', 'hou', 'van', 'de', 'appel']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Vrouw','Jongen','Appel'],
              answer: 'Vrouw'
            },
          ]
        },
      ],
    },
];

export const pl = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Kobieta','Chłopak','Jabłko'],
              answer: 'Jabłko'
            },
            {
              taskType:'translate',
              ogQuestion: 'Dzień dobry Panie Siarra',
              question: ['Cześć', 'Siarra'],
              answer: 'Panie'
            },
            {
              taskType:'pickWords',
              answer: ['Lubię', 'jabłko']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Kobieta','Chłopak','Jabłko'],
              answer: 'Kobieta'
            },
          ]
        },
      ],
    },
];

export const pt = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Mulher','Menino','Maçã'],
              answer: 'Maçã'
            },
            {
              taskType:'translate',
              ogQuestion: 'Bom dia Senhor Siarra',
              question: ['Olá', 'Siarra'],
              answer: 'Senhor'
            },
            {
              taskType:'pickWords',
              answer: ['Eu', 'gosto', 'de', 'maçã']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Mulher','Menino','Maçã'],
              answer: 'Mulher'
            },
          ]
        },
      ],
    },
];

export const ro = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Femeie','Băiat','Măr'],
              answer: 'Măr'
            },
            {
              taskType:'translate',
              ogQuestion: 'Bună ziua Domnule Siarra',
              question: ['Salut', 'Siarra'],
              answer: 'Domnule'
            },
            {
              taskType:'pickWords',
              answer: ['Îmi', 'place', 'mărul']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Femeie','Băiat','Măr'],
              answer: 'Femeie'
            },
          ]
        },
      ],
    },
];

export const ru = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Женщина','Мужчина','Яблоко'],
              answer: 'Яблоко'
            },
            {
              taskType:'translate',
              ogQuestion: 'Доброе утро, господин Сиарра',
              question: ['Привет', 'Сиарра'],
              answer: 'Господин'
            },
            {
              taskType:'pickWords',
              answer: ['Я', 'люблю', 'яблоко']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Женщина','Мужчина','Яблоко'],
              answer: 'Женщина'
            },
          ]
        },
      ],
    },
];

export const th = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['ผู้หญิง','ผู้ชาย','แอปเปิ้ล'],
              answer: 'แอปเปิ้ล'
            },
            {
              taskType:'translate',
              ogQuestion: 'สวัสดีครับคุณเซียร่า',
              question: ['สวัสดี', 'เซียร่า'],
              answer: 'คุณ'
            },
            {
              taskType:'pickWords',
              answer: ['ฉัน', 'ชอบ', 'แอปเปิ้ล']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['ผู้หญิง','ผู้ชาย','แอปเปิ้ล'],
              answer: 'ผู้หญิง'
            },
          ]
        },
      ],
    },
];

export const tl = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Babae','Lalaki','Mansanas'],
              answer: 'Mansanas'
            },
            {
              taskType:'translate',
              ogQuestion: 'Magandang umaga Ginoong Siarra',
              question: ['Kamusta', 'Siarra'],
              answer: 'Ginoong'
            },
            {
              taskType:'pickWords',
              answer: ['Gusto', 'ko', 'ng', 'mansanas']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Babae','Lalaki','Mansanas'],
              answer: 'Babae'
            },
          ]
        },
      ],
    },
];

export const tr = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Kadın','Erkek','Elma'],
              answer: 'Elma'
            },
            {
              taskType:'translate',
              ogQuestion: 'Günaydın Bay Siarra',
              question: ['Merhaba', 'Siarra'],
              answer: 'Bay'
            },
            {
              taskType:'pickWords',
              answer: ['Elmayı', 'seviyorum']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Kadın','Erkek','Elma'],
              answer: 'Kadın'
            },
          ]
        },
      ],
    },
];

export const uk = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Жінка','Чоловік','Яблуко'],
              answer: 'Яблуко'
            },
            {
              taskType:'translate',
              ogQuestion: 'Доброго ранку, пане Сіарра',
              question: ['Привіт', 'Сіарра'],
              answer: 'Пане'
            },
            {
              taskType:'pickWords',
              answer: ['Я', 'люблю', 'яблуко']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Жінка','Чоловік','Яблуко'],
              answer: 'Жінка'
            },
          ]
        },
      ],
    },
];

export const vi = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Phụ nữ','Đàn ông','Táo'],
              answer: 'Táo'
            },
            {
              taskType:'translate',
              ogQuestion: 'Chào buổi sáng ông Siarra',
              question: ['Xin chào', 'Siarra'],
              answer: 'Ông'
            },
            {
              taskType:'pickWords',
              answer: ['Tôi', 'thích', 'táo']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['Phụ nữ','Đàn ông','Táo'],
              answer: 'Phụ nữ'
            },
          ]
        },
      ],
    },
];

export const zh = [
    {
      unitNumber: 1,
      description: "Introduction",
      backgroundColor: "bg-[#00cd9c]",
      textColor: "text-[#00cd9c]",
      borderColor: "border-[#00a47d]",
      tiles: [
        {
          type: "fast-forward", description: "Order food and drink",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['女人','男人','苹果'],
              answer: '苹果'
            },
            {
              taskType:'translate',
              ogQuestion: '早上好，西亚拉先生',
              question: ['你好', '西亚拉'],
              answer: '先生'
            },
            {
              taskType:'pickWords',
              answer: ['我', '喜欢', '苹果']
            },
          ]
        },
      ],
    },
    {
      unitNumber: 2,
      description: "Basic conversation",
      backgroundColor: "bg-[#ff5733]",
      textColor: "text-[#ff5733]",
      borderColor: "border-[#c44128]",
      tiles: [
        {
          type: "chat", description: "Greetings",
          tasks: [
            {
              taskType:'pickPhoto',
              question: 'Which word is woman?',
              options: ['女人','男人','苹果'],
              answer: '女人'
            },
          ]
        },
      ],
    },
];
