(function () {
'use strict';

const TOPICS = {
  t1:  { n:1,  short:'Resumen 1º Grado', grp:'cara', title:'Resumen simbólico del Primer Grado',
    sint:'El Primer Grado representa la preparación mental y moral del iniciado. A través del silencio y la duda filosófica, la mente se disciplina para partir de lo evidente y adentrarse en lo desconocido, iniciando así el constante pulido de la virtud.',
    comp:'Simboliza la purificación de la piedra bruta mediante el dominio de las pasiones y el despertar de la conciencia moral.' },
  t2:  { n:2,  short:'Los Viajes', grp:'arista', title:'Los Viajes, su simbolismo y diversas interpretaciones',
    sint:'Representan la adquisición gradual de herramientas simbólicas para el progreso cotidiano. Enseñan que el verdadero aprendizaje exige perseverancia y flexibilidad, donde retroceder o pausar es también una forma de avanzar hacia la superación personal.',
    comp:'Cada viaje corresponde al estudio de los sentidos, las artes y las ciencias como peldaños del intelecto.' },
  t3:  { n:3,  short:'Palabra de Pase', grp:'arista', title:'La Palabra de Pase, su origen e interpretación',
    sint:'Más allá de ser una divisa histórica de protección e identificación, simboliza la pertenencia fraternal y la certeza de que en nuestro interior habita una semilla de vida dispuesta a germinar y dar fruto.',
    comp:'Derivada de Schibboleth (espiga de trigo o torrente de agua), representa la abundancia y la renovación interior.' },
  t4:  { n:4,  short:'Palabra Sagrada', grp:'arista', title:'La Palabra Sagrada, su origen e interpretación',
    sint:'Encarna la estabilidad espiritual e intelectual necesaria para construir una columna firme en el templo interior. Nos recuerda la necesidad de cultivar la disciplina para mantenernos erguidos y guiados lejos de la ignorancia.',
    comp:'Corresponde a la columna Jakin (Establecimiento/Fuerza), que representa la firmeza en los principios.' },
  t5:  { n:5,  short:'Los Escalones', grp:'arista', title:'Los Escalones, su significado, colores e interpretación',
    sint:'Simbolizan el ascenso gradual del espíritu mediante el cultivo y práctica de las virtudes fundamentales: Inteligencia, Rectitud, Valor, Prudencia y Filantropía.',
    comp:'Representan la elevación del Compañero por encima de la materia hacia la luz de la razón.' },
  t6:  { n:6,  short:'Columna "J"', grp:'arista', title:'La Columna "J", su significado e interpretación',
    sint:'Es la base y sostén de nuestro crecimiento personal; un emblema de constancia y valor moral que no solo nos permite recibir la luz del conocimiento, sino también proyectarla hacia los demás.',
    comp:'Representa el principio activo y ordenador que impele al iniciado a la acción justa.' },
  t7:  { n:7,  short:'5 Sentidos', grp:'arista', title:'Los 5 Sentidos del hombre, sus órganos y descripción',
    sint:'Son las vías de percepción que conectan la psique con el mundo material. Su estudio nos enseña a usarlos con discernimiento, entendiendo que, aunque nos ayudan a interpretar la realidad, también debemos saber escuchar los sentidos internos del espíritu.',
    comp:'En el Segundo Grado, representan los canales de observación que la razón debe disciplinar para no caer en el engaño de las apariencias.' },
  t8:  { n:8,  short:'Arquitectura', grp:'arista', title:'Órdenes de la Arquitectura, su origen e interpretación',
    sint:'Reflejan la evolución del iniciado desde la simpleza del aprendiz hasta la fortaleza y elegancia del compañero. Muestran que para levantar cualquier obra perdurable se requiere la armonía entre Sabiduría, Fuerza y Belleza.',
    comp:'Corresponden históricamente a los estilos Dórico, Jónico y Corintio, alegorías de la estructura del ser humano.' },
  t9:  { n:9,  short:'Masón y Ciencia', grp:'arista', title:'El Masón ante la Ciencia',
    sint:'Constituye el deber ineludible de buscar la verdad mediante la investigación y el libre examen, combatiendo el oscurantismo y adentrándose en los secretos de la naturaleza con sentido crítico.',
    comp:'La ciencia en este grado es entendida no solo como técnica, sino como la emancipación de la mente frente al dogmatismo.' },
  t10: { n:10, short:'El Mandil', grp:'cara', title:'El Mandil, su significado e interpretación',
    sint:'Símbolo del trabajo constante del Compañero y de sus responsabilidades hacia la comunidad. Recuerda que las buenas intenciones teóricas deben traducirse en acción práctica, estudio e inteligencia aplicada.',
    comp:'En el Segundo Grado se lleva con la babeta abatida, indicando que el intelecto y la mente ya participan plenamente en la labor.' },
  t11: { n:11, short:'Letra "G"', grp:'piramide', title:'La Letra "G", su origen e interpretación',
    sint:'Alegoría central que engloba a la Geometría, la Gnosis, el Genio creador, la Gravitación y la Generación, señalando que el potencial transformador reside en la mente y el espíritu del ser humano.',
    comp:'Representa la Gran Arquitectura del Universo y el principio generador de la verdad.' },
  t12: { n:12, short:'Ciencias', grp:'arista', title:'Las Ciencias del Compañero, definición',
    sint:'Estudiadas a través del Trivium (Gramática, Retórica, Lógica) y el Quadrivium (Aritmética, Geometría, Música, Astronomía), son el vehículo para elevar la percepción humana desde la mera sensibilidad hacia la comprensión racional del universo.',
    comp:'Constituyen el sistema clásico de las Siete Artes Liberales, pilar de la formación intelectual medieval y masónica.' },
  t13: { n:13, short:'Resumen filosófico', grp:'arista', title:'Resumen filosófico del Grado',
    sint:'Es el camino de la iluminación mediante la razón orientada a la acción. Busca que el individuo se instruya para ser útil a la sociedad y transforme su entorno con sabiduría aplicada.',
    comp:'Define la transición de la fase pasiva o receptiva (Aprendiz) a la activa y creadora (Compañero).' },
  t14: { n:14, short:'La Biblia', grp:'cara', title:'La Biblia, historia, lugar en que se abre y por qué',
    sint:'Funciona como emblema de rectitud moral, ciencia e itinerario espiritual. Abierta sobre el altar, sirve de plomada e hilo conductor para asegurar que la libertad intelectual esté respaldada por una conducta ética irreprochable.',
    comp:'Representa el Volumen de la Ley Sagrada o libro del conocimiento supremo, abierto en el Salmo 133 o en Amós 7 según la tradición.' },
  t15: { n:15, short:'Resumen histórico', grp:'cara', title:'Resumen histórico del grado, origen y significado',
    sint:'Evoca la transición de los antiguos constructores de muros de piedra (masones operativos) a los pensadores modernos (masones especulativos), estructurando el conocimiento de forma gradual para la edificación social e individual.',
    comp:'Nace con la reorganización de los gremios medievales hacia las Grandes Logias del siglo XVIII.' },
  t16: { n:16, short:'Iniciaciones', grp:'cara', title:'Las iniciaciones en los templos antiguos',
    sint:'Pruebas creadas desde la antigüedad con el propósito de comprobar la discreción, idoneidad, valor y nivel de compromiso de los aspirantes antes de revelarles saberes más profundos.',
    comp:'Se inspiran en los antiguos misterios de Egipto y Grecia (Eleusis), donde se examinaba la templanza del alma.' },
  t17: { n:17, short:'El número 5', grp:'piramide', title:'El número 5, su interpretación simbólica',
    sint:'Representa al hombre consciente y completo (el microcosmos), la quintaesencia, el equilibrio entre lo par e impar, y el firme compromiso con la búsqueda de la verdad.',
    comp:'Es la cifra sagrada del Compañero, marcando su edad simbólica, sus pasos y las luces del templo.' },
  t18: { n:18, short:'Estrella de 5 puntas', grp:'piramide', title:'La Estrella de 5 puntas (Pentagrama), origen y significado',
    sint:'Es la Estrella Flamígera, alegoría del ser humano en armonía perfecta cuya inteligencia y voluntad gobiernan rectamente sobre los cuatro elementos de la naturaleza material.',
    comp:'Emblema del hombre realizado y de la luz de la razón proyectada sobre el caos.' },
  t19: { n:19, short:'Piedra Cúbica de Punta', grp:'piramide', title:'La Piedra Cúbica de Punta, descripción e interpretación',
    sint:'Estructura que combina la estabilidad moral del cubo con la aspiración elevada de la pirámide; representa el trabajo acabado que insta al autosacrificio y perfeccionamiento en favor del bien común.',
    comp:'Símbolo del trabajo intelectual consumado y de la integración de la ciencia con la trascendencia.' },
  t20: { n:20, short:'Objeto del Grado', grp:'arista', title:'Objeto del Grado de Compañero',
    sint:'Preparar al iniciado mediante la instrucción continua para dominar el estudio de la naturaleza y la búsqueda incesante de la verdad antes de afrontar las etapas superiores del ser.',
    comp:'Su fin es capacitar al obrero en el manejo hábil de sus herramientas de trabajo intelectual.' },
  t21: { n:21, short:'Ciencia y Virtud', grp:'arista', title:'Ciencia y Virtud',
    sint:'Dos pilares indisolubles: la ciencia sin virtud se vuelve destructiva, mientras que la virtud sin ciencia resulta inoperante. Juntas permiten conocer las cosas por sus causas y vencer las pasiones desordenadas.',
    comp:'Es la máxima del Compañero: instruir la mente para actuar con rectitud y justicia.' }
};

const GROUPS = {
  piramide: { kind: 'Cúspide piramidal', theme: 'Trascendencia',                 color: 0xD6BB85, hover: 0xE9D4A3, css: 'var(--c-pir)' },
  arista:   { kind: 'Arista del cubo',   theme: 'Ciencia, artes y deber',         color: 0xA3AAB2, hover: 0xC4CAD1, css: 'var(--c-ari)' },
  cara:     { kind: 'Cara del cubo',     theme: 'Fundamentos y disciplina moral', color: 0x8F9F89, hover: 0xAEBDA8, css: 'var(--c-car)' }
};
const SELECT_COLOR = 0xF2E4BC;
const ORDER = Object.keys(TOPICS).sort((a, b) => TOPICS[a].n - TOPICS[b].n);
const HINT = 'Arrastra para girar · toca una cara o arista';

const reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const mobileMQ = window.matchMedia('(max-width: 760px)');
const $ = id => document.getElementById(id);
const app = $('app'), sheet = $('sheet'), sheetBody = $('sheetBody'), cap = $('cap'), rail = $('rail');

let selectedId = null, hoveredId = null, userPaused = reduce, s3 = null, hoverLockUntil = 0;

/* ═══ Índice 1–21 ═══ */
ORDER.forEach(id => {
  const t = TOPICS[id];
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'pip'; b.id = 'pip-' + id;
  b.style.setProperty('--g', GROUPS[t.grp].css);
  b.textContent = t.n;
  b.setAttribute('aria-label', t.n + '. ' + t.title);
  b.addEventListener('click', () => select(id, 'rail'));
  b.addEventListener('mouseenter', () => { if (performance.now() > hoverLockUntil) hover(id); });
  b.addEventListener('mouseleave', () => hover(null));
  rail.appendChild(b);
});

function hover(id) {
  const prev = hoveredId; hoveredId = id;
  if (prev) { const p = $('pip-' + prev); if (p) p.classList.remove('hot'); }
  if (id) { const p = $('pip-' + id); if (p) p.classList.add('hot'); }
  cap.textContent = id ? TOPICS[id].n + ' · ' + TOPICS[id].title : (s3 ? HINT : 'Elige un tema del índice');
  cap.classList.toggle('hot', !!id);
  if (s3) s3.repaint();
}

function roman(n) {
  n = parseInt(n, 10); let s = '';
  [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']].forEach(p => { while (n >= p[0]) { s += p[1]; n -= p[0]; } });
  return s;
}
function select(id, from) {
  if (from === 'rail' || from === 'pager') { hoverLockUntil = performance.now() + 800; if (hoveredId) hover(null); }
  selectedId = id;
  const open = !!id;
  document.body.classList.toggle('is-open', open);
  sheet.classList.toggle('open', open);
  sheet.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.querySelectorAll('.pip.on').forEach(e => e.classList.remove('on'));
  if (open) {
    const t = TOPICS[id], g = GROUPS[t.grp], i = ORDER.indexOf(id);
    const pip = $('pip-' + id); pip.classList.add('on');
    rail.scrollTo({ left: pip.offsetLeft - (rail.clientWidth - pip.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    sheetBody.innerHTML =
      '<div class="sh-top"><span class="kind" style="--g:' + g.css + '">' + g.kind + ' · ' + g.theme + '</span>' +
      '<button class="btn close" type="button" data-act="close" aria-label="Cerrar el detalle">Cerrar</button></div>' +
      '<div class="num" aria-hidden="true">' + roman(t.n) + '</div>' +
      '<h2 class="sh-title" id="shTitle" tabindex="-1">' + t.title + '</h2>' +
      '<section class="sec"><h3>Síntesis</h3><p>' + t.sint + '</p></section>' +
      '<section class="sec"><h3>Complemento</h3><p>' + t.comp + '</p></section>' +
      '<div class="pager"><button class="btn" type="button" data-act="prev" data-id="' + ORDER[(i + ORDER.length - 1) % ORDER.length] + '">← Anterior</button>' +
      '<button class="btn" type="button" data-act="next" data-id="' + ORDER[(i + 1) % ORDER.length] + '">Siguiente →</button></div>';
    sheet.scrollTop = 0;
    if (from === 'canvas') { const h = $('shTitle'); if (h) h.focus({ preventScroll: true }); }
  }
  if (s3) s3.select(id);
}

sheetBody.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  if (b.dataset.act === 'close') select(null);
  else select(b.dataset.id, 'pager');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && selectedId) { select(null); return; }
  if (!selectedId) return;
  const i = ORDER.indexOf(selectedId);
  if (e.key === 'ArrowRight') select(ORDER[(i + 1) % ORDER.length], 'key');
  else if (e.key === 'ArrowLeft') select(ORDER[(i + ORDER.length - 1) % ORDER.length], 'key');
});

const spinBtn = $('spin');
function paintSpinBtn() {
  spinBtn.textContent = userPaused ? 'Girar' : 'Pausar';
  spinBtn.setAttribute('aria-pressed', String(!userPaused));
}
spinBtn.addEventListener('click', () => { userPaused = !userPaused; paintSpinBtn(); if (s3) s3.refreshSpin(); });
$('reset').addEventListener('click', () => { select(null); if (s3) s3.reset(); });

/* ═══ Escena 3D ═══ */
function init3D() {
  if (!window.THREE || !THREE.OrbitControls) return null;
  const canvas = $('three');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); }
  catch (err) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);
  const TARGET = new THREE.Vector3(0, 0.6, 0);
  const HOME_DIR = new THREE.Vector3(0.62, 0.36, 0.7).normalize();
  const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
  let baseDist = 11, touched = false, W = 1, H = 1;

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.copy(TARGET);
  controls.enableDamping = true; controls.dampingFactor = 0.07;
  controls.enablePan = false; controls.autoRotateSpeed = 0.7;
  controls.autoRotate = !userPaused;

  scene.add(new THREE.AmbientLight(0xf3f1ec, 0.38));
  const key = new THREE.DirectionalLight(0xfff6ea, 1.05); key.position.set(5, 9, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fa6d6, 0.55); rim.position.set(-7, 3, -6); scene.add(rim);
  const under = new THREE.DirectionalLight(0xc6a56a, 0.1); under.position.set(0, -6, 2); scene.add(under);

  /* — Una sola piedra: caliza de grano fino, hueso cálido — */
  /*STONEGEN-START*/
  function genStoneSet(seed, opts) {
    opts = opts || {};
    const S = 512, N = S * S;
    const smooth = t => t * t * (3 - 2 * t);
    const clamp = v => (v < 0 ? 0 : v > 1 ? 1 : v);
    let rs = (seed * 2654435761) >>> 0;
    const rnd = () => { rs = (rs + 0x6D2B79F5) >>> 0; let t = rs; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const hash = (x, y, p) => {
      let h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed + p, 1274126177);
      h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;
      return (h >>> 0) / 4294967295;
    };
    function vnoise(x, y, px, py, p) {            // ruido de valores con envoltura (se repite sin costuras)
      const xi = Math.floor(x), yi = Math.floor(y), fx = smooth(x - xi), fy = smooth(y - yi);
      const x0 = ((xi % px) + px) % px, x1 = (x0 + 1) % px, y0 = ((yi % py) + py) % py, y1 = (y0 + 1) % py;
      const a = hash(x0, y0, p), b = hash(x1, y0, p), c = hash(x0, y1, p), d = hash(x1, y1, p);
      return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
    }
    function fbm(u, v, fx, fy, oct, p) {
      let s = 0, amp = 0.5, norm = 0;
      for (let o = 0; o < oct; o++) {
        const px = fx << o, py = fy << o;
        s += amp * vnoise(u * px, v * py, px, py, p + o * 17);
        norm += amp; amp *= 0.5;
      }
      return s / norm;
    }

    const H = new Float32Array(N), A = new Float32Array(N * 3), R = new Float32Array(N);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const u = x / S, v = y / S, i = y * S + x;
        const low = fbm(u, v, 3, 3, 3, 1), mid = fbm(u, v, 9, 9, 3, 2), g = hash(x, y, 99);
        const bed = fbm(u, v, 2, 9, 3, 8), mott = fbm(u, v, 6, 6, 4, 9), pit = fbm(u, v, 46, 46, 2, 4), ox = fbm(u, v, 4, 4, 3, 10);
        const h = 0.5 * mid + 0.2 * bed + 0.14 * low + 0.09 * mott + 0.07 * g - (pit > 0.82 ? (pit - 0.82) * 1.8 : 0);
        const m = 0.9 + (bed - 0.5) * 0.12 + (mott - 0.5) * 0.14 + (g - 0.5) * 0.07;
        let r = m + 0.004, gg = m, b = m - 0.012;
        if (ox > 0.64) { const k = Math.min(1, (ox - 0.64) * 3.5); r -= 0.02 * k; gg -= 0.05 * k; b -= 0.1 * k; }   // velos de óxido
        if (pit > 0.82) { const k = 1 - (pit - 0.82) * 0.9; r *= k; gg *= k; b *= k; }
        H[i] = h; A[i * 3] = r; A[i * 3 + 1] = gg; A[i * 3 + 2] = b; R[i] = 0.88 + (g - 0.5) * 0.08;
      }
    }

    function stroke(x0, y0, x1, y1, w, depth, dark) {
      const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 1.5));
      for (let s = 0; s <= n; s++) {
        const t = s / n, cx = Math.round(x0 + (x1 - x0) * t), cy = Math.round(y0 + (y1 - y0) * t);
        for (let dy = -w; dy <= w; dy++) for (let dx = -w; dx <= w; dx++) {
          const d = Math.hypot(dx, dy); if (d > w) continue;
          const k = 1 - d / (w + 0.0001);
          const j = ((((cy + dy) % S) + S) % S) * S + ((((cx + dx) % S) + S) % S);
          H[j] -= depth * k * 0.5;
          const f = 1 - dark * k * 0.5; A[j * 3] *= f; A[j * 3 + 1] *= f; A[j * 3 + 2] *= f;
        }
      }
    }
    for (let c = 0; c < 2; c++) {                  // dos fisuras apenas visibles
      let x = rnd() * S, y = rnd() * S, a = rnd() * 6.283;
      const segs = 14 + ((rnd() * 10) | 0);
      for (let s = 0; s < segs; s++) {
        a += (rnd() - 0.5) * 0.9;
        const nx = x + Math.cos(a) * (6 + rnd() * 8), ny = y + Math.sin(a) * (6 + rnd() * 8);
        stroke(x, y, nx, ny, 1, 0.1, 0.22); x = nx; y = ny;
      }
    }
    if (opts.tool) {                               // huellas de cincel
      for (let c = 0; c < 110; c++) {
        const x = rnd() * S, y = rnd() * S, L = 36 + rnd() * 70, a2 = 0.62 + (rnd() - 0.5) * 0.12;
        stroke(x, y, x + Math.cos(a2) * L, y + Math.sin(a2) * L, 1, 0.05, 0.06);
      }
    }
    if (opts.margin) {                             // sillar: margen labrado con ranura fina
      const m = 30;
      for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
        const d = Math.min(x, y, S - 1 - x, S - 1 - y);
        if (d > m + 10) { const i0 = y * S + x; A[i0 * 3] *= 1.07; A[i0 * 3 + 1] *= 1.07; A[i0 * 3 + 2] *= 1.07; continue; }
        const i = y * S + x, t = Math.min(1, d / m), blend = 0.65 * (1 - t);
        H[i] = H[i] * (1 - blend) + 0.45 * blend;
        const gr = Math.exp(-Math.pow((d - m) / 2.4, 2));
        H[i] -= 0.45 * gr + 0.25 * (1 - smooth(Math.min(1, d / 8)));
        const f = (1 - 0.26 * gr) * (0.8 + 0.2 * smooth(Math.min(1, d / 14)));
        A[i * 3] *= f; A[i * 3 + 1] *= f; A[i * 3 + 2] *= f;
      }
    }

    const str = 8;
    function mk(fill) {
      const c = document.createElement('canvas'); c.width = c.height = S;
      const ctx = c.getContext('2d'), id = ctx.createImageData(S, S);
      fill(id.data); ctx.putImageData(id, 0, 0); return c;
    }
    const albedo = mk(d => {
      for (let i = 0; i < N; i++) {
        d[i * 4] = clamp(A[i * 3]) * 255; d[i * 4 + 1] = clamp(A[i * 3 + 1]) * 255; d[i * 4 + 2] = clamp(A[i * 3 + 2]) * 255; d[i * 4 + 3] = 255;
      }
    });
    const normal = mk(d => {
      for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
        const xm = (x + S - 1) % S, xp = (x + 1) % S, ym = (y + S - 1) % S, yp = (y + 1) % S;
        let nx = (H[y * S + xm] - H[y * S + xp]) * str, ny = (H[yp * S + x] - H[ym * S + x]) * str, nz = 1;
        const l = Math.sqrt(nx * nx + ny * ny + nz * nz); nx /= l; ny /= l; nz /= l;
        const i = (y * S + x) * 4;
        d[i] = (nx * 0.5 + 0.5) * 255; d[i + 1] = (ny * 0.5 + 0.5) * 255; d[i + 2] = (nz * 0.5 + 0.5) * 255; d[i + 3] = 255;
      }
    });
    const rough = mk(d => {
      for (let i = 0; i < N; i++) { const v = clamp(R[i]) * 255; d[i * 4] = v; d[i * 4 + 1] = v; d[i * 4 + 2] = v; d[i * 4 + 3] = 255; }
    });
    return { albedo: albedo, normal: normal, rough: rough };
  }
  /*STONEGEN-END*/

  const STONE = {
    piramide: { seed: 1201, repeat: [1, 1],      opts: { tool: true } },
    arista:   { seed: 1201, repeat: [0.15, 2.1], opts: {} },
    cara:     { seed: 1201, repeat: [1, 1],      opts: { margin: true, tool: true } }
  };
  const STONE_COLOR = 0xC6C5C0;
  const matsByGroup = { piramide: [], arista: [], cara: [] };
  function makeMat(grp) {
    const m = new THREE.MeshStandardMaterial({
      color: STONE_COLOR, roughness: 1, metalness: 0,
      side: THREE.DoubleSide, emissive: 0x000000
    });
    matsByGroup[grp].push(m);
    return m;
  }
  function applyStone(grp) {
    const cfg = STONE[grp], set = genStoneSet(cfg.seed, cfg.opts);
    const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1);
    const tex = cv => {
      const t = new THREE.CanvasTexture(cv);
      t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(cfg.repeat[0], cfg.repeat[1]); t.anisotropy = aniso;
      return t;
    };
    const map = tex(set.albedo), nm = tex(set.normal), rm = tex(set.rough);
    matsByGroup[grp].forEach(m => { m.map = map; m.normalMap = nm; m.normalScale.set(1, 1); m.roughnessMap = rm; m.needsUpdate = true; });
  }

  /* — Rótulos grabados — */
  const relabels = [];
  const SERIF = '"Cormorant Garamond", Georgia, serif';
  function wrapText(ctx, text, maxW) {
    const words = text.split(' '), lines = []; let line = '';
    words.forEach(w => {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
    });
    lines.push(line); return lines;
  }
  function roman(n) {
    n = parseInt(n, 10); let s = '';
    [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']].forEach(p => { while (n >= p[0]) { s += p[1]; n -= p[0]; } });
    return s;
  }
  function faceTexture(num, pyr) {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const ctx = c.getContext('2d'); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const txt = roman(num), maxW = pyr ? 330 : 400;
    let size = pyr ? 160 : 210; ctx.font = '500 ' + size + 'px ' + SERIF;
    while (ctx.measureText(txt).width > maxW && size > 60) { size -= 4; ctx.font = '500 ' + size + 'px ' + SERIF; }
    const y = pyr ? 272 : 256;
    ctx.fillStyle = 'rgba(255,250,236,.55)'; ctx.fillText(txt, 258, y + 2);   // filo de luz
    ctx.fillStyle = 'rgba(52,40,24,.9)'; ctx.fillText(txt, 256, y);            // cincelado
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function addFaceLabel(pos, normal, size, id, pyr, parent) {
    const tp = TOPICS[id];
    const mat = new THREE.MeshBasicMaterial({ map: faceTexture(tp.n, pyr), transparent: true, depthWrite: false });
    relabels.push(() => { mat.map.dispose(); mat.map = faceTexture(tp.n, pyr); mat.needsUpdate = true; });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    m.position.copy(pos).addScaledVector(normal, 0.02);
    m.lookAt(pos.clone().add(normal));
    parent.add(m);
  }
  function medallionTexture(num) {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d'); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.beginPath(); ctx.arc(128, 128, 118, 0, Math.PI * 2); ctx.fillStyle = 'rgba(14,15,19,.96)'; ctx.fill();
    ctx.lineWidth = 9; ctx.strokeStyle = '#C6A56A'; ctx.stroke();
    ctx.beginPath(); ctx.arc(128, 128, 98, 0, Math.PI * 2); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(198,165,106,.45)'; ctx.stroke();
    const txt = roman(num); let size = 104; ctx.font = '600 ' + size + 'px ' + SERIF;
    while (ctx.measureText(txt).width > 150 && size > 40) { size -= 4; ctx.font = '600 ' + size + 'px ' + SERIF; }
    ctx.fillStyle = '#E2C98F'; ctx.fillText(txt, 128, 132);
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function medallionSprite(num) {
    const mat = new THREE.SpriteMaterial({ map: medallionTexture(num), transparent: true });
    relabels.push(() => { mat.map.dispose(); mat.map = medallionTexture(num); mat.needsUpdate = true; });
    return new THREE.Sprite(mat);
  }

  /* — Piedra — */
  const piedra = new THREE.Group(); scene.add(piedra);
  const items = {}, targets = [];
  function register(id, obj, dir) {
    obj.userData.id = id; targets.push(obj);
    items[id] = { mesh: obj, grp: TOPICS[id].grp, dir: dir.clone().normalize() };
  }

  const FACE_MAP = { bottom: 't1', front: 't10', right: 't14', back: 't15', left: 't16' };
  const PYR_MAP = { front: 't19', right: 't11', back: 't18', left: 't17' };
  const EDGE_LIST = [
    [[-1, 1, 1], [1, 1, 1], 't12'], [[1, 1, 1], [1, 1, -1], 't9'],
    [[1, 1, -1], [-1, 1, -1], 't13'], [[-1, 1, -1], [-1, 1, 1], 't21'],
    [[-1, -1, 1], [-1, 1, 1], 't3'], [[1, -1, 1], [1, 1, 1], 't4'],
    [[1, -1, -1], [1, 1, -1], 't5'], [[-1, -1, -1], [-1, 1, -1], 't6'],
    [[-1, -1, 1], [1, -1, 1], 't2'], [[1, -1, 1], [1, -1, -1], 't7'],
    [[1, -1, -1], [-1, -1, -1], 't8'], [[-1, -1, -1], [-1, -1, 1], 't20']
  ];
  const PYR_Y0 = 1, APEX_Y = 2.6;

  const PB = 0.93;                         // la pirámide asienta un poco hacia dentro del cubo
  const GOLD = 0xC6A56A;
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xC9A869, roughness: 0.38, metalness: 0.5, emissive: 0x2a2008 });
  function addGlow(id, mesh) {
    const g = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color: 0xF0D28A, transparent: true, opacity: 0.9, depthTest: false, depthWrite: false }));
    g.position.copy(mesh.position); g.quaternion.copy(mesh.quaternion); g.renderOrder = 6; g.visible = false;
    piedra.add(g); items[id].glow = g;
  }

  // 5 caras del cubo: panel hundido con filete dorado
  const faceN = { bottom: V3(0, -1, 0), front: V3(0, 0, 1), right: V3(1, 0, 0), back: V3(0, 0, -1), left: V3(-1, 0, 0) };
  const frameGeo = new THREE.BufferGeometry().setFromPoints([V3(-0.883, -0.883, 0), V3(0.883, -0.883, 0), V3(0.883, 0.883, 0), V3(-0.883, 0.883, 0)]);
  const frameMat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.6 });
  Object.keys(FACE_MAP).forEach(k => {
    const id = FACE_MAP[k], nrm = faceN[k], pos = nrm.clone();
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), makeMat('cara'));
    mesh.position.copy(pos); mesh.lookAt(pos.clone().add(nrm));
    piedra.add(mesh);
    const dir = k === 'bottom' ? V3(0, -1, 0.2) : nrm;
    register(id, mesh, dir);
    items[id].anchor = V3(0, APEX_Y + 0.7, 0);
    addGlow(id, mesh);
    const fr = new THREE.LineLoop(frameGeo, frameMat);
    fr.position.copy(pos).addScaledVector(nrm, 0.012); fr.quaternion.copy(mesh.quaternion); piedra.add(fr);
    addFaceLabel(pos, nrm, 1.75, id, false, piedra);
  });

  // 4 caras de la pirámide
  const apex = V3(0, APEX_Y, 0);
  const pyrDefs = {
    front: [[-PB, PYR_Y0, PB], [PB, PYR_Y0, PB]], right: [[PB, PYR_Y0, PB], [PB, PYR_Y0, -PB]],
    back: [[PB, PYR_Y0, -PB], [-PB, PYR_Y0, -PB]], left: [[-PB, PYR_Y0, -PB], [-PB, PYR_Y0, PB]]
  };
  Object.keys(PYR_MAP).forEach(k => {
    const id = PYR_MAP[k];
    const a = V3(...pyrDefs[k][0]), b = V3(...pyrDefs[k][1]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([a.x, a.y, a.z, b.x, b.y, b.z, apex.x, apex.y, apex.z], 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0.5, 1], 2));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, makeMat('piramide'));
    piedra.add(mesh);
    const nrm = new THREE.Vector3().crossVectors(b.clone().sub(a), apex.clone().sub(a)).normalize();
    register(id, mesh, nrm.clone().add(V3(0, 0.15, 0)));
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const p = mid.clone().add(apex.clone().sub(mid).multiplyScalar((1.58 - PYR_Y0) / (APEX_Y - PYR_Y0)));
    items[id].anchor = V3(0, APEX_Y + 0.7, 0);
    addGlow(id, mesh);
    addFaceLabel(p, nrm, 1.25, id, true, piedra);
  });
  const pyrPts = [[-PB, PYR_Y0, PB], [PB, PYR_Y0, PB], [PB, PYR_Y0, PB], [PB, PYR_Y0, -PB], [PB, PYR_Y0, -PB], [-PB, PYR_Y0, -PB], [-PB, PYR_Y0, -PB], [-PB, PYR_Y0, PB]]
    .map(p => V3(...p))
    .concat([[-PB, PYR_Y0, PB], [PB, PYR_Y0, PB], [PB, PYR_Y0, -PB], [-PB, PYR_Y0, -PB]].flatMap(p => [V3(...p), apex]));
  piedra.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pyrPts),
    new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.75 })));

  // 12 aristas achaflanadas, con nervio dorado, gema y medallón numerado
  EDGE_LIST.forEach(pair => {
    const a = V3(...pair[0]), b = V3(...pair[1]), id = pair[2];
    const mid = a.clone().add(b).multiplyScalar(0.5), dirE = b.clone().sub(a).normalize();
    const len = a.distanceTo(b);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.15, len + 0.1, 0.15), makeMat('arista'));
    mesh.position.copy(mid);
    mesh.quaternion.setFromUnitVectors(V3(0, 1, 0), dirE);
    mesh.rotateY(Math.PI / 4);                                   // la faceta plana mira hacia fuera
    piedra.add(mesh);
    register(id, mesh, mid.clone());
    const out = mid.clone().sub(dirE.clone().multiplyScalar(mid.dot(dirE))).normalize();
    const lo = out.applyQuaternion(mesh.quaternion.clone().invert());
    const ax = Math.abs(lo.x) > Math.abs(lo.z) ? V3(Math.sign(lo.x), 0, 0) : V3(0, 0, Math.sign(lo.z));
    const rib = new THREE.Mesh(new THREE.BoxGeometry(ax.x ? 0.02 : 0.045, len * 0.88, ax.z ? 0.02 : 0.045), goldMat);
    rib.position.copy(ax).multiplyScalar(0.0755); mesh.add(rib);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.085), goldMat);
    gem.scale.set(0.75, 1.6, 0.75); gem.position.copy(ax).multiplyScalar(0.085); mesh.add(gem);
    const sp = medallionSprite(TOPICS[id].n);
    const horiz = V3(mid.x, 0, mid.z).normalize();
    const vertical = Math.abs(mid.x) > 0.5 && Math.abs(mid.z) > 0.5;       // pilares: salen por la diagonal
    sp.position.copy(mid).addScaledVector(horiz, vertical ? 0.27 : 0.24);
    sp.scale.set(0.28, 0.28, 1);
    if (mid.y < 0 && !vertical) { sp.position.y += 0.16; sp.position.addScaledVector(horiz, 0.06); }
    sp.material.depthTest = false;
    sp.renderOrder = 3;
    piedra.add(sp);
    register(id, sp, mid.clone());      // el medallón también abre el tema
    items[id].mesh = mesh;              // …pero el estado vive en la arista
    items[id].anchor = V3(0, APEX_Y + 0.7, 0);
    items[id].med = sp; items[id].out = horiz.clone();
    addGlow(id, mesh);
  });
  [-1, 1].forEach(x => [-1, 1].forEach(y => [-1, 1].forEach(z => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 14), goldMat);
    s.position.set(x, y, z); piedra.add(s);
  })));

  /* — Rótulo del tema: aparece al señalar o elegir una pieza — */
  const tagCv = document.createElement('canvas'); tagCv.width = 1024; tagCv.height = 192;
  const tagTex = new THREE.CanvasTexture(tagCv);
  const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: tagTex, transparent: true, depthTest: false, depthWrite: false }));
  tag.renderOrder = 10; tag.visible = false; scene.add(tag);
  const tagAnchor = V3(0, 0, 0); let tagId = null;
  function drawTag(id) {
    const ctx = tagCv.getContext('2d'), tp = TOPICS[id];
    ctx.clearRect(0, 0, 1024, 192);
    const x0 = 6, y0 = 6, w = 1012, h = 180, r = 16;
    ctx.beginPath(); ctx.moveTo(x0 + r, y0); ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r); ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r);
    ctx.arcTo(x0, y0 + h, x0, y0, r); ctx.arcTo(x0, y0, x0 + w, y0, r); ctx.closePath();
    ctx.fillStyle = 'rgba(14,15,19,.94)'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = '#C6A56A'; ctx.stroke();
    ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(198,165,106,.4)'; ctx.strokeRect(x0 + 12, y0 + 12, w - 24, h - 24);
    ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    const num = roman(tp.n); let ns = 96; ctx.font = '500 ' + ns + 'px ' + SERIF;
    while (ctx.measureText(num).width > 190 && ns > 40) { ns -= 4; ctx.font = '500 ' + ns + 'px ' + SERIF; }
    ctx.fillStyle = '#E2C98F'; ctx.fillText(num, 140, 102);
    ctx.fillStyle = 'rgba(198,165,106,.55)'; ctx.fillRect(250, 44, 2, 104);
    let size = 76; ctx.font = '600 ' + size + 'px ' + SERIF;
    while (ctx.measureText(tp.short).width > 700 && size > 30) { size -= 2; ctx.font = '600 ' + size + 'px ' + SERIF; }
    ctx.fillStyle = '#EFE8D6'; ctx.fillText(tp.short, 636, 102);
    tagTex.needsUpdate = true;
  }
  relabels.push(() => { if (tagId) drawTag(tagId); });
  function updateTag() {
    const id = hoveredId || selectedId;
    if (!id || !items[id]) { tag.visible = false; tagId = null; return; }
    if (id !== tagId) { tagId = id; drawTag(id); }
    tagAnchor.copy(items[id].anchor); tag.visible = true;
  }

  /* — Suelo: sombra, círculos y cuadrados — */
  const FLOOR_Y = -1.14;
  (function () {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const x = c.getContext('2d'), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(0,0,0,.75)'); g.addColorStop(0.5, 'rgba(0,0,0,.32)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(7, 7),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.y = FLOOR_Y - 0.02; scene.add(m);
  })();
  const floor = new THREE.Group(); floor.position.y = FLOOR_Y; scene.add(floor);
  const lineMat = op => new THREE.LineBasicMaterial({ color: 0xC6A56A, transparent: true, opacity: op, depthWrite: false });
  function loopPts(pts) { return new THREE.BufferGeometry().setFromPoints(pts); }
  function circle(r, op) {
    const pts = []; for (let i = 0; i < 160; i++) { const a = (i / 160) * Math.PI * 2; pts.push(V3(Math.cos(a) * r, 0, Math.sin(a) * r)); }
    return new THREE.LineLoop(loopPts(pts), lineMat(op));
  }
  function square(r, rot, op) {
    const pts = []; for (let i = 0; i < 4; i++) { const a = rot + (i / 4) * Math.PI * 2; pts.push(V3(Math.cos(a) * r, 0, Math.sin(a) * r)); }
    return new THREE.LineLoop(loopPts(pts), lineMat(op));
  }
  const R0 = Math.SQRT2;                       // el círculo que abraza la base del cubo
  floor.add(square(R0, Math.PI / 4, 0.7), circle(R0, 0.55));      // huella del cubo
  floor.add(square(2, 0, 0.5), circle(2, 0.6));                   // rombo inscrito en el círculo mayor
  floor.add(circle(2.8, 0.4), circle(2.92, 0.22));
  const tk = [];
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2, r1 = 2.8, r2 = i % 8 === 0 ? 3.15 : 2.92;
    tk.push(V3(Math.cos(a) * r1, 0, Math.sin(a) * r1), V3(Math.cos(a) * r2, 0, Math.sin(a) * r2));
  }
  const tickRing = new THREE.LineSegments(loopPts(tk), lineMat(0.42)); floor.add(tickRing);

  /* — Polvo flotante — */
  const N = 150, pPos = new Float32Array(N * 3), pSeed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const r = 1.8 + Math.random() * 3.8, a = Math.random() * Math.PI * 2;
    pPos[i * 3] = Math.cos(a) * r; pPos[i * 3 + 1] = -1 + Math.random() * 6.5; pPos[i * 3 + 2] = Math.sin(a) * r;
    pSeed[i] = 0.4 + Math.random();
  }
  const dotC = document.createElement('canvas'); dotC.width = dotC.height = 32;
  (function () {
    const x = dotC.getContext('2d'), g = x.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(255,244,214,1)'); g.addColorStop(1, 'rgba(255,244,214,0)');
    x.fillStyle = g; x.fillRect(0, 0, 32, 32);
  })();
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 0.09, map: new THREE.CanvasTexture(dotC), transparent: true, opacity: 0.55, depthWrite: false, sizeAttenuation: true
  })));

  /* — Color según estado — */
  const tmp = new THREE.Color();
  const STONE_COL = new THREE.Color(STONE_COLOR);
  function paint(id) {
    const it = items[id]; if (!it) return;
    const m = it.mesh.material, on = id === selectedId, hv = id === hoveredId;
    tmp.copy(STONE_COL); if (selectedId && !on) tmp.multiplyScalar(0.82);
    m.color.copy(tmp); m.emissive.setHex(on ? 0x1c160a : hv ? 0x0f0c06 : 0x000000);
    if (it.glow) { it.glow.visible = on || hv; it.glow.material.opacity = on ? 0.95 : 0.55; }
  }
  function paintAll() { ORDER.forEach(paint); updateTag(); }

  /* — Cámara — */
  let focusDir = null, focusDist = 0, shiftX = 0, shiftY = 0, hasOffset = false;
  function fit() {
    const asp = W / H, t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    baseDist = 1.08 * Math.max(5.0 / (2 * t), 5.6 / (2 * t * asp));
    controls.minDistance = baseDist * 0.45; controls.maxDistance = baseDist * 1.9;
    if (!touched) camera.position.copy(TARGET).addScaledVector(HOME_DIR, baseDist);
  }
  function resize() {
    W = Math.max(1, app.clientWidth); H = Math.max(1, app.clientHeight);
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    fit();
  }
  controls.addEventListener('start', () => { focusDir = null; touched = true; });
  if (window.ResizeObserver) new ResizeObserver(resize).observe(app);
  window.addEventListener('resize', resize);
  resize();

  /* — Puntero — */
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  function pick(ev) {
    const r = canvas.getBoundingClientRect();
    mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(targets, false).find(h => h.object.visible && (!h.object.isSprite || h.object.material.opacity > 0.35));
    return hit ? hit.object.userData.id : null;
  }
  canvas.addEventListener('pointermove', ev => {
    if (ev.buttons) return;
    const id = pick(ev);
    canvas.classList.toggle('pointing', !!id);
    if (id !== hoveredId) hover(id);
  });
  canvas.addEventListener('pointerleave', () => { canvas.classList.remove('pointing'); if (hoveredId) hover(null); });
  let down = null;
  canvas.addEventListener('pointerdown', ev => { down = { x: ev.clientX, y: ev.clientY }; canvas.classList.add('grabbing'); });
  window.addEventListener('pointerup', ev => {
    canvas.classList.remove('grabbing');
    if (!down) return;
    const moved = Math.hypot(ev.clientX - down.x, ev.clientY - down.y); down = null;
    if (moved < 6 && ev.target === canvas) { const id = pick(ev); if (id) select(id, 'canvas'); }
  });

  /* — Bucle — */
  const clock = new THREE.Clock();
  (function loop() {
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    const k = reduce ? 1 : Math.min(1, 4.2 * dt);
    if (!reduce) {
      piedra.position.y = Math.sin(t * 0.7) * 0.05;
      tickRing.rotation.y = -t * 0.035;
      for (let i = 0; i < N; i++) {
        let y = pPos[i * 3 + 1] + dt * 0.07 * pSeed[i];
        if (y > 5.5) y = -1;
        pPos[i * 3 + 1] = y;
      }
      pGeo.attributes.position.needsUpdate = true;
    }
    if (focusDir) {
      const off = camera.position.clone().sub(TARGET), dist = off.length();
      const dir = off.normalize().lerp(focusDir, k).normalize();
      camera.position.copy(TARGET).addScaledVector(dir, dist + (focusDist - dist) * k);
      if (dir.distanceTo(focusDir) < 0.01 && Math.abs(dist - focusDist) < 0.05) focusDir = null;
    }
    // desplaza la piedra hacia el lado libre cuando el panel está abierto
    let tx = 0, ty = 0;
    if (selectedId) { if (mobileMQ.matches) ty = sheet.offsetHeight / 2; else tx = sheet.offsetWidth / 2; }
    shiftX += (tx - shiftX) * k; shiftY += (ty - shiftY) * k;
    if (!tx && !ty && Math.abs(shiftX) + Math.abs(shiftY) < 0.3) {
      shiftX = shiftY = 0;
      if (hasOffset) { camera.clearViewOffset(); hasOffset = false; }
    } else { camera.setViewOffset(W, H, shiftX, shiftY, W, H); hasOffset = true; }
    const cp = camera.position;
    ORDER.forEach(id => {
      const it = items[id]; if (!it.med) return;
      const f = it.out.dot(cp.clone().sub(it.med.position).normalize());
      it.med.material.opacity = Math.max(0, Math.min(1, (f + 0.05) / 0.3));
    });
    if (tag.visible) {
      const s = 1.3 * camera.position.distanceTo(TARGET) / baseDist;
      tag.scale.set(s, s * 0.1875, 1); tag.position.copy(tagAnchor).add(piedra.position);
    }
    controls.update();
    renderer.render(scene, camera);
  })();

  // las texturas se generan después del primer cuadro, una piedra por turno
  ['piramide', 'arista', 'cara'].forEach((g, i) => setTimeout(() => { try { applyStone(g); } catch (err) {} }, 150 + i * 200));

  return {
    repaint: paintAll,
    select: function (id) {
      paintAll();
      if (id) { focusDir = items[id].dir.clone(); focusDist = baseDist * 1.15; touched = true; }
      controls.autoRotate = !id && !userPaused;
    },
    refreshSpin: function () { controls.autoRotate = !selectedId && !userPaused; },
    reset: function () { touched = false; focusDir = HOME_DIR.clone(); focusDist = baseDist; },
    relabel: function () { relabels.forEach(fn => fn()); }
  };
}

try { s3 = init3D(); } catch (err) { s3 = null; }
if (!s3) {
  $('nogl').hidden = false; $('tools').hidden = true;
  cap.textContent = 'Elige un tema del índice';
} else if (document.fonts && document.fonts.load) {
  Promise.all(['400 40px "Cormorant Garamond"', '600 40px "Cormorant Garamond"', '700 40px "Cormorant Garamond"']
    .map(f => document.fonts.load(f))).then(() => s3 && s3.relabel()).catch(() => {});
}
paintSpinBtn();
})();