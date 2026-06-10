// DRIVA — First Batch carousel slides (1080×1350)

function IgHead({ ink, page }) {
  return (
    <header className="ig-head">
      <div className="ig-brand">
        <div className="ig-mark">D</div>
        <div className="ig-brand-name">Driva</div>
      </div>
      <div className="ig-page">{page} / 05</div>
    </header>
  );
}

function IgFoot({ left, right }) {
  return (
    <footer className="ig-foot">
      <span>{left}</span>
      <span className="ig-swipe">{right} <span>→</span></span>
    </footer>
  );
}

// ── Slide 1 · Hook ────────────────────────────────────────────
function SlideHook() {
  return (
    <div className="ig-slide ig-slide--ink" data-screen-label="01 · Hook">
      <div className="ig-ring" style={{ width: '760px', height: '760px', right: '-300px', bottom: '-300px' }}></div>
      <div className="ig-ring" style={{ width: '460px', height: '460px', right: '-150px', bottom: '-150px' }}></div>
      <IgHead page="01" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '56px', position: 'relative', zIndex: 2 }}>
        <p className="ig-eyebrow">First Batch · Pre-Order</p>
        <h1 className="ig-display">Slow<br />process.<br /><span className="dim">Short<br />window.</span></h1>
        <p className="ig-sub">Pre-order green bean First Batch DRIVA ditutup <strong>15 Juni 2026, pukul 18.00</strong> — dan tidak dibuka lagi sampai batch berikutnya.</p>
        <div className="ig-pill ig-pill--paper"><span className="dot" style={{ background: 'var(--driva-red)' }}></span> Closing 15 June · 6PM</div>
      </main>
      <IgFoot left="drivacoffee.com" right="Swipe" />
    </div>
  );
}

// ── Slide 2 · Thank you ───────────────────────────────────────
function SlideThanks() {
  return (
    <div className="ig-slide" data-screen-label="02 · Thank you">
      <div className="ig-ring" style={{ width: '900px', height: '900px', left: '-380px', top: '-380px' }}></div>
      <IgHead page="02" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '64px', position: 'relative', zIndex: 2 }}>
        <p className="ig-eyebrow">Terima kasih</p>
        <p className="ig-quote">To every roaster who trusted us before the first lot even shipped — <span className="accent">this batch is yours.</span></p>
        <p className="ig-sub">Kepada para klien yang sudah memesan lebih dulu: kepercayaan kalian adalah alasan First Batch ini ada. Setiap lot kami fermentasi, keringkan, dan resting seperti janji yang harus ditepati.</p>
        <div className="ig-sig">
          <div className="ig-mark" style={{ width: '76px', height: '76px', fontSize: '40px' }}>D</div>
          <div>
            <div className="ig-sig-name">Tim DRIVA</div>
            <div className="ig-sig-role">Producers · First Batch</div>
          </div>
        </div>
      </main>
      <IgFoot left="drivacoffee.com" right="The schedule" />
    </div>
  );
}

// ── Slide 3 · Schedule ────────────────────────────────────────
function SlideSchedule() {
  return (
    <div className="ig-slide" data-screen-label="03 · Schedule">
      <IgHead page="03" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '16px' }}>
          <p className="ig-eyebrow">The Schedule</p>
          <h1 className="ig-display" style={{ fontSize: '96px' }}>Three dates<br /><span className="dim">to remember.</span></h1>
        </div>
        <div className="ig-row">
          <div className="ig-row-date">15 Jun<small>18.00</small></div>
          <div className="ig-row-body">
            <h2 className="ig-row-title">Pre-order closes</h2>
            <p className="ig-row-note">First Batch dikunci. Tidak ada perpanjangan.</p>
          </div>
          <div className="ig-status ig-status--red">Closing</div>
        </div>
        <div className="ig-row">
          <div className="ig-row-date">Jul–Aug<small>2026</small></div>
          <div className="ig-row-body">
            <h2 className="ig-row-title">Shipping window</h2>
            <p className="ig-row-note">Resting selesai, green bean di-hulling dan dikirim bertahap.</p>
          </div>
          <div className="ig-status ig-status--amber">Shipping</div>
        </div>
        <div className="ig-row ig-row--ghost">
          <div className="ig-row-date">±Sep<small>2026</small></div>
          <div className="ig-row-body">
            <h2 className="ig-row-title">Batch 2 opens</h2>
            <p className="ig-row-note">Jendela berikutnya — untuk yang melewatkan ini.</p>
          </div>
          <div className="ig-status ig-status--green">Next</div>
        </div>
      </main>
      <IgFoot left="drivacoffee.com" right="Last call" />
    </div>
  );
}

// ── Slide 4 · Deadline ────────────────────────────────────────
function SlideDeadline() {
  return (
    <div className="ig-slide ig-slide--ink" data-screen-label="04 · Deadline">
      <div className="ig-ring" style={{ width: '980px', height: '980px', left: '50%', top: '58%', transform: 'translate(-50%, -50%)' }}></div>
      <IgHead page="04" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '70px', position: 'relative', zIndex: 2 }}>
        <p className="ig-eyebrow">Last call</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div className="ig-clock">
            <span className="ig-clock-num">15.06</span>
            <span className="ig-clock-label">June<br />2026</span>
          </div>
          <div className="ig-clock">
            <span className="ig-clock-num" style={{ color: 'var(--driva-paper-dim)' }}>18.00</span>
            <span className="ig-clock-label">Doors<br />close</span>
          </div>
        </div>
        <p className="ig-sub">Setelah itu, First Batch resmi dikunci dan masuk jadwal proses. Yang sudah memesan tinggal menunggu kabar pengiriman — yang belum, menunggu Batch 2.</p>
      </main>
      <IgFoot left="drivacoffee.com" right="How to order" />
    </div>
  );
}

// ── Slide 5 · CTA ─────────────────────────────────────────────
function SlideCta() {
  return (
    <div className="ig-slide" data-screen-label="05 · How to order">
      <div className="ig-ring" style={{ width: '820px', height: '820px', right: '-340px', top: '-340px' }}></div>
      <IgHead page="05" />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '12px' }}>
          <p className="ig-eyebrow">How to order</p>
          <h1 className="ig-display" style={{ fontSize: '96px' }}>Three taps.<br /><span className="dim">One lot.</span></h1>
        </div>
        <div className="ig-step">
          <div className="ig-step-num">1</div>
          <div className="ig-step-body">
            <h2 className="ig-step-title">Buka drivacoffee.com</h2>
            <p className="ig-step-note">Lihat semua green bean lot di First Batch.</p>
          </div>
        </div>
        <div className="ig-step">
          <div className="ig-step-num">2</div>
          <div className="ig-step-body">
            <h2 className="ig-step-title">Pilih lot kamu</h2>
            <p className="ig-step-note">Setiap lot tercatat — proses, pH curve, sampai resting.</p>
          </div>
        </div>
        <div className="ig-step">
          <div className="ig-step-num">3</div>
          <div className="ig-step-body">
            <h2 className="ig-step-title">Klik WhatsApp</h2>
            <p className="ig-step-note">Pesanan terkunci langsung lewat chat.</p>
          </div>
        </div>
        <div className="ig-pill ig-pill--ink" style={{ marginTop: '16px' }}><span className="dot" style={{ background: 'var(--driva-amber-soft)' }}></span> Sebelum 15 Juni · 18.00</div>
      </main>
      <IgFoot left="drivacoffee.com" right="First Batch" />
    </div>
  );
}

Object.assign(window, { SlideHook, SlideThanks, SlideSchedule, SlideDeadline, SlideCta });
