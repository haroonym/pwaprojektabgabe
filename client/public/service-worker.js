if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/products',
    new workbox.strategies.NetworkFirst({
      cacheName: 'haroons-cache',
    }),
  );
  workbox.routing.registerRoute(
    new RegExp('/images/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'haroons-image-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body.message,
    icon: 'img/icons/android-chrome-192x192.png',
  });
});
self.skipWaiting();
