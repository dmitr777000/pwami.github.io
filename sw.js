//let x =1;
//for(let i=0;i<999999999999999;i++){x*=654676;}
function myfff (){// Внутри Service Worker
self.clients.matchAll().then(clients => {
  clients.forEach(client => {
    client.postMessage({
      type: 'MESSAGE_TYPE',
      payload: 'Ваше сообщение'
    });
  });
});
}

self.addEventListener('activate', myfff)
setInterval (myfff, 5000)
  // Сразу активируем новый SW (опциональны ===

