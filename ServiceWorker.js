
const CACHE_NAME = 'GuessTheQuiz';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/0427512274a0a3f6c5cedd9141897742.data.unityweb',
    '/Build/250feb9c5d9f82c0daff82abcf0f83ed.wasm.unityweb',
    '/Build/e60a736cfbac0092a506e3fbfd359483.framework.js.unityweb',
    '/Build/9853637125e801e9aae48e78dbbdcfca.loader.js',
    '/TemplateData/style.css',
    '/icon-1920x1080.png',
    '/icon-512x512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
