/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import lessonsRoutes from './lessons-routes.json'
import iconsRoutes from './icons-routes.json'


clientsClaim();

precacheAndRoute([
  ...self.__WB_MANIFEST,
  { url: '/', revision: null},
  { url: '/flags.svg', revision: null },
  { url: '/main', revision: null},
  { url: '/login', revision: null},
  { url: '/register', revision: null},
  { url: '/languageSelect', revision: null},
  { url: '/profile', revision: null},
  { url: '/icons/favicon.ico', revision: null },
  { url: '/flags.svg', revision: null },
  ...lessonsRoutes.map((route) => ({ url: route, revision: null })),
  ...iconsRoutes.map((route) => ({ url: route, revision: null }))
]);

registerRoute(
  ({ url }) => url.pathname.startsWith('/lessons/'), 
  new StaleWhileRevalidate({
    cacheName: 'lessons-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

// Cache static assets like images
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

// Cache icons
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.startsWith('/icons'),
  new StaleWhileRevalidate({
    cacheName: 'icons',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);


// Cache Firestore API responses
registerRoute(
  ({ url }) => url.hostname.includes('firestore.googleapis.com'), 
  new NetworkFirst({
    cacheName: 'firestore-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

// Cache HTML and other critical resources for offline access
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.pathname.endsWith('.svg'),
  new StaleWhileRevalidate({
    cacheName: 'svg-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20, // Adjust as needed
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 1 month
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.startsWith('/lessons'),
  new NetworkFirst({
    cacheName: 'dynamic-content',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);


// Handle fetch fallback for uncached resources or when offline
self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          new Response(
            JSON.stringify({ error: 'Offline and resource not cached.' }),
            { headers: { 'Content-Type': 'application/json' } }
          )
        );
      })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});

// Install event to cache critical files
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  '/main',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/icons', // Cache icons directory
  '/icons/favicon.ico', // Explicitly cache favicon
  '/flags.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Skip waiting to immediately activate the new service worker (optional)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

