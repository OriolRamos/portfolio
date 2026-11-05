import * as THREE from 'three';
import Lenis from 'lenis';
import { portfolioData } from './data.js';
import { createFloppyDiskMesh } from './floppy.js';
import { createFloppyDriveUnit } from './floppyDrive.js';
import { playMechanicalClick, playFloppyInsertSound } from './sound.js';

// --- STATE MANAGEMENT ---
let currentLang = 'ca'; // 'ca' | 'es' | 'en'
let isLightMode = false; // false = Fons Fosc, true = Fons Blanc
let activeIndex = 0;
let currentStageIndex = 0;
let isSoundEnabled = true;
let isTransitioning = false;
const disks = portfolioData.disks;
const diskMeshes = [];

// DOM References: Main & Gallery
const heroEl = document.getElementById('hero');
const canvasContainer = document.getElementById('canvas-container');
const canvas = document.getElementById('three-canvas');
const diskTabsContainer = document.getElementById('disk-tabs');
const activeDiskNumEl = document.getElementById('active-disk-num');
const activeDiskTitleEl = document.getElementById('active-disk-title');
const activeDiskRoleEl = document.getElementById('active-disk-role');
const openDiskModalBtn = document.getElementById('open-disk-modal-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIconEl = document.getElementById('theme-icon');
const uiThemeBtn = document.getElementById('ui-theme-btn');
const scrollPrompt = document.getElementById('scroll-prompt');

// Navigation & Curtain
const navBio = document.getElementById('nav-bio');
const navDisks = document.getElementById('nav-disks');
const langBtns = document.querySelectorAll('.lang-btn');
const transitionCurtain = document.getElementById('transition-curtain');
const viewportContainer = document.getElementById('viewport-container');

// Dedicated Stage Detail View (A24 Backrooms Style)
const stageDetailContainer = document.getElementById('stage-detail-container');
const stageBackBtn = document.getElementById('stage-back-btn');
const stageBackText = document.getElementById('stage-back-text');
const stageBadge = document.getElementById('stage-badge');
const stageTitle = document.getElementById('stage-title');
const stageSubtitle = document.getElementById('stage-subtitle');
const stageLogoImg = document.getElementById('stage-logo-img');

const metaRoleLabel = document.getElementById('meta-role-label');
const metaRoleVal = document.getElementById('meta-role-val');
const metaEntityLabel = document.getElementById('meta-entity-label');
const metaEntityVal = document.getElementById('meta-entity-val');
const metaPeriodLabel = document.getElementById('meta-period-label');
const metaPeriodVal = document.getElementById('meta-period-val');
const metaLocationLabel = document.getElementById('meta-location-label');
const metaLocationVal = document.getElementById('meta-location-val');

const stageWebsiteLink = document.getElementById('stage-website-link');
const stageWebsiteText = document.getElementById('stage-website-text');
const stageDownloadCv = document.getElementById('stage-download-cv');

const stageSec1Label = document.getElementById('stage-sec-1-label');
const stageOverviewText = document.getElementById('stage-overview-text');
const stageSec2Label = document.getElementById('stage-sec-2-label');
const stageMetricsRow = document.getElementById('stage-metrics-row');
const stageSec3Label = document.getElementById('stage-sec-3-label');
const stageHighlightsList = document.getElementById('stage-highlights-list');
const stageSec4Label = document.getElementById('stage-sec-4-label');
const stageStackWrap = document.getElementById('stage-stack-wrap');

const stageNextBanner = document.getElementById('stage-next-banner');
const upNextTag = document.getElementById('up-next-tag');
const upNextTitle = document.getElementById('up-next-title');
const upNextBtn = document.getElementById('up-next-btn');
const upNextBtnText = document.getElementById('up-next-btn-text');

// --- 1. SMOOTH SCROLL & 3D PUSH-BACK EFFECT (A24) ---
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.addEventListener('scroll', () => {
  if (viewportContainer.style.display === 'none') return;
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.85)));

  if (heroEl) {
    const translateZ = -progress * 460;
    const translateY = -progress * 70;
    const rotateX = progress * 8;
    const opacity = 1 - progress * 0.82;

    heroEl.style.transform = `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg)`;
    heroEl.style.opacity = opacity.toFixed(3);
  }
});

if (scrollPrompt) {
  scrollPrompt.addEventListener('click', () => {
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      lenis.scrollTo(galleryEl, { offset: -30 });
    }
  });
}

// --- 2. THREE.JS 3D SCENE & A24 STUDIO ENVIRONMENT ---
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0c0d10');
scene.fog = new THREE.FogExp2('#0c0d10', 0.035);

const camera = new THREE.PerspectiveCamera(
  38,
  canvasContainer.clientWidth / canvasContainer.clientHeight,
  0.1,
  100
);
camera.position.set(0, 0.12, 8.4);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.45;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// PMREM Procedural Studio Environment
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

function generateStudioTexture(isLight = false) {
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 1024;
  envCanvas.height = 512;
  const ctx = envCanvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  if (isLight) {
    grad.addColorStop(0, '#f1f5f9');
    grad.addColorStop(0.5, '#cbd5e1');
    grad.addColorStop(1, '#94a3b8');
  } else {
    grad.addColorStop(0, '#2b313e');
    grad.addColorStop(0.5, '#12141a');
    grad.addColorStop(1, '#050608');
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 512);

  const strips = [
    { y: 0.18, h: 0.08, op: 0.95 },
    { y: 0.38, h: 0.06, op: 0.70 },
    { y: 0.65, h: 0.09, op: 0.85 }
  ];

  strips.forEach(s => {
    const yCenter = 512 * s.y;
    const yRadius = 512 * s.h;
    const sGrad = ctx.createLinearGradient(0, yCenter - yRadius, 0, yCenter + yRadius);
    sGrad.addColorStop(0, 'rgba(255,255,255,0)');
    sGrad.addColorStop(0.5, `rgba(255,255,255,${s.op})`);
    sGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = sGrad;
    ctx.fillRect(0, yCenter - yRadius, 1024, yRadius * 2);
  });

  return envCanvas;
}

function updateEnvironmentMap(isLight = false) {
  const envTex = new THREE.CanvasTexture(generateStudioTexture(isLight));
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  const envTarget = pmremGenerator.fromEquirectangular(envTex);
  scene.environment = envTarget.texture;
  scene.environmentIntensity = isLight ? 1.5 : 1.35;
  envTex.dispose();
}
updateEnvironmentMap(false);

// LIGHTING SETUP
const ambientLight = new THREE.AmbientLight('#ffffff', 1.8);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight('#ffffff', 4.4);
keyLight.position.set(4, 7, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.bias = -0.0006;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight('#e0f2fe', 2.8);
fillLight.position.set(-5, -2, 4);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight('#38bdf8', 3.4);
rimLight.position.set(0, 4, -5);
scene.add(rimLight);

const floorGeom = new THREE.PlaneGeometry(35, 35);
const floorMat = new THREE.ShadowMaterial({ opacity: 0.25 });
const floorMesh = new THREE.Mesh(floorGeom, floorMat);
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.position.y = -2.65;
floorMesh.receiveShadow = true;
scene.add(floorMesh);

// --- 3. CREATE FLOPPY DRIVE BEZEL / UNIT ("COMPORTA") ---
const floppyDrive = createFloppyDriveUnit(isLightMode);
scene.add(floppyDrive.group);

// --- 4. CREATE FLOPPY DISKS ---
disks.forEach((diskData) => {
  const meshGroup = createFloppyDiskMesh(diskData, currentLang, isLightMode);
  scene.add(meshGroup);
  diskMeshes.push(meshGroup);
});

// Update 3D Positions for the Carousel (Exact A24 Spacing & Fan-Out Curve)
function updateDisksTransform(animate = true) {
  const spacing = 3.35;
  const depthFalloff = 1.25;
  const angleSpread = 0.16;

  diskMeshes.forEach((mesh, i) => {
    if (mesh.userData.isInserting) return; // Don't override while inserting

    const offset = i - activeIndex;
    const targetX = offset * spacing;
    const targetZ = -Math.abs(offset) * depthFalloff;
    const targetRotY = -offset * angleSpread;
    const targetRotX = offset === 0 ? -0.07 : 0.04;
    const targetScale = offset === 0 ? 1.08 : 0.95;

    if (!animate) {
      mesh.position.x = targetX;
      mesh.position.z = targetZ;
      mesh.rotation.y = targetRotY;
      mesh.rotation.x = targetRotX;
      mesh.scale.setScalar(targetScale);
    } else {
      mesh.userData.targetX = targetX;
      mesh.userData.targetZ = targetZ;
      mesh.userData.targetRotY = targetRotY;
      mesh.userData.targetRotX = targetRotX;
      mesh.userData.targetScale = targetScale;
    }
  });

  const currentDisk = disks[activeIndex];
  const diskContent = currentDisk.content[currentLang] || currentDisk.content['ca'];
  if (activeDiskNumEl) activeDiskNumEl.textContent = currentDisk.diskNumber;
  if (activeDiskTitleEl) activeDiskTitleEl.textContent = diskContent.title;
  if (activeDiskRoleEl) activeDiskRoleEl.textContent = `${diskContent.subtitle} (${diskContent.period})`;

  document.querySelectorAll('.disk-tab-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === activeIndex);
  });
}

updateDisksTransform(false);

// --- 5. TABS SETUP ---
function renderTabs() {
  diskTabsContainer.innerHTML = '';
  disks.forEach((disk, idx) => {
    const content = disk.content[currentLang] || disk.content['ca'];
    const btn = document.createElement('button');
    btn.className = `disk-tab-btn ${idx === activeIndex ? 'active' : ''}`;
    btn.textContent = `${disk.diskNumber} // ${content.title}`;
    btn.addEventListener('click', () => {
      setActiveDisk(idx);
      if (isSoundEnabled) playMechanicalClick(1.1);
    });
    diskTabsContainer.appendChild(btn);
  });
}
renderTabs();

function setActiveDisk(newIndex) {
  if (newIndex < 0 || newIndex >= disks.length) return;
  activeIndex = newIndex;
  updateDisksTransform(true);
}

// --- 6. THEME SWITCHER (FONS BLANC / FONS FOSC) ---
function toggleTheme() {
  isLightMode = !isLightMode;
  document.body.classList.toggle('light-theme', isLightMode);

  // Update Three.js Background & Lighting
  const bgColor = isLightMode ? '#f8fafc' : '#0c0d10';
  scene.background.set(bgColor);
  scene.fog.color.set(bgColor);
  floorMat.opacity = isLightMode ? 0.15 : 0.25;

  updateEnvironmentMap(isLightMode);
  floppyDrive.setTheme(isLightMode);

  const ui = portfolioData.ui[currentLang];
  if (themeIconEl) themeIconEl.textContent = isLightMode ? '🌙' : '☀️';
  if (uiThemeBtn) uiThemeBtn.textContent = isLightMode ? ui.themeDarkBtn : ui.themeLightBtn;

  diskMeshes.forEach(mesh => {
    if (mesh.userData && mesh.userData.setTheme) {
      mesh.userData.setTheme(isLightMode);
    }
  });

  if (isSoundEnabled) playMechanicalClick(1.25);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// --- 7. MULTILANGUAGE DYNAMIC SWITCHING ---
function setLanguage(newLang) {
  if (!portfolioData.ui[newLang]) return;
  currentLang = newLang;

  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  const ui = portfolioData.ui[currentLang];

  document.getElementById('ui-role-tag').textContent = ui.roleTag;
  document.getElementById('nav-bio').textContent = ui.navBio;
  document.getElementById('nav-disks').textContent = ui.navDisks;
  document.getElementById('ui-download-cv').textContent = ui.downloadCv;
  document.getElementById('ui-status-available').textContent = ui.statusAvailable;
  document.getElementById('ui-location-presential').textContent = ui.locationPresential;
  document.getElementById('ui-age-years').textContent = ui.ageYears;
  document.getElementById('ui-degree-title').textContent = ui.degreeTitle;
  document.getElementById('ui-hero-greeting').textContent = ui.heroGreeting;
  document.getElementById('ui-hero-subtitle').textContent = ui.heroSubtitle;
  document.getElementById('ui-hero-bio').innerHTML = ui.heroBio;

  document.getElementById('ui-passion-title-1').textContent = ui.passionsTitle1;
  document.getElementById('ui-passion-desc-1').textContent = ui.passionsDesc1;
  document.getElementById('ui-passion-title-2').textContent = ui.passionsTitle2;
  document.getElementById('ui-passion-desc-2').textContent = ui.passionsDesc2;
  document.getElementById('ui-passion-title-3').textContent = ui.passionsTitle3;
  document.getElementById('ui-passion-desc-3').textContent = ui.passionsDesc3;

  document.getElementById('ui-contact-direct').textContent = ui.contactDirect;
  document.getElementById('ui-scroll-prompt').textContent = ui.scrollPrompt;

  document.getElementById('ui-gallery-heading').textContent = ui.galleryHeading;
  document.getElementById('ui-gallery-subheading').textContent = ui.gallerySubheading;
  document.querySelector('#ui-interact-hint span').textContent = ui.interactHint;
  document.getElementById('ui-inspect-btn').textContent = ui.inspectBtn;

  if (uiThemeBtn) {
    uiThemeBtn.textContent = isLightMode ? ui.themeDarkBtn : ui.themeLightBtn;
  }

  // Update Dedicated Stage Page if currently visible
  if (stageDetailContainer.classList.contains('visible')) {
    renderStageDetail(disks[currentStageIndex]);
  }

  renderTabs();

  diskMeshes.forEach(mesh => {
    if (mesh.userData && mesh.userData.updateLanguage) {
      mesh.userData.updateLanguage(currentLang, isLightMode);
    }
  });

  const currentDisk = disks[activeIndex];
  const diskContent = currentDisk.content[currentLang] || currentDisk.content['ca'];
  if (activeDiskTitleEl) activeDiskTitleEl.textContent = diskContent.title;
  if (activeDiskRoleEl) activeDiskRoleEl.textContent = `${diskContent.subtitle} (${diskContent.period})`;

  if (isSoundEnabled) playMechanicalClick(1.2);
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

// --- 8. DEDICATED STAGE PAGE RENDERER (EXACT A24 PRODUCTION PAGE) ---
function renderStageDetail(diskData) {
  if (!diskData) return;
  const content = diskData.content[currentLang] || diskData.content['ca'];
  const ui = portfolioData.ui[currentLang];

  stageBackText.textContent = ui.backToDisks;
  stageBadge.textContent = `DISK ${diskData.diskNumber} · HD 1.44MB · ${content.badge || 'STATUS: ONLINE'}`;
  stageTitle.textContent = content.title;
  stageSubtitle.textContent = content.subtitle;
  stageLogoImg.src = diskData.brandLogo;

  metaRoleLabel.textContent = ui.specsRole;
  metaRoleVal.textContent = content.subtitle;

  metaEntityLabel.textContent = ui.specsEntity;
  metaEntityVal.textContent = content.badge || content.title;

  metaPeriodLabel.textContent = ui.specsPeriod;
  metaPeriodVal.textContent = content.period;

  metaLocationLabel.textContent = ui.specsLocation;
  metaLocationVal.textContent = currentLang === 'en' ? 'Barcelona (100% In-Person)' : 'Barcelona (100% Presencial)';

  stageWebsiteLink.href = diskData.websiteUrl;
  stageWebsiteText.textContent = ui.visitWebsite;
  stageDownloadCv.textContent = ui.downloadCv;

  stageSec1Label.textContent = ui.modalSection1;
  stageOverviewText.innerHTML = content.description;

  stageSec2Label.textContent = ui.modalSection2;
  stageMetricsRow.innerHTML = '';
  content.metrics.forEach(m => {
    const card = document.createElement('div');
    card.className = 'stage-metric-card';
    card.innerHTML = `
      <div class="stage-metric-num">${m.value}</div>
      <div class="stage-metric-title">${m.label}</div>
    `;
    stageMetricsRow.appendChild(card);
  });

  stageSec3Label.textContent = ui.modalSection3;
  stageHighlightsList.innerHTML = '';
  content.highlights.forEach(h => {
    const item = document.createElement('li');
    item.className = 'stage-highlight-item';
    item.innerHTML = `
      <span class="stage-bullet">▸</span>
      <span>${h}</span>
    `;
    stageHighlightsList.appendChild(item);
  });

  stageSec4Label.textContent = ui.modalSection4;
  stageStackWrap.innerHTML = '';
  diskData.stack.forEach(tech => {
    const chip = document.createElement('span');
    chip.className = 'stage-stack-chip';
    chip.textContent = tech;
    stageStackWrap.appendChild(chip);
  });

  // Up Next Section (Next disk in order)
  const nextIndex = (currentStageIndex + 1) % disks.length;
  const nextDisk = disks[nextIndex];
  const nextContent = nextDisk.content[currentLang] || nextDisk.content['ca'];

  upNextTag.textContent = ui.upNextLabel;
  upNextTitle.textContent = `${nextDisk.diskNumber} // ${nextContent.title} →`;
  upNextBtnText.textContent = ui.upNextAction;
}

// --- 9. FLOPPY INSERTION ANIMATION & PAGE TRANSITIONS ---
function insertDiskAndNavigate(diskIndex) {
  if (isTransitioning) return;
  isTransitioning = true;
  currentStageIndex = diskIndex;

  const targetMesh = diskMeshes[diskIndex];
  targetMesh.userData.isInserting = true;

  // Open the drive flap
  floppyDrive.openFlap();

  // Play realistic mechanical insertion sound
  if (isSoundEnabled) {
    playFloppyInsertSound();
  }

  // Smooth physical descent into the floppy drive slot
  const startY = targetMesh.position.y;
  const startTime = performance.now();
  const insertDuration = 650; // ms

  function animateInsert(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(1, elapsed / insertDuration);
    const ease = progress * progress * (3 - 2 * progress); // smooth cubic ease

    targetMesh.position.x = THREE.MathUtils.lerp(targetMesh.position.x, 0, 0.2);
    targetMesh.position.z = THREE.MathUtils.lerp(targetMesh.position.z, 0.4, 0.2);
    targetMesh.rotation.x = THREE.MathUtils.lerp(targetMesh.rotation.x, -0.02, 0.2);
    targetMesh.rotation.y = THREE.MathUtils.lerp(targetMesh.rotation.y, 0, 0.2);
    targetMesh.rotation.z = THREE.MathUtils.lerp(targetMesh.rotation.z, 0, 0.2);

    targetMesh.position.y = THREE.MathUtils.lerp(startY, -2.15, ease);

    if (progress > 0.35) {
      floppyDrive.setLed(true);
    }

    if (progress < 1) {
      requestAnimationFrame(animateInsert);
    }
  }
  requestAnimationFrame(animateInsert);

  // Trigger A24 cinematic curtain wipe
  setTimeout(() => {
    transitionCurtain.classList.remove('exit');
    transitionCurtain.classList.add('enter');
  }, 380);

  // Switch view when curtain covers screen
  setTimeout(() => {
    renderStageDetail(disks[diskIndex]);
    viewportContainer.style.display = 'none';
    stageDetailContainer.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'instant' });

    window.history.pushState({ stage: disks[diskIndex].id }, '', `#stage/${disks[diskIndex].id}`);

    // Reset 3D mesh state for later
    targetMesh.userData.isInserting = false;
    targetMesh.position.y = 0;
    updateDisksTransform(false);
    floppyDrive.closeFlap();
    floppyDrive.setLed(false);

    // Reveal new page with smooth curtain exit wipe
    setTimeout(() => {
      transitionCurtain.classList.remove('enter');
      transitionCurtain.classList.add('exit');
      setTimeout(() => {
        transitionCurtain.classList.remove('exit');
        isTransitioning = false;
      }, 550);
    }, 120);
  }, 880);
}

function returnToDisks(targetSection = 'gallery') {
  if (isTransitioning) return;
  isTransitioning = true;

  if (isSoundEnabled) {
    playMechanicalClick(0.95);
  }

  transitionCurtain.classList.remove('exit');
  transitionCurtain.classList.add('enter');

  setTimeout(() => {
    stageDetailContainer.classList.remove('visible');
    viewportContainer.style.display = 'block';

    window.history.pushState(null, '', `#${targetSection}`);

    updateDisksTransform(false);
    renderer.render(scene, camera);

    const targetEl = document.getElementById(targetSection);
    if (targetEl) {
      lenis.scrollTo(targetEl, { immediate: true });
    }

    setTimeout(() => {
      transitionCurtain.classList.remove('enter');
      transitionCurtain.classList.add('exit');
      setTimeout(() => {
        transitionCurtain.classList.remove('exit');
        isTransitioning = false;
      }, 550);
    }, 120);
  }, 500);
}

function navigateToNextStage() {
  if (isTransitioning) return;
  isTransitioning = true;

  const nextIndex = (currentStageIndex + 1) % disks.length;
  currentStageIndex = nextIndex;
  activeIndex = nextIndex;

  if (isSoundEnabled) {
    playFloppyInsertSound();
  }

  transitionCurtain.classList.remove('exit');
  transitionCurtain.classList.add('enter');

  setTimeout(() => {
    renderStageDetail(disks[nextIndex]);
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.history.pushState({ stage: disks[nextIndex].id }, '', `#stage/${disks[nextIndex].id}`);
    updateDisksTransform(false);

    setTimeout(() => {
      transitionCurtain.classList.remove('enter');
      transitionCurtain.classList.add('exit');
      setTimeout(() => {
        transitionCurtain.classList.remove('exit');
        isTransitioning = false;
      }, 550);
    }, 120);
  }, 500);
}

// Stage Navigation Event Listeners
if (stageBackBtn) {
  stageBackBtn.addEventListener('click', () => returnToDisks('gallery'));
}

if (upNextBtn) {
  upNextBtn.addEventListener('click', navigateToNextStage);
}

if (upNextTitle) {
  upNextTitle.addEventListener('click', navigateToNextStage);
}

if (navBio) {
  navBio.addEventListener('click', (e) => {
    if (stageDetailContainer.classList.contains('visible')) {
      e.preventDefault();
      returnToDisks('hero');
    }
  });
}

if (navDisks) {
  navDisks.addEventListener('click', (e) => {
    if (stageDetailContainer.classList.contains('visible')) {
      e.preventDefault();
      returnToDisks('gallery');
    }
  });
}

// Browser Back / Forward Handling
window.addEventListener('popstate', (e) => {
  const hash = window.location.hash;
  if (hash.startsWith('#stage/')) {
    const stageId = hash.replace('#stage/', '');
    const diskIdx = disks.findIndex(d => d.id === stageId);
    if (diskIdx !== -1) {
      currentStageIndex = diskIdx;
      activeIndex = diskIdx;
      viewportContainer.style.display = 'none';
      stageDetailContainer.classList.add('visible');
      renderStageDetail(disks[diskIdx]);
      window.scrollTo(0, 0);
    }
  } else {
    if (stageDetailContainer.classList.contains('visible')) {
      stageDetailContainer.classList.remove('visible');
      viewportContainer.style.display = 'block';
    }
  }
});

// Check Initial Hash on Load
if (window.location.hash.startsWith('#stage/')) {
  const initialStageId = window.location.hash.replace('#stage/', '');
  const initialIdx = disks.findIndex(d => d.id === initialStageId);
  if (initialIdx !== -1) {
    currentStageIndex = initialIdx;
    activeIndex = initialIdx;
    viewportContainer.style.display = 'none';
    stageDetailContainer.classList.add('visible');
    renderStageDetail(disks[initialIdx]);
  }
}

// --- 10. INTERACTION & RAYCASTING ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-999, -999);
let isDragging = false;
let startX = 0;
let dragDelta = 0;
let hoveredDisk = null;

const targetCameraOffset = { x: 0, y: 0 };

canvasContainer.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  targetCameraOffset.x = mouse.x * 0.45;
  targetCameraOffset.y = mouse.y * 0.25;

  if (isDragging) {
    dragDelta = e.clientX - startX;
    if (Math.abs(dragDelta) > 65) {
      if (dragDelta > 0) {
        setActiveDisk(activeIndex - 1);
      } else {
        setActiveDisk(activeIndex + 1);
      }
      startX = e.clientX;
      dragDelta = 0;
      if (isSoundEnabled) playMechanicalClick(0.9);
    }
  }
});

canvasContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

canvasContainer.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 40) {
    e.preventDefault();
    if (e.deltaX > 20 || e.deltaY > 30) {
      setActiveDisk(activeIndex + 1);
    } else {
      setActiveDisk(activeIndex - 1);
    }
    if (isSoundEnabled) playMechanicalClick(1.0);
  }
}, { passive: false });

canvasContainer.addEventListener('click', () => {
  if (isTransitioning) return;

  if (hoveredDisk) {
    const clickedIdx = diskMeshes.indexOf(hoveredDisk);
    if (clickedIdx !== -1) {
      if (clickedIdx !== activeIndex) {
        setActiveDisk(clickedIdx);
      } else {
        // Disk clicked: professional drive slot insertion & page navigation!
        insertDiskAndNavigate(clickedIdx);
      }
    }
  }
});

window.addEventListener('keydown', (e) => {
  if (stageDetailContainer.classList.contains('visible')) {
    if (e.key === 'Escape') {
      returnToDisks('gallery');
    }
    return;
  }

  if (e.key === 'ArrowRight') {
    setActiveDisk(activeIndex + 1);
    if (isSoundEnabled) playMechanicalClick();
  } else if (e.key === 'ArrowLeft') {
    setActiveDisk(activeIndex - 1);
    if (isSoundEnabled) playMechanicalClick();
  } else if (e.key === 'Enter') {
    insertDiskAndNavigate(activeIndex);
  }
});

if (openDiskModalBtn) {
  openDiskModalBtn.addEventListener('click', () => {
    insertDiskAndNavigate(activeIndex);
  });
}

if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    soundToggleBtn.style.opacity = isSoundEnabled ? '1' : '0.4';
    if (isSoundEnabled) playMechanicalClick(1.2);
  });
}

// --- 11. RENDER LOOP (A24 HOVER LIFT & CURVE SMOOTHING) ---
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  floppyDrive.update();

  camera.position.x += (targetCameraOffset.x - camera.position.x) * 0.05;
  camera.position.y += (0.12 + targetCameraOffset.y - camera.position.y) * 0.05;
  camera.lookAt(0, -0.15, 0);

  diskMeshes.forEach((mesh, i) => {
    if (mesh.userData.isInserting) return; // Managed by insertion animation

    if (mesh.userData.targetX !== undefined) {
      mesh.position.x += (mesh.userData.targetX - mesh.position.x) * 0.1;
      mesh.position.z += (mesh.userData.targetZ - mesh.position.z) * 0.1;
      mesh.rotation.y += (mesh.userData.targetRotY - mesh.rotation.y) * 0.1;
      mesh.rotation.x += (mesh.userData.targetRotX - mesh.rotation.x) * 0.1;

      if (mesh.userData.targetScale) {
        mesh.scale.setScalar(mesh.scale.x + (mesh.userData.targetScale - mesh.scale.x) * 0.1);
      }

      // Hover Lift (Floats up subtly when cursor passes over disk)
      const isHover = hoveredDisk === mesh;
      const hoverLift = isHover ? 0.35 : 0;

      if (i === activeIndex) {
        mesh.position.y = (Math.sin(time * 1.8) * 0.07) + hoverLift;
        mesh.rotation.z = Math.sin(time * 1.2) * 0.015;
      } else {
        mesh.position.y += (hoverLift - mesh.position.y) * 0.1;
        mesh.rotation.z += (0 - mesh.rotation.z) * 0.1;
      }
    }
  });

  if (!isTransitioning && viewportContainer.style.display !== 'none') {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(diskMeshes, true);

    if (intersects.length > 0) {
      let topGroup = intersects[0].object;
      while (topGroup.parent && !diskMeshes.includes(topGroup)) {
        topGroup = topGroup.parent;
      }
      if (diskMeshes.includes(topGroup)) {
        hoveredDisk = topGroup;
        canvasContainer.style.cursor = 'pointer';
      }
    } else {
      hoveredDisk = null;
      canvasContainer.style.cursor = isDragging ? 'grabbing' : 'grab';
    }
  }

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  const width = canvasContainer.clientWidth;
  const height = canvasContainer.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});
