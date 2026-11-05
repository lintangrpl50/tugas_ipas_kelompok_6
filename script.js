/*SHAPES_START*/
const I = (d) => `<svg viewBox="0 0 40 40" aria-hidden="true">${d}</svg>`;
const SHAPES = [
  {
    id: 'kubus', name: 'Kubus',
    icon: I('<path d="M8 14 20 8l12 6v14l-12 6-12-6z"/><path d="m8 14 12 6 12-6M20 20v14"/>'),
    fields: [{ k: 's', label: 'Panjang rusuk', sym: 's', def: 12 }],
    calc: (v) => v.s ** 3,
    formula: 'V = s³',
    sub: (v, n) => `V = ${n(v.s)}³`
  },
  {
    id: 'balok', name: 'Balok',
    icon: I('<path d="M5 17h23v15H5z"/><path d="m5 17 6-6h23l-6 6M34 11v15l-6 6"/>'),
    fields: [
      { k: 'p', label: 'Panjang', sym: 'p', def: 20 },
      { k: 'l', label: 'Lebar', sym: 'l', def: 10 },
      { k: 't', label: 'Tinggi', sym: 't', def: 8 }
    ],
    calc: (v) => v.p * v.l * v.t,
    formula: 'V = p × l × t',
    sub: (v, n) => `V = ${n(v.p)} × ${n(v.l)} × ${n(v.t)}`
  },
  {
    id: 'tabung', name: 'Tabung',
    icon: I('<ellipse cx="20" cy="10" rx="11" ry="4"/><path d="M9 10v20M31 10v20M9 30a11 4 0 0 0 22 0"/>'),
    fields: [
      { k: 'r', label: 'Jari-jari alas', sym: 'r', def: 7 },
      { k: 't', label: 'Tinggi', sym: 't', def: 20 }
    ],
    calc: (v) => Math.PI * v.r ** 2 * v.t,
    formula: 'V = π × r² × t',
    sub: (v, n) => `V = π × ${n(v.r)}² × ${n(v.t)}`
  },
  {
    id: 'kerucut', name: 'Kerucut',
    icon: I('<path d="M20 5 9 30M20 5l11 25M9 30a11 4 0 0 0 22 0"/><path d="M9 30a11 4 0 0 1 22 0" stroke-dasharray="2 3"/>'),
    fields: [
      { k: 'r', label: 'Jari-jari alas', sym: 'r', def: 6 },
      { k: 't', label: 'Tinggi', sym: 't', def: 15 }
    ],
    calc: (v) => Math.PI * v.r ** 2 * v.t / 3,
    formula: 'V = ⅓ × π × r² × t',
    sub: (v, n) => `V = ⅓ × π × ${n(v.r)}² × ${n(v.t)}`
  },
  {
    id: 'terpancung', name: 'Kerucut terpancung',
    icon: I('<ellipse cx="20" cy="8" rx="6" ry="2"/><path d="M14 8 8 30M26 8l6 22M8 30a12 4 0 0 0 24 0"/>'),
    fields: [
      { k: 'R', label: 'Jari-jari alas bawah', sym: 'R', def: 8 },
      { k: 'r', label: 'Jari-jari alas atas', sym: 'r', def: 4 },
      { k: 't', label: 'Tinggi', sym: 't', def: 12 }
    ],
    calc: (v) => Math.PI * v.t * (v.R ** 2 + v.R * v.r + v.r ** 2) / 3,
    formula: 'V = ⅓ × π × t × (R² + R×r + r²)',
    sub: (v, n) => `V = ⅓ × π × ${n(v.t)} × (${n(v.R)}² + ${n(v.R)}×${n(v.r)} + ${n(v.r)}²)`
  },
  {
    id: 'bola', name: 'Bola',
    icon: I('<circle cx="20" cy="20" r="13"/><path d="M7 20a13 4.5 0 0 0 26 0" /><path d="M7 20a13 4.5 0 0 1 26 0" stroke-dasharray="2 3"/>'),
    fields: [{ k: 'r', label: 'Jari-jari', sym: 'r', def: 9 }],
    calc: (v) => 4 / 3 * Math.PI * v.r ** 3,
    formula: 'V = ⁴⁄₃ × π × r³',
    sub: (v, n) => `V = ⁴⁄₃ × π × ${n(v.r)}³`
  },
  {
    id: 'limas', name: 'Limas segi empat',
    icon: I('<path d="M7 28l15 6 12-8-15-4z"/><path d="M20 5 7 28M20 5l2 29M20 5l14 21"/><path d="m7 28 12-6 15 4" stroke-dasharray="2 3"/>'),
    fields: [
      { k: 'p', label: 'Panjang alas', sym: 'p', def: 10 },
      { k: 'l', label: 'Lebar alas', sym: 'l', def: 8 },
      { k: 't', label: 'Tinggi limas', sym: 't', def: 12 }
    ],
    calc: (v) => v.p * v.l * v.t / 3,
    formula: 'V = ⅓ × p × l × t',
    sub: (v, n) => `V = ⅓ × ${n(v.p)} × ${n(v.l)} × ${n(v.t)}`
  },
  {
    id: 'prisma', name: 'Prisma segitiga',
    icon: I('<path d="M6 31 16 13l10 18z"/><path d="m16 13 16-3M26 31l8-4M32 10l2 17"/>'),
    fields: [
      { k: 'a', label: 'Alas segitiga', sym: 'a', def: 6 },
      { k: 'h', label: 'Tinggi segitiga', sym: 'ta', def: 4 },
      { k: 't', label: 'Tinggi prisma', sym: 't', def: 15 }
    ],
    calc: (v) => 0.5 * v.a * v.h * v.t,
    formula: 'V = ½ × a × ta × t',
    sub: (v, n) => `V = ½ × ${n(v.a)} × ${n(v.h)} × ${n(v.t)}`
  }
];
const TO_METER = { mm: 0.001, cm: 0.01, m: 1, in: 0.0254, ft: 0.3048 };
const OUT_M3 = { m3: 1, l: 0.001, cm3: 1e-6, mm3: 1e-9, in3: 0.0254 ** 3, ft3: 0.3048 ** 3 };
const OUT_LABEL = { m3: 'm³', l: 'L', cm3: 'cm³', mm3: 'mm³', in3: 'in³', ft3: 'ft³' };
function formatNumber(x) {
  if (!isFinite(x)) return '—';
  if (x === 0) return '0';
  const a = Math.abs(x);
  if (a >= 1e12 || a < 1e-4) return x.toExponential(4).replace('.', ',').replace('e+', ' × 10^').replace('e-', ' × 10^-');
  return x.toLocaleString('id-ID', { maximumFractionDigits: 4 });
}
function parseInput(s) {
  const t = String(s).trim().replace(/\s/g, '').replace(',', '.');
  if (t === '') return NaN;
  const n = Number(t);
  return isFinite(n) ? n : NaN;
}
/*SHAPES_END*/

const $ = (id) => document.getElementById(id);
const state = { shape: 'kubus', mode: 'single', values: {}, units: {} };
SHAPES.forEach((s) => {
  state.values[s.id] = Object.fromEntries(s.fields.map((f) => [f.k, String(f.def)]));
  state.units[s.id] = Object.fromEntries(s.fields.map((f) => [f.k, 'cm']));
});

const shapesEl = $('shapes');
shapesEl.innerHTML = SHAPES.map((s) =>
  `<button type="button" class="shape-btn" data-id="${s.id}" aria-pressed="${s.id === state.shape}">${s.icon}<span>${s.name}</span></button>`
).join('');
shapesEl.addEventListener('click', (e) => {
  const b = e.target.closest('.shape-btn');
  if (!b) return;
  state.shape = b.dataset.id;
  shapesEl.querySelectorAll('.shape-btn').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  renderFields();
});

function current() { return SHAPES.find((s) => s.id === state.shape); }

const UNIT_KEYS = ['mm', 'cm', 'm', 'in', 'ft'];
function unitControl(f) {
  if (state.mode !== 'mixed') return '<span class="suffix unit-suffix"></span>';
  const cur = state.units[state.shape][f.k];
  return `<select class="field-unit" data-uk="${f.k}" aria-label="Satuan ${f.label.toLowerCase()}">` +
    UNIT_KEYS.map((u) => `<option value="${u}"${u === cur ? ' selected' : ''}>${u}</option>`).join('') + '</select>';
}

function renderFields() {
  const s = current();
  $('shape-name').textContent = s.name;
  $('fields').innerHTML = s.fields.map((f) => `
    <div class="field">
      <label for="f-${f.k}"><span>${f.label}</span><span class="sym">${f.sym}</span></label>
      <div class="input-row">
        <input id="f-${f.k}" data-k="${f.k}" type="text" inputmode="decimal" value="${state.values[s.id][f.k]}" aria-describedby="e-${f.k}">
        ${unitControl(f)}
      </div>
      <div class="err" id="e-${f.k}"></div>
    </div>`).join('');
  update();
}

$('fields').addEventListener('input', (e) => {
  const k = e.target.dataset.k;
  if (!k) return;
  state.values[state.shape][k] = e.target.value;
  update();
});
$('unit').addEventListener('change', update);
$('out-unit').addEventListener('change', update);
$('fields').addEventListener('change', (e) => {
  const k = e.target.dataset.uk;
  if (!k) return;
  state.units[state.shape][k] = e.target.value;
  update();
});
function setMode(m) {
  state.mode = m;
  $('mode-single').setAttribute('aria-pressed', String(m === 'single'));
  $('mode-mixed').setAttribute('aria-pressed', String(m === 'mixed'));
  $('single-unit-row').hidden = m === 'mixed';
  if (m === 'mixed') {
    const u = $('unit').value;
    SHAPES.forEach((s) => s.fields.forEach((f) => { state.units[s.id][f.k] = u; }));
  }
  renderFields();
}
$('mode-single').addEventListener('click', () => setMode('single'));
$('mode-mixed').addEventListener('click', () => setMode('mixed'));
$('form').addEventListener('submit', (e) => e.preventDefault());
$('reset').addEventListener('click', () => {
  const s = current();
  state.values[s.id] = Object.fromEntries(s.fields.map((f) => [f.k, String(f.def)]));
  renderFields();
});

let summary = '';
function update() {
  const s = current();
  const unit = $('unit').value;
  const mixed = state.mode === 'mixed';
  document.querySelectorAll('.unit-suffix').forEach((el) => { el.textContent = unit; });
  const v = {};
  let ok = true;
  s.fields.forEach((f) => {
    const input = $('f-' + f.k);
    const n = parseInput(input.value);
    const err = $('e-' + f.k);
    let msg = '';
    if (Number.isNaN(n)) msg = 'Masukkan angka, misalnya 12 atau 7,5.';
    else if (n <= 0) msg = 'Ukuran harus lebih dari 0.';
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    err.textContent = msg;
    if (msg) ok = false; else v[f.k] = n;
  });
  $('result-ok').hidden = !ok;
  $('result-bad').hidden = ok;
  if (!ok) { summary = ''; return; }

  let calcV = v, native = unit + '³', toM3 = TO_METER[unit] ** 3, conv = '';
  if (mixed) {
    calcV = {};
    s.fields.forEach((f) => { calcV[f.k] = v[f.k] * TO_METER[state.units[s.id][f.k]]; });
    native = 'm³';
    toM3 = 1;
    conv = 'Semua ukuran diubah ke meter: ' + s.fields.map((f) => `${f.sym} = ${formatNumber(calcV[f.k])} m`).join(', ');
  }
  const vol = s.calc(calcV);
  const m3 = vol * toM3;
  const outKey = $('out-unit').value;
  const shown = outKey === 'auto' ? vol : m3 / OUT_M3[outKey];
  $('vol-value').textContent = formatNumber(shown);
  $('vol-unit').textContent = outKey === 'auto' ? native : OUT_LABEL[outKey];
  $('formula').textContent = s.formula;
  $('substitution').textContent = s.sub(calcV, formatNumber);
  $('converted').textContent = conv;
  $('converted').hidden = !conv;
  const rows = [
    ['Meter kubik (m³)', m3],
    ['Liter (L)', m3 * 1000],
    ['Sentimeter kubik (cm³)', m3 * 1e6],
    ['Inci kubik (in³)', m3 / 0.0254 ** 3],
    ['Kaki kubik (ft³)', m3 / 0.3048 ** 3]
  ];
  $('conv').innerHTML = rows.map(([l, x]) => `<div><dt>${l}</dt><dd>${formatNumber(x)}</dd></div>`).join('');

  const dims = s.fields.map((f) => `${f.sym} = ${formatNumber(v[f.k])} ${mixed ? state.units[s.id][f.k] : unit}`).join(', ');
  summary = `Volume ${s.name.toLowerCase()} (${dims}): ${formatNumber(shown)} ${$('vol-unit').textContent} = ${formatNumber(m3)} m³ = ${formatNumber(m3 * 1000)} L`;
  $('copy-text').textContent = summary;
}

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}
function selectSummary() {
  const el = $('copy-text');
  const r = document.createRange();
  r.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(r);
}
$('copy').addEventListener('click', () => {
  if (!summary) return;
  const fail = () => { selectSummary(); toast('Teks sudah terpilih, salin dengan Ctrl+C'); };
  try {
    navigator.clipboard.writeText(summary).then(() => toast('Hasil disalin'), fail);
  } catch (e) { fail(); }
});

renderFields();