
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kyle/github/kylemire1/personal-site-redesign/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kyle/github/kylemire1/personal-site-redesign/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kyle/github/kylemire1/personal-site-redesign/src/pages/index.js"))
}

