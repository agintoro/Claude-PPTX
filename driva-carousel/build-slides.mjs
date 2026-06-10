import { build } from '/home/user/Claude-PPTX/node_modules/esbuild/lib/main.js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const slides = [
  { id: 's1', label: '01-hook', component: 'SlideHook' },
  { id: 's2', label: '02-thankyou', component: 'SlideThanks' },
  { id: 's3', label: '03-schedule', component: 'SlideSchedule' },
  { id: 's4', label: '04-deadline', component: 'SlideDeadline' },
  { id: 's5', label: '05-cta', component: 'SlideCta' },
];

mkdirSync(resolve(__dirname, 'built'), { recursive: true });

// Read the CSS files
const drivaTokens = readFileSync(resolve(__dirname, 'driva-tokens.css'), 'utf-8');
const carouselCss = readFileSync(resolve(__dirname, 'carousel.css'), 'utf-8');

// Read carousel-slides.jsx and strip the window.assign line for module use
let slidesJsx = readFileSync(resolve(__dirname, 'carousel-slides.jsx'), 'utf-8');
// Replace window.assign with named exports
slidesJsx = slidesJsx.replace(
  /Object\.assign\(window,\s*\{[^}]+\}\);/,
  'export { SlideHook, SlideThanks, SlideSchedule, SlideDeadline, SlideCta };'
);
writeFileSync(resolve(__dirname, 'built/_slides-module.jsx'), slidesJsx);

// Build a bundle for all slides
const entryContent = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SlideHook, SlideThanks, SlideSchedule, SlideDeadline, SlideCta } from './_slides-module.jsx';

const SLIDES = { s1: SlideHook, s2: SlideThanks, s3: SlideSchedule, s4: SlideDeadline, s5: SlideCta };
const slideId = new URLSearchParams(location.search).get('slide') || 's1';
const Component = SLIDES[slideId] || SlideHook;
createRoot(document.getElementById('root')).render(React.createElement(Component));
`;

writeFileSync(resolve(__dirname, 'built/_entry.jsx'), entryContent);

const result = await build({
  entryPoints: [resolve(__dirname, 'built/_entry.jsx')],
  bundle: true,
  format: 'iife',
  outfile: resolve(__dirname, 'built/bundle.js'),
  loader: { '.jsx': 'jsx' },
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: false,
}).catch(e => { console.error(e); process.exit(1); });

console.log('Bundle built successfully');

// Create the HTML template for each slide
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DRIVA Slide</title>
<style>
html, body { margin: 0; padding: 0; background: #f0eee9; }
${drivaTokens}
${carouselCss}
</style>
</head>
<body>
<div id="root"></div>
<script src="bundle.js"></script>
</body>
</html>`;

writeFileSync(resolve(__dirname, 'built/index.html'), html);
console.log('HTML written to built/index.html');
