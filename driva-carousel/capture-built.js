const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const SLIDES = [
  { id: 's1', label: '01-hook' },
  { id: 's2', label: '02-thankyou' },
  { id: 's3', label: '03-schedule' },
  { id: 's4', label: '04-deadline' },
  { id: 's5', label: '05-cta' },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const outDir = path.join(__dirname, 'slides-png');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const slide of SLIDES) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1080, height: 1350 });

    page.on('console', msg => { if (msg.type() === 'error') console.error('PAGE ERR:', msg.text()); });

    const url = `http://localhost:9877/index.html?slide=${slide.id}`;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for fonts + React render
    await page.waitForFunction(() => document.fonts.ready, { timeout: 15000 });
    await page.waitForSelector('.ig-slide', { timeout: 15000 });
    await page.waitForTimeout(1200);

    const el = await page.$('.ig-slide');
    const outPath = path.join(outDir, `driva-${slide.label}.png`);
    await el.screenshot({ path: outPath });
    console.log(`Saved: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log('All slides captured.');
})();
