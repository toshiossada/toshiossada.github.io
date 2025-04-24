'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"style.css": "c143f74b471e3a438b8b2e283bbd0b51",
"favicon.ico": "f7eb4311ae74777acab9d50317c1b771",
"logo.png": "18f95ad548ecbaed9ab1d8cb2d72c964",
"assets/AssetManifest.json": "2f658f2557a4acee7a34b2e8c66e42f4",
"assets/AssetManifest.bin": "842ebdd025725f19692baf05a6f21299",
"assets/assets/experiences.json": "deed4e547a49c4028b8d63bfd23941d6",
"assets/assets/lang/en_US.json": "dd7a6e2998503078a2c644dc87b80b3b",
"assets/assets/lang/pt_BR.json": "4201e35f4cc76bbe7ac478f1bdec8300",
"assets/assets/experiences_enUs.json": "beb2410c5dd097eb0db44ac69e452bbf",
"assets/assets/images/flutterbrasil/dash.png": "c39fae6c0478adbca58c3c7d0acc9124",
"assets/assets/images/flutterbrasil/flutter_br.png": "f3522d7943569a7497e04d6fe36b66d4",
"assets/assets/images/favicon.png": "4b37ea09398ae058ba3b340522986212",
"assets/assets/images/toshi.png": "a8c98367a4606a5ff6b75d2d9cfddcfd",
"assets/assets/images/meia_entrada.png": "cee003a02a86fc956330bd632bc0a57c",
"assets/assets/images/logo_toshi.png": "1065b9aaae90a4bb0d6efa1479ace0e9",
"assets/assets/images/awards/gde.png": "7ccbd86213f84e254373ac1d7d72f66c",
"assets/assets/images/awards/flutter.png": "86bcb4bc08d1539b4d3b25fb58c9f6c5",
"assets/assets/images/awards/mvp.png": "ad8533666317cd07c2bf669a85c89b9f",
"assets/assets/images/awards/dart.png": "aef3626df6b0ddd81f2542788c7ffef7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6aea79857998b6ed4420b95db26c0b24",
"assets/AssetManifest.bin.json": "7cc4dbfa07d1e10c734b483c3e3a0384",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "926cf1e2c9675b8596c35b1983a34c3a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e0489a13ac6e6fd7faa96d5312285512",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2102133d32ee99df6528804f81ff081c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "374a137b2ce255232af10019dbea572a",
"version.json": "03f65179d0bd61b45a69d31c96389fd7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"index.html": "8864f569bbe4a916d6b85edec29d96f4",
"/": "8864f569bbe4a916d6b85edec29d96f4",
"flutter_bootstrap.js": "64c9fe232491aecc85dcc403504e6448",
"icons/apple-icon-precomposed.png": "9f5ea4f3223eb63d58cdca207d056de2",
"icons/favicon.ico": "9aca5cfbd62953eddca41e2e70c22f4c",
"icons/android-chrome-512x512.png": "d7fe9d31e5371c34e1ea165de410ba3c",
"icons/favicon-32x32.png": "c006785bcd53f1b486a038f39c0adf74",
"icons/android-icon-96x96.png": "8056e60b4b706f709853a5c661be9786",
"icons/apple-touch-icon.png": "43ea1f47637ebf658b14a6892c09472d",
"icons/apple-icon-57x57.png": "154a5f2eaebb2764ebc3cbe09d26b968",
"icons/apple-icon-120x120.png": "11a64a836d5d56495d720ddcffdcf95d",
"icons/apple-icon-72x72.png": "2747e12ac75e622d5a30c738b5497c9e",
"icons/apple-icon-152x152.png": "be474ed6365ad3f34bf35fbbf33397a2",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-72x72.png": "2747e12ac75e622d5a30c738b5497c9e",
"icons/apple-icon-76x76.png": "074f9038780ccb4004171424e2dc9f54",
"icons/ms-icon-144x144.png": "cf450d916eb29119ed1d186ec413f90a",
"icons/android-icon-36x36.png": "9876612f03c3bd0ffb077a5212b515d7",
"icons/ms-icon-310x310.png": "92a782f31d5d9f9158cd35c105113d43",
"icons/apple-icon-60x60.png": "93b1a182df271d179f4ad2dd4e1aca8d",
"icons/favicon-96x96.png": "5d05b7b3237b26f8f70c6360221608eb",
"icons/favicon-16x16.png": "877b0b20fd66c05cf9965881d0b3ad99",
"icons/apple-icon-144x144.png": "cf450d916eb29119ed1d186ec413f90a",
"icons/android-icon-144x144.png": "0dc2d71556b52b37ccb319a971971096",
"icons/android-icon-192x192.png": "da5a555c154e687ad247841ce2e9cd70",
"icons/ms-icon-150x150.png": "050ea6c622bbf477a07af665eefb193d",
"icons/apple-icon.png": "9f5ea4f3223eb63d58cdca207d056de2",
"icons/apple-icon-114x114.png": "878297ac9434e5a6bc01f847595ac8f0",
"icons/android-icon-48x48.png": "876f5cf6405fc2ae641b854a9fd7ee50",
"icons/android-chrome-192x192.png": "061d57a7a1b0d7bf6b6f9e23f023b5a5",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/apple-icon-180x180.png": "90d72fb062357f88053ead5476615b3f",
"icons/ms-icon-70x70.png": "2926aa5634a996298b7b9deb1a91d577",
"favicon.png": "730fe8f8fc5e7533b18344d68b1beeb5",
"main.dart.js": "19e16aed61d5c3653b749a5fae049963"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
