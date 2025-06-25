const CACHE_NAME = "bus-route-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/stoppage.html",
  "/routes.json",
  "/main.js",
  "/script.js",
  "/style.css", // যদি থাকে
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});