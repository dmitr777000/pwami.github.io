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
     .catch(error =>  myfff(error))
  );
});
//for(let i=0;i<999999999999999;i++){x*=654676;}
function myfff (mess){// Внутри Service Worker
self.clients.matchAll().then(clients => {
  clients.forEach(client => client.postMessage("Ваше е ="+ness));
});
}

self.addEventListener('activate', myfff)
setInterval (myfff, 3000)
  // Сразу активируем новый SW (опциональны ===

