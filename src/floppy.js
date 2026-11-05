import * as THREE from 'three';
import { BRAND_IMAGES_B64 } from './brandImages.js';

// Pre-create THREE.Texture instances from embedded Base64 for zero-latency instant rendering
const textureLoader = new THREE.TextureLoader();
const brandTextures = {};

for (const [key, b64Url] of Object.entries(BRAND_IMAGES_B64)) {
  const tex = textureLoader.load(b64Url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  brandTextures[key] = tex;
}

// Pre-create Image objects for 2D canvas drawing
const brandImageElements = {};
for (const [key, b64Url] of Object.entries(BRAND_IMAGES_B64)) {
  const img = new Image();
  img.src = b64Url;
  brandImageElements[key] = img;
}

/**
 * Creates a flat Plane geometry with rounded corners and normalized UV coordinates
 */
export function createRoundedPlaneGeometry(width, height, radius = 0.1, segments = 12) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  const w = width;
  const h = height;
  const r = Math.min(radius, w / 2, h / 2);

  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  const geometry = new THREE.ShapeGeometry(shape, segments);

  // Compute precise normalized UV coordinates [0..1]
  const pos = geometry.attributes.position;
  const uvs = [];
  for (let i = 0; i < pos.count; i++) {
    const u = (pos.getX(i) - x) / w;
    const v = (pos.getY(i) - y) / h;
    uvs.push(u, v);
  }
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  return geometry;
}

/**
 * Draws the high-res 2K authentic label sticker for the floppy disk
 */
export function drawFloppyLabel(canvas, diskData, lang = 'ca', isLightMode = false) {
  const ctx = canvas.getContext('2d');
  const content = diskData.content[lang] || diskData.content['ca'];
  const W = canvas.width;  // 2048
  const H = canvas.height; // 1520

  // Clear Canvas
  ctx.clearRect(0, 0, W, H);

  // 1. Clean White Coated Label Paper Base with Rounded Corners
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(4, 4, W - 8, H - 8, 48);
  ctx.fill();

  // Soft border line around the rounded sticker
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 8;
  ctx.stroke();

  // Clip to rounded sticker shape so top stripe doesn't bleed out of corners
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(4, 4, W - 8, H - 8, 48);
  ctx.clip();

  // 2. Top Color Brand Stripe
  ctx.fillStyle = diskData.accentColor || '#38bdf8';
  ctx.fillRect(0, 0, W, 88);

  // Top Stripe Text: White on Brand Accent
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "PP Neue Montreal", "Inter", sans-serif';
  ctx.fillText(`MF-2HD · 1.44MB · DISK ${diskData.diskNumber}`, 50, 58);

  ctx.font = 'bold 34px monospace';
  ctx.fillText(`[ ${content.period} ]`, W - 450, 58);

  // 3. BACKGROUND CARD RESERVED FOR THE LARGE 3D LOGO EMBLEM (Rounded Corners)
  const logoBoxX = 50;
  const logoBoxY = 110;
  const logoBoxW = W - 100;
  const logoBoxH = 880;

  ctx.fillStyle = diskData.logoBg || '#f8fafc';
  ctx.beginPath();
  ctx.roundRect(logoBoxX, logoBoxY, logoBoxW, logoBoxH, 36);
  ctx.fill();
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 4;
  ctx.stroke();

  // 4. MAIN PROJECT / STAGE TITLE (High Contrast, below the large logo)
  ctx.fillStyle = '#09090b';
  ctx.font = 'bold 88px "PPEiko", "PP Neue Montreal", sans-serif';
  ctx.fillText(content.title, 50, 1070);

  // 5. SUBTITLE / ROLE
  ctx.fillStyle = '#334155';
  ctx.font = '600 48px "PP Neue Montreal", sans-serif';
  ctx.fillText(content.subtitle, 50, 1145, W - 100);

  // 6. OFFICIAL BADGE PILL (Rounded)
  if (content.badge) {
    ctx.fillStyle = diskData.accentColor ? `${diskData.accentColor}22` : '#e0f2fe';
    ctx.beginPath();
    ctx.roundRect(50, 1180, W - 100, 80, 20);
    ctx.fill();

    ctx.fillStyle = diskData.accentColor || '#0284c7';
    ctx.font = 'bold 38px "PP Neue Montreal", sans-serif';
    ctx.fillText(`★ ${content.badge}`, 75, 1234);
  }

  // 7. BARCODE & SERIAL AT BOTTOM
  ctx.fillStyle = '#0f172a';
  for (let b = 0; b < 64; b++) {
    const barW = (b % 5 === 0 ? 14 : (b % 2 === 0 ? 8 : 4));
    const barX = 50 + b * 22;
    ctx.fillRect(barX, 1310, barW, 90);
  }

  ctx.font = 'bold 36px monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText(`SN: ORIOL-RAMOS-${diskData.id.toUpperCase()}-VERIFIED`, W - 820, 1370);

  // Quality Control Stamp (Rounded)
  ctx.strokeStyle = diskData.accentColor || '#38bdf8';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.roundRect(W - 420, 1410, 370, 70, 12);
  ctx.stroke();

  ctx.fillStyle = diskData.accentColor || '#38bdf8';
  ctx.font = 'bold 32px monospace';
  ctx.fillText(`QC PASSED · 100%`, W - 390, 1456);

  ctx.restore();
}

/**
 * Creates an ultra-realistic 3D Floppy Disk mesh in Three.js with rounded-corner label stickers
 */
export function createFloppyDiskMesh(diskData, initialLang = 'ca', isLightMode = false) {
  const group = new THREE.Group();
  group.name = `floppy_${diskData.id}`;

  const W = 3.25;  // Width
  const H = 3.40;  // Height
  const D = 0.13;  // Thickness

  // 1. MAIN BODY: Chamfered rounded polygon
  const bodyShape = new THREE.Shape();
  const r = 0.08;
  const cutW = 0.28; // Orientation cut in bottom-right corner

  bodyShape.moveTo(-W / 2 + r, -H / 2);
  bodyShape.lineTo(W / 2 - cutW, -H / 2);
  bodyShape.lineTo(W / 2, -H / 2 + cutW);
  bodyShape.lineTo(W / 2, H / 2 - r);
  bodyShape.quadraticCurveTo(W / 2, H / 2, W / 2 - r, H / 2);
  bodyShape.lineTo(-W / 2 + r, H / 2);
  bodyShape.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - r);
  bodyShape.lineTo(-W / 2, -H / 2 + r);
  bodyShape.quadraticCurveTo(-W / 2, -H / 2, -W / 2 + r, -H / 2);

  const extrudeSettings = {
    steps: 1,
    depth: D,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 4
  };

  const bodyGeometry = new THREE.ExtrudeGeometry(bodyShape, extrudeSettings);
  bodyGeometry.center();

  // Premium corporate satin-gloss plastic with clearcoat PBR
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(diskData.color || '#1e1e24'),
    roughness: 0.35,
    metalness: 0.08,
    clearcoat: 0.5,
    clearcoatRoughness: 0.15,
    reflectivity: 0.6
  });

  const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  group.add(bodyMesh);

  // 2. INNER MAGNETIC DISK
  const discGeom = new THREE.CylinderGeometry(1.25, 1.25, 0.02, 36);
  const discMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#221710'),
    metalness: 0.92,
    roughness: 0.2,
    clearcoat: 0.7
  });
  const discMesh = new THREE.Mesh(discGeom, discMat);
  discMesh.rotation.x = Math.PI / 2;
  discMesh.position.set(0, 0.42, 0);
  group.add(discMesh);

  // Metal Hub Ring
  const hubGeom = new THREE.CylinderGeometry(0.42, 0.42, 0.035, 28);
  const hubMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#e2e8f0'),
    metalness: 0.98,
    roughness: 0.15
  });
  const hubMesh = new THREE.Mesh(hubGeom, hubMat);
  hubMesh.rotation.x = Math.PI / 2;
  hubMesh.position.set(0, 0.42, 0);
  group.add(hubMesh);

  // 3. BRUSHED ALUMINUM METAL SHUTTER
  const shutterW = 1.42;
  const shutterH = 1.22;
  const shutterD = D + 0.045;

  const shutterGeom = new THREE.BoxGeometry(shutterW, shutterH, shutterD);
  const shutterMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(diskData.shutterColor || '#e2e8f0'),
    metalness: 0.96,
    roughness: 0.2
  });
  const shutterMesh = new THREE.Mesh(shutterGeom, shutterMat);
  shutterMesh.position.set(0, H / 2 - shutterH / 2 + 0.02, 0);
  shutterMesh.castShadow = true;
  group.add(shutterMesh);

  // Read Slot in Shutter
  const slotGeom = new THREE.BoxGeometry(0.44, 0.8, shutterD + 0.01);
  const slotMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
  const slotMesh = new THREE.Mesh(slotGeom, slotMat);
  slotMesh.position.set(0.2, H / 2 - shutterH / 2 + 0.02, 0);
  group.add(slotMesh);

  // 4. WRITE-PROTECT & DENSITY HOLES
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x020202 });
  const hdHoleGeom = new THREE.BoxGeometry(0.18, 0.18, D + 0.05);
  const hdHole = new THREE.Mesh(hdHoleGeom, holeMat);
  hdHole.position.set(W / 2 - 0.28, -H / 2 + 0.28, 0);
  group.add(hdHole);

  const wpHole = new THREE.Mesh(hdHoleGeom, holeMat);
  wpHole.position.set(-W / 2 + 0.28, -H / 2 + 0.28, 0);
  group.add(wpHole);

  // 5. HIGH-DENSITY 2K STICKER LABEL WITH AUTHENTIC ROUNDED CORNERS
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 2048;
  labelCanvas.height = 1520;

  drawFloppyLabel(labelCanvas, diskData, initialLang, isLightMode);

  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  labelTexture.anisotropy = 16;

  // Use Rounded Plane Geometry (Radius 0.10 for authentic die-cut label sticker)
  const labelGeom = createRoundedPlaneGeometry(2.78, 1.95, 0.10, 16);
  const labelMat = new THREE.MeshStandardMaterial({
    map: labelTexture,
    roughness: 0.35,
    metalness: 0.02,
    transparent: true,
    alphaTest: 0.01
  });

  const labelMesh = new THREE.Mesh(labelGeom, labelMat);
  labelMesh.position.set(0, -0.42, D / 2 + 0.016);
  group.add(labelMesh);

  // 6. 3D LOGO EMBLEM WITH ROUNDED CORNERS (DOUBLE SIZE & CENTERED LOWER)
  const brandTex = brandTextures[diskData.id];
  if (brandTex) {
    const cardH = 1.15;
    const cardW = 2.50;
    // Rounded backdrop card for logo
    const emblemBackdropGeom = createRoundedPlaneGeometry(cardW, cardH, 0.08, 12);
    const emblemBackdropMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(diskData.logoBg || '#ffffff'),
      transparent: true,
      opacity: 0.98
    });
    const emblemBackdropMesh = new THREE.Mesh(emblemBackdropGeom, emblemBackdropMat);
    emblemBackdropMesh.position.set(0, -0.45, D / 2 + 0.018);
    group.add(emblemBackdropMesh);

    // Double Size Logo Mesh with rounded corners
    let logoAspect = 1.0;
    if (diskData.id === 'unir') logoAspect = 1.7;
    else if (diskData.id === 'dxc') logoAspect = 1.0;
    else if (diskData.id === 'udg') logoAspect = 1.0;
    else if (diskData.id === 'dset') logoAspect = 1.0;
    else if (diskData.id === 'clothy') logoAspect = 0.97;

    const emblemH = 1.02;
    const emblemW = Math.min(2.35, emblemH * logoAspect);

    const logoGeom = createRoundedPlaneGeometry(emblemW, emblemH, 0.06, 12);
    const logoMat = new THREE.MeshBasicMaterial({
      map: brandTex,
      transparent: true,
      side: THREE.FrontSide
    });
    const logoMesh = new THREE.Mesh(logoGeom, logoMat);
    logoMesh.position.set(0, -0.45, D / 2 + 0.021);
    group.add(logoMesh);
  }

  group.userData = {
    diskData,
    bodyMaterial,
    labelCanvas,
    labelTexture,
    updateLanguage: (newLang, light = false) => {
      drawFloppyLabel(labelCanvas, diskData, newLang, light);
      labelTexture.needsUpdate = true;
    },
    setTheme: (light) => {
      drawFloppyLabel(labelCanvas, diskData, initialLang, light);
      labelTexture.needsUpdate = true;
    }
  };

  return group;
}
