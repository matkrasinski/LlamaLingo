export const es = [
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
              taskType:'pickPhoto',
              question: 'Which word is Apple?',
              options: ['Woman','Boy','Apple'],
              answer: 'Apple'
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
              options: ['Woman','Boy','Apple'],
              answer: 'Woman'
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