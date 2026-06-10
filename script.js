mapboxgl.accessToken = 'pk.eyJ1IjoieWlsaW8zMCIsImEiOiJjbW92NWF6eHMwM2t1MnpvanNsMGxtN25lIn0.aSC4s5GX5SNmJXxTfmLb7Q';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yilio30/cmq6ohhds005601sn1gsi4ja0',
  center: [104, 35],
  zoom: 3.9,
  projection: 'mercator',
  scrollZoom: false,
  boxZoom: false,
  doubleClickZoom: false,
  touchZoomRotate: false,
  dragRotate: false,
  pitchWithRotate: false,
  dragPan: true
});

const clouds = [
  {
    id: '001',
    coordinates: [118.7588, 31.9019],
    icon: 'CA/CA_001.svg',
    image: 'images/cloud001.jpg',
    card: 'cards/cloud001-card.jpg',
    bgImage: 'background/background_001.jpg',
    text: 'The vapor dissolved, leaving only the shape of a broken sugar cube in the air.',
    hudCoords: 'N 31° 54\' 07" / E 118° 45\' 32"',
    hudTime: '2024.08.23 17:36',
    location: 'Nanjing Niushoushan Scenic Area',
    energy: 45,
    themeColor: '#6D7BFF'
  },
  {
    id: '002',
    coordinates: [121.6049, 31.2117],
    icon: 'CA/CA_002.svg',
    image: 'images/cloud002.jpg',
    card: 'cards/cloud002-card.jpg',
    bgImage: 'background/background_002.jpg',
    text: "If clouds had names, this one would surely be called 'Afternoon Forgetting'.",
    hudCoords: 'N 31° 12\' 42" / E 121° 36\' 17"',
    hudTime: '2024.08.21 17:21',
    location: 'Shanghai Zhangjiang',
    energy: 82,
    themeColor: '#FF7A59'
  },
  {
    id: '003',
    coordinates: [100.5076, 30.0389],
    icon: 'CA/CA_003.svg',
    image: 'images/cloud003.jpg',
    card: 'cards/cloud003-card.jpg',
    bgImage: 'background/background_003.jpg',
    text: 'A fragment of silence over the lake, waiting for the rain that never arrived.',
    hudCoords: 'N 30° 14\' 44" / E 101° 30\' 49"',
    hudTime: '2024.09.02 14:15',
    location: 'Sichuan Newduqiao Grassland',
    energy: 52,
    themeColor: '#FF8A5B'
  },
  {
    id: '004',
    coordinates: [116.6437, 40.0895],
    icon: 'CA/CA_004.svg',
    image: 'images/cloud004.jpg',
    card: 'cards/cloud004-card.jpg',
    bgImage: 'background/background_004.jpg',
    text: 'Heavy crimson shadows cast upwards, standardizing the sunset into history.',
    hudCoords: 'N 40° 05\' 22" / E 116° 38\' 34"',
    hudTime: '2024.10.12 16:40',
    location: 'Beijing Changping District',
    energy: 75,
    themeColor: '#179D8A'
  },
  {
    id: '005',
    coordinates: [117.1268, 36.6507],
    icon: 'CA/CA_005.svg',
    image: 'images/cloud005.jpg',
    card: 'cards/cloud005-card.jpg',
    bgImage: 'background/background_005.jpg',
    text: 'Trailing behind the mountain spine, a slow silver ribbon washing the sky clean.',
    hudCoords: 'N 36° 39\' 02" / E 117° 07\' 36"',
    hudTime: '2024.06.01 18:56',
    location: 'Jinan Tangye Subdistrict',
    energy: 92,
    themeColor: '#4D6FB8'
  },
  {
    id: '006',
    coordinates: [102.8632, 30.0976],
    icon: 'CA/CA_006.svg',
    image: 'images/cloud006.jpg',
    card: 'cards/cloud006-card.jpg',
    bgImage: 'background/background_006.jpg',
    text: 'Drowsy amber light filtered through leaves, drifting like the steam of jasmine tea.',
    hudCoords: 'N 30° 39\' 56" / E 102° 51\' 48"',
    hudTime: '2024.07.14 15:20',
    location: 'Sichuan Between Xinduqiao and Tagong',
    energy: 54,
    themeColor: '#5E7FC4'
  },
  {
    id: '007',
    coordinates: [121.9808, 30.8923],
    icon: 'CA/CA_007.svg',
    image: 'images/cloud007.jpg',
    card: 'cards/cloud007-card.jpg',
    bgImage: 'background/background_007.jpg',
    text: 'So close to the sun, the cloud burns itself into a silent white prayer.',
    hudCoords: 'N 30° 53\' 32" / E 121° 58\' 51"',
    hudTime: '2024.05.20 09:45',
    location: 'Shanghai Sky Mirror',
    energy: 79,
    themeColor: '#FF6F61'
  },
  {
    id: '008',
    coordinates: [101.5138, 30.6447],
    icon: 'CA/CA_008.svg',
    image: 'images/cloud008.jpg',
    card: 'cards/cloud008-card.jpg',
    bgImage: 'background/background_008.jpg',
    text: 'Born from dust, suspended in gold; a transient mirage echoing ancient wind.',
    hudCoords: 'N 30° 02\' 41" / E 101° 30\' 49"',
    hudTime: '2024.09.18 18:10',
    location: 'Sichuan Newduqiao Grassland',
    energy: 68,
    themeColor: '#7FE7FF'
  },
  {
    id: '009',
    coordinates: [101.5336, 30.0558],
    icon: 'CA/CA_009.svg',
    image: 'images/cloud009.jpg',
    card: 'cards/cloud009-card.jpg',
    bgImage: 'background/background_009.jpg',
    text: 'Salt-soaked humidity rising, turning the evening into a floating watercolor.',
    hudCoords: 'N 30° 03\' 21" / E 101° 32\' 01"',
    hudTime: '2024.07.30 19:05',
    location: 'Sichuan Newduqiao Grassland',
    energy: 72,
    themeColor: '#F7EF3A'
  },
  {
    id: '010',
    coordinates: [120.1637, 35.9608],
    icon: 'CA/CA_010.svg',
    image: 'images/cloud010.jpg',
    card: 'cards/cloud010-card.jpg',
    bgImage: 'background/background_010.jpg',
    text: 'An ocean chill wrapped in mist, blurring the edge where stone meets foam.',
    hudCoords: 'N 35° 57\' 39" / E 120° 09\' 49"',
    hudTime: '2024.11.03 10:12',
    location: 'Qingdao Tangdao Bay Park',
    energy: 87,
    themeColor: '#d45735'
  },
  {
    id: '011',
    coordinates: [120.1613, 30.3194],
    icon: 'CA/CA_011.svg',
    image: 'images/cloud011.jpg',
    card: 'cards/cloud011-card.jpg',
    bgImage: 'background/background_011.jpg',
    text: 'Neon-soaked vapor tangled in steel structures, humming a late-night blues.',
    hudCoords: 'N 30° 19\' 05" / E 120° 09\' 41"',
    hudTime: '2024.08.08 22:15',
    location: 'Hangzhou Canal Greenbelt',
    energy: 19,
    themeColor: '#4E92FF'
  },
  {
    id: '012',
    coordinates: [121.2274, 31.0578],
    icon: 'CA/CA_012.svg',
    image: 'images/cloud012.jpg',
    card: 'cards/cloud012-card.jpg',
    bgImage: 'background/background_012.jpg',
    text: 'Vertical fog climbing the mossy cliffs, hiding the city\'s neon lungs.',
    hudCoords: 'N 31° 03\' 28" / E 121° 13\' 39"',
    hudTime: '2024.12.25 20:30',
    location: 'Shanghai Wenhui Road',
    energy: 91,
    themeColor: '#D86A8F'
  },
  {
    id: '013',
    coordinates: [126.6168, 45.6943],
    icon: 'CA/CA_013.svg',
    image: 'images/cloud013.jpg',
    card: 'cards/cloud013-card.jpg',
    bgImage: 'background/background_013.jpg',
    text: 'Frozen breath crystallized in the twilight sky, brittle, sharp, and brief.',
    hudCoords: 'N 45° 41\' 39" / E 126° 37\' 00"',
    hudTime: '2025.01.15 16:00',
    location: 'Harbin Qunli New District',
    energy: 75,
    themeColor: '#FF7F6A'
  },
  {
    id: '014',
    coordinates: [108.8352, 34.0786],
    icon: 'CA/CA_014.svg',
    image: 'images/cloud014.jpg',
    card: 'cards/cloud014-card.jpg',
    bgImage: 'background/background_014.jpg',
    text: 'An ancient dust cloud, settling heavily like static ink on rough rice paper.',
    hudCoords: 'N 34° 04\' 43" / E 108° 50\' 07"',
    hudTime: '2024.04.05 13:50',
    location: 'Xian Changan District',
    energy: 57,
    themeColor: '#B8FFF1'
  },
  {
    id: '015',
    coordinates: [119.8352, 28.4016],
    icon: 'CA/CA_015.svg',
    image: 'images/cloud015.jpg',
    card: 'cards/cloud015-card.jpg',
    bgImage: 'background/background_015.jpg',
    text: 'Tropical vertigo—blinding white foam evaporating into endless, heavy sapphire.',
    hudCoords: 'N 28° 24\' 06" / E 119° 50\' 07"',
    hudTime: '2024.03.18 11:25',
    location: 'Zhejiang Between Jinyunxi and Lishui',
    energy: 81,
    themeColor: '#FF7A59'
  },
  {
    id: '016',
    coordinates: [121.2039, 31.4386],
    icon: 'CA/CA_016.svg',
    image: 'images/cloud016.jpg',
    card: 'cards/cloud016-card.jpg',
    bgImage: 'background/background_016.jpg',
    text: 'A quiet daydream trapped between the snow mountain and the reflection of the water.',
    hudCoords: 'N 31° 02\' 19" / E 121° 12\' 14"',
    hudTime: '2024.05.12 17:02',
    location: 'Thames Town Lake Area',
    energy: 63,
    themeColor: '#7356E8'
  }
];

let activePolaroidMarker = null;
let activeTextMarker = null;
let activeCardCleanup = null;
let textHideTimeout = null;

const archivedCloudIds = new Set();
const cloudNodes = new Map();

function playInkBackground(imageUrl) {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  if (!imageUrl) {
    const layers = mapContainer.querySelectorAll('.ink-bg-layer');
    layers.forEach(layer => {
      layer.classList.remove('is-active');
      setTimeout(() => layer.remove(), 2500);
    });
    return;
  }

  const existingLayers = Array.from(mapContainer.querySelectorAll('.ink-bg-layer'));
  const lastLayer = existingLayers[existingLayers.length - 1];
  if (lastLayer && lastLayer.dataset.url === imageUrl) return;

  const newLayer = document.createElement('div');
  newLayer.className = 'ink-bg-layer';
  newLayer.dataset.url = imageUrl;
  newLayer.style.backgroundImage = `url('${imageUrl}')`;

  mapContainer.insertBefore(newLayer, mapContainer.firstChild);

  void newLayer.offsetWidth;

  newLayer.classList.add('is-active');

  if (existingLayers.length > 0) {
    existingLayers.forEach(oldLayer => {
      oldLayer.classList.remove('is-active');
      setTimeout(() => {
        if (oldLayer.parentNode) oldLayer.remove();
      }, 2500);
    });
  }
}

map.on('style.load', () => {
  if (map.getFog()) { map.setFog(null); }

  const layers = map.getStyle().layers;
  let chinaLayerId = null;
  for (const layer of layers) {
    if (!layer.id.startsWith('mapbox') && !layer.id.startsWith('basemap') && layer.type === 'fill') {
      chinaLayerId = layer.id;
      break;
    }
  }

  initCloudMarkers();
});

function updateHUD(cloud) {
  if (!cloud) return;
  document.getElementById('hud-coords').innerText = cloud.hudCoords;
  document.getElementById('hud-datetime').innerText = cloud.hudTime;
  document.getElementById('hud-location').innerText = cloud.location;
  document.getElementById('hud-energy-value').innerText = `${cloud.energy}%`;
  document.getElementById('hud-energy-track').style.width = `${cloud.energy}%`;
}

function setHUDThemeColor(color) {
  const root = document.documentElement;
  if (color) {
    root.style.setProperty('--hud-text-color', color);
    root.style.setProperty('--hud-energy-color', color);
  } else {
    root.style.setProperty('--hud-text-color', '#6EA8FE');
    root.style.setProperty('--hud-energy-color', '#6EA8FE');
  }
}

function initCloudMarkers() {
  document.documentElement.style.setProperty('--cloud-scale', 1);

  clouds.forEach((cloud) => {
    const node = document.createElement('div');
    node.className = 'cloud-node';
    node.dataset.cloudId = cloud.id;

    const scaler = document.createElement('div');
    scaler.className = 'cloud-node-scaler';

    const visual = document.createElement('div');
    visual.className = 'cloud-marker-visual';
    const icon = document.createElement('img');
    icon.src = cloud.icon;
    icon.className = 'cloud-icon';
    visual.appendChild(icon);

    const particleLayer = document.createElement('div');
    particleLayer.className = 'particle-layer';

    const traceVisual = document.createElement('div');
    traceVisual.className = 'archive-trace-visual';

    scaler.appendChild(visual);
    scaler.appendChild(particleLayer);
    scaler.appendChild(traceVisual);
    node.appendChild(scaler);

    cloudNodes.set(cloud.id, node);

    new mapboxgl.Marker({ element: node })
      .setLngLat(cloud.coordinates)
      .addTo(map);

    node.addEventListener('click', (event) => {
      event.stopPropagation();

      if (cloud.bgImage) {
        playInkBackground(cloud.bgImage);
      }

      setHUDThemeColor(cloud.themeColor);

if (!archivedCloudIds.has(cloud.id)) {
        archiveCloud(cloud);
      }
    });

    node.addEventListener('mouseenter', () => {
      updateHUD(cloud);
      if (archivedCloudIds.has(cloud.id)) {
        clearTimeout(textHideTimeout);
        document.querySelectorAll('.collected-fragment').forEach(f => f.classList.remove('trace-hovered'));
        showTextBubble(cloud);
        toggleFragmentResonance(cloud.id, true);
      }
    });

    node.addEventListener('mouseleave', () => {
      if (archivedCloudIds.has(cloud.id)) {
        toggleFragmentResonance(cloud.id, false);
        textHideTimeout = setTimeout(() => {
          clearActiveTextBubble();
        }, 120);
      }
    });
  });
}

function toggleFragmentResonance(cloudId, isResonating) {
  const targetFragment = document.querySelector(`.collected-fragment[data-cloud-id="${cloudId}"]`);
  if (targetFragment) {
    if (isResonating) {
      targetFragment.classList.add('trace-hovered');
    } else {
      targetFragment.classList.remove('trace-hovered');
    }
  }
}

function archiveCloud(cloud) {
  const node = cloudNodes.get(cloud.id);
  if (!node) return;

  clearActivePolaroid();
  clearActiveTextBubble();
  clearSelectedClouds();

  node.classList.add('selected');
  createDisperseParticles(node.querySelector('.particle-layer'));

  if (window.triggerCloudMemoryReaction) window.triggerCloudMemoryReaction();

  window.setTimeout(() => {
    node.classList.add('is-archived');
    node.classList.remove('selected');
    renderArchiveTrace(node.querySelector('.archive-trace-visual'), cloud);
  }, 180);

  archivedCloudIds.add(cloud.id);
  showPolaroidBubble(cloud);
}

function showPolaroidBubble(cloud) {
  const polaroidMarkerElement = document.createElement('div');
  polaroidMarkerElement.className = 'polaroid-bubble-marker';

  const stage = document.createElement('div');
  stage.className = 'polaroid-bubble-stage';

  const img = document.createElement('img');
  img.src = cloud.image;
  img.className = 'polaroid-bubble-img';

  stage.appendChild(img);
  polaroidMarkerElement.appendChild(stage);

  activePolaroidMarker = new mapboxgl.Marker({
    element: polaroidMarkerElement,
    anchor: 'bottom',
    offset: [0, -40]
  })
    .setLngLat(cloud.coordinates)
    .addTo(map);

  polaroidMarkerElement.addEventListener('click', (event) => {
    event.stopPropagation();
    clearActivePolaroid();
    showCloudCard(cloud, true);
  });
}

function showCloudCard(cloud, shouldCreateFragment = false) {
  if (activeCardCleanup) activeCardCleanup();
  updateHUD(cloud);

  if (window.triggerCloudMemoryReaction) window.triggerCloudMemoryReaction();

  const overlay = document.createElement('div');
  overlay.className = 'card-overlay';

  const inner = document.createElement('div');
  inner.className = 'card-overlay-inner';

  const cardImg = document.createElement('img');
  cardImg.src = cloud.card;
  cardImg.className = 'popup-card';

  const closeButton = document.createElement('button');
  closeButton.className = 'card-overlay-close';
  const closeIcon = document.createElement('img');
  closeIcon.src = 'ICON/icon_close.svg';
  closeButton.appendChild(closeIcon);

  inner.appendChild(cardImg);
  inner.appendChild(closeButton);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  function closeCard() {
    closeButton.classList.add('is-closing');
    inner.classList.add('is-closing');
    overlay.classList.add('is-closing');

    inner.addEventListener('animationend', () => {
      if (shouldCreateFragment) {
        createMemoryFragment(cloud);
      }
      overlay.remove();
      if (activeCardCleanup === closeCard) activeCardCleanup = null;
    }, { once: true });

    window.removeEventListener('keydown', handleCardKeydown);
  }

  function handleCardKeydown(event) { if (event.key === 'Escape') closeCard(); }
  overlay.addEventListener('click', (event) => { if (event.target === overlay) closeCard(); });
  closeButton.addEventListener('click', (event) => { event.stopPropagation(); closeCard(); });
  window.addEventListener('keydown', handleCardKeydown);

  activeCardCleanup = closeCard;
}

function createMemoryFragment(cloud) {
  const fragment = document.createElement('div');
  fragment.className = 'collected-fragment';
  fragment.dataset.cloudId = cloud.id;

  const randomRotation = Math.random() * 30 - 15;
  fragment.style.setProperty('--base-rot', `${randomRotation.toFixed(1)}deg`);

  const isLeft = Math.random() > 0.5;
  if (isLeft) { fragment.classList.add('is-left'); } else { fragment.classList.add('is-right'); }

  fragment.innerHTML = `
    <div class="fragment-label">CLOUD_${cloud.id}</div>
    <div class="fragment-inner">
      <img src="${cloud.image}" class="fragment-img">
    </div>
  `;

  const minEdgeDistance = 30;
  const maxEdgeDistance = Math.min(window.innerWidth * 0.16, 220);
  const randomSpreadX = Math.random() * (maxEdgeDistance - minEdgeDistance);

  let x;
  if (isLeft) {
    x = minEdgeDistance + randomSpreadX;
  } else {
    x = window.innerWidth - 100 - minEdgeDistance - randomSpreadX;
  }

  const paddingY = 60;
  const y = paddingY + Math.random() * (window.innerHeight - paddingY * 2 - 80);

  fragment.style.left = `${x}px`;
  fragment.style.top = `${y}px`;
  fragment.style.animationDelay = `-${Math.random() * 16}s`;

  fragment.addEventListener('mouseenter', () => {
    updateHUD(cloud);
  });

  fragment.addEventListener('click', (event) => {
    event.stopPropagation();
    showCloudCard(cloud, false);
  });

  document.body.appendChild(fragment);
}

function showTextBubble(cloud) {
  if (activeTextMarker && activeTextMarker.getElement().dataset.cloudId === cloud.id) return;
  clearActiveTextBubble();

  const textMarkerElement = document.createElement('div');
  textMarkerElement.className = 'text-bubble-marker';
  textMarkerElement.dataset.cloudId = cloud.id;

  const stage = document.createElement('div');
  stage.className = 'text-bubble-stage';
  const p = document.createElement('p');
  p.className = 'text-bubble-content';
  p.innerText = cloud.text || "";

  stage.appendChild(p);
  textMarkerElement.appendChild(stage);

  activeTextMarker = new mapboxgl.Marker({
    element: textMarkerElement,
    anchor: 'bottom',
    offset: [0, -36]
  })
    .setLngLat(cloud.coordinates)
    .addTo(map);
}

function clearActivePolaroid() { if (activePolaroidMarker) { activePolaroidMarker.remove(); activePolaroidMarker = null; } }
function clearActiveTextBubble() { if (activeTextMarker) { activeTextMarker.remove(); activeTextMarker = null; } }
function clearSelectedClouds() { document.querySelectorAll('.cloud-node').forEach((el) => { el.classList.remove('selected'); }); }

function createDisperseParticles(particleLayer) {
  particleLayer.innerHTML = '';
  const particleCount = 42;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    const angle = Math.random() * Math.PI * 2;
    const distance = 44 + Math.random() * 74;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance + 18;
    const size = 2 + Math.random() * 5;
    particle.className = 'cloud-particle';
    particle.style.setProperty('--tx', `${tx.toFixed(1)}px`);
    particle.style.setProperty('--ty', `${ty.toFixed(1)}px`);
    particle.style.setProperty('--size', `${size.toFixed(1)}px`);
    particle.style.setProperty('--rotate', `${(Math.random() * 160 - 80).toFixed(1)}deg`);
    particle.style.setProperty('--duration', `${(720 + Math.random() * 560).toFixed(0)}ms`);
    particle.style.setProperty('--delay', `${(Math.random() * 90).toFixed(0)}ms`);
    particleLayer.appendChild(particle);
  }
  window.setTimeout(() => { particleLayer.innerHTML = ''; }, 1450);
}

function renderArchiveTrace(traceVisual, cloud) {
  if (traceVisual.children.length > 0) return;
  const cloudBlots = [
    { x: 23, y: 39, rx: 17, ry: 10 }, { x: 38, y: 29, rx: 18, ry: 14 },
    { x: 52, y: 34, rx: 22, ry: 15 }, { x: 68, y: 39, rx: 19, ry: 11 }, { x: 47, y: 44, rx: 27, ry: 9 }
  ];
  for (let i = 0; i < 54; i++) {
    const particle = document.createElement('span');
    const blot = cloudBlots[i % cloudBlots.length];
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random());
    const driftX = Math.cos(angle) * blot.rx * radius;
    const driftY = Math.sin(angle) * blot.ry * radius;
    const size = 4 + Math.random() * 10;
    particle.style.left = `${blot.x + driftX}px`;
    particle.style.top = `${blot.y + driftY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${Math.max(3, size * (0.55 + Math.random() * 0.38))}px`;
    particle.style.opacity = 0.14 + Math.random() * 0.34;
    particle.style.setProperty('--blur', `${(0.4 + Math.random() * 1.6).toFixed(1)}px`);
    particle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 34 - 17}deg)`;
    traceVisual.appendChild(particle);
  }
  const label = document.createElement('div');
  label.className = 'archive-trace-label';
  label.innerText = `CA_${cloud.id}`;
  traceVisual.appendChild(label);
}

map.on('click', () => {
  clearActivePolaroid();
  clearActiveTextBubble();
  clearSelectedClouds();
  document.querySelectorAll('.collected-fragment').forEach(f => f.classList.remove('trace-hovered'));
  if (activeCardCleanup) { activeCardCleanup(); }

  playInkBackground(null);
  setHUDThemeColor(null);
});

function initAtmosphericCloud() {
  const container = document.createElement('div');
  container.className = 'atmospheric-cloud-container';
  container.innerHTML = `
    <div class="cloud-mass mass-1"></div>
    <div class="cloud-mass mass-2"></div>
    <div class="cloud-mass mass-3"></div>
    <div class="cloud-mass mass-4"></div>
  `;
  document.body.appendChild(container);

  let pushX = 0, pushY = 0;
  let targetPushX = 0, targetPushY = 0;
  let breatheTime = 0;
  let breatheSpeed = 0.001;
  let targetBreatheSpeed = 0.003;
  let breatheAmplitude = 0.006;
  let targetBreatheAmplitude = 0.008;
  let currentScale = 1;
  let targetScale = 1;
  let currentOpacity = 0.5;
  let targetOpacity = 0.8;
  let lastActivity = Date.now();
  const idleTimeout = 10000;
  let isSleeping = false;
  let freezeBreatheTimer = 0;
  let waveTimeA = Math.random() * 50;
  let waveTimeB = Math.random() * 50;
  let waveTimeC = Math.random() * 50;

  window.addEventListener('mousemove', (e) => {
    lastActivity = Date.now();
    if (isSleeping) { isSleeping = false; targetOpacity = 0.75; }
    const rect = container.getBoundingClientRect();
    const cloudCenterX = rect.left + rect.width / 2;
    const cloudCenterY = rect.top + rect.height / 2;
    const dx = e.clientX - cloudCenterX;
    const dy = e.clientY - cloudCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const auraRadius = 450;
    if (distance < auraRadius) {
      const force = (auraRadius - distance) / auraRadius;
      const slipAngle = Math.atan2(dy, dx) + 0.25;
      targetPushX = -Math.cos(slipAngle) * force * 30;
      targetPushY = -Math.sin(slipAngle) * force * 15;
      targetBreatheSpeed = 0.005;
      targetBreatheAmplitude = 0.002;
    } else {
      targetPushX = 0; targetPushY = 0;
      targetBreatheSpeed = 0.002; targetBreatheAmplitude = 0.01;
    }
  });

  function animationLoop() {
    const now = Date.now();
    if (now - lastActivity > idleTimeout) {
      isSleeping = true; targetOpacity = 0.0; targetPushX = 0; targetPushY = 0;
    }
    waveTimeA += 0.0011; waveTimeB += 0.0007; waveTimeC += 0.0019;
    const macroDriftX = Math.sin(waveTimeA) * 160 + Math.cos(waveTimeB * 1.5) * 40 + 80;
    const macroFloatY = Math.cos(waveTimeB) * 27.5 + Math.sin(waveTimeC * 1.2) * 12.5;
    const macroHeading = Math.sin(waveTimeC * 0.5) * 5;
    pushX += (targetPushX - pushX) * 0.035;
    pushY += (targetPushY - pushY) * 0.035;
    breatheSpeed += (targetBreatheSpeed - breatheSpeed) * 0.04;
    breatheAmplitude += (targetBreatheAmplitude - breatheAmplitude) * 0.04;
    const scaleLerpFactor = isSleeping ? 0.02 : 0.008;
    currentScale += (targetScale - currentScale) * scaleLerpFactor;
    currentOpacity += (targetOpacity - currentOpacity) * scaleLerpFactor;
    if (freezeBreatheTimer > 0) { freezeBreatheTimer -= 16.7; } else { breatheTime += breatheSpeed; }
    const dynamicBreatheFactor = Math.sin(breatheTime) * breatheAmplitude;
    const macroScaleFactor = 1 + Math.sin(waveTimeA * 2) * 0.03;
    const computedScale = currentScale * macroScaleFactor * (1 + dynamicBreatheFactor);
    container.style.transform = `translate3d(${macroDriftX + pushX}px, ${macroFloatY + pushY}px, 0) scale(${computedScale}) rotateZ(${macroHeading}deg)`;
    container.style.opacity = currentOpacity;
    requestAnimationFrame(animationLoop);
  }

  window.triggerCloudMemoryReaction = function() {
    if (isSleeping) return;
    freezeBreatheTimer = 800;
    const previousScale = targetScale;
    targetScale = 1.015;
    setTimeout(() => { if (!isSleeping) targetScale = previousScale; }, 400);
    const rippleWave = document.createElement('div');
    rippleWave.className = 'cloud-ripple';
    container.appendChild(rippleWave);
    setTimeout(() => rippleWave.remove(), 2300);
  };
  requestAnimationFrame(animationLoop);
}

initAtmosphericCloud();

function resetExperience() {
  document.querySelectorAll('.collected-fragment').forEach(fragment => {
    fragment.remove();
  });

  archivedCloudIds.clear();
  cloudNodes.forEach((node) => {
    node.classList.remove('is-archived');

    const traceVisual = node.querySelector('.archive-trace-visual');
    if (traceVisual) {
      traceVisual.innerHTML = '';
    }
  });

  if (activeCardCleanup) {
    activeCardCleanup();
  }

  clearActivePolaroid();
  clearActiveTextBubble();

  playInkBackground(null);
  setHUDThemeColor(null);

  console.log("Experience has been reset.");
}

function initResetButton() {
  const btn = document.createElement('button');
  btn.className = 'reset-btn';
  btn.innerHTML = `<img src="ICON/icon_reset.svg" alt="Reset">`;

  btn.addEventListener('click', () => {
    resetExperience();
  });

  document.body.appendChild(btn);
}

initResetButton();