//let x =1;
//for(let i=0;i<999999999999999;i++){x*=654676;}
function myfff (mess){// Внутри Service Worker
self.clients.matchAll().then(clients => {
  clients.forEach(client => client.postMessage(`Ваше ${mess}е`));
});
}

self.addEventListener('activate', myfff)
setInterval (myfff, 3000)
  // Сразу активируем новый SW (опциональны ===

