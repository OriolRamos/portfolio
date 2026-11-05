import * as THREE from 'three';

/**
 * Creates the 3D Floppy Drive Unit ("comporta") located right below the central active disk.
 * Includes an animated opening flap, glowing activity LED, eject button, and Light/Dark styling.
 */
export function createFloppyDriveUnit(isLightMode = false) {
  const driveGroup = new THREE.Group();
  driveGroup.name = "FloppyDriveUnit";
  driveGroup.position.set(0, -2.15, 0);

  // Materials
  const darkCasingColor = new THREE.Color(0x161920);
  const lightCasingColor = new THREE.Color(0xdbe4ee);

  const casingMat = new THREE.MeshStandardMaterial({
    color: isLightMode ? lightCasingColor : darkCasingColor,
    roughness: 0.45,
    metalness: 0.35
  });

  const slotInteriorMat = new THREE.MeshStandardMaterial({
    color: 0x050608,
    roughness: 0.9,
    metalness: 0.1
  });

  const flapMat = new THREE.MeshStandardMaterial({
    color: isLightMode ? 0xb0b8c4 : 0x717986,
    metalness: 0.75,
    roughness: 0.25
  });

  const ledMat = new THREE.MeshStandardMaterial({
    color: 0x064e3b,
    emissive: 0x000000,
    emissiveIntensity: 0,
    roughness: 0.2,
    metalness: 0.1
  });

  const ejectBtnMat = new THREE.MeshStandardMaterial({
    color: isLightMode ? 0x94a3b8 : 0x272b35,
    roughness: 0.6,
    metalness: 0.2
  });

  // 1. Main Bezel Body
  const bezelGeom = new THREE.BoxGeometry(4.8, 0.95, 2.6);
  const bezelMesh = new THREE.Mesh(bezelGeom, casingMat);
  bezelMesh.castShadow = true;
  bezelMesh.receiveShadow = true;
  driveGroup.add(bezelMesh);

  // 2. Drive Slot Recess (Interior)
  const slotGeom = new THREE.BoxGeometry(3.6, 0.28, 1.8);
  const slotMesh = new THREE.Mesh(slotGeom, slotInteriorMat);
  slotMesh.position.set(0, 0.08, 0.5);
  driveGroup.add(slotMesh);

  // 3. Bezel Front Lip / Accent Rim
  const lipGeom = new THREE.BoxGeometry(3.72, 0.36, 0.05);
  const lipMat = new THREE.MeshStandardMaterial({
    color: isLightMode ? 0xc4cbd4 : 0x0e1014,
    roughness: 0.5,
    metalness: 0.4
  });
  const lipMesh = new THREE.Mesh(lipGeom, lipMat);
  lipMesh.position.set(0, 0.08, 1.305);
  driveGroup.add(lipMesh);

  // 4. Spring-loaded Flap ("Comporta")
  // Pivot at top edge of slot
  const flapPivot = new THREE.Group();
  flapPivot.position.set(0, 0.20, 1.29);

  const flapGeom = new THREE.BoxGeometry(3.55, 0.22, 0.03);
  flapGeom.translate(0, -0.11, 0); // Offset geometry so pivot is at top edge
  const flapMesh = new THREE.Mesh(flapGeom, flapMat);
  flapMesh.castShadow = true;
  flapPivot.add(flapMesh);
  driveGroup.add(flapPivot);

  // 5. Activity LED Indicator & PointLight
  const ledGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.05, 16);
  ledGeom.rotateX(Math.PI / 2);
  const ledMesh = new THREE.Mesh(ledGeom, ledMat);
  ledMesh.position.set(2.05, 0.08, 1.31);
  driveGroup.add(ledMesh);

  const ledLight = new THREE.PointLight(0x10b981, 0, 2.5);
  ledLight.position.set(2.05, 0.08, 1.45);
  driveGroup.add(ledLight);

  // 6. Eject Button
  const ejectGeom = new THREE.BoxGeometry(0.35, 0.18, 0.08);
  const ejectMesh = new THREE.Mesh(ejectGeom, ejectBtnMat);
  ejectMesh.position.set(2.05, -0.18, 1.32);
  driveGroup.add(ejectMesh);

  // Animation State & Controls
  let flapTargetRotX = 0;
  let isFlapOpen = false;

  function update() {
    // Smooth dampening towards target rotation
    flapPivot.rotation.x += (flapTargetRotX - flapPivot.rotation.x) * 0.18;
  }

  function openFlap() {
    isFlapOpen = true;
    flapTargetRotX = -Math.PI / 2.3; // Open inwards upwards
  }

  function closeFlap() {
    isFlapOpen = false;
    flapTargetRotX = 0;
  }

  function setLed(active) {
    if (active) {
      ledMat.color.set(0x34d399);
      ledMat.emissive.set(0x10b981);
      ledMat.emissiveIntensity = 3.5;
      ledLight.intensity = 2.2;
    } else {
      ledMat.color.set(0x064e3b);
      ledMat.emissive.set(0x000000);
      ledMat.emissiveIntensity = 0;
      ledLight.intensity = 0;
    }
  }

  function setTheme(isLight) {
    casingMat.color.set(isLight ? lightCasingColor : darkCasingColor);
    lipMat.color.set(isLight ? 0xc4cbd4 : 0x0e1014);
    flapMat.color.set(isLight ? 0xb0b8c4 : 0x717986);
    ejectBtnMat.color.set(isLight ? 0x94a3b8 : 0x272b35);
  }

  return {
    group: driveGroup,
    update,
    openFlap,
    closeFlap,
    setLed,
    setTheme,
    isOpen: () => isFlapOpen
  };
}
