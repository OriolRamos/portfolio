// Web Audio API procedural sound synthesizer (No external audio files required)
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Subtle mechanical click (like clicking a floppy drive button or tactile switch)
export function playMechanicalClick(pitch = 1.0) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600 * pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80 * pitch, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio fail on strict autoplay policy
  }
}

// Floppy disk insert mechanical latch & motor seek sound
export function playFloppyInsertSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Shutter slide click
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(150, now + 0.06);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.07);

    // 2. Drive latch "clack"
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(220, now + 0.08);
    osc2.frequency.exponentialRampToValueAtTime(40, now + 0.16);
    gain2.gain.setValueAtTime(0.15, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.18);

    // 3. Dual read-head stepper buzz (tick-tick-whir)
    for (let i = 0; i < 4; i++) {
      const stepTime = now + 0.22 + i * 0.035;
      const oscStep = ctx.createOscillator();
      const gainStep = ctx.createGain();
      oscStep.type = 'sawtooth';
      oscStep.frequency.setValueAtTime(320 + i * 40, stepTime);
      oscStep.frequency.exponentialRampToValueAtTime(120, stepTime + 0.02);
      gainStep.gain.setValueAtTime(0.07, stepTime);
      gainStep.gain.exponentialRampToValueAtTime(0.001, stepTime + 0.025);
      oscStep.connect(gainStep);
      gainStep.connect(ctx.destination);
      oscStep.start(stepTime);
      oscStep.stop(stepTime + 0.03);
    }
  } catch (e) {
    // Ignore
  }
}
