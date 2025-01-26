import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getToken,
  getMessaging,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getDocs, getFirestore } from "firebase/firestore";
import { loadSampleTasks } from "./sample/tasks";
import { loadSampleLessons } from "./sample/lessons";
import { loadCoursesToFirestore } from "../utils/units";
import { getDocsFromCollection, setDocFromCollection } from "./db";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
console.log("*** Environment ***", process.env.REACT_APP_ENV);
console.log("*** Firebase Config ***", firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let isFCMSupported = await isSupported();
console.log("is FCM supported? :", isFCMSupported);

const messaging = isFCMSupported ? getMessaging(app) : null;

// console.log(await getDocsFromCollection("courses"))
// await loadCoursesToFirestore(db)
// await loadSampleTasks(db)
// await loadSampleLessons(db)

export const getOrRegisterServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    return window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope")
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          {
            scope: "/firebase-push-notification-scope",
          }
        );
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker().then((serviceWorkerRegistration) =>
    getToken(messaging, {
      vapidKey: process.env.REACT_APP_VAPID_KEY,
      serviceWorkerRegistration,
    })
  );

export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));

export { app, auth, db };
