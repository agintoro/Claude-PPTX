/* slides.jsx — Dual Phase Fermentation carousel
   Content + per-direction slide rendering + theme.
   Exposes window.SLIDES, window.getTheme, window.Slide */

const SLIDES = [
  {
    n: '01', kind: 'hook', align: 'flex-end',
    eyebrow: 'DUAL PHASE FERMENTATION',
    headlineSize: 90,
  },
  {
    n: '02', kind: 'problem', align: 'center',
    eyebrow: 'THE REAL CHALLENGE',
    headlineSize: 72,
    body: 'In specialty coffee, intense fermentation can easily become too heavy, too alcoholic, or too confusing. The real challenge is building complexity without losing origin clarity.',
  },
  {
    n: '03', kind: 'logic', align: 'center',
    eyebrow: 'THE LOGIC',
    headlineSize: 62,
    phases: [
      { tag: 'PHASE ONE', word: 'Open', body: 'Activating fruit expression, aroma potential, and early microbial movement.' },
      { tag: 'PHASE TWO', word: 'Refine', body: 'Shaping acidity, sweetness perception, and structure — with more control.' },
    ],
  },
  {
    n: '04', kind: 'benefits', align: 'center',
    eyebrow: 'WHY IT ENHANCES',
    headlineSize: 58,
    intro: 'A well-managed Dual Phase process can build:',
    items: [
      'More layered aromatics',
      'Cleaner fruit expression',
      'More defined acidity',
      'Better sweetness perception',
      'A cup profile that feels intentional, not random',
    ],
  },
  {
    n: '05', kind: 'takeaway', align: 'flex-end',
    eyebrow: 'THE TAKEAWAY',
    headlineSize: 76,
    body: 'Dual Phase Fermentation works best when it doesn’t cover the coffee’s identity. It should amplify terroir, varietal character, and processing precision — not replace them.',
  },
];

/* ---- theme ------------------------------------------------- */
function getTheme(direction, bgTone) {
  const L = {
    warm: { surface: '#e8e1d2', ink: '#16140f', muted: '#6f6a60', line: '#d3c9b5', divider: 'rgba(22,20,15,0.16)' },
    paper: { surface: '#f7f3ea', ink: '#111111', muted: '#6b665d', line: '#e3dac9', divider: 'rgba(17,17,17,0.16)' },
    ink: { surface: '#111111', ink: '#f4efe4', muted: '#a9a294', line: 'rgba(244,239,228,0.16)', divider: 'rgba(244,239,228,0.22)' },
  }[bgTone] || {};
  const dark = bgTone === 'ink';
  const amber = dark ? '#e6b667' : '#8a5a12';
  const green = dark ? '#86c79e' : '#17633a';
  let fieldOne, fieldTwo;
  if (bgTone === 'ink') { fieldOne = 'rgba(230,182,103,0.085)'; fieldTwo = 'rgba(134,199,158,0.085)'; }
  else if (bgTone === 'warm') { fieldOne = '#ecdfc6'; fieldTwo = '#dde4d2'; }
  else { fieldOne = '#f4ead4'; fieldTwo = '#e8efe3'; }
  const accent = direction === 'B' ? green : L.ink;
  return { ...L, dark, amber, green, fieldOne, fieldTwo, accent, direction };
}

/* ---- small parts ------------------------------------------- */
function DMark({ size, theme }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" style={{ display: 'block', flex: '0 0 auto' }}>
      <rect width="512" height="512" rx="120" fill={theme.ink}></rect>
      <circle cx="256" cy="256" r="168" fill={theme.surface}></circle>
      <text x="256" y="324" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="220" fontWeight="900" fill={theme.ink}>D</text>
    </svg>
  );
}

const EB = (theme, size = 17) => ({
  fontSize: size, textTransform: 'uppercase', letterSpacing: '0.26em',
  fontWeight: 900, color: theme.muted, margin: 0,
});

function Header({ slide, theme, direction }) {
  return (
    <div style={{ flex: '0 0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <p style={EB(theme)}>{slide.eyebrow}</p>
        <span style={{ fontSize: 15, letterSpacing: '0.2em', fontWeight: 900, color: theme.muted, whiteSpace: 'nowrap' }}>{slide.n} — 05</span>
      </div>
      {direction === 'A' && <PhaseRule theme={theme} />}
    </div>
  );
}

function PhaseRule({ theme }) {
  const segs = [['01', 'OPEN', 136], ['02', 'REFINE', 92]];
  return (
    <div style={{ display: 'flex', gap: 26, marginTop: 34 }}>
      {segs.map(([n, w, len]) => (
        <div key={n}>
          <div style={{ height: 3, width: len, background: theme.ink, marginBottom: 11 }}></div>
          <div style={{ fontSize: 12.5, letterSpacing: '0.24em', fontWeight: 900, color: theme.muted, whiteSpace: 'nowrap' }}>{n} · {w}</div>
        </div>
      ))}
    </div>
  );
}

function Footer({ slide, theme }) {
  return (
    <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 26, borderTop: `1px solid ${theme.line}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <DMark size={30} theme={theme} />
        <span style={{ fontSize: 14, letterSpacing: '0.24em', fontWeight: 900, color: theme.muted }}>DRIVA · DUAL PHASE FERMENTATION</span>
      </div>
      <span style={{ fontSize: 13, letterSpacing: '0.2em', fontWeight: 900, color: theme.muted, whiteSpace: 'nowrap' }}>{slide.n} / 05</span>
    </div>
  );
}

function TwoToneFields({ theme }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '52%', background: theme.fieldOne }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '52%', bottom: 0, background: theme.fieldTwo }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '52%', height: 1.5, background: theme.divider }}></div>
      <div style={{ position: 'absolute', left: 38, top: '12%', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 13, letterSpacing: '0.34em', fontWeight: 900, color: theme.amber }}>01 · OPEN</div>
      <div style={{ position: 'absolute', left: 38, bottom: '11%', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 13, letterSpacing: '0.34em', fontWeight: 900, color: theme.green }}>02 · REFINE</div>
    </div>
  );
}

/* ---- headline helper --------------------------------------- */
const H = (theme, size, extra = {}) => ({
  fontSize: size, lineHeight: 0.98, letterSpacing: '-0.045em',
  fontWeight: 900, margin: 0, color: theme.ink, textWrap: 'balance', ...extra,
});
const BODY = (theme, size = 31) => ({
  fontSize: size, lineHeight: 1.46, fontWeight: 450, color: theme.muted,
  margin: 0, textWrap: 'pretty',
});

/* ---- per-slide body ---------------------------------------- */
function Body({ slide, theme, direction, hSize }) {
  switch (slide.kind) {
    case 'hook':
      return (
        <div>
          <h1 style={H(theme, hSize, { maxWidth: 860 })}>
            Fermentation doesn’t enhance coffee&nbsp;by&nbsp;<span style={{ color: theme.accent }}>accident.</span>
          </h1>
          <p style={{ ...BODY(theme, 32), marginTop: 40, maxWidth: 740, color: theme.ink, fontWeight: 500 }}>
            Dual Phase Fermentation is about creating contrast, then controlling it.
          </p>
        </div>
      );
    case 'problem':
      return (
        <div>
          <h1 style={H(theme, hSize, { maxWidth: 880 })}>
            Roasters don’t need <span style={{ color: theme.muted, textDecoration: 'line-through', textDecorationThickness: '2px', textUnderlineOffset: '6px' }}>louder</span> coffee.{' '}
            They need <span style={{ color: theme.accent }}>clearer</span> coffee.
          </h1>
          <p style={{ ...BODY(theme), marginTop: 40, maxWidth: 760 }}>{slide.body}</p>
        </div>
      );
    case 'logic':
      if (direction === 'A') {
        return (
          <div>
            <h1 style={H(theme, hSize, { maxWidth: 760 })}>Two phases.<br />Two different jobs.</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 56 }}>
              {slide.phases.map((p, i) => (
                <div key={p.tag} style={{ paddingRight: i === 0 ? 44 : 0, paddingLeft: i === 1 ? 44 : 0, borderRight: i === 0 ? `1px solid ${theme.line}` : 'none' }}>
                  <div style={{ fontSize: 13, letterSpacing: '0.26em', fontWeight: 900, color: theme.muted }}>{p.tag}</div>
                  <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: '-0.04em', color: theme.ink, margin: '14px 0 18px' }}>{p.word}</div>
                  <p style={{ ...BODY(theme, 26), lineHeight: 1.42 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      // direction B — map to the two tonal fields
      return (
        <div>
          <h1 style={H(theme, hSize, { maxWidth: 760 })}>Two phases.<br />Two different jobs.</h1>
          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 30 }}>
            {slide.phases.map((p, i) => {
              const c = i === 0 ? theme.amber : theme.green;
              return (
                <div key={p.tag}>
                  <div style={{ fontSize: 13, letterSpacing: '0.26em', fontWeight: 900, color: c, whiteSpace: 'nowrap' }}>{p.tag}</div>
                  <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-0.04em', color: theme.ink, margin: '8px 0 12px' }}>{p.word}</div>
                  <p style={{ ...BODY(theme, 26), maxWidth: 740, lineHeight: 1.42 }}>{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    case 'benefits':
      return (
        <div>
          <h1 style={H(theme, hSize, { maxWidth: 820 })}>Enhancement means structure, not&nbsp;decoration.</h1>
          <p style={{ ...BODY(theme, 24), marginTop: 30, marginBottom: 30, color: theme.muted, fontWeight: 700, textTransform: 'none' }}>{slide.intro}</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {slide.items.map((it, i) => {
              const c = direction === 'B' ? (i % 2 === 0 ? theme.amber : theme.green) : theme.ink;
              return (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '17px 0', borderTop: `1px solid ${theme.line}` }}>
                  <span style={{ fontSize: 14, letterSpacing: '0.18em', fontWeight: 900, color: theme.muted, width: 30, flex: '0 0 auto' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ width: 9, height: 9, borderRadius: 2, background: c, flex: '0 0 auto' }}></span>
                  <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: theme.ink }}>{it}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    case 'takeaway':
      return (
        <div>
          <h1 style={H(theme, hSize, { maxWidth: 880 })}>
            The best fermentation still <span style={{ color: theme.accent }}>respects the seed.</span>
          </h1>
          <p style={{ ...BODY(theme), marginTop: 40, maxWidth: 800 }}>{slide.body}</p>
          {direction === 'A' && <div style={{ height: 3, width: 254, background: theme.ink, marginTop: 46 }}></div>}
        </div>
      );
    default:
      return null;
  }
}

/* ---- full slide -------------------------------------------- */
function Slide({ slide, direction, theme, headlineScale }) {
  const hSize = Math.round(slide.headlineSize * headlineScale);
  return (
    <div style={{ position: 'relative', width: 1080, height: 1350, background: theme.surface, color: theme.ink, overflow: 'hidden', fontFamily: 'var(--font-sans)' }}>
      {direction === 'B' && <TwoToneFields theme={theme} />}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', boxSizing: 'border-box', padding: '92px 96px 78px', display: 'flex', flexDirection: 'column' }}>
        <Header slide={slide} theme={theme} direction={direction} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: slide.align, minHeight: 0 }}>
          <Body slide={slide} theme={theme} direction={direction} hSize={hSize} />
        </div>
        <Footer slide={slide} theme={theme} />
      </div>
    </div>
  );
}

Object.assign(window, { SLIDES, getTheme, Slide, DMark });
