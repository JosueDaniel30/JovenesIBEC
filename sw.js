// Service Worker para Jóvenes con Cristo PWA
const CACHE_NAME = 'jovenes-app-v1.0.0';
const STATIC_CACHE = 'jovenes-static-v1.0.0';
const DYNAMIC_CACHE = 'jovenes-dynamic-v1.0.0';

// Recursos a cachear inicialmente
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
  '/JovenesIBEC/logojov.png',
  '/JovenesIBEC/manifest.json'
];

// Recursos de la Biblia se cachearán dinámicamente

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('Cacheando recursos estáticos...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('Service Worker: Instalación completada');
      return self.skipWaiting();
    })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== 'bible-cache-v1') {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activación completada');
      return self.clients.claim();
    })
  );
});

// Estrategia de cache: Cache First para recursos estáticos, Network First para dinámicos
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requests que no son GET
  if (request.method !== 'GET') return;

  // Ignorar requests de Chrome extension
  if (url.protocol === 'chrome-extension:') return;

  // Estrategia para recursos de la Biblia
  if (url.pathname.startsWith('/JovenesIBEC/biblia/') && url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open('bible-cache-v1').then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Estrategia Cache First para recursos estáticos
  if (STATIC_ASSETS.includes(url.pathname) || url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2)$/)) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Estrategia Network First para páginas HTML y API calls
  event.respondWith(
    fetch(request).then(response => {
      if (response.ok) {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE).then(cache => {
          cache.put(request, responseClone);
        });
      }
      return response;
    }).catch(() => {
      // Fallback al cache si no hay conexión
      return caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // Página offline por defecto
        if (request.destination === 'document') {
          return caches.match('/JovenesIBEC/index.html');
        }
        return new Response('Offline content not available', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// Manejo de mensajes desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronización en segundo plano (Background Sync)
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event.tag);

  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Aquí puedes implementar sincronización de datos offline
    // Por ejemplo, enviar datos locales al servidor cuando se recupere la conexión
    console.log('Realizando sincronización en segundo plano...');

    // Simular sincronización
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Sincronización completada');
  } catch (error) {
    console.error('Error en sincronización:', error);
  }
}

// Notificaciones push (si se implementan en el futuro)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logojov.png',
      badge: '/logojov.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('Notification click received.');
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/index.html')
  );
});
