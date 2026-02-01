const urlsToCache = [
  './'
 // '/index.html,
  // добавьте сюда остальные ресурсы, которые хотите кешировать
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("v1c")
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
     .catch(error =>  myfff(error, "install"))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse; // всегда возвращать из кеша
      }
      // Можно вернуть fallback, если кеша нет
      // например, return caches.match('/offline.html');
    })
  );
});

//for(let i=0;i<999999999999999;i++){x*=654676;}
function myfff (mess, lexical){// Внутри Service Worker
self.clients.matchAll().then(clients => {
  clients.forEach(client => client.postMessage("Ваше е ="+mess+lexical));
});
}

//self.addEventListener('activate', myfff)
//setInterval (myfff, 3000)
  // Сразу активируем новый SW (опциональны ===

