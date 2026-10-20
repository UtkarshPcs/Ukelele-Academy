export interface UkuleleStringInfo {
  stringNumber: 4 | 3 | 2 | 1; // 4 is top (closest to ceiling), 1 is bottom (closest to floor)
  note: 'G4' | 'C4' | 'E4' | 'A4';
  shortName: 'G' | 'C' | 'E' | 'A';
  baseFrequency: number; // Hz
  midiNote: number;
  positionLabel: string;
  thicknessRank: string;
  mnemonicWord: string;
  beginnerDescription: string;
  color: string;
}

export const UKULELE_STRINGS: UkuleleStringInfo[] = [
  {
    stringNumber: 4,
    note: 'G4',
    shortName: 'G',
    baseFrequency: 392.0,
    midiNote: 67,
    positionLabel: 'Top string (closest to your chin)',
    thicknessRank: '2nd thinnest',
    mnemonicWord: 'Good',
    beginnerDescription:
      'String 4 is at the very top when you hold the ukulele. Surprise! Even though it is on top, it has a high, bright sound (higher than C and E). This special ukulele setup is called "re-entrant tuning" and gives the ukulele its cheerful island chime.',
    color: '#0284C7',
  },
  {
    stringNumber: 3,
    note: 'C4',
    shortName: 'C',
    baseFrequency: 261.63,
    midiNote: 60,
    positionLabel: 'Second string from the top',
    thicknessRank: 'Thickest string',
    mnemonicWord: 'Chefs',
    beginnerDescription:
      'String 3 is the thickest string on your ukulele and produces the deepest, lowest note (Middle C). Because it is thicker, it vibrates more slowly.',
    color: '#059669',
  },
  {
    stringNumber: 2,
    note: 'E4',
    shortName: 'E',
    baseFrequency: 329.63,
    midiNote: 64,
    positionLabel: 'Second string from the bottom',
    thicknessRank: '2nd thickest',
    mnemonicWord: 'Eat',
    beginnerDescription:
      'String 2 sits right below the C string. Its pitch is higher than C, sitting warmly in the middle of the ukulele’s voice.',
    color: '#D97706',
  },
  {
    stringNumber: 1,
    note: 'A4',
    shortName: 'A',
    baseFrequency: 440.0,
    midiNote: 69,
    positionLabel: 'Bottom string (closest to the floor)',
    thicknessRank: 'Thinnest string',
    mnemonicWord: 'Apples',
    beginnerDescription:
      'String 1 is the bottom string closest to the floor. It is the thinnest string and plays the highest open note on the ukulele (A = 440 Hz). You will press this string for your very first chord!',
    color: '#E11D48',
  },
];

export interface FingerGuide {
  number: 1 | 2 | 3 | 4;
  name: string;
  shortLabel: string;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  description: string;
}

export const FINGER_GUIDES: Record<1 | 2 | 3 | 4, FingerGuide> = {
  1: {
    number: 1,
    name: 'Index Finger',
    shortLabel: '1 · Index',
    color: '#0284C7',
    bgClass: 'bg-sky-600',
    textClass: 'text-sky-700',
    borderClass: 'border-sky-600',
    description: 'Your pointing finger on your fretting hand (usually your left hand).',
  },
  2: {
    number: 2,
    name: 'Middle Finger',
    shortLabel: '2 · Middle',
    color: '#059669',
    bgClass: 'bg-emerald-600',
    textClass: 'text-emerald-700',
    borderClass: 'border-emerald-600',
    description: 'The longest finger in the center of your hand.',
  },
  3: {
    number: 3,
    name: 'Ring Finger',
    shortLabel: '3 · Ring',
    color: '#D97706',
    bgClass: 'bg-amber-600',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-600',
    description: 'Your third finger—used for the famous one-finger C Major chord!',
  },
  4: {
    number: 4,
    name: 'Pinky Finger',
    shortLabel: '4 · Pinky',
    color: '#E11D48',
    bgClass: 'bg-rose-600',
    textClass: 'text-rose-700',
    borderClass: 'border-rose-600',
    description: 'Your smallest finger, useful for higher frets and four-finger chords.',
  },
};

export interface AnatomyPart {
  id: string;
  name: string;
  plainTitle: string;
  whatItIs: string;
  whatItDoes: string;
  beginnerTip: string;
  svgRegion: {x: number; y: number; r: number};
}

export const UKULELE_ANATOMY: AnatomyPart[] = [
  {
    id: 'headstock',
    name: 'Headstock',
    plainTitle: 'The "Head" of the Ukulele',
    whatItIs: 'The flat wooden paddle at the very end of the neck.',
    whatItDoes: 'Holds the four metal tuning pegs that keep the strings anchored at the top.',
    beginnerTip: 'When you use a clip-on tuner, you clip it right onto the top edge of the headstock!',
    svgRegion: {x: 88, y: 120, r: 42},
  },
  {
    id: 'tuning-pegs',
    name: 'Tuning Pegs (Machine Heads)',
    plainTitle: 'The String Tightness Knobs',
    whatItIs: 'Four small twistable knobs sticking out from the sides of the headstock.',
    whatItDoes:
      'Turning a peg tightens the string (making the sound higher) or loosens it (making the sound lower).',
    beginnerTip:
      'Always pluck the string while turning its peg slowly so you can hear the pitch changing—never turn a peg blindly!',
    svgRegion: {x: 82, y: 62, r: 30},
  },
  {
    id: 'nut',
    name: 'Nut',
    plainTitle: 'The Starting Line Ridge',
    whatItIs: 'A thin white or cream bar with 4 tiny slots sitting where the headstock meets the neck.',
    whatItDoes:
      'Lifts the strings slightly off the wood and spaces them evenly so they can vibrate freely from the "zero" line.',
    beginnerTip: 'When you look at a chord diagram, the thick top line represents the nut.',
    svgRegion: {x: 145, y: 120, r: 24},
  },
  {
    id: 'neck',
    name: 'Neck',
    plainTitle: 'The Wooden Handle',
    whatItIs: 'The long, rounded wooden piece connecting the headstock to the body.',
    whatItDoes: 'Supports the fretboard on the front and gives your thumb a smooth place to rest on the back.',
    beginnerTip:
      'Relax your thumb gently against the back of the neck—like holding a sandwich without squishing the bread!',
    svgRegion: {x: 265, y: 120, r: 36},
  },
  {
    id: 'fretboard',
    name: 'Fretboard (Fingerboard)',
    plainTitle: 'The Front Playing Surface',
    whatItIs: 'The smooth dark strip of wood glued to the front of the neck directly underneath the strings.',
    whatItDoes: 'Provides the surface where your fingertips press the strings down to change notes.',
    beginnerTip: 'Keep your fingernails trimmed short on your fretting hand so your fingertips can stand tall on the fretboard.',
    svgRegion: {x: 220, y: 120, r: 34},
  },
  {
    id: 'frets',
    name: 'Frets & Fret Wires',
    plainTitle: 'The Note-Changing Spaces',
    whatItIs:
      'Thin metal bars embedded vertically across the fretboard, creating numbered spaces (Fret 1, Fret 2, Fret 3...).',
    whatItDoes:
      'When you press a string down behind a metal fret wire, the string only vibrates from that metal bar to the bridge—making the note higher!',
    beginnerTip:
      'Never press directly ON TOP of the metal wire (that muffles the sound). Press in the wooden space just BEHIND the metal wire.',
    svgRegion: {x: 315, y: 120, r: 32},
  },
  {
    id: 'fret-markers',
    name: 'Fret Markers (Position Dots)',
    plainTitle: 'Map Landmarks on the Neck',
    whatItIs: 'Small white or pearl dots inlaid at Frets 5, 7, 10, and 12 (and sometimes Fret 3).',
    whatItDoes: 'Helps you find which fret you are on immediately without having to count from Fret 1 every time.',
    beginnerTip: 'Many ukuleles also have tiny dots on the top side of the neck so you can see them without tilting the ukulele!',
    svgRegion: {x: 368, y: 120, r: 26},
  },
  {
    id: 'strings',
    name: 'Four Nylon Strings (G-C-E-A)',
    plainTitle: 'The Sound Makers',
    whatItIs: 'Four soft nylon or fluorocarbon strings stretched from the bridge to the headstock.',
    whatItDoes: 'Vibrate when plucked or strummed to create musical notes. Unlike steel guitar strings, nylon is gentle on beginner fingers.',
    beginnerTip: 'Remember "Good Chefs Eat Apples" from top string (4) to bottom string (1): G - C - E - A.',
    svgRegion: {x: 425, y: 120, r: 30},
  },
  {
    id: 'body',
    name: 'Body',
    plainTitle: 'The Hollow Acoustic Echo Chamber',
    whatItIs: 'The large hollow wooden figure-eight box of the ukulele.',
    whatItDoes:
      'Captures the quiet vibration of the strings and bounces the sound waves around inside the wood to make it warm and loud.',
    beginnerTip: 'Cradle the curve of the body lightly with your right forearm against your chest—try not to press the front wood too hard so it can vibrate.',
    svgRegion: {x: 615, y: 68, r: 44},
  },
  {
    id: 'soundhole',
    name: 'Soundhole',
    plainTitle: 'The Speaker Opening',
    whatItIs: 'The round opening in the center of the body under the strings.',
    whatItDoes: 'Lets the amplified sound waves escape out toward your ears and the room.',
    beginnerTip:
      'The "Sweet Spot" for strumming is actually slightly toward the neck where the neck meets the body—not directly over the center of the soundhole!',
    svgRegion: {x: 515, y: 120, r: 40},
  },
  {
    id: 'bridge-saddle',
    name: 'Bridge & Saddle',
    plainTitle: 'The Bottom String Anchor',
    whatItIs: 'The wooden block (bridge) and thin white ridge (saddle) glued to the lower body.',
    whatItDoes: 'Ties down the bottom ends of the strings and transfers their vibrations directly into the wooden top of the body.',
    beginnerTip: 'Strumming too close to the bridge makes the sound thin and metallic. Keep your strumming hand near where the neck meets the body.',
    svgRegion: {x: 660, y: 120, r: 34},
  },
];

export interface ChordDefinition {
  id: string;
  name: string;
  fullName: string;
  quality: 'Major' | 'Minor' | 'Dominant 7th';
  difficulty: '1 Finger' | '2 Fingers' | '3 Fingers';
  /** Fret numbers for [G4 (String 4), C4 (String 3), E4 (String 2), A4 (String 1)] */
  frets: [number, number, number, number];
  /** Finger numbers (0 = open, 1 = index, 2 = middle, 3 = ring, 4 = pinky) for [G, C, E, A] */
  fingers: [0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4];
  moodDescription: string;
  plainInstructions: string[];
  commonMistake: string;
  transitionTip: string;
}

export const CHORD_LIBRARY: Record<string, ChordDefinition> = {
  C: {
    id: 'C',
    name: 'C',
    fullName: 'C Major',
    quality: 'Major',
    difficulty: '1 Finger',
    frets: [0, 0, 0, 3],
    fingers: [0, 0, 0, 3],
    moodDescription: 'Bright, sunny, and resolved—like coming home.',
    plainInstructions: [
      'Leave the top three strings (G, C, E) completely open (do not touch them).',
      'Take your Ring Finger (Finger 3) and place its tip on the 3rd fret of the bottom A string (String 1).',
      'Press just behind the 3rd metal fret wire and strum all 4 strings gently.',
    ],
    commonMistake:
      'Using your index finger instead of your ring finger. Using Ring Finger #3 now makes switching to G7 and F much easier later!',
    transitionTip: 'Keep your Ring Finger hovering right over the bottom A string so you can slide it to Fret 2 for G7.',
  },
  Am: {
    id: 'Am',
    name: 'Am',
    fullName: 'A Minor',
    quality: 'Minor',
    difficulty: '1 Finger',
    frets: [2, 0, 0, 0],
    fingers: [2, 0, 0, 0],
    moodDescription: 'Warm, thoughtful, and slightly wistful.',
    plainInstructions: [
      'Take your Middle Finger (Finger 2) and place its very tip on the 2nd fret of the top G string (String 4).',
      'Curve your finger like a cat’s claw or a rainbow arch so the belly of your finger does not touch the C, E, or A strings below it.',
      'Leave strings 3, 2, and 1 open and strum all four strings.',
    ],
    commonMistake:
      'Letting the underside of your middle finger lean down and accidentally mute the C string (String 3). Arch your wrist forward slightly!',
    transitionTip: 'Keep Middle Finger #2 pressed down when switching from Am to F—it is your "Anchor Finger"!',
  },
  F: {
    id: 'F',
    name: 'F',
    fullName: 'F Major',
    quality: 'Major',
    difficulty: '2 Fingers',
    frets: [2, 0, 1, 0],
    fingers: [2, 0, 1, 0],
    moodDescription: 'Warm, uplifting, and cozy.',
    plainInstructions: [
      'Start by making the Am chord: Middle Finger (Finger 2) on Fret 2 of the top G string (String 4).',
      'Now add your Index Finger (Finger 1) onto Fret 1 of the E string (String 2, second from the bottom).',
      'Make sure both fingers stand tall on their fingertips so the open C string ( between them) and open A string (below them) ring clearly!',
    ],
    commonMistake:
      'Accidentally muting the open C string or bottom A string because your fingers are lying too flat. Push your knuckles slightly forward to arch your fingers.',
    transitionTip: 'To go between F and Am, simply lift and drop your Index Finger #1 while Middle Finger #2 stays glued in place.',
  },
  G7: {
    id: 'G7',
    name: 'G7',
    fullName: 'G Dominant 7th',
    quality: 'Dominant 7th',
    difficulty: '3 Fingers',
    frets: [0, 2, 1, 2],
    fingers: [0, 2, 1, 3],
    moodDescription: 'Suspenseful and energetic—creates a musical pull that begs to return to C Major.',
    plainInstructions: [
      'Leave the top G string (String 4) open.',
      'Place your Index Finger (Finger 1) on Fret 1 of the E string (String 2)—the exact same spot as in the F chord!',
      'Place your Middle Finger (Finger 2) on Fret 2 of the C string (String 3).',
      'Place your Ring Finger (Finger 3) on Fret 2 of the bottom A string (String 1). Your three fingers form a neat little triangle pointing toward the headstock.',
    ],
    commonMistake:
      'Crowding Middle Finger #2 and Ring Finger #3 on Fret 2. Rotate your wrist slightly toward the headstock so both fingers fit comfortably.',
    transitionTip:
      'From C to G7: slide Ring Finger #3 from Fret 3 to Fret 2 on the A string. From F to G7: keep Index Finger #1 anchored on Fret 1 of the E string!',
  },
  G: {
    id: 'G',
    name: 'G',
    fullName: 'G Major',
    quality: 'Major',
    difficulty: '3 Fingers',
    frets: [0, 2, 3, 2],
    fingers: [0, 1, 3, 2],
    moodDescription: 'Open, proud, and folk-inspired.',
    plainInstructions: [
      'Leave the top G string (String 4) open.',
      'Place your Index Finger (Finger 1) on Fret 2 of the C string (String 3).',
      'Place your Middle Finger (Finger 2) on Fret 2 of the bottom A string (String 1).',
      'Tuck your Ring Finger (Finger 3) onto Fret 3 of the E string (String 2) between them, forming a triangle pointing toward the body.',
    ],
    commonMistake:
      'Trying to keep your fingers perpendicular to the neck, which makes Fret 2 feel cramped. Angle your knuckles slightly toward the tuning pegs!',
    transitionTip: 'When switching from C to G, use your Ring Finger as a visual guide moving from Fret 3 of A to Fret 3 of E.',
  },
  A7: {
    id: 'A7',
    name: 'A7',
    fullName: 'A Dominant 7th',
    quality: 'Dominant 7th',
    difficulty: '1 Finger',
    frets: [0, 1, 0, 0],
    fingers: [0, 1, 0, 0],
    moodDescription: 'Bluesy, playful, and jazzy.',
    plainInstructions: [
      'Place your Index Finger (Finger 1) on Fret 1 of the C string (String 3).',
      'Leave strings 4 (G), 2 (E), and 1 (A) completely open!',
      'Strum all four strings for an instant bluesy sound.',
    ],
    commonMistake: 'Pressing too hard on Fret 1, which pulls the thick C string slightly out of tune. A firm but gentle touch is all you need.',
    transitionTip: 'Great partner chord with C, F, and Dm.',
  },
  Dm: {
    id: 'Dm',
    name: 'Dm',
    fullName: 'D Minor',
    quality: 'Minor',
    difficulty: '3 Fingers',
    frets: [2, 2, 1, 0],
    fingers: [2, 3, 1, 0],
    moodDescription: 'Deep, soulful, and expressive.',
    plainInstructions: [
      'Start by holding an F Major chord: Middle Finger (#2) on G string Fret 2, and Index Finger (#1) on E string Fret 1.',
      'Now tuck your Ring Finger (Finger 3) right underneath your Middle Finger onto Fret 2 of the C string (String 3).',
      'Leave the bottom A string (String 1) open.',
    ],
    commonMistake: 'Ring Finger #3 accidentally touching the E string below it. Keep your thumb centered on the back of the neck.',
    transitionTip: 'Think of Dm simply as an F chord with your Ring Finger added to Fret 2 of the C string!',
  },
  Em: {
    id: 'Em',
    name: 'Em',
    fullName: 'E Minor',
    quality: 'Minor',
    difficulty: '3 Fingers',
    frets: [0, 4, 3, 2],
    fingers: [0, 3, 2, 1],
    moodDescription: 'Cinematic, mysterious, and flowing.',
    plainInstructions: [
      'Leave the top G string (String 4) open.',
      'Build a neat diagonal staircase starting from the bottom string:',
      'Index Finger (#1) on Fret 2 of the bottom A string (String 1).',
      'Middle Finger (#2) on Fret 3 of the E string (String 2).',
      'Ring Finger (#3) on Fret 4 of the C string (String 3).',
    ],
    commonMistake: 'Forgetting which way the staircase goes. Always start with Index Finger #1 on the bottom string Fret 2 and walk up!',
    transitionTip: 'From G Major to Em, your Middle Finger on A string Fret 2 gets replaced by your Index Finger.',
  },
  D: {
    id: 'D',
    name: 'D',
    fullName: 'D Major',
    quality: 'Major',
    difficulty: '3 Fingers',
    frets: [2, 2, 2, 0],
    fingers: [1, 2, 3, 0],
    moodDescription: 'Bright, triumphant, and resonant.',
    plainInstructions: [
      'Stack Index (#1), Middle (#2), and Ring (#3) fingers on Fret 2 of strings G (4), C (3), and E (2).',
      'Leave the bottom A string (String 1) open so it rings clearly.',
    ],
    commonMistake: 'Crowding all three fingers on Fret 2 so the Ring Finger slips over the metal fret wire. Tilt your hand slightly so they stack vertically.',
    transitionTip: 'Slide your Middle Finger smoothly along the G string when moving to Am or F.',
  },
  Cmaj7: {
    id: 'Cmaj7',
    name: 'Cmaj7',
    fullName: 'C Major 7th',
    quality: 'Major',
    difficulty: '1 Finger',
    frets: [0, 0, 0, 2],
    fingers: [0, 0, 0, 2],
    moodDescription: 'Jazzy, dreamy, lush, and relaxing—like a warm sunset.',
    plainInstructions: [
      'Leave the top three strings (G, C, E) open.',
      'Place your Middle Finger (Finger 2) on Fret 2 of the bottom A string (String 1).',
      'Strum gently across all 4 strings for an instant lo-fi jazz lounge sound!',
    ],
    commonMistake: 'Pressing Fret 3 out of habit for C Major—Fret 2 gives Cmaj7 its dreamy jazz color.',
    transitionTip: 'Walk down the bottom A string from C (Fret 3) → Cmaj7 (Fret 2) → C7 (Fret 1)!',
  },
  C7: {
    id: 'C7',
    name: 'C7',
    fullName: 'C Dominant 7th',
    quality: 'Dominant 7th',
    difficulty: '1 Finger',
    frets: [0, 0, 0, 1],
    fingers: [0, 0, 0, 1],
    moodDescription: 'Funky, bluesy, and upbeat—pulls strongly toward F Major.',
    plainInstructions: [
      'Leave the top three strings (G, C, E) open.',
      'Place your Index Finger (Finger 1) on Fret 1 of the bottom A string (String 1).',
      'Strum all 4 strings for an easy 1-finger blues/jazz groove.',
    ],
    commonMistake: 'Letting your finger slide over the 1st fret wire.',
    transitionTip: 'From C7 (0-0-0-1), hop your Index Finger up one string to E-1 and add Middle on G-2 to land on F Major!',
  },
  E7: {
    id: 'E7',
    name: 'E7',
    fullName: 'E Dominant 7th',
    quality: 'Dominant 7th',
    difficulty: '3 Fingers',
    frets: [1, 2, 0, 2],
    fingers: [1, 2, 0, 3],
    moodDescription: 'Dramatic, vintage jazz & bossa nova tension that loves resolving to A Minor.',
    plainInstructions: [
      'Place Index Finger (#1) on Fret 1 of the top G string (String 4).',
      'Place Middle Finger (#2) on Fret 2 of the C string (String 3).',
      'Leave the E string (String 2) open (0), and place Ring Finger (#3) on Fret 2 of the bottom A string (String 1).',
    ],
    commonMistake: 'Accidentally muting the open E string between your Middle and Ring fingers.',
    transitionTip: 'Resolves beautifully into Am (2-0-0-0) for emotional or jazzy progressions.',
  },
};

export interface StrumBeatStep {
  label: '1' | '&' | '2' | '&' | '3' | '&' | '4' | '&';
  action: 'D' | 'U' | 'miss-D' | 'miss-U' | 'rest';
  accent?: boolean;
  coaching: string;
}

export interface StrummingPattern {
  id: string;
  name: string;
  subtitle: string;
  timeSignature: '4/4' | '3/4';
  recommendedBpm: number;
  steps: StrumBeatStep[];
  beginnerExplanation: string;
}

export const STRUMMING_PATTERNS: Record<string, StrummingPattern> = {
  'down-4': {
    id: 'down-4',
    name: 'Four Steady Down-Strums',
    subtitle: 'D - D - D - D (The Heartbeat Pattern)',
    timeSignature: '4/4',
    recommendedBpm: 72,
    beginnerExplanation:
      'Every song has a steady pulse called the "beat." Here, we count 1 - 2 - 3 - 4 and brush downward across all four strings once on each number. Notice how your hand quietly floats back up on the "&" between beats without touching the strings.',
    steps: [
      {label: '1', action: 'D', accent: true, coaching: 'Brush down gently across all 4 strings'},
      {label: '&', action: 'miss-U', coaching: 'Bring hand up quietly without touching strings'},
      {label: '2', action: 'D', coaching: 'Brush down on beat 2'},
      {label: '&', action: 'miss-U', coaching: 'Float hand back up'},
      {label: '3', action: 'D', coaching: 'Brush down on beat 3'},
      {label: '&', action: 'miss-U', coaching: 'Float hand back up'},
      {label: '4', action: 'D', coaching: 'Brush down on beat 4'},
      {label: '&', action: 'miss-U', coaching: 'Float hand up ready for Beat 1'},
    ],
  },
  'down-up-8': {
    id: 'down-up-8',
    name: 'The Down-Up Groove',
    subtitle: 'D U D U D U D U (Eighth-Note Flow)',
    timeSignature: '4/4',
    recommendedBpm: 70,
    beginnerExplanation:
      'Since your hand already travels back up between beats 1, 2, 3, and 4, we simply let your fingertip lightly graze the strings on the way up! Count "1 and 2 and 3 and 4 and." Up-strums only need to brush the bottom 2 or 3 strings lightly.',
    steps: [
      {label: '1', action: 'D', accent: true, coaching: 'Down on 1'},
      {label: '&', action: 'U', coaching: 'Light up-strum on "and"'},
      {label: '2', action: 'D', coaching: 'Down on 2'},
      {label: '&', action: 'U', coaching: 'Light up-strum on "and"'},
      {label: '3', action: 'D', coaching: 'Down on 3'},
      {label: '&', action: 'U', coaching: 'Light up-strum on "and"'},
      {label: '4', action: 'D', coaching: 'Down on 4'},
      {label: '&', action: 'U', coaching: 'Light up-strum on "and"'},
    ],
  },
  'down-down-up': {
    id: 'down-down-up',
    name: 'The "Down, Down-Up" Bounce',
    subtitle: 'D - D U - D - D U',
    timeSignature: '4/4',
    recommendedBpm: 76,
    beginnerExplanation:
      'Mixing steady quarter notes with quick down-up pairs gives your playing an instant folk & pop bounce. Say it out loud as you play: "Down... Down-Up... Down... Down-Up."',
    steps: [
      {label: '1', action: 'D', accent: true, coaching: 'Down on 1'},
      {label: '&', action: 'miss-U', coaching: 'Bring hand up in the air'},
      {label: '2', action: 'D', coaching: 'Down on 2'},
      {label: '&', action: 'U', coaching: 'Quick Up on "and"'},
      {label: '3', action: 'D', accent: true, coaching: 'Down on 3'},
      {label: '&', action: 'miss-U', coaching: 'Bring hand up in the air'},
      {label: '4', action: 'D', coaching: 'Down on 4'},
      {label: '&', action: 'U', coaching: 'Quick Up on "and"'},
    ],
  },
  'island-strum': {
    id: 'island-strum',
    name: 'The Famous Island Strum (Calypso)',
    subtitle: 'D - D U - U D U (The Signature Ukulele Rhythm)',
    timeSignature: '4/4',
    recommendedBpm: 78,
    beginnerExplanation:
      'This is the most iconic rhythm in the ukulele world! The secret happens on Beat 3: your hand still moves down on Beat 3, but it misses the strings in the air ("Ghost Strum") so it can catch the strings on the way UP on the "&" after 3. Chant: "Down... Down-Up... Up-Down-Up!"',
    steps: [
      {label: '1', action: 'D', accent: true, coaching: 'Down on 1'},
      {label: '&', action: 'miss-U', coaching: 'Float up in the air'},
      {label: '2', action: 'D', coaching: 'Down on 2'},
      {label: '&', action: 'U', coaching: 'Up on "and"'},
      {label: '3', action: 'miss-D', coaching: 'GHOST DOWN in the air (miss the strings!)'},
      {label: '&', action: 'U', accent: true, coaching: 'Catch the strings coming UP!'},
      {label: '4', action: 'D', coaching: 'Down on 4'},
      {label: '&', action: 'U', coaching: 'Up on "and"'},
    ],
  },
  'waltz-3-4': {
    id: 'waltz-3-4',
    name: '3/4 Waltz Rhythm',
    subtitle: 'D - D U - D U (1 - 2 & - 3 &)',
    timeSignature: '3/4',
    recommendedBpm: 72,
    beginnerExplanation:
      'Some songs—like "Amazing Grace" and "Clementine"—sway in groups of 3 beats instead of 4, like a gentle boat on the waves: "ONE, two-and, three-and." Make Beat 1 slightly warmer and fuller than beats 2 and 3.',
    steps: [
      {label: '1', action: 'D', accent: true, coaching: 'Warm Down-strum on Beat 1'},
      {label: '&', action: 'miss-U', coaching: 'Float up'},
      {label: '2', action: 'D', coaching: 'Lighter Down on 2'},
      {label: '&', action: 'U', coaching: 'Light Up on "&"'},
      {label: '3', action: 'D', coaching: 'Lighter Down on 3'},
      {label: '&', action: 'U', coaching: 'Light Up on "&"'},
    ],
  },
};

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Instrument' | 'Playing Technique' | 'Rhythm & Timing' | 'Chords & Notes';
  plainDefinition: string;
  everydayAnalogy: string;
  whyItMatters: string;
}

export const MUSICAL_GLOSSARY: GlossaryTerm[] = [
  {
    id: 'string',
    term: 'String',
    category: 'Instrument',
    plainDefinition: 'One of the four tight nylon cords stretched across your ukulele that vibrate to make sound.',
    everydayAnalogy: 'Like stretching a rubber band between your fingers and plucking it—except crafted to make a pure musical tone.',
    whyItMatters: 'Each of the 4 strings (G, C, E, A) gives you a different starting note.',
  },
  {
    id: 'open-string',
    term: 'Open String',
    category: 'Playing Technique',
    plainDefinition: 'Playing a string without pressing it down anywhere on the neck with your left hand.',
    everydayAnalogy: 'Like an open lane on a highway—the string vibrates freely all the way from the nut to the bridge.',
    whyItMatters: 'Every chord diagram uses a "0" or open circle at the top to show which strings are played open.',
  },
  {
    id: 'fret',
    term: 'Fret',
    category: 'Instrument',
    plainDefinition: 'Both the thin metal bars across the neck AND the wooden spaces between them where you press your fingers.',
    everydayAnalogy: 'Like rungs on a ladder—each step closer to the body makes the note one step higher.',
    whyItMatters: 'Pressing just behind the metal fret bar shortens the vibrating part of the string, changing its note cleanly.',
  },
  {
    id: 'pitch',
    term: 'Pitch',
    category: 'Chords & Notes',
    plainDefinition: 'How high or low a musical sound is (not how loud or quiet it is).',
    everydayAnalogy: 'A bird chirping has a high pitch; thunder rumbling has a low pitch.',
    whyItMatters: 'Tuning pegs adjust pitch when tuning, and frets raise pitch when you press a string.',
  },
  {
    id: 'tuning',
    term: 'Standard Tuning (G-C-E-A)',
    category: 'Instrument',
    plainDefinition: 'Setting each of the four strings to its exact expected pitch: G (top), C, E, and A (bottom).',
    everydayAnalogy: 'Like setting four clocks to the exact same timezone before a meeting.',
    whyItMatters: 'If your strings are out of tune, even perfect finger placement will sound sour!',
  },
  {
    id: 're-entrant',
    term: 'Re-entrant Tuning (High G)',
    category: 'Instrument',
    plainDefinition: 'The ukulele’s unique string order where the top 4th string (G) is tuned HIGHER than the middle C and E strings.',
    everydayAnalogy: 'Instead of stairs going strictly low-to-high, the first step starts high, dips down to C, and climbs back up to A.',
    whyItMatters: 'Gives the ukulele its unmistakable bright, jangly Hawaiian charm.',
  },
  {
    id: 'chord',
    term: 'Chord',
    category: 'Chords & Notes',
    plainDefinition: 'Three or more notes strummed together at the same time so they blend into one rich, harmonious sound.',
    everydayAnalogy: 'If a single note is one ingredient (like flour), a chord is the baked cake where the flavors blend together.',
    whyItMatters: 'Most songs are accompanied by strumming a sequence of just 2, 3, or 4 chords!',
  },
  {
    id: 'beat',
    term: 'Beat (Pulse)',
    category: 'Rhythm & Timing',
    plainDefinition: 'The steady, repeating tick-tock pulse underneath a piece of music—what you naturally tap your foot to.',
    everydayAnalogy: 'Exactly like your heartbeat when you are walking at a steady pace.',
    whyItMatters: 'Keeping a steady beat matters much more to listeners than playing fast.',
  },
  {
    id: 'tempo',
    term: 'Tempo (BPM)',
    category: 'Rhythm & Timing',
    plainDefinition: 'How fast or slow the steady beat moves, measured in Beats Per Minute (BPM).',
    everydayAnalogy: '60 BPM is exactly one beat per second (like a wall clock ticking). 120 BPM is two beats per second.',
    whyItMatters: 'Always practice new chords or transitions at a slow tempo (60 BPM) first, then speed up gradually.',
  },
  {
    id: 'measure',
    term: 'Measure (Bar)',
    category: 'Rhythm & Timing',
    plainDefinition: 'A small container of beats—most commonly 4 beats grouped together (counted 1 - 2 - 3 - 4).',
    everydayAnalogy: 'Like sentences in a paragraph that keep music organized into predictable chunks.',
    whyItMatters: 'In songs, chord changes almost always happen right on Beat 1 of a new measure.',
  },
  {
    id: 'anchor-finger',
    term: 'Anchor Finger (Pivot Finger)',
    category: 'Playing Technique',
    plainDefinition: 'A finger that stays pressed on the exact same string and fret while your other fingers move to a new chord.',
    everydayAnalogy: 'Like keeping one foot planted on the floor when pivoting in basketball.',
    whyItMatters: 'Makes switching between chords like Am and F (or F and G7) twice as fast and accurate without looking!',
  },
  {
    id: 'tab',
    term: 'Tab (Tablature)',
    category: 'Chords & Notes',
    plainDefinition: 'A simple visual map for plucking melodies using 4 horizontal lines (representing the 4 strings) and numbers (telling you which fret to press).',
    everydayAnalogy: 'Paint-by-numbers for your fingers—no traditional sheet-music reading required! Note: the top line of Tab is the bottom A string.',
    whyItMatters: 'Lets complete beginners play recognizable melodies like "Twinkle, Twinkle, Little Star" in minutes.',
  },
];

export interface SongMeasure {
  chord: string;
  lyrics: string;
  beats: number;
}

export interface BeginnerSong {
  id: string;
  title: string;
  subtitle: string;
  stageUnlocked: number;
  chordsUsed: string[];
  strummingPatternId: string;
  recommendedBpm: number;
  timeSignature: '4/4' | '3/4';
  description: string;
  coachTip: string;
  measures: SongMeasure[];
  melodyTab?: Array<{string: 4 | 3 | 2 | 1; fret: number; lyric: string; durationBeats: number}>;
}

export const BEGINNER_SONGBOOK: BeginnerSong[] = [
  {
    id: 'row-your-boat',
    title: 'Row, Row, Row Your Boat',
    subtitle: 'Your First Complete 1-Chord Song',
    stageUnlocked: 4,
    chordsUsed: ['C'],
    strummingPatternId: 'down-4',
    recommendedBpm: 72,
    timeSignature: '4/4',
    description:
      'You only need ONE finger (Ring Finger #3 on Fret 3 of the bottom A string for C Major) to play this entire traditional song! Focus 100% on keeping a relaxed, steady beat.',
    coachTip: 'Keep your Ring Finger planted on C Major the whole time and brush down gently four times per box.',
    measures: [
      {chord: 'C', lyrics: 'Row, row, row your boat', beats: 4},
      {chord: 'C', lyrics: 'Gent-ly down the stream,', beats: 4},
      {chord: 'C', lyrics: 'Mer-ri-ly, mer-ri-ly, mer-ri-ly, mer-ri-ly,', beats: 4},
      {chord: 'C', lyrics: 'Life is but a dream!', beats: 4},
    ],
  },
  {
    id: 'sunshine-groove',
    title: 'Morning Island Breeze',
    subtitle: '2-Chord Reggae/Folk Groove (C & F)',
    stageUnlocked: 4,
    chordsUsed: ['C', 'F'],
    strummingPatternId: 'down-down-up',
    recommendedBpm: 74,
    timeSignature: '4/4',
    description:
      'A cheerful two-chord song switching between C Major and F Major. Practice moving from C (Ring Finger on A-3) to F (Middle on G-2, Index on E-1) right on Beat 1.',
    coachTip: 'Look ahead at the next measure on Beat 4 so your left hand starts moving toward the next chord early!',
    measures: [
      {chord: 'C', lyrics: 'Don’t wor-ry a-bout a thing,', beats: 4},
      {chord: 'C', lyrics: 'Ev-ery lit-tle note gonna ring,', beats: 4},
      {chord: 'F', lyrics: 'Sing-ing sweet songs of mel-o-dy,', beats: 4},
      {chord: 'C', lyrics: 'Pure and true for you and me!', beats: 4},
      {chord: 'C', lyrics: 'Rise up this morn-ing with the sun,', beats: 4},
      {chord: 'F', lyrics: 'Three lit-tle chords have just be-gun,', beats: 4},
      {chord: 'C', lyrics: 'Strum-ming al-ong so bright and free,', beats: 4},
      {chord: 'C', lyrics: 'This is my hap-py u-ku-le-le!', beats: 4},
    ],
  },
  {
    id: 'clementine',
    title: 'Oh My Darling, Clementine',
    subtitle: '2-Chord Classic (C & G7) with the Slide Trick',
    stageUnlocked: 6,
    chordsUsed: ['C', 'G7'],
    strummingPatternId: 'waltz-3-4',
    recommendedBpm: 76,
    timeSignature: '3/4',
    description:
      'Uses the magical Ring Finger Slide between C (Fret 3 of A string) and G7 (Fret 2 of A string, adding Index & Middle). Never lift your Ring Finger off the bottom string!',
    coachTip: 'Keep your Ring Finger touching the bottom A string the entire song—just slide it between Fret 3 (C) and Fret 2 (G7)!',
    measures: [
      {chord: 'C', lyrics: 'Oh my dar-ling,', beats: 3},
      {chord: 'C', lyrics: 'Oh my dar-ling,', beats: 3},
      {chord: 'C', lyrics: 'Oh my dar-ling', beats: 3},
      {chord: 'G7', lyrics: 'Clem-en-tine!', beats: 3},
      {chord: 'G7', lyrics: 'Thou art lost and', beats: 3},
      {chord: 'C', lyrics: 'gone for-ev-er,', beats: 3},
      {chord: 'G7', lyrics: 'Dread-ful sor-ry,', beats: 3},
      {chord: 'C', lyrics: 'Clem-en-tine!', beats: 3},
    ],
  },
  {
    id: 'you-are-my-sunshine',
    title: 'You Are My Sunshine',
    subtitle: 'The Essential 3-Chord Milestone (C, F, G7)',
    stageUnlocked: 6,
    chordsUsed: ['C', 'F', 'G7'],
    strummingPatternId: 'down-down-up',
    recommendedBpm: 78,
    timeSignature: '4/4',
    description:
      'One of the most beloved ukulele songs ever written. Combines C, F, and G7 using both the C-to-G7 slide and the F-to-G7 Index Finger anchor.',
    coachTip: 'When moving from C to F on "skies are gray", bring your Middle and Index fingers down together like a pair of chopsticks.',
    measures: [
      {chord: 'C', lyrics: 'You are my sun-shine,', beats: 4},
      {chord: 'C', lyrics: 'my on-ly sun-shine,', beats: 4},
      {chord: 'F', lyrics: 'You make me hap-py', beats: 4},
      {chord: 'C', lyrics: 'when skies are gray.', beats: 4},
      {chord: 'F', lyrics: 'You’ll nev-er know, dear,', beats: 4},
      {chord: 'C', lyrics: 'how much I love you,', beats: 4},
      {chord: 'C', lyrics: 'Please don’t take my', beats: 2},
      {chord: 'G7', lyrics: 'sun-shine a-', beats: 2},
      {chord: 'C', lyrics: 'way!', beats: 4},
    ],
  },
  {
    id: 'twinkle-little-star',
    title: 'Twinkle, Twinkle, Little Star',
    subtitle: 'Play Chords OR Single-Note Melody Tab',
    stageUnlocked: 7,
    chordsUsed: ['C', 'F', 'G7'],
    strummingPatternId: 'down-4',
    recommendedBpm: 72,
    timeSignature: '4/4',
    description:
      'Learn how chords and single-note melodies fit together! You can strum the C, F, and G7 chords OR pluck the single-note melody using our interactive Tab player.',
    coachTip: 'For the melody tab, pluck with the fleshy pad of your right thumb and let each note ring clearly.',
    measures: [
      {chord: 'C', lyrics: 'Twin-kle, twin-kle,', beats: 4},
      {chord: 'F', lyrics: 'lit-tle star,', beats: 4},
      {chord: 'C', lyrics: 'How I won-der', beats: 4},
      {chord: 'G7', lyrics: 'what you are!', beats: 2},
      {chord: 'C', lyrics: '(shine bright!)', beats: 2},
    ],
    melodyTab: [
      {string: 3, fret: 0, lyric: 'Twin-', durationBeats: 1},
      {string: 3, fret: 0, lyric: 'kle,', durationBeats: 1},
      {string: 2, fret: 3, lyric: 'twin-', durationBeats: 1},
      {string: 2, fret: 3, lyric: 'kle,', durationBeats: 1},
      {string: 1, fret: 0, lyric: 'lit-', durationBeats: 1},
      {string: 1, fret: 0, lyric: 'tle', durationBeats: 1},
      {string: 2, fret: 3, lyric: 'star,', durationBeats: 2},
      {string: 2, fret: 1, lyric: 'How', durationBeats: 1},
      {string: 2, fret: 1, lyric: 'I', durationBeats: 1},
      {string: 2, fret: 0, lyric: 'won-', durationBeats: 1},
      {string: 2, fret: 0, lyric: 'der', durationBeats: 1},
      {string: 3, fret: 2, lyric: 'what', durationBeats: 1},
      {string: 3, fret: 2, lyric: 'you', durationBeats: 1},
      {string: 3, fret: 0, lyric: 'are!', durationBeats: 2},
    ],
  },
  {
    id: 'four-magic-chords-medley',
    title: 'Aloha Horizon (The 4 Magic Chords)',
    subtitle: 'C – G – Am – F with the Island Strum',
    stageUnlocked: 8,
    chordsUsed: ['C', 'G', 'Am', 'F'],
    strummingPatternId: 'island-strum',
    recommendedBpm: 80,
    timeSignature: '4/4',
    description:
      'The ultimate graduation showcase! Combines the four most famous chords in modern music (C – G – Am – F) with the signature Island Strum (D - D U - U D U).',
    coachTip:
      'Remember the "Keep Strumming Rule": your right hand keeps the Island Strum flowing even while your left hand transitions between G and Am!',
    measures: [
      {chord: 'C', lyrics: 'Gold-en waves up-on the bay,', beats: 4},
      {chord: 'G', lyrics: 'Trade winds blow the clouds a-way,', beats: 4},
      {chord: 'Am', lyrics: 'Four sweet strings be-neath my hand,', beats: 4},
      {chord: 'F', lyrics: 'Mu-sicech-oes cross the sand.', beats: 4},
      {chord: 'C', lyrics: 'Down, down-up, up-down-up we play,', beats: 4},
      {chord: 'G', lyrics: 'Learn-ing more with ev-ery day,', beats: 4},
      {chord: 'Am', lyrics: 'Anchor fin-ger holds the line,', beats: 4},
      {chord: 'F', lyrics: 'Now the u-ku-le-le shines!', beats: 4},
    ],
  },
];

/**
 * Calculate the exact frequency (Hz) of any string (4,3,2,1) at any fret (0..12)
 */
export function getNoteFrequency(stringNumber: 4 | 3 | 2 | 1, fret: number): number {
  const stringInfo = UKULELE_STRINGS.find((s) => s.stringNumber === stringNumber);
  if (!stringInfo) return 440;
  return stringInfo.baseFrequency * Math.pow(2, fret / 12);
}

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export function getNoteNameAtFret(stringNumber: 4 | 3 | 2 | 1, fret: number): string {
  const stringInfo = UKULELE_STRINGS.find((s) => s.stringNumber === stringNumber);
  if (!stringInfo) return 'A4';
  const midi = stringInfo.midiNote + fret;
  const noteName = NOTE_NAMES[midi % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${noteName}${octave}`;
}
