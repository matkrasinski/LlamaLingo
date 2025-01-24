// src/serviceWorkerRegistration.js

export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Register the CRA service worker
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('CRA Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('CRA Service Worker registration failed:', error);
      });
    }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
