// Service Worker do Acervo de Jogos.
// v2 invalida o shell antigo sem tocar nos dados locais (localStorage) ou no backup.
const CACHE_PREFIX = 'acervo-jogos-';
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Dados dinâmicos sempre vêm da rede; cache só é usado como fallback offline.
  if (request.url.includes('api.github.com') || request.url.includes('backup.json')) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  let sameOrigin = false;
  try { sameOrigin = new URL(request.url).origin === self.location.origin; } catch (error) {}
  if (request.method !== 'GET' || !sameOrigin) return;

  // Shell rede-primeiro: online, grava e serve a versão atual; offline, usa o cache.
  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
