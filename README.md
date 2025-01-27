# LlamaLingo

LlamaLingo is a React application designed to help users learn languages in an engaging and interactive way. Utilizing Firebase for backend services, LlamaLingo provides a platform where users can practice vocabulary, grammar, and pronunciation through various exercises and resources.

## Features

- User authentication with Firebase
- Interactive language exercises
- Vocabulary and grammar lessons
- Progress tracking and analytics
- Responsive design for all devices
- Real-time database for storing user data

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Firebase](https://firebase.google.com/) - A platform for building mobile and web applications
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine
- [npm](https://www.npmjs.com/) - Package manager for JavaScript

## Installation - local

To get started with LlamaLingo, follow these steps:

1. Prepare .env file and put it in the root directory of the project.

2. Install dependencies:

```bash
    npm install
```

3. Run project:

```bash
    npm run build
    npm install -g serve
    serve -s build
```

4. Access the app on http://localhost:3000.

## Installation - local Docker container

1. Prepare .env file and put it in the root directory of the project.

2. Run project:

```bash
    docker build -t llama-lingo .
    docker run -d -p 3000:3000 llama-lingo
```

3. Access the app on http://localhost:3000.

## How to use the app

1. Login or set up a new account using your email address and password (min. 8 characters)
2. Select a language course which you want to practise (you can choose more courses later)
3. Each course consists of units. Each unit has some lessons. Each lesson has some tasks of different type.
4. The lesson is completed only when all of its tasks are done correctly.
5. You can enable WakeLock feature - it prevents the screen from accessing screensaver mode.