// DRIVA — First Batch carousel slides (1080×1350)

function IgHead({
  ink,
  page
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "ig-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-mark"
  }, "D"), /*#__PURE__*/React.createElement("div", {
    className: "ig-brand-name"
  }, "Driva")), /*#__PURE__*/React.createElement("div", {
    className: "ig-page"
  }, page, " / 05"));
}
function IgFoot({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ig-foot"
  }, /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", {
    className: "ig-swipe"
  }, right, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
}

// ── Slide 1 · Hook ────────────────────────────────────────────
function SlideHook() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-slide ig-slide--ink",
    "data-screen-label": "01 \xB7 Hook"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-ring",
    style: {
      width: '760px',
      height: '760px',
      right: '-300px',
      bottom: '-300px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ig-ring",
    style: {
      width: '460px',
      height: '460px',
      right: '-150px',
      bottom: '-150px'
    }
  }), /*#__PURE__*/React.createElement(IgHead, {
    page: "01"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '56px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig-eyebrow"
  }, "First Batch \xB7 Pre-Order"), /*#__PURE__*/React.createElement("h1", {
    className: "ig-display"
  }, "Slow", /*#__PURE__*/React.createElement("br", null), "process.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "Short", /*#__PURE__*/React.createElement("br", null), "window.")), /*#__PURE__*/React.createElement("p", {
    className: "ig-sub"
  }, "Pre-order green bean First Batch DRIVA ditutup ", /*#__PURE__*/React.createElement("strong", null, "15 Juni 2026, pukul 18.00"), " \u2014 dan tidak dibuka lagi sampai batch berikutnya."), /*#__PURE__*/React.createElement("div", {
    className: "ig-pill ig-pill--paper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--driva-red)'
    }
  }), " Closing 15 June \xB7 6PM")), /*#__PURE__*/React.createElement(IgFoot, {
    left: "drivacoffee.com",
    right: "Swipe"
  }));
}

// ── Slide 2 · Thank you ───────────────────────────────────────
function SlideThanks() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-slide",
    "data-screen-label": "02 \xB7 Thank you"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-ring",
    style: {
      width: '900px',
      height: '900px',
      left: '-380px',
      top: '-380px'
    }
  }), /*#__PURE__*/React.createElement(IgHead, {
    page: "02"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '64px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig-eyebrow"
  }, "Terima kasih"), /*#__PURE__*/React.createElement("p", {
    className: "ig-quote"
  }, "To every roaster who trusted us before the first lot even shipped \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "this batch is yours.")), /*#__PURE__*/React.createElement("p", {
    className: "ig-sub"
  }, "Kepada para klien yang sudah memesan lebih dulu: kepercayaan kalian adalah alasan First Batch ini ada. Setiap lot kami fermentasi, keringkan, dan resting seperti janji yang harus ditepati."), /*#__PURE__*/React.createElement("div", {
    className: "ig-sig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-mark",
    style: {
      width: '76px',
      height: '76px',
      fontSize: '40px'
    }
  }, "D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ig-sig-name"
  }, "Tim DRIVA"), /*#__PURE__*/React.createElement("div", {
    className: "ig-sig-role"
  }, "Producers \xB7 First Batch")))), /*#__PURE__*/React.createElement(IgFoot, {
    left: "drivacoffee.com",
    right: "The schedule"
  }));
}

// ── Slide 3 · Schedule ────────────────────────────────────────
function SlideSchedule() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-slide",
    "data-screen-label": "03 \xB7 Schedule"
  }, /*#__PURE__*/React.createElement(IgHead, {
    page: "03"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig-eyebrow"
  }, "The Schedule"), /*#__PURE__*/React.createElement("h1", {
    className: "ig-display",
    style: {
      fontSize: '96px'
    }
  }, "Three dates", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "to remember."))), /*#__PURE__*/React.createElement("div", {
    className: "ig-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-row-date"
  }, "15 Jun", /*#__PURE__*/React.createElement("small", null, "18.00")), /*#__PURE__*/React.createElement("div", {
    className: "ig-row-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-row-title"
  }, "Pre-order closes"), /*#__PURE__*/React.createElement("p", {
    className: "ig-row-note"
  }, "First Batch dikunci. Tidak ada perpanjangan.")), /*#__PURE__*/React.createElement("div", {
    className: "ig-status ig-status--red"
  }, "Closing")), /*#__PURE__*/React.createElement("div", {
    className: "ig-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-row-date"
  }, "Jul\u2013Aug", /*#__PURE__*/React.createElement("small", null, "2026")), /*#__PURE__*/React.createElement("div", {
    className: "ig-row-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-row-title"
  }, "Shipping window"), /*#__PURE__*/React.createElement("p", {
    className: "ig-row-note"
  }, "Resting selesai, green bean di-hulling dan dikirim bertahap.")), /*#__PURE__*/React.createElement("div", {
    className: "ig-status ig-status--amber"
  }, "Shipping")), /*#__PURE__*/React.createElement("div", {
    className: "ig-row ig-row--ghost"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-row-date"
  }, "\xB1Sep", /*#__PURE__*/React.createElement("small", null, "2026")), /*#__PURE__*/React.createElement("div", {
    className: "ig-row-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-row-title"
  }, "Batch 2 opens"), /*#__PURE__*/React.createElement("p", {
    className: "ig-row-note"
  }, "Jendela berikutnya \u2014 untuk yang melewatkan ini.")), /*#__PURE__*/React.createElement("div", {
    className: "ig-status ig-status--green"
  }, "Next"))), /*#__PURE__*/React.createElement(IgFoot, {
    left: "drivacoffee.com",
    right: "Last call"
  }));
}

// ── Slide 4 · Deadline ────────────────────────────────────────
function SlideDeadline() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-slide ig-slide--ink",
    "data-screen-label": "04 \xB7 Deadline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-ring",
    style: {
      width: '980px',
      height: '980px',
      left: '50%',
      top: '58%',
      transform: 'translate(-50%, -50%)'
    }
  }), /*#__PURE__*/React.createElement(IgHead, {
    page: "04"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '70px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig-eyebrow"
  }, "Last call"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-clock"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig-clock-num"
  }, "15.06"), /*#__PURE__*/React.createElement("span", {
    className: "ig-clock-label"
  }, "June", /*#__PURE__*/React.createElement("br", null), "2026")), /*#__PURE__*/React.createElement("div", {
    className: "ig-clock"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig-clock-num",
    style: {
      color: 'var(--driva-paper-dim)'
    }
  }, "18.00"), /*#__PURE__*/React.createElement("span", {
    className: "ig-clock-label"
  }, "Doors", /*#__PURE__*/React.createElement("br", null), "close"))), /*#__PURE__*/React.createElement("p", {
    className: "ig-sub"
  }, "Setelah itu, First Batch resmi dikunci dan masuk jadwal proses. Yang sudah memesan tinggal menunggu kabar pengiriman \u2014 yang belum, menunggu Batch 2.")), /*#__PURE__*/React.createElement(IgFoot, {
    left: "drivacoffee.com",
    right: "How to order"
  }));
}

// ── Slide 5 · CTA ─────────────────────────────────────────────
function SlideCta() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-slide",
    "data-screen-label": "05 \xB7 How to order"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-ring",
    style: {
      width: '820px',
      height: '820px',
      right: '-340px',
      top: '-340px'
    }
  }), /*#__PURE__*/React.createElement(IgHead, {
    page: "05"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '40px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ig-eyebrow"
  }, "How to order"), /*#__PURE__*/React.createElement("h1", {
    className: "ig-display",
    style: {
      fontSize: '96px'
    }
  }, "Three taps.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "One lot."))), /*#__PURE__*/React.createElement("div", {
    className: "ig-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-step-num"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "ig-step-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-step-title"
  }, "Buka drivacoffee.com"), /*#__PURE__*/React.createElement("p", {
    className: "ig-step-note"
  }, "Lihat semua green bean lot di First Batch."))), /*#__PURE__*/React.createElement("div", {
    className: "ig-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-step-num"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "ig-step-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-step-title"
  }, "Pilih lot kamu"), /*#__PURE__*/React.createElement("p", {
    className: "ig-step-note"
  }, "Setiap lot tercatat \u2014 proses, pH curve, sampai resting."))), /*#__PURE__*/React.createElement("div", {
    className: "ig-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-step-num"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "ig-step-body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig-step-title"
  }, "Klik WhatsApp"), /*#__PURE__*/React.createElement("p", {
    className: "ig-step-note"
  }, "Pesanan terkunci langsung lewat chat."))), /*#__PURE__*/React.createElement("div", {
    className: "ig-pill ig-pill--ink",
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--driva-amber-soft)'
    }
  }), " Sebelum 15 Juni \xB7 18.00")), /*#__PURE__*/React.createElement(IgFoot, {
    left: "drivacoffee.com",
    right: "First Batch"
  }));
}
Object.assign(window, {
  SlideHook,
  SlideThanks,
  SlideSchedule,
  SlideDeadline,
  SlideCta
});
