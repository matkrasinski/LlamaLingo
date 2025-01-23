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

console.log('Requesting permission...');
Notification.requestPermission().then((permission) => {
  console.log(permission)
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    return getToken(messaging, { vapidKey: 'BARKrFULp2YR-Vox_G9QVwzfGrmH6ZoBD82w0GhrvwZIfLL7xagVNdtB-OmNrfLJFlYzptKprsP9AwDYuV35-tM'})
  } else {
    console.log('permission not granted: ' + permission)
  }
}).then((token) => {
  console.log(token);
}).catch((err) => {
  console.log('error ocurred: ' + err)
})

onMessage(messaging, (payload) => {
  console.log('onMessage: ', payload)
})

// console.log(await getDocsFromCollection("courses"))
// await loadCoursesToFirestore(db)
// await loadSampleTasks(db)
// await loadSampleLessons(db)



export { app, auth, db, messaging };
