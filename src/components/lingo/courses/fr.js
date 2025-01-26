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
            // {
            //   taskType:'pickPhoto',
            //   question: 'Which word is Apple?',
            //   options: ['Femme','Garçon','Pomme'],
            //   answer: 'Pomme'
            // },
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
  