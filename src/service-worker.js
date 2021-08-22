const MY_CACHE = 'cache-name';
const MY_FILES = [
  'style.scss',
  'index.js',
  'cookies.js',
  'waves.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(MY_CACHE).then((cache) => cache.addAll(MY_FILES)),
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames
        .filter((cacheName) => cacheName !== MY_CACHE).map((cacheName) => caches.delete(cacheName)),
    )),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
});
