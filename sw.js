// Service Worker - Jóvenes con Cristo (GitHub Pages Ready)

const STATIC_CACHE = 'jovenes-static-v2.1';

const STATIC_ASSETS = [
  '/JovenesIBEC/',
  '/JovenesIBEC/index.html',
  '/JovenesIBEC/biblia.html',
  '/JovenesIBEC/metas.html',
  '/JovenesIBEC/perfil.html',
  '/JovenesIBEC/login.html',
  '/JovenesIBEC/styles.css',
  '/JovenesIBEC/notificacion.css',
  '/JovenesIBEC/script.js',
  '/JovenesIBEC/biblia.js',
  '/JovenesIBEC/metas.js',
  '/JovenesIBEC/profile.js',
  '/JovenesIBEC/login.js',
  '/JovenesIBEC/1960.js',
  '/JovenesIBEC/logojov.png',
  '/JovenesIBEC/manifest.json'
];

// INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // HTML → Network First
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request).then(res => {
        caches.open(STATIC_CACHE).then(c => c.put(request, res.clone()));
        return res;
      }).catch(() =>
        caches.match(request).then(r => r || caches.match('/JovenesIBEC/index.html'))
      )
    );
    return;
  }

  // Static → Cache First
  event.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request).then(res => {
        caches.open(STATIC_CACHE).then(c => c.put(request, res.clone()));
        return res;
      })
    )
  );
});
