/* ═══ Datos: los 21 temas ═══ */
const GROUPS = {
  piramide: { label: 'Cúspide Piramidal · Cara de pirámide', index: 'Pirámide · Trascendencia', color: 0xC8A97E, hover: 0xDDC298 },
  arista:   { label: 'Cuerpo Cúbico · Arista',               index: 'Aristas · Ciencia, artes y deber', color: 0x949DAA, hover: 0xB6BFCB },
  cara:     { label: 'Base Moral · Cara del cubo',           index: 'Caras del cubo · Fundamentos', color: 0x768275, hover: 0x93A092 }
};
const SELECT_COLOR = 0xE5DFC8;

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

/* ═══ Geometría: dónde vive cada tema ═══ */
const APEX_Y = 2.6;
const FACE_MAP = {            // 5 caras del cubo (la superior queda bajo la pirámide)
  bottom: 't1', front: 't10', right: 't14', back: 't15', left: 't16'
};
const PYR_MAP = { front: 't19', right: 't11', back: 't18', left: 't17' };
// 12 aristas: anillo superior, pilares, anillo inferior
const EDGE_LIST = [
  // superior
  [[-1, 1, 1], [ 1, 1, 1], 't12'], [[ 1, 1, 1], [ 1, 1,-1], 't9'],
  [[ 1, 1,-1], [-1, 1,-1], 't13'], [[-1, 1,-1], [-1, 1, 1], 't21'],
  // pilares
  [[-1,-1, 1], [-1, 1, 1], 't3'], [[ 1,-1, 1], [ 1, 1, 1], 't4'],
  [[ 1,-1,-1], [ 1, 1,-1], 't5'], [[-1,-1,-1], [-1, 1,-1], 't6'],
  // inferior
  [[-1,-1, 1], [ 1,-1, 1], 't2'], [[ 1,-1, 1], [ 1,-1,-1], 't7'],
  [[ 1,-1,-1], [-1,-1,-1], 't8'], [[-1,-1,-1], [-1,-1, 1], 't20']
];

/* ═══ Escena ═══ */
const canvas = document.getElementById('three');
const stage = document.getElementById('stage');
const tip = document.getElementById('tip');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
const HOME = new THREE.Vector3(5.6, 3.6, 6.4);
const TARGET = new THREE.Vector3(0, 0.8, 0);
camera.position.copy(HOME);

const controls = new THREE.OrbitControls(camera, canvas);
controls.target.copy(TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.minDistance = 4;
controls.maxDistance = 14;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.8;

scene.add(new THREE.AmbientLight(0xffffff, 0.55));
const key = new THREE.DirectionalLight(0xfff1dc, 0.9); key.position.set(5, 8, 6); scene.add(key);
const fill = new THREE.DirectionalLight(0x9db2d6, 0.35); fill.position.set(-6, -2, -5); scene.add(fill);

const piedra = new THREE.Group();
scene.add(piedra);

const items = {};       // id -> { mesh, grp, dir }
const pickables = [];

function makeMat(grp) {
  return new THREE.MeshStandardMaterial({
    color: GROUPS[grp].color, roughness: 0.88, metalness: 0.05,
    flatShading: true, side: THREE.DoubleSide, emissive: 0x000000
  });
}
function register(id, mesh, dir) {
  mesh.userData.id = id;
  piedra.add(mesh);
  pickables.push(mesh);
  items[id] = { mesh, grp: TOPICS[id].grp, dir: dir.clone().normalize() };
}

/* Etiquetas con canvas */
function wrapText(ctx, text, maxW) {
  const words = text.split(' '); const lines = []; let line = '';
  words.forEach(w => {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
  });
  lines.push(line); return lines;
}
function labelTexture(num, short) {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.textAlign = 'center'; ctx.fillStyle = '#E5DFC8';
  ctx.font = '200 150px Montserrat, sans-serif';
  ctx.fillText(String(num), 256, 230);
  ctx.fillStyle = 'rgba(229,223,200,.88)';
  ctx.font = '500 38px Montserrat, sans-serif';
  const lines = wrapText(ctx, short, 400);
  lines.forEach((l, i) => ctx.fillText(l.toUpperCase(), 256, 295 + i * 46));
  const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
}
function addLabelPlane(pos, normal, size, id) {
  const tp = TOPICS[id];
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshBasicMaterial({ map: labelTexture(tp.n, tp.short), transparent: true, depthWrite: false })
  );
  m.position.copy(pos).addScaledVector(normal, 0.02);
  m.lookAt(pos.clone().add(normal));
  piedra.add(m);
}
function badgeSprite(num) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.beginPath(); ctx.arc(64, 64, 56, 0, Math.PI * 2);
  ctx.fillStyle = '#15171B'; ctx.fill();
  ctx.lineWidth = 5; ctx.strokeStyle = '#B6BFCB'; ctx.stroke();
  ctx.fillStyle = '#E5DFC8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '600 56px Montserrat, sans-serif'; ctx.fillText(String(num), 64, 68);
  return new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
}

/* Caras del cubo (5) */
const faceDefs = {
  bottom: { n: new THREE.Vector3(0, -1, 0) }, front: { n: new THREE.Vector3(0, 0, 1) },
  right:  { n: new THREE.Vector3(1, 0, 0) },  back:  { n: new THREE.Vector3(0, 0, -1) },
  left:   { n: new THREE.Vector3(-1, 0, 0) }
};
Object.keys(FACE_MAP).forEach(k => {
  const id = FACE_MAP[k]; const nrm = faceDefs[k].n; const pos = nrm.clone();
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), makeMat('cara'));
  mesh.position.copy(pos); mesh.lookAt(pos.clone().add(nrm));
  const dir = nrm.clone(); if (k === 'bottom') dir.set(0, -1, 0.18);
  register(id, mesh, dir);
  addLabelPlane(pos, nrm, 1.5, id);
});

/* Caras de la pirámide (4) */
const apex = new THREE.Vector3(0, APEX_Y, 0);
const pyrDefs = {
  front: [[-1, 1, 1], [1, 1, 1]], right: [[1, 1, 1], [1, 1, -1]],
  back:  [[1, 1, -1], [-1, 1, -1]], left: [[-1, 1, -1], [-1, 1, 1]]
};
Object.keys(PYR_MAP).forEach(k => {
  const id = PYR_MAP[k];
  const a = new THREE.Vector3(...pyrDefs[k][0]), b = new THREE.Vector3(...pyrDefs[k][1]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute([a.x,a.y,a.z, b.x,b.y,b.z, apex.x,apex.y,apex.z], 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, makeMat('piramide'));
  const centroid = a.clone().add(b).add(apex).divideScalar(3);
  const nrm = new THREE.Vector3().crossVectors(b.clone().sub(a), apex.clone().sub(a)).normalize();
  register(id, mesh, nrm.clone().add(new THREE.Vector3(0, 0.15, 0)));
  addLabelPlane(centroid.clone().addScaledVector(nrm, 0.0).add(new THREE.Vector3(0, -0.12, 0)), nrm, 0.95, id);
});
// Contorno de la pirámide
const pyrLines = new THREE.BufferGeometry().setFromPoints([
  [-1,1,1],[1,1,1],[1,1,1],[1,1,-1],[1,1,-1],[-1,1,-1],[-1,1,-1],[-1,1,1]
].map(p => new THREE.Vector3(...p)).concat(
  [[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]].flatMap(p => [new THREE.Vector3(...p), apex])
));
piedra.add(new THREE.LineSegments(pyrLines, new THREE.LineBasicMaterial({ color: 0xE5DFC8, transparent: true, opacity: 0.55 })));

/* Aristas del cubo (12) */
EDGE_LIST.forEach(([p, q, id]) => {
  const a = new THREE.Vector3(...p), b = new THREE.Vector3(...q);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const len = a.distanceTo(b);
  const geo = new THREE.CylinderGeometry(0.1, 0.1, len + 0.1, 10);
  const mesh = new THREE.Mesh(geo, makeMat('arista'));
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  register(id, mesh, mid.clone());
  const sp = badgeSprite(TOPICS[id].n);
  sp.position.copy(mid).add(mid.clone().normalize().multiplyScalar(0.28));
  sp.scale.set(0.42, 0.42, 1);
  piedra.add(sp);
});
// Esferas en los vértices del cubo (remate de sillar)
[-1, 1].forEach(x => [-1, 1].forEach(y => [-1, 1].forEach(z => {
  const s = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12),
    new THREE.MeshStandardMaterial({ color: 0xB5AC9C, roughness: 0.9 }));
  s.position.set(x, y, z); piedra.add(s);
})));

/* ═══ Estado visual ═══ */
let hoveredId = null, selectedId = null;
function paint(id) {
  const it = items[id]; if (!it) return;
  const g = GROUPS[it.grp];
  const m = it.mesh.material;
  if (id === selectedId) { m.color.setHex(SELECT_COLOR); m.emissive.setHex(0x3a3626); }
  else if (id === hoveredId) { m.color.setHex(g.hover); m.emissive.setHex(0x1a1a1a); }
  else { m.color.setHex(g.color); m.emissive.setHex(0x000000); }
}

/* ═══ Panel e índice ═══ */
const details = document.getElementById('details');
const indexEl = document.getElementById('index');
const TAGCLASS = { piramide: 'tag-piramide', arista: 'tag-arista', cara: 'tag-cara' };

['piramide', 'arista', 'cara'].forEach(g => {
  const ids = Object.keys(TOPICS).filter(id => TOPICS[id].grp === g).sort((a, b) => TOPICS[a].n - TOPICS[b].n);
  const wrap = document.createElement('div'); wrap.className = 'index-group';
  wrap.innerHTML = `<div class="index-title ${g}">${GROUPS[g].index}</div><div class="index-grid"></div>`;
  const grid = wrap.querySelector('.index-grid');
  ids.forEach(id => {
    const b = document.createElement('button');
    b.className = 'topic-btn'; b.id = 'btn-' + id;
    b.textContent = TOPICS[id].n + '. ' + TOPICS[id].short;
    b.addEventListener('click', () => select(id, true));
    b.addEventListener('mouseenter', () => setHover(id));
    b.addEventListener('mouseleave', () => setHover(null));
    grid.appendChild(b);
  });
  indexEl.appendChild(wrap);
});

function select(id, focus) {
  const prev = selectedId; selectedId = id;
  if (prev) paint(prev);
  paint(id);
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active-btn'));
  const btn = document.getElementById('btn-' + id); if (btn) btn.classList.add('active-btn');
  const t = TOPICS[id];
  details.innerHTML = `
    <div class="fade-in">
      <span class="tag ${TAGCLASS[t.grp]}">${GROUPS[t.grp].label}</span>
      <h2 class="detail-title">${t.n}. ${t.title}</h2>
      <div class="box"><strong>Síntesis</strong>${t.sint}</div>
      <div class="box"><strong>Complemento</strong>${t.comp}</div>
    </div>`;
  if (focus) focusOn(items[id].dir);
  setSpin(false);
  if (window.innerWidth <= 1024 && focus === 'scroll') details.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function setHover(id) {
  const prev = hoveredId; hoveredId = id;
  if (prev && prev !== id) paint(prev);
  if (id) paint(id);
}

/* ═══ Cámara: enfocar y restablecer ═══ */
let focusDir = null, focusDist = 7.6;
function focusOn(dir) { focusDir = dir.clone().normalize(); focusDist = 7.6; }
controls.addEventListener('start', () => { focusDir = null; });

function setSpin(on) {
  controls.autoRotate = on;
  document.getElementById('btn-spin').textContent = on ? 'Pausar giro' : 'Reanudar giro';
}
document.getElementById('btn-spin').addEventListener('click', () => setSpin(!controls.autoRotate));
document.getElementById('btn-reset').addEventListener('click', () => {
  focusDir = HOME.clone().sub(TARGET).normalize(); focusDist = HOME.distanceTo(TARGET);
});

/* ═══ Interacción: hover y clic ═══ */
const ray = new THREE.Raycaster(); const mouse = new THREE.Vector2();
function pick(ev) {
  const r = canvas.getBoundingClientRect();
  mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(mouse, camera);
  const hit = ray.intersectObjects(pickables, false)[0];
  return hit ? hit.object.userData.id : null;
}
canvas.addEventListener('pointermove', ev => {
  if (ev.buttons) { tip.style.opacity = 0; return; }
  const id = pick(ev);
  setHover(id);
  canvas.classList.toggle('pointing', !!id);
  if (id) {
    const r = stage.getBoundingClientRect();
    tip.textContent = TOPICS[id].n + '. ' + TOPICS[id].short;
    tip.style.left = (ev.clientX - r.left) + 'px'; tip.style.top = (ev.clientY - r.top) + 'px'; tip.style.opacity = 1;
  } else tip.style.opacity = 0;
});
canvas.addEventListener('pointerleave', () => { setHover(null); tip.style.opacity = 0; });

let down = null;
canvas.addEventListener('pointerdown', ev => { down = { x: ev.clientX, y: ev.clientY }; canvas.classList.add('grabbing'); });
window.addEventListener('pointerup', ev => {
  canvas.classList.remove('grabbing');
  if (!down) return;
  const moved = Math.hypot(ev.clientX - down.x, ev.clientY - down.y); down = null;
  if (moved < 5 && ev.target === canvas) {
    const id = pick(ev);
    if (id) select(id, 'scroll');
  }
});

/* ═══ Render ═══ */
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage); resize();

(function loop() {
  if (focusDir) {
    const off = camera.position.clone().sub(TARGET);
    const dist = off.length();
    const dir = off.normalize().lerp(focusDir, 0.07).normalize();
    camera.position.copy(TARGET).addScaledVector(dir, dist + (focusDist - dist) * 0.07);
    if (dir.distanceTo(focusDir) < 0.01 && Math.abs(dist - focusDist) < 0.05) focusDir = null;
  }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
})();