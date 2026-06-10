const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

function startServer(root, port) {
  const mime = { css: 'text/css', js: 'application/javascript', jsx: 'application/javascript', html: 'text/html', svg: 'image/svg+xml' };
  const server = http.createServer((req, res) => {
    const rel = req.url.split('?')[0].replace(/^\//, '') || 'index.html';
    const file = path.join(root, rel);
    try {
      const data = fs.readFileSync(file);
      const ext = path.extname(file).slice(1);
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404); res.end();
    }
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

function slideHtml(component) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DRIVA Slide</title>
<link rel="stylesheet" href="/driva-tokens.css">
<link rel="stylesheet" href="/carousel.css">
<style>
  html, body { margin: 0; padding: 0; width: 1080px; height: 1350px; overflow: hidden; }
</style>
</head>
<body>
<div id="root" data-slide="${component}"></div>
<script src="/vendor/bundle.js"></script>
</body>
</html>`;
}

async function generatePNGs() {
  const PORT = 54321;
  const outDir = path.join(__dirname, 'slides');
  fs.mkdirSync(outDir, { recursive: true });

  // Write per-slide HTML files into the project root so the server can serve them
  const slides = [
    { component: 'SlideHook',     name: 'slide-01-hook' },
    { component: 'SlideThanks',   name: 'slide-02-thanks' },
    { component: 'SlideSchedule', name: 'slide-03-schedule' },
    { component: 'SlideDeadline', name: 'slide-04-deadline' },
    { component: 'SlideCta',      name: 'slide-05-cta' },
  ];

  const tmpFiles = [];
  for (const slide of slides) {
    const fname = `_tmp_${slide.name}.html`;
    fs.writeFileSync(path.join(__dirname, fname), slideHtml(slide.component));
    tmpFiles.push(fname);
  }

  const server = await startServer(__dirname, PORT);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

      page.on('console', msg => console.log(`  [${msg.type()}] ${msg.text()}`));
      page.on('pageerror', err => console.error(`  [pageerror] ${err.message}`));

      const url = `http://localhost:${PORT}/_tmp_${slide.name}.html`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      // Dump root HTML for debugging
      const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || '(empty)');
      console.log(`  root: ${rootHtml.slice(0, 120)}`);

      // Wait for React to mount
      await page.waitForFunction(
        () => document.getElementById('root') && document.getElementById('root').childElementCount > 0,
        { timeout: 20000 }
      );
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 800));

      const outPath = path.join(outDir, `${slide.name}.png`);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1080, height: 1350 } });

      const size = fs.statSync(outPath).size;
      console.log(`✓ ${slide.name}.png  (${Math.round(size / 1024)}KB)`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
    tmpFiles.forEach(f => { try { fs.unlinkSync(path.join(__dirname, f)); } catch {} });
  }

  console.log(`\nAll 5 slides saved to slides/`);
}

generatePNGs().catch(err => { console.error(err); process.exit(1); });
