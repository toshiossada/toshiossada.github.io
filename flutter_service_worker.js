'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.ico": "f7eb4311ae74777acab9d50317c1b771",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"logo.png": "18f95ad548ecbaed9ab1d8cb2d72c964",
"style.css": "c143f74b471e3a438b8b2e283bbd0b51",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/images/logo_toshi.png": "1065b9aaae90a4bb0d6efa1479ace0e9",
"assets/assets/images/favicon.png": "4b37ea09398ae058ba3b340522986212",
"assets/AssetManifest.json": "f71f00bc21517c43bf4e3df1d4c9f662",
"assets/NOTICES": "6c4b43d2b441e76511db658691b3b7fa",
"assets/AssetManifest.bin": "006386a684d96d6399790d33cab3c826",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/fonts/MaterialIcons-Regular.otf": "7d5a5f93445aef2579699e82464ad95c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"version.json": "03f65179d0bd61b45a69d31c96389fd7",
"icons/apple-icon-120x120.png": "11a64a836d5d56495d720ddcffdcf95d",
"icons/favicon.ico": "9aca5cfbd62953eddca41e2e70c22f4c",
"icons/android-icon-192x192.png": "da5a555c154e687ad247841ce2e9cd70",
"icons/apple-icon-60x60.png": "93b1a182df271d179f4ad2dd4e1aca8d",
"icons/apple-icon-180x180.png": "90d72fb062357f88053ead5476615b3f",
"icons/android-icon-36x36.png": "9876612f03c3bd0ffb077a5212b515d7",
"icons/apple-touch-icon.png": "43ea1f47637ebf658b14a6892c09472d",
"icons/apple-icon-57x57.png": "154a5f2eaebb2764ebc3cbe09d26b968",
"icons/apple-icon-precomposed.png": "9f5ea4f3223eb63d58cdca207d056de2",
"icons/ms-icon-310x310.png": "92a782f31d5d9f9158cd35c105113d43",
"icons/android-icon-144x144.png": "0dc2d71556b52b37ccb319a971971096",
"icons/favicon-16x16.png": "877b0b20fd66c05cf9965881d0b3ad99",
"icons/apple-icon.png": "9f5ea4f3223eb63d58cdca207d056de2",
"icons/ms-icon-144x144.png": "cf450d916eb29119ed1d186ec413f90a",
"icons/apple-icon-152x152.png": "be474ed6365ad3f34bf35fbbf33397a2",
"icons/android-chrome-192x192.png": "061d57a7a1b0d7bf6b6f9e23f023b5a5",
"icons/android-chrome-512x512.png": "d7fe9d31e5371c34e1ea165de410ba3c",
"icons/apple-icon-72x72.png": "2747e12ac75e622d5a30c738b5497c9e",
"icons/favicon-32x32.png": "c006785bcd53f1b486a038f39c0adf74",
"icons/apple-icon-114x114.png": "878297ac9434e5a6bc01f847595ac8f0",
"icons/ms-icon-150x150.png": "050ea6c622bbf477a07af665eefb193d",
"icons/android-icon-96x96.png": "8056e60b4b706f709853a5c661be9786",
"icons/apple-icon-144x144.png": "cf450d916eb29119ed1d186ec413f90a",
"icons/android-icon-72x72.png": "2747e12ac75e622d5a30c738b5497c9e",
"icons/favicon-96x96.png": "5d05b7b3237b26f8f70c6360221608eb",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-48x48.png": "876f5cf6405fc2ae641b854a9fd7ee50",
"icons/apple-icon-76x76.png": "074f9038780ccb4004171424e2dc9f54",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-70x70.png": "2926aa5634a996298b7b9deb1a91d577",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "d8b639e95c11db4e7648517e0d27b5a1",
"/": "d8b639e95c11db4e7648517e0d27b5a1",
"favicon.png": "730fe8f8fc5e7533b18344d68b1beeb5",
"main.dart.js": "be175bd2234c3edfc171e16883f3a27b",
"manifest.json": "374a137b2ce255232af10019dbea572a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
