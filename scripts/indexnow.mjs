// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs

const KEY = '4fc0fba491ab5ddf7664269e3a97104d'
const HOST = 'o7meaning.com'

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/in-gaming`,
  `https://${HOST}/in-star-citizen`,
  `https://${HOST}/faq`,
]

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
})

if (res.ok) {
  console.log(`✅ IndexNow: submitted ${urls.length} URLs (HTTP ${res.status})`)
} else {
  const body = await res.text()
  console.error(`❌ IndexNow failed: HTTP ${res.status} — ${body}`)
  process.exit(1)
}
