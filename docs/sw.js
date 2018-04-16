/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "1521e46ddacbe16371bb78f145a716b2"
  },
  {
    "url": "scripts/app.js",
    "revision": "fd4d5feabb46cc672f15410a25102b07"
  },
  {
    "url": "scripts/classic.js",
    "revision": "2f364aaa4757266e8ec34d6f55b599eb"
  },
  {
    "url": "scripts/hello.js",
    "revision": "a53966b02c61deda7830c31347029544"
  },
  {
    "url": "styles/main.css",
    "revision": "5f0ff7d9671c9ee20b867f12312c7126"
  },
  {
    "url": "styles/normalize.css",
    "revision": "51e4e5bb1475d193fc34b28e93929bb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
