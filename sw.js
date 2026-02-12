const CACHE_NAME = 'vr-manager-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 설치 시 자원 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 네트워크 우선 전략 (가격 데이터 때문)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
