export const SwBootstrap = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {

            // navigator.serviceWorker.register('/sw.js', {scope: './'});
            // OneSignalSDKWorker
            navigator.serviceWorker.register('/OneSignalSDKWorker.js', {scope: './'}).then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker NEW registration successful with scope: ', registration.scope);
            }).catch(function(err) {
                // registration failed :(
                console.log('ServiceWorker NEW registration failed: ', err);
            });

            // navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
            //     // Registration was successful
            //     return registration.unregister().then(function() {
            //         console.log("OLD service worker unregistered.");
            //     }).catch(function(err) {
            //         console.log("Unregistering OLD service worker failed: ", err);
            //     });
            // }, function(err) {
            //     // registration failed :(
            //     console.log('ServiceWorker OLD registration failed: ', err);
            // }).then(function() {
            //     navigator.serviceWorker.register('/OneSignalSDKWorker.js').then(function(registration) {
            //         // Registration was successful
            //         console.log('ServiceWorker NEW registration successful with scope: ', registration.scope);
            //     }).catch(function(err) {
            //         // registration failed :(
            //         console.log('ServiceWorker NEW registration failed: ', err);
            //     });
            // });

        });
    } else {
        console.log("Browser does not support service worker.");
    }
};