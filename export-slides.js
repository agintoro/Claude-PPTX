/**
 * Dual Phase Carousel — PNG slide exporter
 * Uses the esbuild bundle (dist/bundle.js) + puppeteer to render each slide
 * at native 1080×1350px (2× device pixel ratio → 2160×2700 actual PNG).
 *
 * Output structure:
 *   exports/
 *     direction-A-ink/slide-01.png … slide-05.png
 *     direction-A-paper/slide-01.png … slide-05.png
 *     direction-B-ink/slide-01.png … slide-05.png
 *     direction-B-paper/slide-01.png … slide-05.png
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const bundleJS  = fs.readFileSync(path.join(__dirname, 'dist/bundle.js'), 'utf8');

const CONFIGS = [
  { direction: 'A', bgTone: 'ink',   label: 'direction-A-ink'   },
  { direction: 'A', bgTone: 'paper', label: 'direction-A-paper' },
  { direction: 'B', bgTone: 'ink',   label: 'direction-B-ink'   },
  { direction: 'B', bgTone: 'paper', label: 'direction-B-paper' },
];

function buildHTML(slideIndex, direction, bgTone) {
  const params = JSON.stringify({ slideIndex, direction, bgTone, headlineScale: 0.98 });
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 1080px; height: 1350px; overflow: hidden; }
    body { font-family: "Inter", ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>window.__SLIDE_PARAMS__ = ${params};</script>
  <script>${bundleJS}</script>
</body>
</html>`;
}

(async () => {
  const outDir = path.join(__dirname, 'exports');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--font-render-hinting=none',
    ],
  });

  for (const cfg of CONFIGS) {
    const cfgDir = path.join(outDir, cfg.label);
    fs.mkdirSync(cfgDir, { recursive: true });

    for (let i = 0; i < 5; i++) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

      const html = buildHTML(i, cfg.direction, cfg.bgTone);
      await page.setContent(html, { waitUntil: 'domcontentloaded' });

      // Wait for React to flush
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      }, { timeout: 8000 });
      await new Promise(r => setTimeout(r, 200));

      const filename = path.join(cfgDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
      await page.screenshot({ path: filename, type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1350 } });
      await page.close();

      const slideLabel = `slide-${String(i + 1).padStart(2, '0')}`;
      console.log(`  ✓  ${cfg.label}/${slideLabel}.png`);
    }
  }

  await browser.close();
  console.log(`\nExported ${CONFIGS.length * 5} slides → exports/`);
})().catch((err) => { console.error(err); process.exit(1); });
