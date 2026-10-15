
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
      '<div class="num" aria-hidden="true">' + t.n + '</div>' +
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
  const TARGET = new THREE.Vector3(0, 0.75, 0);
  const HOME_DIR = new THREE.Vector3(0.62, 0.36, 0.7).normalize();
  const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
  let baseDist = 11, touched = false, W = 1, H = 1;

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.copy(TARGET);
  controls.enableDamping = true; controls.dampingFactor = 0.07;
  controls.enablePan = false; controls.autoRotateSpeed = 0.7;
  controls.autoRotate = !userPaused;

  scene.add(new THREE.AmbientLight(0xfff0d8, 0.62));
  const key = new THREE.DirectionalLight(0xffe2b0, 1.0); key.position.set(5, 9, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fa6d6, 0.55); rim.position.set(-7, 3, -6); scene.add(rim);
  const under = new THREE.DirectionalLight(0xc6a56a, 0.35); under.position.set(0, -6, 2); scene.add(under);

  /* — Piedra real: arenisca, granito y pizarra generadas por código — */
  /*STONEGEN-START*/
  function genStoneSet(kind, seed, opts) {
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
        let h, r, gg, b, rough;
        if (kind === 'sandstone') {
          const strata = fbm(u, v, 2, 11, 3, 3), pit = fbm(u, v, 38, 38, 2, 4);
          h = 0.55 * mid + 0.3 * strata + 0.12 * low + 0.06 * g - (pit > 0.8 ? (pit - 0.8) * 2 : 0);
          const m = 0.88 + (strata - 0.5) * 0.24 + (low - 0.5) * 0.16 + (g - 0.5) * 0.08;
          r = m + 0.035; gg = m + 0.005; b = m - 0.055;
          if (pit > 0.8) { const k = 1 - (pit - 0.8) * 1.5; r *= k; gg *= k; b *= k; }
          rough = 0.93 + (g - 0.5) * 0.08;
        } else if (kind === 'granite') {
          const clump = fbm(u, v, 110, 110, 1, 5), feld = fbm(u, v, 14, 14, 2, 6);
          h = 0.3 * low + 0.18 * mid + 0.04 * g;
          const m = 0.8 + (low - 0.5) * 0.14 + (mid - 0.5) * 0.12 + (g - 0.5) * 0.08;
          r = m; gg = m; b = m;
          if (feld > 0.56) { const k = Math.min(1, (feld - 0.56) * 4); r += 0.05 * k; gg -= 0.025 * k; b -= 0.02 * k; }
          if (clump > 0.72 && g < 0.5) { r *= 0.46; gg *= 0.46; b *= 0.48; rough = 0.62; h -= 0.03; }
          else if (clump < 0.26 && g > 0.4) { r *= 1.14; gg *= 1.14; b *= 1.14; rough = 0.7; }
          else rough = 0.82 + (g - 0.5) * 0.1;
          if (hash(x, y, 77) < 0.006) { r *= 0.4; gg *= 0.4; b *= 0.4; }
        } else {
          const fol = fbm(u, v, 2, 12, 3, 7), step = Math.floor(low * 5) / 5;
          h = 0.5 * (0.5 * step + 0.5 * low) + 0.2 * fol + 0.14 * mid + 0.06 * g;
          const m = 0.84 + (fol - 0.5) * 0.12 + (mid - 0.5) * 0.14 + (low - 0.5) * 0.08 + (g - 0.5) * 0.06;
          r = m - 0.015; gg = m + 0.01; b = m - 0.005;
          rough = 0.8 + (fol - 0.5) * 0.18;
        }
        H[i] = h; A[i * 3] = r; A[i * 3 + 1] = gg; A[i * 3 + 2] = b; R[i] = rough;
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
    // grietas finas
    const nCr = kind === 'granite' ? 1 : 3;
    for (let c = 0; c < nCr; c++) {
      let x = rnd() * S, y = rnd() * S, a = rnd() * 6.283;
      const segs = 18 + ((rnd() * 14) | 0);
      for (let s = 0; s < segs; s++) {
        a += (rnd() - 0.5) * 0.9;
        const nx = x + Math.cos(a) * (7 + rnd() * 9), ny = y + Math.sin(a) * (7 + rnd() * 9);
        stroke(x, y, nx, ny, 1, 0.13, 0.3); x = nx; y = ny;
      }
    }
    // huellas de cincel
    if (opts.tool) {
      for (let c = 0; c < 120; c++) {
        const x = rnd() * S, y = rnd() * S, L = 36 + rnd() * 70, a2 = 0.62 + (rnd() - 0.5) * 0.12;
        stroke(x, y, x + Math.cos(a2) * L, y + Math.sin(a2) * L, 1, 0.05, 0.06);
      }
    }
    // sillar: margen labrado con ranura, centro más rústico
    if (opts.margin) {
      const m = 30;
      for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
        const d = Math.min(x, y, S - 1 - x, S - 1 - y);
        if (d > m + 10) continue;
        const i = y * S + x, t = Math.min(1, d / m), blend = 0.65 * (1 - t);
        H[i] = H[i] * (1 - blend) + 0.45 * blend;
        const gr = Math.exp(-Math.pow((d - m) / 2.4, 2));
        H[i] -= 0.45 * gr + 0.25 * (1 - smooth(Math.min(1, d / 8)));
        const f = (1 - 0.28 * gr) * (0.78 + 0.22 * smooth(Math.min(1, d / 14)));
        A[i * 3] *= f; A[i * 3 + 1] *= f; A[i * 3 + 2] *= f;
      }
    }

    const str = kind === 'sandstone' ? 12 : kind === 'granite' ? 6 : 9;
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
    piramide: { kind: 'sandstone', seed: 1201, repeat: [1, 1],   opts: { tool: true } },                 // arenisca
    arista:   { kind: 'granite',   seed: 2203, repeat: [0.6, 2], opts: {} },                             // granito
    cara:     { kind: 'slate',     seed: 3307, repeat: [1, 1],   opts: { margin: true, tool: true } }     // pizarra
  };
  const matsByGroup = { piramide: [], arista: [], cara: [] };
  function makeMat(grp) {
    const m = new THREE.MeshStandardMaterial({
      color: GROUPS[grp].color, roughness: 1, metalness: 0.03,
      side: THREE.DoubleSide, emissive: 0x000000
    });
    matsByGroup[grp].push(m);
    return m;
  }
  function applyStone(grp) {
    const cfg = STONE[grp], set = genStoneSet(cfg.kind, cfg.seed, cfg.opts);
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
  function faceTexture(num, short, pyr) {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const ctx = c.getContext('2d'); ctx.textAlign = 'center';
    const nY = pyr ? 176 : 214, tY = pyr ? 248 : 292, maxW = pyr ? 400 : 330;
    const draw = (dx, dy, col) => {
      ctx.fillStyle = col; ctx.font = '400 132px ' + SERIF; ctx.fillText(String(num), 256 + dx, nY + dy);
      ctx.font = '700 44px ' + SERIF;
      wrapText(ctx, short.toUpperCase(), maxW).slice(0, 3).forEach((l, i) => ctx.fillText(l, 256 + dx, tY + dy + i * 50));
    };
    draw(2, 2, 'rgba(255,250,236,.5)');   // relieve claro
    draw(0, 0, 'rgba(30,24,16,.92)');     // grabado en tinta
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function addFaceLabel(pos, normal, size, id, pyr, parent) {
    const tp = TOPICS[id];
    const mat = new THREE.MeshBasicMaterial({ map: faceTexture(tp.n, tp.short, pyr), transparent: true, depthWrite: false });
    relabels.push(() => { mat.map.dispose(); mat.map = faceTexture(tp.n, tp.short, pyr); mat.needsUpdate = true; });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    m.position.copy(pos).addScaledVector(normal, 0.02);
    m.lookAt(pos.clone().add(normal));
    parent.add(m);
  }
  function plateTexture(num, short) {
    const Wc = 1024, Hc = 256, c = document.createElement('canvas'); c.width = Wc; c.height = Hc;
    const ctx = c.getContext('2d');
    const r = 18, x0 = 8, y0 = 8, w = Wc - 16, h = Hc - 16;
    ctx.beginPath();
    ctx.moveTo(x0 + r, y0); ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r); ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r);
    ctx.arcTo(x0, y0 + h, x0, y0, r); ctx.arcTo(x0, y0, x0 + w, y0, r); ctx.closePath();
    ctx.fillStyle = 'rgba(14,15,19,.95)'; ctx.fill();
    ctx.lineWidth = 6; ctx.strokeStyle = '#C6A56A'; ctx.stroke();
    ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(198,165,106,.4)'; ctx.strokeRect(x0 + 14, y0 + 14, w - 28, h - 28);
    ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    ctx.fillStyle = '#D9BA78'; ctx.font = '500 118px ' + SERIF; ctx.fillText(String(num), 140, 134);
    ctx.fillStyle = 'rgba(198,165,106,.55)'; ctx.fillRect(250, 56, 2, 144);
    let size = 82; ctx.font = '600 ' + size + 'px ' + SERIF;
    while (ctx.measureText(short).width > 690 && size > 34) { size -= 2; ctx.font = '600 ' + size + 'px ' + SERIF; }
    ctx.fillStyle = '#EFE8D6'; ctx.fillText(short, 640, 134);
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function plateSprite(num, short) {
    const mat = new THREE.SpriteMaterial({ map: plateTexture(num, short), transparent: true });
    relabels.push(() => { mat.map.dispose(); mat.map = plateTexture(num, short); mat.needsUpdate = true; });
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

  // 5 caras del cubo
  const faceN = { bottom: V3(0, -1, 0), front: V3(0, 0, 1), right: V3(1, 0, 0), back: V3(0, 0, -1), left: V3(-1, 0, 0) };
  Object.keys(FACE_MAP).forEach(k => {
    const id = FACE_MAP[k], nrm = faceN[k], pos = nrm.clone();
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), makeMat('cara'));
    mesh.position.copy(pos); mesh.lookAt(pos.clone().add(nrm));
    piedra.add(mesh);
    register(id, mesh, k === 'bottom' ? V3(0, -1, 0.2) : nrm);
    addFaceLabel(pos, nrm, 1.75, id, false, piedra);
  });

  // 4 caras de la pirámide
  const apex = V3(0, APEX_Y, 0);
  const pyrDefs = {
    front: [[-1, PYR_Y0, 1], [1, PYR_Y0, 1]], right: [[1, PYR_Y0, 1], [1, PYR_Y0, -1]],
    back: [[1, PYR_Y0, -1], [-1, PYR_Y0, -1]], left: [[-1, PYR_Y0, -1], [-1, PYR_Y0, 1]]
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
    addFaceLabel(p, nrm, 1.25, id, true, piedra);
  });
  const pyrPts = [[-1, PYR_Y0, 1], [1, PYR_Y0, 1], [1, PYR_Y0, 1], [1, PYR_Y0, -1], [1, PYR_Y0, -1], [-1, PYR_Y0, -1], [-1, PYR_Y0, -1], [-1, PYR_Y0, 1]]
    .map(p => V3(...p))
    .concat([[-1, PYR_Y0, 1], [1, PYR_Y0, 1], [1, PYR_Y0, -1], [-1, PYR_Y0, -1]].flatMap(p => [V3(...p), apex]));
  piedra.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pyrPts),
    new THREE.LineBasicMaterial({ color: 0x2a2214, transparent: true, opacity: 0.6 })));

  // 12 aristas con su placa
  EDGE_LIST.forEach(pair => {
    const a = V3(...pair[0]), b = V3(...pair[1]), id = pair[2];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const len = a.distanceTo(b);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, len + 0.1, 20), makeMat('arista'));
    mesh.position.copy(mid);
    mesh.quaternion.setFromUnitVectors(V3(0, 1, 0), b.clone().sub(a).normalize());
    piedra.add(mesh);
    register(id, mesh, mid.clone());
    const sp = plateSprite(TOPICS[id].n, TOPICS[id].short);
    const horiz = V3(mid.x, 0, mid.z);
    const vertical = Math.abs(mid.x) > 0.5 && Math.abs(mid.z) > 0.5;       // pilares: salen por la diagonal
    sp.position.copy(mid).addScaledVector(horiz.normalize(), vertical ? 0.58 : 0.48);
    sp.scale.set(1.8, 0.45, 1);
    sp.renderOrder = 3;
    piedra.add(sp);
    register(id, sp, mid.clone());      // la placa también abre el tema
    items[id].mesh = mesh;              // …pero el color vive en la arista
  });
  [-1, 1].forEach(x => [-1, 1].forEach(y => [-1, 1].forEach(z => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xB99A5C, roughness: 0.45, metalness: 0.45 }));
    s.position.set(x, y, z); piedra.add(s);
  })));

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
  floor.add(circle(2.5, 0.5), circle(3.35, 0.3), circle(3.48, 0.16));
  floor.add(square(2.5, Math.PI / 4, 0.26), square(2.5, 0, 0.26));
  const tk = [];
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2, r1 = 3.35, r2 = i % 8 === 0 ? 3.7 : 3.48;
    tk.push(V3(Math.cos(a) * r1, 0, Math.sin(a) * r1), V3(Math.cos(a) * r2, 0, Math.sin(a) * r2));
  }
  floor.add(new THREE.LineSegments(loopPts(tk), lineMat(0.3)));

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
  function paint(id) {
    const it = items[id]; if (!it) return;
    const g = GROUPS[it.grp], m = it.mesh.material;
    let em = 0x000000;
    if (id === selectedId) { tmp.setHex(SELECT_COLOR); em = 0x4a3c16; }
    else if (id === hoveredId) { tmp.setHex(g.hover); em = 0x211b0e; }
    else { tmp.setHex(g.color); if (selectedId) tmp.multiplyScalar(0.66); }
    m.color.copy(tmp); m.emissive.setHex(em);
  }
  function paintAll() { ORDER.forEach(paint); }

  /* — Cámara — */
  let focusDir = null, focusDist = 0, shiftX = 0, shiftY = 0, hasOffset = false;
  function fit() {
    const asp = W / H, t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    baseDist = 1.1 * Math.max(5.0 / (2 * t), 5.6 / (2 * t * asp));
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
    const hit = ray.intersectObjects(targets, false)[0];
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
      floor.rotation.y = -t * 0.035;
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
    controls.update();
    renderer.render(scene, camera);
  })();

  // las texturas se generan después del primer cuadro, una piedra por turno
  ['piramide', 'arista', 'cara'].forEach((g, i) => setTimeout(() => { try { applyStone(g); } catch (err) {} }, 150 + i * 200));

  return {
    repaint: paintAll,
    select: function (id) {
      paintAll();
      if (id) { focusDir = items[id].dir.clone(); focusDist = baseDist * 0.8; touched = true; }
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