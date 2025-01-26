importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');
importScripts("/service-worker.js")


const firebaseConfig = {
  apiKey: "AIzaSyBuTZ-jxZT14Sa85NcJgs7CoT_NJrScKVc",
  authDomain: "llama-lingo.firebaseapp.com",
  projectId: "llama-lingo",
  storageBucket: "llama-lingo.firebasestorage.app",
  messagingSenderId: "1066588036198",
  appId: "1:1066588036198:web:f1178fd1ba015519cc21a7",
  measurementId: "G-RTRLLEHSWC"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
