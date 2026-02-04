function myfff (mess, lexical){self.clients.matchAll().then(clients => {  clients.forEach(client => client.postMessage("Ваше е ="+mess+lexical));});}//self.addEventListener('activate', myfff)//setInterval (myfff, 3000)  // Сразу активируем новый SW (опциональны ===

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request) 

    }  )
