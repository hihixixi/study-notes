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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "251c93675ce7ac95cb436ef9211a1998"
  },
  {
    "url": "about/index.html",
    "revision": "c779129e60660cb7d5ee22f884749d6d"
  },
  {
    "url": "assets/css/0.styles.36c7e5c5.css",
    "revision": "399f281abec5f5fb41a121768fc2cc73"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41e3331c.js",
    "revision": "89ef7805dd0d4c4aa98650ce690ffad3"
  },
  {
    "url": "assets/js/11.83e3d03d.js",
    "revision": "4c6872f94fdc913a4c98bdc71693fb57"
  },
  {
    "url": "assets/js/12.5cddcc92.js",
    "revision": "82c6baec4867a9a2789102c7cbbf544c"
  },
  {
    "url": "assets/js/13.a02aae1c.js",
    "revision": "d8c93590781fab952279c97b909a5b46"
  },
  {
    "url": "assets/js/14.5c8456e7.js",
    "revision": "14dbbc19a0acb05a2e3fac2179f59815"
  },
  {
    "url": "assets/js/15.b4882dc9.js",
    "revision": "2a9a7b69b83d53ae4a8f919db6c13832"
  },
  {
    "url": "assets/js/16.70cf043a.js",
    "revision": "8895d54b912891d94c84110131d888c5"
  },
  {
    "url": "assets/js/17.0b04cbb7.js",
    "revision": "382dd2f694eb0cda9a8f00a3c2fbf1f7"
  },
  {
    "url": "assets/js/18.b85f0f48.js",
    "revision": "13fa7e7ad9d40d7f4b9101aa381427db"
  },
  {
    "url": "assets/js/19.dc75de6b.js",
    "revision": "51685ab3da0652bde2fdfee3c67a0c2c"
  },
  {
    "url": "assets/js/2.a284cb68.js",
    "revision": "8b5211fb231e72ab6aac4958c73f598f"
  },
  {
    "url": "assets/js/20.13da132c.js",
    "revision": "f087bbd3149f60d16fe397ba29387209"
  },
  {
    "url": "assets/js/21.bedb4ebe.js",
    "revision": "6920cf7ddd6f9de0381e3679e3deed3f"
  },
  {
    "url": "assets/js/22.46a16eba.js",
    "revision": "09b52c14106e2805652b52f354ad03c0"
  },
  {
    "url": "assets/js/23.03c4acf1.js",
    "revision": "03cce4d3ffe95b58082bcd279fb451cc"
  },
  {
    "url": "assets/js/3.3315c7c4.js",
    "revision": "e024b4e90ec75a10cd348eaa786dae9c"
  },
  {
    "url": "assets/js/4.bf81bdbe.js",
    "revision": "d563695928680f09927f9273518e16b4"
  },
  {
    "url": "assets/js/5.b5843c52.js",
    "revision": "6866862d76cdc78de027804fa88b2fc0"
  },
  {
    "url": "assets/js/6.02523e56.js",
    "revision": "8a95f990d9626d5a9c2b35c39549a9fd"
  },
  {
    "url": "assets/js/7.f1e5fbdd.js",
    "revision": "7b618b918ebbe6e6202a576b5dd8092b"
  },
  {
    "url": "assets/js/8.2e075c2e.js",
    "revision": "7b4297dac9e6c13c0803ca57ae371f2c"
  },
  {
    "url": "assets/js/9.11f4d199.js",
    "revision": "f2e93567367abe9a2737f0974a77aa49"
  },
  {
    "url": "assets/js/app.c0db1946.js",
    "revision": "0a0770e4f9e58cca5a290a660eb61f02"
  },
  {
    "url": "blogs/java/java基本语法知识.html",
    "revision": "bb7d2c4b20d3590d61d07350003d06b6"
  },
  {
    "url": "blogs/java/异常.html",
    "revision": "2d1c134e14c4ce61397eb3e9af017aa2"
  },
  {
    "url": "blogs/java/接口与继承.html",
    "revision": "b9acfa9bfe7821f8a4e7847c27c6d9ac"
  },
  {
    "url": "blogs/java/数字与字符串.html",
    "revision": "842cb6f5a826a6aa37b8894940995032"
  },
  {
    "url": "blogs/java/泛型.html",
    "revision": "8e64f2487f2022af1ebf848c1bdc053b"
  },
  {
    "url": "blogs/java/注解.html",
    "revision": "744cea55d85e0c7bfc03c1825db49c20"
  },
  {
    "url": "blogs/java/类和对象.html",
    "revision": "557b7c2663bf21ef06b67195e72a8d20"
  },
  {
    "url": "blogs/ssm/spring/config.html",
    "revision": "1137394cdf39b7e4081e1461bc227990"
  },
  {
    "url": "blogs/ssm/spring/mytest.html",
    "revision": "83e56476b4ff57e184e1d0b064b14724"
  },
  {
    "url": "blogs/ssm/spring/one.html",
    "revision": "807071002558ce87f13e8f491432ecba"
  },
  {
    "url": "blogs/ssm/spring/start.html",
    "revision": "7e147f87791ccc242e2661fd01acac10"
  },
  {
    "url": "blogs/ssm/spring/two.html",
    "revision": "c9d67723196837fad2c64985fc5a69a6"
  },
  {
    "url": "img/logo.png",
    "revision": "088211645314de901605762f3ff79af0"
  },
  {
    "url": "img/study.gif",
    "revision": "555c9a539a47dea79acdcb0441e40b40"
  },
  {
    "url": "index.html",
    "revision": "27305046a2682b3027a7f2fcaceafdce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
