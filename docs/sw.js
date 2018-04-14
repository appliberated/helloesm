/*
 *  PWA Mini. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/pwamini/
 */

self.addEventListener('install', event =>
    event.waitUntil(
        caches.open('pwamini-v1').then(cache => cache.addAll(['index.html']))
    )
);

self.addEventListener('fetch', event =>
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    )
);
