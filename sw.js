// Service Worker para Jóvenes con Cristo PWA
// VERSIÓN CORREGIDA PARA GITHUB PAGES
const CACHE_NAME = 'jovenes-app-v1.5';  // Cambia la versión
const STATIC_CACHE = 'jovenes-static-v1.5';
const BIBLE_CACHE = 'bible-cache-v1.3';

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
  '/JovenesIBEC/1960.js',
  '/JovenesIBEC/metas.js',
  '/JovenesIBEC/profile.js',
  '/JovenesIBEC/login.js',
  '/JovenesIBEC/logojov.png',
  '/JovenesIBEC/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando v1.2...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('Cacheando recursos estáticos...');
      return cache.addAll(STATIC_ASSETS.map(url => {
        // Manejar rutas relativas para GitHub Pages
        return new Request(url, { mode: 'no-cors' });
      }));
    }).then(() => {
      console.log('Service Worker: Instalación completada');
      return self.skipWaiting();
    }).catch(error => {
      console.error('Error en instalación:', error);
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
          if (![STATIC_CACHE, BIBLE_CACHE].includes(cacheName)) {
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

// Estrategia de cache mejorada
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Solo manejar GET requests
  if (request.method !== 'GET') return;
  
  // Ignorar chrome-extension
  if (url.protocol === 'chrome-extension:') return;
  
  // Para archivos JSON de la Biblia
  if (url.pathname.includes('/biblia/') && url.pathname.endsWith('.json')) {
    // Usar ruta relativa para GitHub Pages
    const bibleRequest = new Request(`./biblia/${url.pathname.split('/biblia/')[1]}`);
    event.respondWith(
      caches.open(BIBLE_CACHE).then(cache => {
        return cache.match(request).then(cachedResponse => {
          // Si está en caché y es válido, usarlo
          if (cachedResponse) {
            // Verificar si la respuesta está actualizada
            return fetch(request).then(networkResponse => {
              // Actualizar caché
              if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            }).catch(() => {
              // Si falla la red, usar caché
              return cachedResponse;
            });
          }
          
          // Si no está en caché, obtener de la red
          return fetch(request).then(response => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(error => {
            console.error('Error al cargar JSON:', error);
            return new Response(
              JSON.stringify({ error: 'No se pudo cargar el capítulo' }),
              { 
                status: 503,
                headers: { 'Content-Type': 'application/json' }
              }
            );
          });
        });
      })
    );
    return;
  }
  
  // Para recursos estáticos (Cache First)
  if (STATIC_ASSETS.some(asset => url.pathname.endsWith(asset.split('/').pop())) ||
      url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2)$/)) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        return cachedResponse || fetch(request).then(response => {
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
  
  // Para páginas HTML (Network First)
  if (request.headers.get('Accept')?.includes('text/html') ||
      url.pathname.match(/\.html$/)) {
    event.respondWith(
      fetch(request).then(response => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        return caches.match(request).then(cachedResponse => {
          return cachedResponse || caches.match('/JovenesIBEC/index.html');
        });
      })
    );
    return;
  }
  
  // Para otras peticiones
  event.respondWith(fetch(request));
});

// Manejo de mensajes
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background Sync
self.addEventListener('sync', event => {
  console.log('Background sync:', event.tag);
  
  if (event.tag === 'sync-biblia') {
    event.waitUntil(
      caches.open(BIBLE_CACHE).then(cache => {
        return cache.keys().then(requests => {
          console.log('Recursos bíblicos en caché:', requests.length);
        });
      })
    );
  }
});

// Notificaciones Push (opcional)
self.addEventListener('push', event => {
  if (event.data) {
    try {
      const data = event.data.json();
      const options = {
        body: data.body || 'Nuevo versículo disponible',
        icon: '/JovenesIBEC/logojov.png',
        badge: '/JovenesIBEC/logojov.png',
        vibrate: [100, 50, 100]
      };
      
      event.waitUntil(
        self.registration.showNotification(data.title || 'Jóvenes con Cristo', options)
      );
    } catch (e) {
      console.error('Error en push notification:', e);
    }
  }
});

// Clic en notificación
self.addEventListener('notificationclick', event => {
  console.log('Notificación clickeada');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/JovenesIBEC/')
  );
});