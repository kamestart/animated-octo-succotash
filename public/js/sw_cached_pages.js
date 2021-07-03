/* eslint-disable no-restricted-globals */
const cacheName = 'v1'
const hh = new URL(location).searchParams.get('values')
const abc = decodeURIComponent(hh)
console.log(abc)
const cacheAssets = JSON.parse(abc)

console.log(cacheAssets)


const cacheAssets2 = [
    '/js/sw_cached_pages.js',
    '/js/addToLS.js',
    '/js/main.js',
    '/static/js/vendors~main.chunk.js',
    '/static/js/main.chunk.js'
]

self.addEventListener('install', e => {
    console.log('service worker installed')
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache =>  {
                console.log('Service Worker: Caching File')
                cache.addAll(cacheAssets2)
            })
            .then(() => self.skipWaiting())
    )

    
})

self.addEventListener('activate', e => {
    console.log('service worker activated')
})