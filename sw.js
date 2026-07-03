// Service Worker do Acervo de Jogos
// Estratégia: o "shell" do app (HTML, manifest, ícones) usa rede-primeiro com
// fallback para cache (assim sempre pega a versão mais nova quando online, mas
// ainda abre offline). Chamadas de dados (API do GitHub, backup.json) NUNCA são
// cacheadas de propósito — dados de empréstimo precisam ser sempre atuais.
const CACHE_NAME = 'acervo-jogos-v1';
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
      .catch(() => {}) // não falha a instalação se algum arquivo do shell não existir ainda
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Dados dinâmicos: sempre busca da rede; só usa cache como último recurso se estiver offline
  if (request.url.includes('api.github.com') || request.url.includes('backup.json')) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Só intercepta GET do mesmo site — scripts de CDN (React, Tailwind, fontes) passam direto pela rede
  let sameOrigin = false;
  try { sameOrigin = new URL(request.url).origin === self.location.origin; } catch (e) {}
  if (request.method !== 'GET' || !sameOrigin) return;

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
