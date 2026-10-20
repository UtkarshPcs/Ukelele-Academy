export interface UkuleleHotspotCoordinate {
  id: string;
  tier: 1 | 2;
  /** Horizontal percentage from left (0 to 100) in horizontal headstock-left view */
  xPct: number;
  /** Vertical percentage from top (0 to 100) in horizontal headstock-left view */
  yPct: number;
  isRosetteHotspot?: boolean;
}

export interface UkuleleStringCoordinate {
  stringNumber: 4 | 3 | 2 | 1;
  letter: 'G' | 'C' | 'E' | 'A';
  note: 'G4' | 'C4' | 'E4' | 'A4';
  frequencyHz: number;
  /** Nut X percentage */
  nutXPct: number;
  /** Saddle X percentage */
  saddleXPct: number;
  /** Vertical Y percentage on the instrument box */
  yPct: number;
  strokeWidthPx: number;
}

export const UKULELE_ASSET_CONFIG = {
  photoCutoutWebp1600: '/assets/ukulele/ukulele-top.webp',
  photoCutoutWebp800: '/assets/ukulele/ukulele-top-800.webp',
  viewBoxWidth: 1000,
  viewBoxHeight: 360,
  altText:
    'Soprano ukulele with a matte black body, white nylon strings, white nut and saddle, carved triangle sunburst rosette around the soundhole, dark bridge with two pearl dots, and white fret markers at frets 5, 7, and 10.',
  /**
   * 11 Anatomy Hotspots expressed as percentages of the 1000x360 instrument box.
   * Ordered cleanly left-to-right from headstock to body with zero neck collisions.
   * Tier 1: Body, Soundhole, Bridge (the 3 core parts in Lesson 1).
   * Tier 2: Revealed after the first Tier-1 part is discovered.
   */
  hotspots: [
    // Tier 1 (Primary glowing parts for Lesson 1: Body, Soundhole, Bridge)
    {
      id: 'body',
      tier: 1,
      xPct: 77.5,
      yPct: 26.5,
    },
    {
      id: 'soundhole',
      tier: 1,
      xPct: 63.0,
      yPct: 50.0,
      isRosetteHotspot: true,
    },
    {
      id: 'bridge-saddle',
      tier: 1,
      xPct: 82.8,
      yPct: 50.0,
    },
    // Tier 2 (Secondary parts, cleanly spaced left-to-right)
    {
      id: 'headstock',
      tier: 2,
      xPct: 9.0,
      yPct: 50.0,
    },
    {
      id: 'tuning-pegs',
      tier: 2,
      xPct: 11.5,
      yPct: 24.5,
    },
    {
      id: 'nut',
      tier: 2,
      xPct: 19.2,
      yPct: 34.0,
    },
    {
      id: 'neck',
      tier: 2,
      xPct: 26.5,
      yPct: 66.5,
    },
    {
      id: 'fretboard',
      tier: 2,
      tierLabel: 'Fretboard',
      xPct: 33.5,
      yPct: 35.5,
    },
    {
      id: 'fret-wires',
      tier: 2,
      xPct: 41.2,
      yPct: 64.5,
    },
    {
      id: 'fret-spaces',
      tier: 2,
      xPct: 48.0,
      yPct: 36.0,
    },
    {
      id: 'strings',
      tier: 2,
      xPct: 54.5,
      yPct: 62.5,
    },
  ] as UkuleleHotspotCoordinate[],

  /**
   * 4 Playable Nylon Strings (Nut to Saddle percentages)
   * G4 = 392.00 Hz (Top string in horizontal view)
   * C4 = 261.63 Hz
   * E4 = 329.63 Hz
   * A4 = 440.00 Hz (Bottom string in horizontal view)
   */
  strings: [
    {
      stringNumber: 4,
      letter: 'G',
      note: 'G4',
      frequencyHz: 392.0,
      nutXPct: 19.2,
      saddleXPct: 82.2,
      yPct: 42.2,
      strokeWidthPx: 2.0,
    },
    {
      stringNumber: 3,
      letter: 'C',
      note: 'C4',
      frequencyHz: 261.63,
      nutXPct: 19.2,
      saddleXPct: 82.2,
      yPct: 47.4,
      strokeWidthPx: 2.8,
    },
    {
      stringNumber: 2,
      letter: 'E',
      note: 'E4',
      frequencyHz: 329.63,
      nutXPct: 19.2,
      saddleXPct: 82.2,
      yPct: 52.6,
      strokeWidthPx: 2.2,
    },
    {
      stringNumber: 1,
      letter: 'A',
      note: 'A4',
      frequencyHz: 440.0,
      nutXPct: 19.2,
      saddleXPct: 82.2,
      yPct: 57.8,
      strokeWidthPx: 1.6,
    },
  ] as UkuleleStringCoordinate[],
};
