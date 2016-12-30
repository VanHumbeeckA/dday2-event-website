// SERVICE WORKER
importScripts('/scripts/cache-polyfill.js');

var CACHE_VERSION = '1';
var CURRENT_CACHES = {
    images: 'image-v'+CACHE_VERSION
};

const expectedCaches = [CACHE_VERSION];

self.addEventListener('install', function(event) {
    console.log('[SW] install');
    // self.skipWaiting();

    event.waitUntil(
        caches.open(CURRENT_CACHES['images']).then(function(cache) {
            return cache.addAll(['/img/sponsors/placeholder.jpg']);
        }).catch(function(err) {
            console.error(err);
        })
    );
});

self.addEventListener('activate', function(event){
    console.log('[SW] activate');

    var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
        return CURRENT_CACHES[key];
    });

    // Active worker won't be treated as activated until promise resolves successfully.
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) == -1) {
                        console.log('Deleting out of date cache:', cacheName);

                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log("Cache version '"+CACHE_VERSION+"' now ready to handle fetches!");
        })
    );
});

self.addEventListener('fetch', function(event){
    console.log('Handling fetch event for', event.request.url);

    // We only want to call event.respondWith() if this is a GET request for an HTML document.
    // if (event.request.method === 'GET' &&
    //     event.request.headers.get('accept').indexOf('text/html') !== -1) {

    event.respondWith(
        caches.open(CURRENT_CACHES['images']).then(function(cache) {
            return caches.match(event.request).then(function(response) {
                if (response) {
                    console.log('Found response in chache: ', response);
                    return response;
                }
            }).catch(function(error) {
                console.error('Error in fetch handler: ', error);
                throw error;
            });
        })
    );
});

function requestBackend(event){
    var url = event.request.clone();
    return fetch(url).then(function(res){
        //if not a valid response send the error
        if(!res || res.status !== 200 || res.type !== 'basic'){
            return res;
        }

        var response = res.clone();

        caches.open(CACHE_VERSION).then(function(cache){
            cache.put(event.request, response);
        });

        return res;
    })
}