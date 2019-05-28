/* eslint-disable */

workbox.skipWaiting();

workbox.core.setCacheNameDetails({ prefix: 'selection' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css|json)'),
  new workbox.strategies.NetworkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('/'),
  new workbox.strategies.NetworkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('(https:\/\/i\.scdn\.co\/image|https:\/\/image\.tmdb\.org)'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 30,
        purgeOnQuotaError: true
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https:\/\/selection\.cleverapps.io'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'selection',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 30,
        purgeOnQuotaError: true
      }),
    ],
  }),
);

