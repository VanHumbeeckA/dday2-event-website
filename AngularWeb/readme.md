# d-day 2.0 event website

This project is bootstrapped from [this github repo](https://github.com/preboot/angularjs-webpack).

# How to run

Run ```npm install``` in this folder.
Next, run ```npm run server``` and you can start developing.

To make a build-package for deployment, there are 2 scripts at the moment.
(You'll need to tweak them to your own needs)

You can either run ```npm run build-azure``` or ```npm run build-ftp```.
They differ from injecting a different public key for [OneSignal](https://onesignal.com/) web-push-notifications.

# Features of this project

You can use this project for bootstrapping your own event-website.
This project has features like:
- web push notifications
- service worker for caching, web-push-notifications, offline support, ..
- sponsor-banner on each page
- if served over https, you get the [web-app-install-banner](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/) when browsing mobile.
- modular approach for easy extensibility
- ...
