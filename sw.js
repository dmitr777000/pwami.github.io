const CACHE_NAME = 'my-app-cache-v1';

const PRECACHE_URLS = [
                  // Главная страница
  '/index.html'
        // Опционально: fallback-страница
];

// === INSTALL: Предзагружаем все необходимые ресурсы ===
self.addEventListener('install', event => {
  console.log('Service Worker: установка (precache)');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Предзагрузка ресурсов в кэш:', PRECACHE_URLS);
        return cache.addAll(PRECACHE_URLS);
      })
      .catch(error => {
        console.error('Ошибка предзагрузки:', error);
      })
  );

  // Сразу активируем новый SW (опционально)
});
