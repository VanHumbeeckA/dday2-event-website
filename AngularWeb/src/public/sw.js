// SERVICE WORKER
importScripts('/scripts/cache-polyfill.js');

var CACHE_VERSION = '3';
var CURRENT_CACHES = {
    static: 'static-v'+CACHE_VERSION
};

const expectedCaches = [CACHE_VERSION];

self.addEventListener('install', function(event) {
    console.log('[SW] install');
    self.skipWaiting();

    event.waitUntil(
        caches.open(CURRENT_CACHES['static']).then(function(cache) {
            return cache.addAll([
                '/img/sponsors/placeholder.jpg',
                '/img/sponsors/sponsor_50_cola.png',
                '/img/sponsors/sponsor_50_depotter.jpg',
                '/img/sponsors/sponsor_50_dierenarts.jpg',
                '/img/sponsors/sponsor_50_sioen.jpg',
                '/img/sponsors/sponsor_50_crescendomusic.JPG',
                '/img/sponsors/sponsor_50_daisy.JPG',
                '/img/sponsors/sponsor_50_erea.JPG',
                '/img/sponsors/sponsor_100_delhaize.jpg',
                '/img/sponsors/sponsor_100_heatingcenter.jpg',
                '/img/sponsors/sponsor_100_chantalk.jpg',
                '/img/sponsors/sponsor_100_frituur_sportcentrum.JPG',
                '/img/sponsors/sponsor_100_rokken.jpeg',
                '/img/sponsors/sponsor_100_terlandinvest.jpg',
                '/img/sponsors/sponsor_100_toro.png',
                '/img/sponsors/sponsor_100_traiteurculinesse.JPG',
                '/img/sponsors/sponsor_200_bodycentrum.jpg',
                '/img/sponsors/sponsor_200_escent.png',
                '/img/sponsors/sponsor_200_forever.jpg',
                '/img/sponsors/sponsor_200_roggen.png',
                '/img/sponsors/sponsor_250_kbc.jpg',
                '/img/sponsors/sponsor_500_joker.JPG',
                '/img/sponsors/sponsor_hoofd_adams.jpg',
                '/img/sponsors/sponsor_hoofd_AE.png',
                '/img/sponsors/sponsor_hoofd_ford.jpg',
                '/img/sponsors/sponsor_hoofd_handson.png',
                '/img/sponsors/sponsor_hoofd_roland.png',
                '/img/sponsors/sponsor_hoofd_vriends.jpg',
                '/img/sponsors/sponsor_livingstone.JPG',
                '/img/background/escheresque_ste.png',
                '/img/background/escheresque_ste_@2X.png',
                '/img/filler/steunkaart_specimen.JPG',
                '/img/muziekschool/animal.jpg',
                '/img/muziekschool/devonk.png',
                '/img/muziekschool/kulturama.JPG'
            ]); // TODO: explicitly name files?
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
    // console.log('Handling fetch event for', event.request.url);
    var url = new URL(event.request.url);

    // We only want to call event.respondWith() if this is a GET request for an HTML document.
    // if (event.request.method === 'GET' &&
    //     event.request.headers.get('accept').indexOf('text/html') !== -1) {

    event.respondWith(
        caches.open(CURRENT_CACHES['static']).then(function(cache) {
            return caches.match(event.request).then(function(response) {
                if (response) {
                    // console.log('Found response in cache: ', response);
                    return response;
                } else {
                    // console.log('NOT Found in cache: ', url);
                    return fetch(event.request);
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