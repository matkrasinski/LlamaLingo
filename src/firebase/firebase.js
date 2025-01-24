import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDocs, getFirestore } from "firebase/firestore";
import { loadSampleTasks } from "./sample/tasks";
import { loadSampleLessons } from "./sample/lessons";
import { loadCoursesToFirestore } from "../utils/units"
import { getDocsFromCollection, setDocFromCollection } from "./db";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const messaging = getMessaging(app);

// Request notification permissions
Notification.requestPermission()
  .then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      // Wait for the service worker to be ready
      return navigator.serviceWorker.ready;
    } else {
      console.warn("Notification permission not granted.");
      return null;
    }
  })
  .then((registration) => {
    if (registration) {
      console.log("Service worker is ready:", registration);
      // Use the service worker with Firebase Messaging
      return getToken(messaging, {
        vapidKey: "BARKrFULp2YR-Vox_G9QVwzfGrmH6ZoBD82w0GhrvwZIfLL7xagVNdtB-OmNrfLJFlYzptKprsP9AwDYuV35-tM",
        serviceWorkerRegistration: registration, // Pass the valid ServiceWorkerRegistration here
      });
    }
    return null;
  })
  .then((token) => {
    if (token) {
      console.log("FCM Token:", token);
    } else {
      console.warn("No token received.");
    }
  })
  .catch((error) => {
    console.error("Error fetching FCM token:", error);
  });

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Received foreground message:", payload);
});

// console.log(await getDocsFromCollection("courses"))
// await loadCoursesToFirestore(db)
// await loadSampleTasks(db)
// await loadSampleLessons(db)



export { app, auth, db, messaging };
