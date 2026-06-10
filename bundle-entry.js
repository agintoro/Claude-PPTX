import React from 'react';
import { createRoot } from 'react-dom/client';

/* ── Inline CSS tokens ─────────────────────────────── */
// (loaded via <link> in HTML)

/* ── Slide components (transformed from JSX) ─────────────── */

function IgHead({ page }) {
  return (
    React.createElement('header', { className: 'ig-head' },
      React.createElement('div', { className: 'ig-brand' },
        React.createElement('div', { className: 'ig-mark' }, 'D'),
        React.createElement('div', { className: 'ig-brand-name' }, 'Driva')
      ),
      React.createElement('div', { className: 'ig-page' }, `${page} / 05`)
    )
  );
}

function IgFoot({ left, right }) {
  return (
    React.createElement('footer', { className: 'ig-foot' },
      React.createElement('span', null, left),
      React.createElement('span', { className: 'ig-swipe' }, right, ' ', React.createElement('span', null, '→'))
    )
  );
}

function SlideHook() {
  return (
    React.createElement('div', { className: 'ig-slide ig-slide--ink', 'data-screen-label': '01 · Hook' },
      React.createElement('div', { className: 'ig-ring', style: { width: '760px', height: '760px', right: '-300px', bottom: '-300px' } }),
      React.createElement('div', { className: 'ig-ring', style: { width: '460px', height: '460px', right: '-150px', bottom: '-150px' } }),
      React.createElement(IgHead, { page: '01' }),
      React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '56px', position: 'relative', zIndex: 2 } },
        React.createElement('p', { className: 'ig-eyebrow' }, 'First Batch · Pre-Order'),
        React.createElement('h1', { className: 'ig-display' },
          'Slow', React.createElement('br'), 'process.', React.createElement('br'),
          React.createElement('span', { className: 'dim' }, 'Short', React.createElement('br'), 'window.')
        ),
        React.createElement('p', { className: 'ig-sub' },
          'Pre-order green bean First Batch DRIVA ditutup ',
          React.createElement('strong', null, '15 Juni 2026, pukul 18.00'),
          ' — dan tidak dibuka lagi sampai batch berikutnya.'
        ),
        React.createElement('div', { className: 'ig-pill ig-pill--paper' },
          React.createElement('span', { className: 'dot', style: { background: 'var(--driva-red)' } }),
          ' Closing 15 June · 6PM'
        )
      ),
      React.createElement(IgFoot, { left: 'drivacoffee.com', right: 'Swipe' })
    )
  );
}

function SlideThanks() {
  return (
    React.createElement('div', { className: 'ig-slide', 'data-screen-label': '02 · Thank you' },
      React.createElement('div', { className: 'ig-ring', style: { width: '900px', height: '900px', left: '-380px', top: '-380px' } }),
      React.createElement(IgHead, { page: '02' }),
      React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '64px', position: 'relative', zIndex: 2 } },
        React.createElement('p', { className: 'ig-eyebrow' }, 'Terima kasih'),
        React.createElement('p', { className: 'ig-quote' },
          'To every roaster who trusted us before the first lot even shipped — ',
          React.createElement('span', { className: 'accent' }, 'this batch is yours.')
        ),
        React.createElement('p', { className: 'ig-sub' },
          'Kepada para klien yang sudah memesan lebih dulu: kepercayaan kalian adalah alasan First Batch ini ada. Setiap lot kami fermentasi, keringkan, dan resting seperti janji yang harus ditepati.'
        ),
        React.createElement('div', { className: 'ig-sig' },
          React.createElement('div', { className: 'ig-mark', style: { width: '76px', height: '76px', fontSize: '40px' } }, 'D'),
          React.createElement('div', null,
            React.createElement('div', { className: 'ig-sig-name' }, 'Tim DRIVA'),
            React.createElement('div', { className: 'ig-sig-role' }, 'Producers · First Batch')
          )
        )
      ),
      React.createElement(IgFoot, { left: 'drivacoffee.com', right: 'The schedule' })
    )
  );
}

function SlideSchedule() {
  return (
    React.createElement('div', { className: 'ig-slide', 'data-screen-label': '03 · Schedule' },
      React.createElement(IgHead, { page: '03' }),
      React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' } },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '16px' } },
          React.createElement('p', { className: 'ig-eyebrow' }, 'The Schedule'),
          React.createElement('h1', { className: 'ig-display', style: { fontSize: '96px' } },
            'Three dates', React.createElement('br'),
            React.createElement('span', { className: 'dim' }, 'to remember.')
          )
        ),
        React.createElement('div', { className: 'ig-row' },
          React.createElement('div', { className: 'ig-row-date' }, '15 Jun', React.createElement('small', null, '18.00')),
          React.createElement('div', { className: 'ig-row-body' },
            React.createElement('h2', { className: 'ig-row-title' }, 'Pre-order closes'),
            React.createElement('p', { className: 'ig-row-note' }, 'First Batch dikunci. Tidak ada perpanjangan.')
          ),
          React.createElement('div', { className: 'ig-status ig-status--red' }, 'Closing')
        ),
        React.createElement('div', { className: 'ig-row' },
          React.createElement('div', { className: 'ig-row-date' }, 'Jul–Aug', React.createElement('small', null, '2026')),
          React.createElement('div', { className: 'ig-row-body' },
            React.createElement('h2', { className: 'ig-row-title' }, 'Shipping window'),
            React.createElement('p', { className: 'ig-row-note' }, 'Resting selesai, green bean di-hulling dan dikirim bertahap.')
          ),
          React.createElement('div', { className: 'ig-status ig-status--amber' }, 'Shipping')
        ),
        React.createElement('div', { className: 'ig-row ig-row--ghost' },
          React.createElement('div', { className: 'ig-row-date' }, '±Sep', React.createElement('small', null, '2026')),
          React.createElement('div', { className: 'ig-row-body' },
            React.createElement('h2', { className: 'ig-row-title' }, 'Batch 2 opens'),
            React.createElement('p', { className: 'ig-row-note' }, 'Jendela berikutnya — untuk yang melewatkan ini.')
          ),
          React.createElement('div', { className: 'ig-status ig-status--green' }, 'Next')
        )
      ),
      React.createElement(IgFoot, { left: 'drivacoffee.com', right: 'Last call' })
    )
  );
}

function SlideDeadline() {
  return (
    React.createElement('div', { className: 'ig-slide ig-slide--ink', 'data-screen-label': '04 · Deadline' },
      React.createElement('div', { className: 'ig-ring', style: { width: '980px', height: '980px', left: '50%', top: '58%', transform: 'translate(-50%, -50%)' } }),
      React.createElement(IgHead, { page: '04' }),
      React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '70px', position: 'relative', zIndex: 2 } },
        React.createElement('p', { className: 'ig-eyebrow' }, 'Last call'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '36px' } },
          React.createElement('div', { className: 'ig-clock' },
            React.createElement('span', { className: 'ig-clock-num' }, '15.06'),
            React.createElement('span', { className: 'ig-clock-label' }, 'June', React.createElement('br'), '2026')
          ),
          React.createElement('div', { className: 'ig-clock' },
            React.createElement('span', { className: 'ig-clock-num', style: { color: 'var(--driva-paper-dim)' } }, '18.00'),
            React.createElement('span', { className: 'ig-clock-label' }, 'Doors', React.createElement('br'), 'close')
          )
        ),
        React.createElement('p', { className: 'ig-sub' },
          'Setelah itu, First Batch resmi dikunci dan masuk jadwal proses. Yang sudah memesan tinggal menunggu kabar pengiriman — yang belum, menunggu Batch 2.'
        )
      ),
      React.createElement(IgFoot, { left: 'drivacoffee.com', right: 'How to order' })
    )
  );
}

function SlideCta() {
  return (
    React.createElement('div', { className: 'ig-slide', 'data-screen-label': '05 · How to order' },
      React.createElement('div', { className: 'ig-ring', style: { width: '820px', height: '820px', right: '-340px', top: '-340px' } }),
      React.createElement(IgHead, { page: '05' }),
      React.createElement('main', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px', position: 'relative', zIndex: 2 } },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '12px' } },
          React.createElement('p', { className: 'ig-eyebrow' }, 'How to order'),
          React.createElement('h1', { className: 'ig-display', style: { fontSize: '96px' } },
            'Three taps.', React.createElement('br'),
            React.createElement('span', { className: 'dim' }, 'One lot.')
          )
        ),
        React.createElement('div', { className: 'ig-step' },
          React.createElement('div', { className: 'ig-step-num' }, '1'),
          React.createElement('div', { className: 'ig-step-body' },
            React.createElement('h2', { className: 'ig-step-title' }, 'Buka drivacoffee.com'),
            React.createElement('p', { className: 'ig-step-note' }, 'Lihat semua green bean lot di First Batch.')
          )
        ),
        React.createElement('div', { className: 'ig-step' },
          React.createElement('div', { className: 'ig-step-num' }, '2'),
          React.createElement('div', { className: 'ig-step-body' },
            React.createElement('h2', { className: 'ig-step-title' }, 'Pilih lot kamu'),
            React.createElement('p', { className: 'ig-step-note' }, 'Setiap lot tercatat — proses, pH curve, sampai resting.')
          )
        ),
        React.createElement('div', { className: 'ig-step' },
          React.createElement('div', { className: 'ig-step-num' }, '3'),
          React.createElement('div', { className: 'ig-step-body' },
            React.createElement('h2', { className: 'ig-step-title' }, 'Klik WhatsApp'),
            React.createElement('p', { className: 'ig-step-note' }, 'Pesanan terkunci langsung lewat chat.')
          )
        ),
        React.createElement('div', { className: 'ig-pill ig-pill--ink', style: { marginTop: '16px' } },
          React.createElement('span', { className: 'dot', style: { background: 'var(--driva-amber-soft)' } }),
          ' Sebelum 15 Juni · 18.00'
        )
      ),
      React.createElement(IgFoot, { left: 'drivacoffee.com', right: 'First Batch' })
    )
  );
}

const SLIDES = { SlideHook, SlideThanks, SlideSchedule, SlideDeadline, SlideCta };

// Mount the slide specified by the page's data attribute
const target = document.getElementById('root');
const componentName = target.dataset.slide;
const SlideComponent = SLIDES[componentName];
if (SlideComponent) {
  createRoot(target).render(React.createElement(SlideComponent));
}
