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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "21e6248e46420a84fddb9365eeeed221"
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
    "revision": "c065ba4eeda32edb5ec35a75754a606c"
  },
  {
    "url": "styles/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
