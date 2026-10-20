'use client';

import {getNoteFrequency, UKULELE_STRINGS} from './ukulele-theory';

class UkuleleAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as {webkitAudioContext: typeof AudioContext}).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Plays a realistic synthesized nylon ukulele string note
   */
  public playString(
    stringNumber: 4 | 3 | 2 | 1,
    fret: number = 0,
    options?: {
      volume?: number;
      duration?: number;
      delaySeconds?: number;
      onTrigger?: (stringNum: 4 | 3 | 2 | 1) => void;
    }
  ) {
    if (this.isMuted) {
      if (options?.onTrigger) {
        const delayMs = (options.delaySeconds ?? 0) * 1000;
        setTimeout(() => options.onTrigger?.(stringNumber), delayMs);
      }
      return;
    }

    const ctx = this.getContext();
    if (!ctx) return;

    const freq = getNoteFrequency(stringNumber, fret);
    const delay = options?.delaySeconds ?? 0;
    const startTime = ctx.currentTime + delay;
    const duration = options?.duration ?? 1.85;
    const peakGain = (options?.volume ?? 0.28) * (stringNumber === 3 ? 1.05 : 0.95);

    if (options?.onTrigger) {
      setTimeout(() => {
        options.onTrigger?.(stringNumber);
      }, Math.max(0, delay * 1000));
    }

    // Master envelope gain for this note
    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(peakGain, startTime + 0.012);
    noteGain.gain.exponentialRampToValueAtTime(peakGain * 0.35, startTime + 0.28);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    // Warm acoustic body resonant low-pass filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 6.5, startTime);
    filter.frequency.exponentialRampToValueAtTime(freq * 2.1, startTime + 0.45);
    filter.Q.setValueAtTime(1.4, startTime);

    // Fundamental oscillator (triangle for warm nylon core)
    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    // Subtle pitch-drop transient on pluck
    osc1.frequency.setValueAtTime(freq * 1.007, startTime);
    osc1.frequency.exponentialRampToValueAtTime(freq, startTime + 0.025);

    // 2nd Harmonic (octave warmth)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.32, startTime);
    osc2Gain.gain.exponentialRampToValueAtTime(0.02, startTime + duration * 0.55);

    // 3rd Harmonic (nylon sparkle on initial attack)
    const osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3, startTime);

    const osc3Gain = ctx.createGain();
    osc3Gain.gain.setValueAtTime(0.12, startTime);
    osc3Gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);

    filter.connect(noteGain);
    noteGain.connect(ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc3.start(startTime);

    osc1.stop(startTime + duration + 0.05);
    osc2.stop(startTime + duration + 0.05);
    osc3.stop(startTime + 0.3);
  }

  /**
   * Strums all 4 strings [G, C, E, A] in Down ('D') or Up ('U') direction
   */
  public strumChord(
    frets: [number, number, number, number],
    direction: 'D' | 'U' = 'D',
    options?: {
      speedMultiplier?: number; // 0.5 for slow-mo, 1.0 for normal
      volume?: number;
      onStringTrigger?: (stringNum: 4 | 3 | 2 | 1) => void;
    }
  ) {
    const speed = options?.speedMultiplier ?? 1.0;
    const baseSpread = direction === 'D' ? 0.042 : 0.032;
    const spread = baseSpread / speed;

    // frets array is ordered [G (4), C (3), E (2), A (1)]
    const stringOrder: Array<{stringNum: 4 | 3 | 2 | 1; fret: number}> = [
      {stringNum: 4, fret: frets[0]},
      {stringNum: 3, fret: frets[1]},
      {stringNum: 2, fret: frets[2]},
      {stringNum: 1, fret: frets[3]},
    ];

    const sequence = direction === 'D' ? stringOrder : [...stringOrder].reverse();

    sequence.forEach((item, idx) => {
      // On an up-strum, the top G string is brushed more lightly
      const stringVol =
        direction === 'U'
          ? (options?.volume ?? 0.23) * (idx === 3 ? 0.65 : 0.9)
          : options?.volume ?? 0.27;

      this.playString(item.stringNum, item.fret, {
        volume: stringVol,
        delaySeconds: idx * spread,
        onTrigger: options?.onStringTrigger,
      });
    });
  }

  /**
   * Plays a clean woodblock metronome tick
   */
  public playMetronomeTick(isAccent: boolean = false) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const baseFreq = isAccent ? 980 : 680;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.45, now + 0.035);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(isAccent ? 0.18 : 0.1, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }
}

export const ukuleleAudio = new UkuleleAudioEngine();

export interface PitchDetectionResult {
  frequency: number;
  closestString: (typeof UKULELE_STRINGS)[number];
  centsOff: number; // negative = flat, positive = sharp, -5..+5 = in tune
  status: 'in-tune' | 'flat' | 'sharp';
}

/**
 * Autocorrelation pitch detector for real-time microphone ukulele tuning
 */
export function detectUkulelePitch(
  buffer: Float32Array,
  sampleRate: number
): PitchDetectionResult | null {
  const SIZE = buffer.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) {
    const val = buffer[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);
  // Require enough signal above background noise
  if (rms < 0.015) return null;

  let r1 = 0;
  let r2 = SIZE - 1;
  const thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buffer[i]) < thres) {
      r1 = i;
      break;
    }
  }
  for (let i = 1; i < SIZE / 2; i++) {
    if (Math.abs(buffer[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }
  }

  const trimmed = buffer.slice(r1, r2);
  const newSize = trimmed.length;
  if (newSize < 64) return null;

  const c = new Float32Array(newSize);
  for (let i = 0; i < newSize; i++) {
    let sum = 0;
    for (let j = 0; j < newSize - i; j++) {
      sum += trimmed[j] * trimmed[j + i];
    }
    c[i] = sum;
  }

  let d = 0;
  while (d < newSize - 1 && c[d] > c[d + 1]) {
    d++;
  }

  let maxval = -1;
  let maxpos = -1;
  for (let i = d; i < newSize; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }

  if (maxpos <= 0 || maxpos >= newSize - 1) return null;

  const x1 = c[maxpos - 1];
  const x2 = c[maxpos];
  const x3 = c[maxpos + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  const T0 = a ? maxpos - b / (2 * a) : maxpos;

  const frequency = sampleRate / T0;
  // Filter to plausible ukulele range (190 Hz to 600 Hz)
  if (frequency < 190 || frequency > 600) return null;

  // Find closest open string (G4=392, C4=261.63, E4=329.63, A4=440)
  let closest = UKULELE_STRINGS[0];
  let minDiff = Infinity;
  for (const str of UKULELE_STRINGS) {
    const diff = Math.abs(1200 * Math.log2(frequency / str.baseFrequency));
    if (diff < minDiff) {
      minDiff = diff;
      closest = str;
    }
  }

  const centsOff = Math.round(1200 * Math.log2(frequency / closest.baseFrequency));
  const status: 'in-tune' | 'flat' | 'sharp' =
    Math.abs(centsOff) <= 6 ? 'in-tune' : centsOff < 0 ? 'flat' : 'sharp';

  return {
    frequency: Math.round(frequency * 10) / 10,
    closestString: closest,
    centsOff,
    status,
  };
}
