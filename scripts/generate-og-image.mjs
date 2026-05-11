import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/images')
const outFile = join(outDir, 'og-default.jpg')

mkdirSync(outDir, { recursive: true })

// Brand colors: slate #1a1f2e, slateMid #252d40, cyan #00d4ff, white #f0f4f8, muted #7a8599
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1a1f2e"/>
      <stop offset="100%" stop-color="#0e1220"/>
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d4ff"/>
      <stop offset="100%" stop-color="#0099bb"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle grid lines -->
  <g stroke="#252d40" stroke-width="1" opacity="0.6">
    <line x1="0" y1="210" x2="1200" y2="210"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
  </g>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#cyanGlow)"/>

  <!-- Decorative circle behind o7 -->
  <circle cx="600" cy="270" r="180" fill="#252d40" opacity="0.5"/>
  <circle cx="600" cy="270" r="180" fill="none" stroke="#00d4ff" stroke-width="1" opacity="0.15"/>

  <!-- Glow behind o7 text -->
  <text x="600" y="330" font-family="monospace, Courier New" font-size="220" font-weight="700"
        text-anchor="middle" fill="#00d4ff" opacity="0.08" filter="url(#glow)">o7</text>

  <!-- Main o7 text -->
  <text x="600" y="330" font-family="monospace, Courier New" font-size="220" font-weight="700"
        text-anchor="middle" fill="url(#cyanGlow)">o7</text>

  <!-- Subtitle -->
  <text x="600" y="400" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="400"
        text-anchor="middle" fill="#f0f4f8" letter-spacing="4">WHAT DOES o7 MEAN?</text>

  <!-- Divider line -->
  <line x1="480" y1="430" x2="720" y2="430" stroke="#00d4ff" stroke-width="1" opacity="0.4"/>

  <!-- Domain -->
  <text x="600" y="468" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="400"
        text-anchor="middle" fill="#7a8599" letter-spacing="2">o7meaning.com</text>

  <!-- Bottom tag -->
  <text x="600" y="580" font-family="Arial, Helvetica, sans-serif" font-size="18"
        text-anchor="middle" fill="#7a8599" opacity="0.7">The gaming salute explained in plain English</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#cyanGlow)" opacity="0.5"/>
</svg>`

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outFile)

console.log(`✅ Generated: ${outFile}`)
