# LlamaLingo

LlamaLingo is a React application designed to help users learn languages in an engaging and interactive way. Utilizing Firebase for backend services, LlamaLingo provides a platform where users can practice vocabulary, grammar, and pronunciation through various exercises and resources.

## Features

- User authentication with Firebase
- Interactive language exercises
- Vocabulary and grammar lessons
- Progress tracking
- Offline mode and data synchronization
- Scheduled push notifications
- Wake lock functionality
- Splash screen
- Responsive design for all devices
- Real-time database for storing user data

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Firebase](https://firebase.google.com/) - A platform for building mobile and web applications
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine
- [npm](https://www.npmjs.com/) - Package manager for JavaScript

## Installation - local

To get started with LlamaLingo, follow these steps:

1. Create and configure new project in [Firebase](https://console.firebase.google.com/u/0/?hl=pl):

![Zrzut ekranu 2025-01-27 o 20 15 50](https://github.com/user-attachments/assets/d6dc1efb-1fef-4936-b7ac-0b54eb9eb573)

2. Get firebase configuration by navigating to Project Overview > General and scroll down:

![Zrzut ekranu 2025-01-27 o 20 17 35](https://github.com/user-attachments/assets/258145f8-c5da-4582-a484-35ad91f0cb86)

3. Copy the values inside firebaseConfig to your project's `.env` file and `firebase-messaging-sw.js` inside `public` folder.

4. Install dependencies:

```bash
    npm install
```

5. Run project:

```bash
    npm run build
    npm install -g serve
    serve -s build
```

6. Access the app on http://localhost:3000.

## Installation - local Docker container

1. Prepare `.env` file and put it in the root directory of the project and inside `firebase-messaging-sw.js` file.

2. Run project:

```bash
    docker build -t llama-lingo .
    docker run -d -p 3000:3000 llama-lingo
```

3. Access the app on http://localhost:3000.

## How to use the app

1. Login or set up a new account using your email address and password (min. 8 characters).
2. Select a language course which you want to practise (you can choose more courses later).
3. Each course consists of units. Each unit has some lessons. Each lesson has some tasks of different type.
4. The lesson is completed only when all of its tasks are done correctly (they are marked on the main screen).
6. You can enable WakeLock feature - it prevents the screen from accessing screensaver mode.
7. You can download the app and use it offline (your progress will be saved after reconnecting to the internet).

## Send notifications from Firebase project
1. Navigate to your Firebase project to the messaging tab.

![Zrzut ekranu 2025-01-27 o 20 38 01](https://github.com/user-attachments/assets/17f67006-dd6d-4bb0-9e7b-63eca933876e)

2. Create new campaign and complete all neccessary steps.
3. When your local app has notifications turned on you should receive one of two types of notifications, depending on if you have currently open app:
- Foreground notification in the app.
- Background notification in your device.



## Note:
Pay attention to Firestore Database rules. There need to be write and read access available like below:
![Zrzut ekranu 2025-01-27 o 20 32 05](https://github.com/user-attachments/assets/8ea75c23-00d7-4576-91e2-f49f53de562d)

