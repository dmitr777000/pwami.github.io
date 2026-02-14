function myfff (mess, lexical){self.clients.matchAll().then(clients => {  clients.forEach(client => client.postMessage("Ваше е ="+mess+lexical));});}//self.addEventListener('activate', myfff)//setInterval (myfff, 3000)  // Сразу активируем новый SW (опциональны ===

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request) 
  .then (networkResponse => 
          {
        // Если всё ок — клонируем и кладём в кэш
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();  // ← обязательно clone()!
          
          caches.open('my-cache-v1').then(cache =>cache.put(event.request, responseClone);      // ← вот он, put
           })
            return networkResponse;

    }  )
