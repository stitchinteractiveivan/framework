
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ivan/Desktop/framework-1/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ivan/Desktop/framework-1/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ivan/Desktop/framework-1/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivan/Desktop/framework-1/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ivan/Desktop/framework-1/src/pages/page-2.js"))
}

