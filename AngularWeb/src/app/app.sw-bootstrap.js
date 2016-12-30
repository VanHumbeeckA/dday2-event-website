export const SwBootstrap = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js', {scope: '/img/'}).then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    } else {
        console.log("Browser does not support service worker.");
    }
};