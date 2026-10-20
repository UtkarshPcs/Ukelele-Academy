export interface LessonConfig {
  id: string;
  number: number;
  stageId: number;
  stageTitle: string;
  title: string;
  durationMinutes: number;
  isSpacedReview?: boolean;
  objective: string;
  plainExplanation: string[];
  newTerms: string[];
  visualMode:
    | 'anatomy'
    | 'posture'
    | 'strings'
    | 'fretboard'
    | 'chord'
    | 'transition'
    | 'strumming'
    | 'song'
    | 'tab';
  visualConfig: {
    highlightAnatomyId?: string;
    activeChordId?: string;
    secondaryChordId?: string;
    targetFrets?: Array<{
      string: 4 | 3 | 2 | 1;
      fret: number;
      finger?: 0 | 1 | 2 | 3 | 4;
      label?: string;
    }>;
    strummingPatternId?: string;
    songId?: string;
  };
  interactiveActivity: {
    title: string;
    instruction: string;
    type:
      | 'explore-anatomy'
      | 'pluck-strings'
      | 'press-fret'
      | 'strum-chord'
      | 'switch-chords'
      | 'tap-rhythm'
      | 'play-song'
      | 'play-tab';
    requiredActionsCount: number;
    actionHint: string;
  };
  practicalExercise: {
    title: string;
    steps: string[];
    recommendedSeconds: number;
  };
  commonMistake: {
    symptom: string;
    whyItHappens: string;
    quickFix: string;
  };
  checkpoint: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export interface CurriculumStage {
  id: number;
  title: string;
  subtitle: string;
  milestoneBadge: string;
}

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    id: 1,
    title: 'Stage 1: Getting Started',
    subtitle: 'From absolute zero: anatomy, how sound works, holding posture, and finger numbers.',
    milestoneBadge: 'Ukulele Explorer',
  },
  {
    id: 2,
    title: 'Stage 2: First Sounds & Tuning',
    subtitle: 'Plucking open strings, hearing high vs. low pitch, tuning G-C-E-A, and pressing your first fret.',
    milestoneBadge: 'First Sound Maker',
  },
  {
    id: 3,
    title: 'Stage 3: First Chords',
    subtitle: 'Reading chord diagrams and playing C Major, A Minor (Am), and F Major cleanly.',
    milestoneBadge: 'Chord Builder',
  },
  {
    id: 4,
    title: 'Stage 4: Playing Your First Song',
    subtitle: 'Feeling a steady beat, counting 4-beat measures, and playing your first 1-chord and 2-chord songs.',
    milestoneBadge: 'First Song Performer',
  },
  {
    id: 5,
    title: 'Stage 5: Rhythm & Strumming',
    subtitle: 'Adding relaxed up-strums, eighth-note grooves, ghost strums, and the iconic Island Strum.',
    milestoneBadge: 'Rhythm Keeper',
  },
  {
    id: 6,
    title: 'Stage 6: Chord Transitions',
    subtitle: 'Mastering G7 and G Major, anchor-finger shortcuts, and the "Keep Strumming" rule.',
    milestoneBadge: 'Smooth Switcher',
  },
  {
    id: 7,
    title: 'Stage 7: Music Fundamentals',
    subtitle: 'Major vs. Minor moods, musical alphabet, reading single-note Tab, and 3/4 waltz rhythm.',
    milestoneBadge: 'Melody Reader',
  },
  {
    id: 8,
    title: 'Stage 8: Real Playing Skills',
    subtitle: 'Dm, A7, Em & D chords, fingerpicking arpeggios, dynamics, and the 4-Chord Graduation Medley.',
    milestoneBadge: 'Confident Ukulele Player',
  },
];

export const CURRICULUM_LESSONS: LessonConfig[] = [
  // ==================== STAGE 1: GETTING STARTED ====================
  {
    id: 'lesson-1',
    number: 1,
    stageId: 1,
    stageTitle: 'Stage 1: Getting Started',
    title: 'Meet Your Ukulele: Body, Soundhole & Bridge',
    durationMinutes: 4,
    objective: 'Identify the hollow body, soundhole, and bridge, and understand how vibrating strings become warm acoustic sound.',
    plainExplanation: [
      'Welcome! You do not need a single drop of musical background to learn the ukulele. We are starting at absolute zero.',
      'At its heart, a ukulele is a simple wooden acoustic amplifier. When you pluck a tight nylon string by itself in the air, it barely makes a whisper. But on a ukulele, the strings are tied to a wooden block called the Bridge on top of a hollow wooden box called the Body.',
      'When a string vibrates, that vibration travels through the bridge into the hollow wooden body, bounces around inside like an echo chamber, and projects out through the round Soundhole toward your ears.',
    ],
    newTerms: ['string'],
    visualMode: 'anatomy',
    visualConfig: {
      highlightAnatomyId: 'body',
    },
    interactiveActivity: {
      title: 'Explore the Sound Chamber',
      instruction: 'Click or tap at least 4 numbered hotspots on the interactive Ukulele Anatomy diagram (especially Body, Soundhole, and Bridge) to inspect what each part does.',
      type: 'explore-anatomy',
      requiredActionsCount: 4,
      actionHint: 'Tap the glowing pins on the interactive ukulele diagram above.',
    },
    practicalExercise: {
      title: 'Feel the Acoustic Vibration',
      steps: [
        'Pick up your ukulele (or observe the interactive diagram if practicing virtually).',
        'Place your palm flat on the wooden back of the ukulele body.',
        'With your other thumb, gently pluck any string once and feel the wood vibrating against your hand.',
      ],
      recommendedSeconds: 45,
    },
    commonMistake: {
      symptom: 'The ukulele sounds quiet or muffled when held tightly against your stomach.',
      whyItHappens: 'Pressing the entire wooden body tightly against thick clothing absorbs the wood’s vibrations.',
      quickFix: 'Cradle the ukulele lightly with your forearm so the front wooden top can vibrate freely.',
    },
    checkpoint: {
      question: 'What is the main job of the hollow wooden Body and round Soundhole?',
      options: [
        'To amplify the quiet vibration of the strings into a warm, audible sound',
        'To tighten or loosen the strings to change their note',
        'To tell you where to place your left-hand fingers',
        'To make the ukulele heavier so it does not float away',
      ],
      correctIndex: 0,
      explanation: 'Exactly! The hollow body acts as an acoustic echo chamber that amplifies the vibrations of the strings and sends the sound out through the soundhole.',
      hint: 'Think about why acoustic instruments are hollow inside instead of solid wood.',
    },
  },
  {
    id: 'lesson-2',
    number: 2,
    stageId: 1,
    stageTitle: 'Stage 1: Getting Started',
    title: 'The Neck, Headstock & Tuning Pegs',
    durationMinutes: 4,
    objective: 'Understand how the neck, nut, headstock, and tuning pegs hold the strings and control their tightness.',
    plainExplanation: [
      'Now let’s look at the long wooden handle sticking out from the body. This is called the Neck. The flat front surface of the neck—right underneath the strings—is called the Fretboard.',
      'At the far end of the neck sits the Headstock (the "head" of the ukulele), which holds four twistable knobs called Tuning Pegs. Each string wraps around one tuning peg.',
      'Between the headstock and the neck sits a thin white ridge with four tiny grooves called the Nut. The nut acts as the "starting line" that lifts the strings slightly above the fretboard so they don’t buzz against the wood.',
    ],
    newTerms: ['pitch', 'tuning'],
    visualMode: 'anatomy',
    visualConfig: {
      highlightAnatomyId: 'headstock',
    },
    interactiveActivity: {
      title: 'Inspect the Neck & Headstock',
      instruction: 'Click or tap on the Headstock, Tuning Pegs, Nut, and Neck hotspots on the interactive diagram to see how the strings are anchored.',
      type: 'explore-anatomy',
      requiredActionsCount: 4,
      actionHint: 'Tap the pins on the left side of the ukulele diagram (Headstock, Tuning Pegs, Nut, Neck).',
    },
    practicalExercise: {
      title: 'Trace a String from Bottom to Top',
      steps: [
        'Follow the top string with your eyes starting from the Bridge on the body.',
        'Trace it across the Soundhole, along the Fretboard, and over the white Nut slot.',
        'See which of the four Tuning Pegs on the Headstock that string wraps around.',
      ],
      recommendedSeconds: 45,
    },
    commonMistake: {
      symptom: 'Turning the wrong tuning peg while trying to tune a string.',
      whyItHappens: 'Two pegs sit on the top edge of the headstock and two sit on the bottom edge.',
      quickFix: 'Always trace the string with your finger from the nut up to its peg before turning the knob.',
    },
    checkpoint: {
      question: 'What happens when you turn a Tuning Peg on the headstock?',
      options: [
        'It makes the ukulele louder or quieter like a volume knob',
        'It tightens or loosens a string, making its pitch (note) higher or lower',
        'It switches the ukulele from acoustic to electric mode',
        'It changes how many beats are in a measure',
      ],
      correctIndex: 1,
      explanation: 'Spot on! Tightening a string raises its pitch (makes the note higher), and loosening it lowers its pitch.',
      hint: 'Think about stretching a rubber band tighter vs. looser.',
    },
  },
  {
    id: 'lesson-3',
    number: 3,
    stageId: 1,
    stageTitle: 'Stage 1: Getting Started',
    title: 'The Four Strings & The "Good Chefs Eat Apples" Secret',
    durationMinutes: 5,
    objective: 'Learn how ukulele strings are numbered (4 to 1), their note names (G-C-E-A), and why the top string sounds high.',
    plainExplanation: [
      'Your ukulele has 4 strings. Here is the first funny quirk of the音楽 world: we count strings from the FLOOR UP! That means String 1 is the bottom string closest to the floor, and String 4 is the top string closest to your chin.',
      'When you brush down from the top string (String 4) to the bottom string (String 1), the four notes are G – C – E – A. An easy way to remember G-C-E-A from ceiling to floor is the phrase: "Good Chefs Eat Apples"!',
      'Wait—listen closely when you pluck them in order! The top G string (String 4) is actually HIGHER in pitch than the C string right below it. This is called Re-entrant Tuning, and it is what gives the ukulele its bright, joyful island sound.',
    ],
    newTerms: ['string', 're-entrant', 'open-string'],
    visualMode: 'strings',
    visualConfig: {
      targetFrets: [
        {string: 4, fret: 0, label: 'G (Good)'},
        {string: 3, fret: 0, label: 'C (Chefs)'},
        {string: 2, fret: 0, label: 'E (Eat)'},
        {string: 1, fret: 0, label: 'A (Apples)'},
      ],
    },
    interactiveActivity: {
      title: 'Pluck All 4 Strings in Order (G - C - E - A)',
      instruction: 'Click or tap each of the 4 open strings on the interactive fretboard to hear their real pitches and notice how String 4 (G) is higher than String 3 (C).',
      type: 'pluck-strings',
      requiredActionsCount: 4,
      actionHint: 'Tap Strings 4 (G), 3 (C), 2 (E), and 1 (A) on the interactive fretboard.',
    },
    practicalExercise: {
      title: 'Say & Pluck: "Good Chefs Eat Apples"',
      steps: [
        'Pluck the top string (String 4) and say "Good (G)" out loud.',
        'Pluck the next string down (String 3, the thickest one!) and say "Chefs (C)". Notice how low and warm it sounds!',
        'Pluck String 2 and say "Eat (E)", then pluck the bottom String 1 and say "Apples (A)".',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Calling the top string closest to your chin "String 1".',
      whyItHappens: 'In everyday reading we count top-to-bottom, but stringed instruments number strings from thinnest/highest (bottom = 1) to top (4).',
      quickFix: 'Remember: String 1 is #1 closest to the floor (A). String 4 is at the top (G).',
    },
    checkpoint: {
      question: 'When holding the ukulele in playing position, which string is String 1 (the A string)?',
      options: [
        'The top string closest to your chin',
        'The bottom string closest to the floor',
        'The thickest string in the middle',
        'Whichever string you pluck first',
      ],
      correctIndex: 1,
      explanation: 'Correct! String 1 (the A string) is the bottom string closest to the floor, and String 4 (the G string) is the top string closest to your chin.',
      hint: 'Remember: string numbers count from the floor (1) up toward the ceiling (4).',
    },
  },
  {
    id: 'lesson-4',
    number: 4,
    stageId: 1,
    stageTitle: 'Stage 1: Getting Started',
    title: 'How to Hold the Ukulele Comfortably',
    durationMinutes: 5,
    objective: 'Hold the ukulele securely using the forearm cradle and relaxed left thumb without squeezing the neck.',
    plainExplanation: [
      'Many beginners struggle to switch chords simply because their left hand is busy trying to stop the ukulele from falling! Let’s fix that right now.',
      'Hold the wooden body against the center of your chest (just above your waist). Gently hug the bottom curve of the body with the inside of your right forearm. Your right forearm does 80% of the holding work!',
      'Angle the neck slightly upward (like a clock hand pointing toward 10 o’clock). Rest the pad of your left thumb gently against the back of the neck, leaving a small "mouse hole" gap between your palm and the bottom edge of the neck so your fingers can move freely.',
    ],
    newTerms: ['fret'],
    visualMode: 'posture',
    visualConfig: {
      highlightAnatomyId: 'neck',
    },
    interactiveActivity: {
      title: 'Posture & Hand Alignment Check',
      instruction: 'Interact with the fretboard and posture checklist by tapping 3 open strings while practicing your relaxed forearm cradle.',
      type: 'pluck-strings',
      requiredActionsCount: 3,
      actionHint: 'Tap 3 strings on the interactive stage while checking your posture.',
    },
    practicalExercise: {
      title: 'The "No-Left-Hand" Hug Test',
      steps: [
        'Sit up comfortably and cradle the ukulele body against your chest with your right forearm.',
        'Take your left hand completely off the neck for 3 seconds—your right forearm should hold the ukulele steady against your chest!',
        'Now bring your left thumb gently to the back of the neck without gripping it like a baseball bat.',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Left thumb wrapping all the way over the top of the neck like gripping a hammer ("The Death Grip").',
      whyItHappens: 'Squeezing with the whole palm feels secure at first, but it locks up your fingers so they cannot reach across the strings.',
      quickFix: 'Keep your thumb pad resting on the back of the neck (roughly behind Fret 2) and keep a tiny breathing space under the neck.',
    },
    checkpoint: {
      question: 'Why do we cradle the ukulele body with our right forearm against our chest?',
      options: [
        'So our left hand is free to move smoothly between chords instead of holding up the ukulele’s weight',
        'To block the soundhole so the neighbors cannot hear us',
        'Because the tuning pegs are located on the body',
        'To press all four strings down at the same time',
      ],
      correctIndex: 0,
      explanation: 'Yes! When your right forearm supports the body against your chest, your left hand stays light, relaxed, and free to glide between chords.',
      hint: 'Think about what happens to your left fingers if they have to hold the weight of the instrument.',
    },
  },
  {
    id: 'lesson-5',
    number: 5,
    stageId: 1,
    stageTitle: 'Stage 1: Getting Started',
    title: 'Meet the Frets & Left-Hand Finger Numbers (1-2-3-4)',
    durationMinutes: 5,
    objective: 'Identify numbered fret spaces, locate the "sweet spot" just behind the fret wire, and memorize finger numbers 1, 2, 3, and 4.',
    plainExplanation: [
      'Look at the metal strips running across the neck. The spaces between those metal wires are called Frets. Fret 1 is the space right next to the white Nut. Fret 2 is the next space toward the body, then Fret 3, and so on.',
      'To get a crystal-clear note without buzzing, you do NOT press directly on top of the metal wire. Instead, press in the wooden space just BEHIND the metal wire (closer to the headstock, right next to the wire).',
      'In ukulele lessons, we number your left-hand fingers from 1 to 4 (your thumb is T and stays behind the neck): 1 = Index (pointing finger), 2 = Middle, 3 = Ring, 4 = Pinky.',
    ],
    newTerms: ['fret'],
    visualMode: 'fretboard',
    visualConfig: {
      targetFrets: [
        {string: 1, fret: 1, finger: 1, label: 'Fret 1 · Index (1)'},
        {string: 1, fret: 2, finger: 2, label: 'Fret 2 · Middle (2)'},
        {string: 1, fret: 3, finger: 3, label: 'Fret 3 · Ring (3)'},
      ],
    },
    interactiveActivity: {
      title: 'Tap Frets 1, 2, and 3 on the Bottom String',
      instruction: 'Click or tap Frets 1, 2, and 3 on the bottom A string (String 1) in the interactive fretboard to hear how each fret steps the note higher.',
      type: 'press-fret',
      requiredActionsCount: 3,
      actionHint: 'Click Fret 1, Fret 2, and Fret 3 on the bottom A string.',
    },
    practicalExercise: {
      title: 'Finger Number Tap Dance',
      steps: [
        'Hold up your left hand and wiggle Finger 1 (Index), Finger 2 (Middle), Finger 3 (Ring), and Finger 4 (Pinky).',
        'Touch the very tip of Finger 1 to Fret 1 of the bottom string (just behind the 1st metal wire).',
        'Now try Finger 2 on Fret 2, and Finger 3 on Fret 3—always using your curled fingertip, not the flat fingerprint pad!',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'A dull "thud" or metallic buzz when pressing a fret.',
      whyItHappens: 'Either your finger is sitting directly ON TOP of the metal fret wire (muffling the string) or too far back toward the previous fret.',
      quickFix: 'Aim for the "Sweet Spot": in the wooden space just 2 millimeters behind the metal wire.',
    },
    checkpoint: {
      question: 'If a lesson asks you to place "Finger 3 on Fret 3", which finger and where should you press?',
      options: [
        'Your Middle Finger directly on top of the 3rd metal wire',
        'Your Ring Finger in the 3rd wooden space, just behind the 3rd metal wire',
        'Your Thumb on the 3rd string',
        'Your Pinky Finger on the soundhole',
      ],
      correctIndex: 1,
      explanation: 'Nailed it! Finger 3 is your Ring Finger, and you press in the 3rd fret space just behind the 3rd metal wire.',
      hint: 'Count from Index = 1, Middle = 2, Ring = 3, Pinky = 4.',
    },
  },

  // ==================== STAGE 2: FIRST SOUNDS & TUNING ====================
  {
    id: 'lesson-6',
    number: 6,
    stageId: 2,
    stageTitle: 'Stage 2: First Sounds & Tuning',
    title: 'Your First Pluck: Playing Open Strings Cleanly',
    durationMinutes: 5,
    objective: 'Pluck individual open strings with the fleshy pad of your right thumb to produce a warm, rounded tone.',
    plainExplanation: [
      'When you play a string without pressing anything with your left hand, it is called an Open String (written as "0" on diagrams).',
      'For your very first sounds, we will use your right thumb. Bring your right hand over the spot where the neck meets the body—just slightly ahead of the soundhole. This is the ukulele’s acoustic "Sweet Spot" where the strings sound warmest.',
      'Rest the fleshy side of your right thumb gently on the top G string (String 4), and let it roll downward off the string into the air. Don’t yank or pull the string away from the wood—just brush across it smoothly.',
    ],
    newTerms: ['open-string'],
    visualMode: 'strings',
    visualConfig: {
      targetFrets: [
        {string: 4, fret: 0, label: 'Open G (0)'},
        {string: 3, fret: 0, label: 'Open C (0)'},
        {string: 2, fret: 0, label: 'Open E (0)'},
        {string: 1, fret: 0, label: 'Open A (0)'},
      ],
    },
    interactiveActivity: {
      title: 'Pluck Each Open String 4 Times',
      instruction: 'Pluck the open strings on the interactive ukulele stage (4 times total) and listen to how long each nylon note rings out ("sustain").',
      type: 'pluck-strings',
      requiredActionsCount: 4,
      actionHint: 'Click or tap the open strings (Fret 0) on the fretboard 4 times.',
    },
    practicalExercise: {
      title: 'The Warm Thumb Pluck',
      steps: [
        'Hover your right thumb right where the neck meets the body.',
        'Gently pluck String 4 (G) with the soft pad of your thumb and count to 4 while it rings.',
        'Repeat on String 3 (C), String 2 (E), and String 1 (A), aiming for a warm, even volume on every string.',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'The string makes a loud "snap" against the fretboard.',
      whyItHappens: 'Hooking your finger underneath the string and pulling it outward away from the ukulele.',
      quickFix: 'Push gently parallel to the top of the ukulele—let your thumb glide across the top of the string.',
    },
    checkpoint: {
      question: 'Where along the strings should your right hand pluck or strum for the warmest, sweetest sound?',
      options: [
        'Right over the spot where the neck meets the body (just in front of the soundhole)',
        'Right up against the wooden bridge at the bottom',
        'Over the headstock next to the tuning pegs',
        'On the back of the ukulele',
      ],
      correctIndex: 0,
      explanation: 'Right on! Strumming or plucking where the neck meets the body gives you the warmest balance of string slack and acoustic resonance.',
      hint: 'Strumming near the bridge sounds stiff and metallic; where do the strings feel softer?',
    },
  },
  {
    id: 'lesson-7',
    number: 7,
    stageId: 2,
    stageTitle: 'Stage 2: First Sounds & Tuning',
    title: 'High vs. Low Pitch: How Frets & Tension Work',
    durationMinutes: 5,
    objective: 'Hear and compare higher vs. lower pitches and understand why pressing higher frets raises the note.',
    plainExplanation: [
      'In music, we never use "high" and "low" to mean loud and quiet. Instead, Pitch means how high (squeaky/bright) or low (deep/booming) a note sounds.',
      'When you press a string down at Fret 1, Fret 2, or Fret 3 and pluck it, only the section of string between your finger and the bridge vibrates. A shorter vibrating string vibrates faster, which creates a HIGHER pitch!',
      'Notice the confusing geography on the neck: moving your hand toward the body (Fret 1 → Fret 2 → Fret 3 → Fret 5) is called moving UP the neck because the pitch goes UP!',
    ],
    newTerms: ['pitch', 'fret'],
    visualMode: 'fretboard',
    visualConfig: {
      targetFrets: [
        {string: 3, fret: 0, label: 'Low C (Open)'},
        {string: 3, fret: 2, finger: 2, label: 'Higher (D)'},
        {string: 3, fret: 4, finger: 3, label: 'Even Higher (E)'},
        {string: 1, fret: 0, label: 'High A (Open)'},
      ],
    },
    interactiveActivity: {
      title: 'Climb the Pitch Ladder',
      instruction: 'Tap at least 4 different frets from left to right (Fret 0 → Fret 2 → Fret 4 → Fret 7) on the interactive fretboard to hear the pitch climb higher.',
      type: 'press-fret',
      requiredActionsCount: 4,
      actionHint: 'Click any 4 fret spaces from left to right on the interactive fretboard.',
    },
    practicalExercise: {
      title: 'The Siren Walk on String 1',
      steps: [
        'Pluck the bottom A string (String 1) open (Fret 0).',
        'Press Fret 2 and pluck—hear how the pitch went higher?',
        'Press Fret 5 (the first white dot marker) and pluck, then Fret 7 (second dot). You just walked up the fretboard!',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Pressing Fret 3 with your left hand, but the note still sounds like an open string—or doesn’t change when you move frets.',
      whyItHappens: 'You pressed Fret 3 on one string (like G), while your right thumb plucked a different string (like C)!',
      quickFix: 'Double-check that your left finger and right thumb are on the exact same string.',
    },
    checkpoint: {
      question: 'As you move your fretting finger closer to the soundhole (from Fret 1 to Fret 5), what happens to the pitch?',
      options: [
        'The pitch gets higher because the vibrating length of the string gets shorter',
        'The pitch gets lower because the string gets longer',
        'The pitch stays exactly the same, only the volume changes',
        'The string stops vibrating completely',
      ],
      correctIndex: 0,
      explanation: 'Exactly! Pressing frets closer to the body shortens the vibrating length of the string, making it vibrate faster and sound higher in pitch.',
      hint: 'Think of a tiny piccolo vs. a giant tuba—shorter means higher pitch!',
    },
  },
  {
    id: 'lesson-8',
    number: 8,
    stageId: 2,
    stageTitle: 'Stage 2: First Sounds & Tuning',
    title: 'How to Tune Your Ukulele (G - C - E - A)',
    durationMinutes: 6,
    objective: 'Use reference tones and the built-in pitch tuner to verify that your four strings match G4, C4, E4, and A4.',
    plainExplanation: [
      'Before playing every day, spend 60 seconds checking your tuning. New nylon strings stretch out for the first week or two, just like new shoelaces—so slipping out of tune is completely normal!',
      'Our target notes from top string (4) to bottom string (1) are G4 (392 Hz), C4 (261.6 Hz), E4 (329.6 Hz), and A4 (440 Hz).',
      'If your string sounds lower than the reference note, it is called Flat (♭)—tighten the tuning peg slowly to raise it. If your string sounds too high, it is called Sharp (♯)—loosen the peg slightly.',
    ],
    newTerms: ['tuning', 'pitch'],
    visualMode: 'strings',
    visualConfig: {
      targetFrets: [
        {string: 4, fret: 0, label: 'G4 · 392 Hz'},
        {string: 3, fret: 0, label: 'C4 · 261.6 Hz'},
        {string: 2, fret: 0, label: 'E4 · 329.6 Hz'},
        {string: 1, fret: 0, label: 'A4 · 440 Hz'},
      ],
    },
    interactiveActivity: {
      title: 'Play All 4 Reference Tuning Notes',
      instruction: 'Click each of the 4 open strings (G, C, E, A) on the fretboard (or open the Practice Studio Tuner) to listen closely to the exact reference pitch for each string.',
      type: 'pluck-strings',
      requiredActionsCount: 4,
      actionHint: 'Click each of the 4 open strings on the interactive fretboard.',
    },
    practicalExercise: {
      title: 'Tune G - C - E - A One String at a Time',
      steps: [
        'Tap String 4 (G) on the screen to hear its reference tone, then pluck your ukulele’s top string.',
        'If your ukulele sounds lower, slowly turn its tuning peg to tighten the string while plucking until the two notes match.',
        'Repeat for String 3 (C), String 2 (E), and String 1 (A). You can also use the Microphone Tuner tab at any time!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Turning a tuning peg a full rotation without plucking the string, risking snapping the string.',
      whyItHappens: 'If you don’t pluck continuously while turning, you cannot hear whether the pitch is going up or down.',
      quickFix: 'Pluck the string every 2 seconds while making tiny, gentle quarter-turn adjustments to the peg.',
    },
    checkpoint: {
      question: 'If a tuner says your C string is "Flat" (too low in pitch), what should you do?',
      options: [
        'Slowly tighten the C string’s tuning peg while plucking to raise its pitch up to C',
        'Loosen the string until it hangs slack',
        'Press harder with your left thumb',
        'Strum faster with your right hand',
      ],
      correctIndex: 0,
      explanation: 'Spot on! "Flat" means the pitch is slightly too low, so gently tightening the string raises the pitch until it reaches the target note.',
      hint: 'Flat = low (like a flat tire that needs more air/tension).',
    },
  },
  {
    id: 'lesson-9',
    number: 9,
    stageId: 2,
    stageTitle: 'Stage 2: First Sounds & Tuning',
    title: 'Your First Gentle Down-Strum',
    durationMinutes: 5,
    objective: 'Brush across all four strings smoothly in one motion using your thumb pad or index finger.',
    plainExplanation: [
      'Plucking plays one string at a time. Strumming means brushing across all 4 strings in one smooth sweep so their notes blend together into a single rich sound!',
      'There are two beginner-friendly ways to do a Down-Strum (moving from the top G string down toward the floor):',
      'Method 1 (Warm Thumb Strum): Glide the soft fleshy pad of your thumb down across all 4 strings. Method 2 (Classic Index Strum): Point your right index finger slightly toward your chest and brush down using the smooth back of your fingernail. Try both and see which feels more relaxed!',
    ],
    newTerms: ['chord'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-4',
    },
    interactiveActivity: {
      title: 'Perform 4 Smooth Down-Strums',
      instruction: 'Use the "Strum Down" button on the interactive stage 4 times to hear and watch how all four strings cascade from G down to A.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Click the "Strum Down" button on the interactive stage 4 times.',
    },
    practicalExercise: {
      title: 'Feather-Light Down-Strums',
      steps: [
        'Shake your right hand out loosely like you are shaking water droplets off your fingers.',
        'Hover your hand over the sweet spot where the neck meets the body.',
        'Brush down across all 4 open strings 8 times smoothly—make sure all 4 strings ring, not just the top two!',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Digging the finger too deeply between the strings and getting stuck.',
      whyItHappens: 'Stiffening the wrist and pushing into the strings instead of skimming across their surface.',
      quickFix: 'Imagine brushing a speck of dust off a delicate cake—just kiss the tops of the strings with a loose wrist.',
    },
    checkpoint: {
      question: 'In a Down-Strum, which direction does your strumming hand travel?',
      options: [
        'From the top G string (String 4) downward toward the bottom A string (String 1)',
        'From the bottom A string upward toward your chin',
        'From the bridge horizontally toward the tuning pegs',
        'Only plucking the middle two strings',
      ],
      correctIndex: 0,
      explanation: 'Correct! "Down" in strumming always means moving physically toward the floor: from String 4 (G) down through String 1 (A).',
      hint: 'Think of gravity: from the ceiling string (G) down to the floor string (A).',
    },
  },
  {
    id: 'lesson-10',
    number: 10,
    stageId: 2,
    stageTitle: 'Stage 2: First Sounds & Tuning',
    title: 'Pressing Your First Note: The Sweet Spot Test',
    durationMinutes: 5,
    objective: 'Press Fret 3 on the bottom A string with your Ring Finger (#3) and make it ring clearly without buzzing.',
    plainExplanation: [
      'You are one step away from playing your very first real ukulele chord! First, let’s master pressing the exact note that builds the C Major chord.',
      'Take your left Ring Finger (Finger #3) and curl it so the very tip lands on Fret 3 of the bottom A string (String 1). Place it right behind the 3rd metal fret wire.',
      'Press down just firmly enough that the string touches the wood firmly, then pluck String 1 with your right thumb. It should ring with a clear, bell-like "C" note!',
    ],
    newTerms: ['fret'],
    visualMode: 'fretboard',
    visualConfig: {
      targetFrets: [{string: 1, fret: 3, finger: 3, label: 'Ring Finger (#3) on Fret 3'}],
    },
    interactiveActivity: {
      title: 'Play Fret 3 on the Bottom String',
      instruction: 'Click or tap Fret 3 on the bottom A string (String 1) 3 times on the interactive fretboard to hear the high C note and inspect the Ring Finger placement.',
      type: 'press-fret',
      requiredActionsCount: 3,
      actionHint: 'Tap Fret 3 on the bottom string (A) 3 times.',
    },
    practicalExercise: {
      title: 'The Buzz-to-Bell Pressure Experiment',
      steps: [
        'Touch Fret 3 of the bottom A string lightly (without pressing down) and pluck—hear that dull, muted "clunk"?',
        'Press halfway down and pluck—hear the metallic buzz?',
        'Now press firmly just behind the 3rd metal fret wire with your fingertip and pluck—hear the pure bell tone! That is the exact pressure you need.',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Your left wrist hurts because you are squeezing way harder than necessary.',
      whyItHappens: 'Beginners often press 3x harder than needed instead of moving their finger closer to the metal fret wire.',
      quickFix: 'Position beats power! Moving your fingertip right behind the metal wire requires half the finger pressure.',
    },
    checkpoint: {
      question: 'If your fretted note makes a metallic buzzing sound when plucked, what are the two things to check first?',
      options: [
        'Slide your fingertip closer to the back of the metal fret wire and press slightly more firmly with your fingertip',
        'Strum harder over the wooden bridge',
        'Loosen all four tuning pegs',
        'Hold your breath while playing',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Buzzing almost always happens because the finger is too far back from the fret wire or not pressing firmly enough on its tip.',
      hint: 'Remember the "Sweet Spot" right behind the metal wire.',
    },
  },

  // ==================== STAGE 3: FIRST CHORDS ====================
  {
    id: 'lesson-11',
    number: 11,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'What Is a Chord? How to Read a Chord Diagram',
    durationMinutes: 5,
    objective: 'Understand what a chord is and translate a vertical chord box diagram onto your ukulele neck.',
    plainExplanation: [
      'A single note is like one color of paint. A Chord is when you play 3 or 4 notes together at the same time so they blend into one rich, harmonious musical mood.',
      'Musicians share chords using a tiny picture called a Chord Diagram (or Chord Box). Imagine standing your ukulele straight up facing you with the headstock at the ceiling:',
      'The 4 vertical lines are the 4 strings from left to right: G (4) – C (3) – E (2) – A (1). The horizontal boxes are Frets 1, 2, 3, and 4 going down. A colored dot tells you where to press, and the number inside the dot tells you which finger (1, 2, 3, or 4) to use!',
    ],
    newTerms: ['chord', 'open-string'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Inspect & Strum the C Chord Diagram',
      instruction: 'Look at how the vertical Chord Diagram matches the horizontal fretboard, then click "Strum Down" or tap the strings 3 times.',
      type: 'strum-chord',
      requiredActionsCount: 3,
      actionHint: 'Click "Strum Down" 3 times while comparing the chord box and fretboard.',
    },
    practicalExercise: {
      title: 'Match Your Ukulele to the Chord Box',
      steps: [
        'Hold your ukulele vertically in front of your face for 5 seconds so the strings run up-and-down just like the Chord Box on screen.',
        'Notice that the leftmost vertical line is the G string (String 4), and the rightmost line is the A string (String 1).',
        'Now bring your ukulele back into comfortable playing position—mental map complete!',
      ],
      recommendedSeconds: 45,
    },
    commonMistake: {
      symptom: 'Reading a chord diagram upside down or mixing up the left line (G) and right line (A).',
      whyItHappens: 'When holding the ukulele horizontally, the top string (G) corresponds to the LEFTmost line on a vertical chord box.',
      quickFix: 'Remember: Leftmost line on the chord box = Top G string closest to your chin. Rightmost line = Bottom A string closest to the floor.',
    },
    checkpoint: {
      question: 'On a standard ukulele chord diagram, what does the rightmost vertical line represent?',
      options: [
        'String 1 (the bottom A string closest to the floor)',
        'String 4 (the top G string closest to your chin)',
        'The 1st metal fret wire',
        'The wooden bridge',
      ],
      correctIndex: 0,
      explanation: 'Exactly! From left to right, the four vertical lines of a chord box are G (4) – C (3) – E (2) – A (1). So the rightmost line is your bottom A string!',
      hint: 'Read the lines left-to-right: Good (G) Chefs (C) Eat (E) Apples (A).',
    },
  },
  {
    id: 'lesson-12',
    number: 12,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'The C Major Chord: Your One-Finger Superpower',
    durationMinutes: 5,
    objective: 'Play a clean, ringing C Major chord (0-0-0-3) using Ring Finger #3.',
    plainExplanation: [
      'Congratulations—because you practiced pressing Fret 3 of the A string in Lesson 10, you already know how to hold the C Major chord!',
      'In chord shorthand, C Major is written as 0-0-0-3. That means: G string = Open (0), C string = Open (0), E string = Open (0), and A string = Fret 3 with Ring Finger (#3).',
      'Why use Ring Finger #3 instead of your pointing finger? Because when we switch to other chords like F and G7 soon, your Index (#1) and Middle (#2) fingers will already be free and hovering right over Frets 1 and 2!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Strum C Major & Check All 4 Strings',
      instruction: 'Strum the C Major chord and pluck its individual strings on the interactive stage (4 actions total) to hear its bright, happy sound.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" or pluck the 4 strings of C Major 4 times.',
    },
    practicalExercise: {
      title: 'The 4-String Clarity Check (Arpeggio Test)',
      steps: [
        'Place Ring Finger (#3) on Fret 3 of the bottom A string.',
        'First, pluck each string one by one from top to bottom (G, then C, then E, then A) to make sure all 4 notes ring clearly.',
        'Now strum across all 4 strings together 4 times, then lift your hand completely off, shake it out, and find C Major again!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Using Index Finger #1 instead of Ring Finger #3 for C Major.',
      whyItHappens: 'The index finger feels strongest at first.',
      quickFix: 'Train Ring Finger #3 right from day one—your future self will thank you when playing songs with G7 and F!',
    },
    checkpoint: {
      question: 'How do you play the C Major chord (0-0-0-3) on the ukulele?',
      options: [
        'Place Ring Finger (#3) on Fret 3 of the bottom A string (String 1) and leave G, C, and E open',
        'Place Index Finger (#1) on Fret 1 of all four strings',
        'Place Middle Finger (#2) on Fret 2 of the top G string',
        'Strum all four strings without touching the fretboard',
      ],
      correctIndex: 0,
      explanation: 'Yes! C Major is 0-0-0-3 with your Ring Finger (#3) on Fret 3 of the bottom A string.',
      hint: '0-0-0-3 means open G, open C, open E, and 3rd fret on A.',
    },
  },
  {
    id: 'lesson-13',
    number: 13,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'The A Minor (Am) Chord: Warm & Thoughtful',
    durationMinutes: 5,
    objective: 'Play the A Minor (Am) chord (2-0-0-0) using Middle Finger #2 with a tall "cat’s claw" finger arch.',
    plainExplanation: [
      'Your second chord is just as easy—it also uses only ONE finger! Meet A Minor (written as Am). While C Major sounds sunny and bright, Am sounds warm, thoughtful, and emotional.',
      'To play Am (2-0-0-0), place your Middle Finger (Finger #2) on Fret 2 of the top G string (String 4). Leave the other three strings (C, E, and A) completely open.',
      'Here is the golden secret for Am: since your finger is on the TOP string, if your finger lies flat, the soft underside of your finger will touch the C string below it and deaden its sound. Curve your knuckles into a tall "rainbow arch" (or cat’s claw) so the C string has a tunnel to vibrate underneath!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'Am',
    },
    interactiveActivity: {
      title: 'Strum & Hear the Mood of A Minor (Am)',
      instruction: 'Strum the Am chord on the interactive stage 4 times and notice how its thoughtful minor harmony contrasts with C Major.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" or pluck the strings of Am 4 times.',
    },
    practicalExercise: {
      title: 'The Tunnel Check for Am',
      steps: [
        'Place Middle Finger (#2) on Fret 2 of the top G string.',
        'Push your left wrist slightly forward so your fingertip stands straight up on the string.',
        'Pluck String 4 (G) and then String 3 (C) right below it—if String 3 rings clearly, your finger tunnel is working!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'String 3 (the C string) makes a muted "thud" when playing Am.',
      whyItHappens: 'Your Middle Finger is leaning downward and touching the C string.',
      quickFix: 'Lower your left thumb slightly toward the middle of the back of the neck and push your wrist slightly forward to arch your fingertip.',
    },
    checkpoint: {
      question: 'Why is it important to curve your Middle Finger (#2) like a rainbow arch when playing the Am chord (2-0-0-0)?',
      options: [
        'So the underside of your finger creates a tunnel and does not accidentally mute the open C string below it',
        'Because curved fingers make the ukulele play twice as fast',
        'To mute all the other strings on purpose',
        'So you can reach the tuning pegs at the same time',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Arching your finger onto its very tip keeps it clear of the open C, E, and A strings below.',
      hint: 'What sits directly underneath the top G string?',
    },
  },
  {
    id: 'lesson-14',
    number: 14,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'Switching Smoothly: C Major to A Minor (Am)',
    durationMinutes: 6,
    objective: 'Transition smoothly between C Major and A Minor by keeping unused fingers hovering close to the strings.',
    plainExplanation: [
      'Knowing individual chords is like knowing individual words; switching between chords is how you speak sentences in music!',
      'Notice how C Major uses Ring Finger #3 on the bottom string (Fret 3), while Am uses Middle Finger #2 on the top string (Fret 2). They don’t even use the same finger!',
      'To switch seamlessly: while playing C with your Ring Finger, keep your Middle Finger hovering just half an inch above Fret 2 of the G string. When it’s time to switch, drop your Middle Finger down while lifting your Ring Finger—like a gentle seesaw!',
    ],
    newTerms: ['chord'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'C',
      secondaryChordId: 'Am',
    },
    interactiveActivity: {
      title: 'Practice Switching Between C and Am',
      instruction: 'Use the chord toggle buttons on the interactive stage to switch back and forth between C Major and Am and strum them (4 actions total).',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle between C and Am on the stage and strum 4 times.',
    },
    practicalExercise: {
      title: 'The Slow-Motion Seesaw Drill',
      steps: [
        'Hold C Major (Ring Finger #3 on bottom string Fret 3) and strum 4 slow down-strums.',
        'Without flying your fingers high into the air, seesaw onto Am (Middle Finger #2 on top string Fret 2) and strum 4 slow down-strums.',
        'Repeat C → Am → C → Am four times at a calm, unhurried pace.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Lifting all your fingers 3 inches away from the fretboard ("flying fingers") between every chord change.',
      whyItHappens: 'Tension in the hand causes fingers to spring open completely.',
      quickFix: 'Keep your idle fingers relaxed and hovering just a centimeter above the strings so they are ready to drop into place.',
    },
    checkpoint: {
      question: 'What is the "Seesaw Secret" for switching smoothly between C Major and A Minor?',
      options: [
        'Keep Middle Finger (#2) and Ring Finger (#3) hovering close to their target strings so one drops down as the other lifts',
        'Use the same index finger to jump from the bottom string to the top string',
        'Put the ukulele down on a table between every chord',
        'Stop strumming for 10 seconds every time you change chords',
      ],
      correctIndex: 0,
      explanation: 'Yes! Because C uses Ring Finger #3 and Am uses Middle Finger #2, keeping both fingers hovering near their home frets makes the switch effortless.',
      hint: 'Which finger plays C and which finger plays Am?',
    },
  },
  {
    id: 'lesson-15',
    number: 15,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'The F Major Chord: Your First Two-Finger Chord',
    durationMinutes: 6,
    objective: 'Play the F Major chord (2-0-1-0) cleanly using Middle Finger #2 and Index Finger #1.',
    plainExplanation: [
      'Here comes a wonderful surprise: if you can play A Minor (Am), you already have half of the F Major chord in place!',
      'To build F Major (2-0-1-0): start by holding Am (Middle Finger #2 on Fret 2 of the top G string). Now keep that finger right where it is, and place your Index Finger (Finger #1) on Fret 1 of the E string (String 2, second from the bottom).',
      'Let’s check all 4 strings from top to bottom: G string = Fret 2 (Middle #2), C string = Open (0), E string = Fret 1 (Index #1), A string = Open (0). Strum all four strings for a warm, uplifting F Major!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'F',
    },
    interactiveActivity: {
      title: 'Strum & Pluck the F Major Chord (2-0-1-0)',
      instruction: 'Strum F Major and pluck its 4 strings on the interactive stage (4 actions total) to see how Index (#1) and Middle (#2) work together.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Strum or pluck the strings of F Major 4 times on the stage.',
    },
    practicalExercise: {
      title: 'The Open-String Sandwich Check',
      steps: [
        'Form F Major: Middle Finger (#2) on G string Fret 2, and Index Finger (#1) on E string Fret 1.',
        'Pluck the 4 strings one at a time: G (fretted) → C (open!) → E (fretted) → A (open!).',
        'If C or A sounds muted, roll right up onto the very tips of your two fingers so the open strings have room to vibrate.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'The bottom A string (String 1) sounds muted when holding F Major.',
      whyItHappens: 'Your Index Finger (#1) on the E string is leaning back slightly and touching the bottom A string.',
      quickFix: 'Bring your wrist slightly forward under the neck so your Index Finger lands vertically on its tip.',
    },
    checkpoint: {
      question: 'Which two fingers and frets form the F Major chord (2-0-1-0)?',
      options: [
        'Middle Finger (#2) on G string Fret 2, and Index Finger (#1) on E string Fret 1',
        'Ring Finger (#3) on A string Fret 3, and Pinky (#4) on E string Fret 3',
        'Index Finger (#1) on G string Fret 1, and Middle Finger (#2) on C string Fret 2',
        'All four strings played open',
      ],
      correctIndex: 0,
      explanation: 'Spot on! F Major is simply your Am chord (Middle #2 on G string Fret 2) plus your Index Finger (#1) on E string Fret 1.',
      hint: '2-0-1-0 means G=2, C=0, E=1, A=0.',
    },
  },
  {
    id: 'lesson-16',
    number: 16,
    stageId: 3,
    stageTitle: 'Stage 3: First Chords',
    title: 'The Anchor Finger Secret: Switching Am ↔ F ↔ C',
    durationMinutes: 6,
    objective: 'Use Middle Finger #2 as an Anchor Finger between Am and F, and transition cleanly between Am, F, and C.',
    plainExplanation: [
      'Professional musicians look effortless when changing chords because they use a shortcut called an Anchor Finger (or Pivot Finger). Whenever two chords share a finger on the exact same string and fret, NEVER lift that finger!',
      'Compare Am (2-0-0-0) and F (2-0-1-0): in both chords, your Middle Finger (#2) sits on Fret 2 of the top G string. That means to switch from Am to F, your Middle Finger stays glued down as your anchor while your Index Finger (#1) simply taps onto Fret 1 of the E string!',
      'When switching from F (2-0-1-0) to C (0-0-0-3), lift Index and Middle together while dropping Ring Finger (#3) onto Fret 3 of the A string.',
    ],
    newTerms: ['anchor-finger'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'Am',
      secondaryChordId: 'F',
    },
    interactiveActivity: {
      title: 'Test the Anchor Finger: Switch Am ↔ F',
      instruction: 'Toggle between Am and F on the interactive fretboard and strum 4 times—watch how Finger #2 on the top G string never moves!',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Switch between Am and F and strum 4 times on the stage.',
    },
    practicalExercise: {
      title: 'The 3-Chord Triangle Loop (Am → F → C)',
      steps: [
        'Hold Am and strum 4 times.',
        'Keep Middle Finger #2 anchored down, add Index Finger #1 for F Major, and strum 4 times.',
        'Switch to C Major (Ring Finger #3 on A string Fret 3) and strum 4 times. Repeat the whole loop 3 times!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Lifting your Middle Finger completely off the fretboard when going from Am to F.',
      whyItHappens: 'Your brain thinks "new chord = reset whole hand".',
      quickFix: 'Consciously tell your Middle Finger: "Stay glued to G string Fret 2!" while your Index Finger moves.',
    },
    checkpoint: {
      question: 'When switching between A Minor (Am) and F Major, which finger acts as your "Anchor Finger" and stays in place?',
      options: [
        'Middle Finger (#2) on Fret 2 of the top G string',
        'Ring Finger (#3) on Fret 3 of the bottom A string',
        'Pinky Finger (#4) on Fret 4',
        'No fingers stay in place',
      ],
      correctIndex: 0,
      explanation: 'Exactly! Both Am (2-0-0-0) and F (2-0-1-0) use Middle Finger #2 on Fret 2 of the top G string, so it never needs to leave the string.',
      hint: 'Compare the top G string in Am (2-0-0-0) and F (2-0-1-0).',
    },
  },

  // ==================== STAGE 4: PLAYING YOUR FIRST SONG ====================
  {
    id: 'lesson-17',
    number: 17,
    stageId: 4,
    stageTitle: 'Stage 4: Playing Your First Song',
    title: 'What Is a Steady Beat? Meet the Metronome',
    durationMinutes: 5,
    objective: 'Understand musical pulse (beat) and tempo (BPM), and strum in time with a steady pulse.',
    plainExplanation: [
      'What turns random chords into a recognizable song? Rhythm! And the foundation of all rhythm is a steady pulse called the Beat.',
      'A beat is just like your heartbeat when you are walking down the street—steady, predictable, and unhurried. When you tap your foot to a song on the radio, you are tapping the beat.',
      'Musicians measure the speed of the beat (called Tempo) in Beats Per Minute (BPM). At 60 BPM, there is 1 beat every second. A tool that clicks a steady beat for you to practice with is called a Metronome.',
    ],
    newTerms: ['beat', 'tempo'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-4',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Strum Along with the Rhythm Pulse',
      instruction: 'Start the interactive Rhythm Bar or tap "Strum Down" 4 times at a steady, even pace while holding C Major.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" or play the Rhythm Visualizer 4 times.',
    },
    practicalExercise: {
      title: 'Count & Walk with Your Voice',
      steps: [
        'Before even touching the strings, count out loud at a calm walking speed: "1 - 2 - 3 - 4, 1 - 2 - 3 - 4."',
        'Hold a C Major chord with your left hand.',
        'Brush down across the strings right as your voice says each number: 1, 2, 3, 4.',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Speeding up on easy chords and slowing down when thinking.',
      whyItHappens: 'Without counting out loud or tapping a foot, our internal clock speeds up when we get excited.',
      quickFix: 'Count "1 - 2 - 3 - 4" out loud with your voice—your voice acts as a natural metronome for your hand!',
    },
    checkpoint: {
      question: 'What does "72 BPM" mean in music?',
      options: [
        'A steady tempo of 72 Beats Per Minute (just slightly faster than one beat per second)',
        'You must strum 72 different chords in one song',
        'You need to press the strings with 72 pounds of force',
        'The song is 72 minutes long',
      ],
      correctIndex: 0,
      explanation: 'Correct! BPM stands for Beats Per Minute and tells you the speed (tempo) of the steady pulse.',
      hint: '60 seconds in a minute = 60 BPM is one beat per second.',
    },
  },
  {
    id: 'lesson-18',
    number: 18,
    stageId: 4,
    stageTitle: 'Stage 4: Playing Your First Song',
    title: 'Four Down-Strums Per Measure (Bar)',
    durationMinutes: 5,
    objective: 'Group beats into 4-beat containers called Measures (Bars) and accent Beat 1 slightly.',
    plainExplanation: [
      'If music were just an endless stream of beats (1, 2, 3, 4, 5, 6, 7, 8, 9...), it would be hard to keep track of where you are in a song. So music groups beats into neat little boxes called Measures (or Bars).',
      'In almost all pop, folk, and rock songs, each Measure holds 4 beats: | 1  2  3  4 | 1  2  3  4 |. This is called 4/4 Time (or Common Time).',
      'Try making Beat 1 of each measure feel just 10% warmer and fuller than beats 2, 3, and 4: "ONE - two - three - four, ONE - two - three - four." That subtle emphasis makes your strumming sound musical right away!',
    ],
    newTerms: ['measure', 'beat'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-4',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Play One Full 4-Beat Measure',
      instruction: 'Strum 4 steady down-strums on the interactive stage to complete a full 4-beat measure.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" 4 times to complete 1 measure.',
    },
    practicalExercise: {
      title: 'Two Measures of C, Two Measures of Am',
      steps: [
        'Hold C Major and play two measures of 4 down-strums: "1-2-3-4, 1-2-3-4" (8 strums total).',
        'Right on Beat 1 of the third measure, switch to Am and play two measures: "1-2-3-4, 1-2-3-4".',
        'Notice how counting to 4 tells your left hand the exact moment a chord change is coming!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Losing count of how long to stay on a chord.',
      whyItHappens: 'Strumming without counting 1-2-3-4 makes every chord last a random number of beats.',
      quickFix: 'Always count "1 - 2 - 3 - 4" in your head or out loud; Beat 4 is your cue to prepare the next chord!',
    },
    checkpoint: {
      question: 'In standard 4/4 time, how many beats are inside one Measure (Bar)?',
      options: [
        '4 steady beats (counted 1 - 2 - 3 - 4)',
        '10 beats',
        'Only 1 beat',
        'It changes randomly every second',
      ],
      correctIndex: 0,
      explanation: 'Spot on! A measure in 4/4 time holds 4 steady beats, counted 1 - 2 - 3 - 4.',
      hint: 'Look at the top number of 4/4 time.',
    },
  },
  {
    id: 'lesson-19',
    number: 19,
    stageId: 4,
    stageTitle: 'Stage 4: Playing Your First Song',
    title: 'Your First Complete Song: "Row, Row, Row Your Boat"',
    durationMinutes: 6,
    objective: 'Play and sing/hum a complete 4-measure song from start to finish using the C Major chord and steady down-strums.',
    plainExplanation: [
      'It is time for a milestone moment: playing your very first complete song on the ukulele!',
      '"Row, Row, Row Your Boat" can be accompanied from beginning to end using ONLY the C Major chord (0-0-0-3). That means your left hand stays comfortably on Fret 3 of the A string the entire time, letting you focus 100% on your steady 1-2-3-4 down-strums.',
      'Look at the 4 lyric measures in our interactive Song Player: each box gets 4 steady down-strums. Even humming or whispering the words while strumming connects your rhythm to the melody!',
    ],
    newTerms: ['measure', 'chord'],
    visualMode: 'song',
    visualConfig: {
      songId: 'row-your-boat',
      activeChordId: 'C',
      strummingPatternId: 'down-4',
    },
    interactiveActivity: {
      title: 'Play Through "Row, Row, Row Your Boat"',
      instruction: 'Step through or strum all 4 measures of "Row, Row, Row Your Boat" in the interactive Song Player above.',
      type: 'play-song',
      requiredActionsCount: 4,
      actionHint: 'Click the measures or "Strum Measure" / "Auto Play Song" in the interactive stage 4 times.',
    },
    practicalExercise: {
      title: 'Perform Your First Song Twice Through',
      steps: [
        'Place Ring Finger (#3) on Fret 3 of the bottom A string for C Major.',
        'Strum 4 steady down-strums for each of the 4 lyric lines ("Row, row, row your boat...").',
        'On the very last word "dream!", give one big warm down-strum and let the chord ring out proudly!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Strumming once for every syllable of the lyrics instead of strumming the steady beat.',
      whyItHappens: 'Our hands naturally want to copy the rhythm of our mouth when singing.',
      quickFix: 'Your strumming hand is the steady clock (4 even strums per box), while the melody floats on top of it!',
    },
    checkpoint: {
      question: 'When accompanying a song with 4-beat measures, what should your strumming hand do while the lyrics have lots of quick words (like "merrily, merrily, merrily, merrily")?',
      options: [
        'Keep strumming the steady 4 beats per measure calmly without rushing',
        'Strum 12 times as fast as possible to match every syllable',
        'Stop strumming completely until the fast words are over',
        'Switch to a different tuning peg',
      ],
      correctIndex: 0,
      explanation: 'Yes! Your strumming hand provides the steady heartbeat (4 beats per measure) while the lyrics dance over top.',
      hint: 'Does a drummer speed up just because a singer sings fast words?',
    },
  },
  {
    id: 'lesson-20',
    number: 20,
    stageId: 4,
    stageTitle: 'Stage 4: Playing Your First Song',
    title: 'Your First 2-Chord Song: "Morning Island Breeze" (C & F)',
    durationMinutes: 7,
    objective: 'Play a complete 8-measure song switching smoothly between C Major and F Major on Beat 1.',
    plainExplanation: [
      'Now let’s level up to a two-chord song using C Major (0-0-0-3) and F Major (2-0-1-0)!',
      'Here is the golden secret for changing chords inside a song: start thinking about the next chord on Beat 4 of the current measure. As soon as you finish strumming Beat 4, glide your fingers into the new chord so you land right on Beat 1 of the new measure.',
      'Even if your left fingers take an extra split-second to settle on F Major, keep your right hand moving steadily!',
    ],
    newTerms: ['measure'],
    visualMode: 'song',
    visualConfig: {
      songId: 'sunshine-groove',
      activeChordId: 'C',
      secondaryChordId: 'F',
      strummingPatternId: 'down-4',
    },
    interactiveActivity: {
      title: 'Play the C & F Measures of "Morning Island Breeze"',
      instruction: 'Play or step through at least 4 measures of "Morning Island Breeze" in the interactive Song Stage, practicing the switch from C to F.',
      type: 'play-song',
      requiredActionsCount: 4,
      actionHint: 'Click through the song measures or click "Strum Measure" 4 times.',
    },
    practicalExercise: {
      title: 'The Beat-4 Lookahead Practice',
      steps: [
        'Play Measure 1 (C) and Measure 2 (C) with 4 steady down-strums each.',
        'Right after Beat 4 of Measure 2, switch to F Major (2-0-1-0) for Measure 3 ("Singing sweet songs of melody").',
        'Return to C Major on Measure 4 ("Pure and true for you and me!"). Play the full 8-measure song!',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Pausing for 2 seconds between Measure 2 (C) and Measure 3 (F) to look at your fingers.',
      whyItHappens: 'Waiting until Beat 1 arrives before starting to move your left hand.',
      quickFix: 'Use the gap right after Beat 4 to start moving your fingers early so they arrive on Beat 1.',
    },
    checkpoint: {
      question: 'When switching from a measure of C Major to a measure of F Major, when should your left hand start preparing to move?',
      options: [
        'Right after Beat 4 of the C measure, so your fingers arrive on F right in time for Beat 1',
        'On Beat 3 of the F measure after it has already started',
        'Only after stopping the song for 5 seconds',
        'Before Beat 1 of the first measure',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Looking ahead on Beat 4 gives your fingers the half-second window between Beat 4 and Beat 1 to glide into the new chord.',
      hint: 'Use the space between the last beat of the old measure and the first beat of the new measure.',
    },
  },
  {
    id: 'lesson-21',
    number: 21,
    stageId: 4,
    stageTitle: 'Stage 4: Playing Your First Song',
    title: 'Spaced Review & Finger Gym: Stages 1–4 Mastery',
    durationMinutes: 6,
    isSpacedReview: true,
    objective: 'Consolidate posture, G-C-E-A string recall, C / Am / F chord shapes, and 4-beat steady rhythm.',
    plainExplanation: [
      'Every great musician uses Spaced Practice—briefly revisiting core fundamentals after learning new skills so your muscle memory locks in permanently.',
      'Look how far you have already come from zero: you know the anatomy of the ukulele, how G-C-E-A re-entrant tuning works, how to hold the instrument without the "death grip", and how to play three essential chords (C, Am, and F) in real songs!',
      'Let’s run a quick 3-chord workout switching C → Am → F → C to make your left hand feel twice as confident before we unlock upbeat strumming patterns in Stage 5.',
    ],
    newTerms: ['anchor-finger', 'chord'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'C',
      secondaryChordId: 'F',
    },
    interactiveActivity: {
      title: 'Complete the 3-Chord Spaced Review Drill',
      instruction: 'Switch between C, Am, and F on the interactive stage and strum 4 times to verify your Stage 1–4 muscle memory.',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle chords and strum 4 times on the interactive stage.',
    },
    practicalExercise: {
      title: 'The 60-Second Blind Chord Challenge',
      steps: [
        'Look at your fretboard and form C Major (0-0-0-3). Now close your eyes and strum it once!',
        'Open your eyes, form Am (2-0-0-0), close your eyes, and use your Anchor Finger (#2) to add Index (#1) for F Major without looking!',
        'Strum F Major with your eyes closed and listen—did all 4 strings ring clearly?',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Tilting the ukulele fretboard flat toward the ceiling so you can stare directly at your fingers.',
      whyItHappens: 'Wanting visual confirmation for every finger placement.',
      quickFix: 'Keep the ukulele vertical against your chest and trust your fingertips to feel the strings and metal fret wires!',
    },
    checkpoint: {
      question: 'Which three chords have you mastered so far, and what are their fret numbers from G-C-E-A?',
      options: [
        'C Major (0-0-0-3), A Minor (2-0-0-0), and F Major (2-0-1-0)',
        'C Major (3-3-3-3), A Minor (1-1-1-1), and F Major (4-4-4-4)',
        'Only open strings (0-0-0-0)',
        'G7 (0-2-1-2) and E Minor (0-4-3-2)',
      ],
      correctIndex: 0,
      explanation: 'Brilliant! C (0-0-0-3), Am (2-0-0-0), and F (2-0-1-0) are your first three foundational chords.',
      hint: 'Check the fret numbers for C (1 finger on A), Am (1 finger on G), and F (2 fingers on G and E).',
    },
  },

  // ==================== STAGE 5: RHYTHM & STRUMMING PATTERNS ====================
  {
    id: 'lesson-22',
    number: 22,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'Adding the Up-Strum: Counting "1 and 2 and"',
    durationMinutes: 5,
    objective: 'Perform a light, relaxed Up-Strum on the "&" between beats using the fleshy pad of your index finger.',
    plainExplanation: [
      'Think about what your right hand does when you play four Down-Strums (1 - 2 - 3 - 4): after brushing down on Beat 1, your hand HAS to travel back up through the air to get ready for Beat 2!',
      'An Up-Strum simply lets your finger touch the strings on that upward return trip! We call the halfway point between beats "and" (written as "&"), so we count: "1 and 2 and 3 and 4 and."',
      'Secret tip for silky Up-Strums: if you strum down with the back of your index fingernail, simply let the soft fleshy pad of your index finger brush UP across the bottom 2 or 3 strings on the way back up. You don’t even need to hit all 4 strings on an up-strum!',
    ],
    newTerms: ['beat'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-up-8',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Try Both Down-Strums & Up-Strums',
      instruction: 'Click "Strum Down" and "Strum Up" alternately 4 times on the interactive stage to hear how a light up-strum complements a warm down-strum.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" and "Strum Up" on the stage 4 times.',
    },
    practicalExercise: {
      title: 'The Feather Up-Strum Drill',
      steps: [
        'Hold a C Major chord.',
        'Brush DOWN on Beat 1 with the nail side of your index finger, then lightly graze UP on "&" with the soft pad of your index finger.',
        'Notice that keeping your finger slightly curved keeps it from catching on the bottom A string!',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Your finger hooks under the bottom A string on the Up-Strum and yanks the ukulele.',
      whyItHappens: 'Pointing your finger stiffly straight at the ukulele instead of relaxing the knuckle.',
      quickFix: 'Keep your index finger slightly curled and relaxed so it yields like a soft paintbrush on both the down and up strokes.',
    },
    checkpoint: {
      question: 'On an Up-Strum, do you need to forcefully hit all four strings?',
      options: [
        'No—lightly brushing the bottom 2 or 3 strings with a relaxed finger sounds natural and prevents catching',
        'Yes, you must dig deeply into all 4 strings as hard as possible',
        'You should only pluck the top G string on an up-strum',
        'Up-strums are played on the back of the ukulele neck',
      ],
      correctIndex: 0,
      explanation: 'Exactly! A light, relaxed brush across the bottom 2 or 3 strings makes up-strums sound smooth and effortless.',
      hint: 'Think of a soft paintbrush skimming the bottom strings on the way back up.',
    },
  },
  {
    id: 'lesson-23',
    number: 23,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'The Down-Up Groove (D U D U D U D U)',
    durationMinutes: 5,
    objective: 'Play a continuous eighth-note Down-Up strumming groove from the wrist without swinging the whole elbow.',
    plainExplanation: [
      'When you play Down on every number (1, 2, 3, 4) and Up on every "&", you get 8 even strums per measure: D U D U D U D U. Musicians call these Eighth Notes.',
      'To make this groove feel effortless, the motion should come from a loose, rotating wrist—NOT from pumping your entire elbow up and down like a seesaw!',
      'Pretend you just washed your hands and there are no paper towels, so you gently flick a drop of water off your fingertips. That loose wrist rotation is the exact motion of great ukulele strumming.',
    ],
    newTerms: ['tempo'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-up-8',
      activeChordId: 'Am',
    },
    interactiveActivity: {
      title: 'Run the Down-Up Groove Visualizer',
      instruction: 'Play the "Down-Up Groove" in the interactive Rhythm Stage or alternate Down/Up strums 4 times.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Start the rhythm pattern player or click Strum Down / Strum Up 4 times.',
    },
    practicalExercise: {
      title: 'Loose Wrist Eighth-Note Flow',
      steps: [
        'Hold Am (2-0-0-0) and say out loud: "1 and 2 and 3 and 4 and."',
        'Play D U D U D U D U for two full measures on Am, keeping your forearm cozy against the ukulele body while your wrist rotates.',
        'Switch to F Major (add Index #1) and keep the D U D U groove flowing for two more measures!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Your right shoulder and elbow get tired after 20 seconds of strumming.',
      whyItHappens: 'Moving your entire heavy forearm up and down instead of rotating your lightweight wrist.',
      quickFix: 'Rest your forearm steadily on the body curve and let your wrist do 90% of the motion.',
    },
    checkpoint: {
      question: 'Where should most of your strumming motion come from for a smooth, relaxed groove?',
      options: [
        'A loose, relaxed wrist rotation (like flicking water droplets off your fingers)',
        'A stiff wrist while pumping your entire shoulder up and down',
        'Moving the ukulele neck up and down while keeping your right hand frozen',
        'Bending your knees on every beat',
      ],
      correctIndex: 0,
      explanation: 'Yes! A loose wrist rotation gives you smooth speed, warm tone, and zero arm fatigue.',
      hint: 'Remember the "shaking water off your fingertips" analogy.',
    },
  },
  {
    id: 'lesson-24',
    number: 24,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'The "Down, Down-Up" Pattern (D - D U - D - D U)',
    durationMinutes: 6,
    objective: 'Combine quarter-note down-strums and eighth-note down-up pairs to play D - D U - D - D U.',
    plainExplanation: [
      'If we play only D-D-D-D, it can feel a little march-like. If we play D-U-D-U-D-U-D-U nonstop, it can feel too busy. What if we combine them?',
      'On Beat 1, play a single Down-Strum (and float your hand up quietly in the air on "&"). On Beat 2, play a Down-Up pair (2 &). Repeat that for Beats 3 and 4!',
      'Say the rhythm out loud right now: "Down... Down-Up... Down... Down-Up" (1 ... 2 & ... 3 ... 4 &). This versatile pattern fits hundreds of folk, country, and pop songs!',
    ],
    newTerms: ['measure'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-down-up',
      activeChordId: 'F',
    },
    interactiveActivity: {
      title: 'Practice the "Down, Down-Up" Pattern',
      instruction: 'Listen to and practice the "Down, Down-Up" pattern on the interactive stage (4 actions).',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Play the rhythm visualizer or strum D - D U on the stage 4 times.',
    },
    practicalExercise: {
      title: 'Speak It, Then Strum It (C → Am → F)',
      steps: [
        'First, chant out loud while moving your hand in the air: "Down... Down-Up... Down... Down-Up."',
        'Hold C Major and play 1 measure of D - D U - D - D U.',
        'Switch to F Major and play 1 measure of D - D U - D - D U. Repeat 4 times!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Playing the "Down-Up" too fast and then waiting a long gap before Beat 3.',
      whyItHappens: 'Forgetting that your hand is still moving at a constant down-up speed on every beat.',
      quickFix: 'Keep your hand moving down on 1, 2, 3, 4 like a pendulum—only touch the strings on the Up of Beats 2 and 4!',
    },
    checkpoint: {
      question: 'How do you count the "Down, Down-Up, Down, Down-Up" strumming pattern across 4 beats?',
      options: [
        '1 (Down) ... 2 & (Down-Up) ... 3 (Down) ... 4 & (Down-Up)',
        '1 & (Down-Up) ... 2 (Down) ... 3 (Rest) ... 4 (Up)',
        'Four up-strums in a row followed by four down-strums',
        'Only strumming on Beat 1',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Beats 1 and 3 get a single Down-strum, while Beats 2 and 4 get a Down-Up pair (2 &, 4 &).',
      hint: 'Match "Down, Down-Up" to "Beat 1, Beat 2-and".',
    },
  },
  {
    id: 'lesson-25',
    number: 25,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'Skipping a Beat: The "Ghost Strum" Secret',
    durationMinutes: 5,
    objective: 'Understand how keeping your hand moving continuously while missing the strings ("Ghost Strum") creates syncopation.',
    plainExplanation: [
      'Have you ever wondered how ukulele players play catchy island rhythms without losing their place in the beat? The secret is called the Ghost Strum (or Air Strum).',
      'Your right hand acts like a grandfather clock pendulum: it ALWAYS moves Down on the numbers (1, 2, 3, 4) and Up on the "&"s. Never freeze your hand in mid-air!',
      'When a pattern skips a down-strum (like on Beat 3 of the Island Strum), your hand STILL moves down on Beat 3—you just lift it 1 inch away from the strings so it swings through the air silently, ready to catch the strings on the way UP!',
    ],
    newTerms: ['ghost-strum'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'island-strum',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Observe the Beat 3 Ghost Strum',
      instruction: 'Look at Step 5 (Beat 3) on the Island Strum visualizer above and play/strum 4 times to hear how missing Beat 3 creates a bouncy lift.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Play the rhythm visualizer or strum 4 times on the stage.',
    },
    practicalExercise: {
      title: 'The Pendulum Hand Exercise',
      steps: [
        'Swing your right hand steadily Down-Up-Down-Up in the air 1 inch above the strings without touching them at all.',
        'Now let your finger touch the strings on Beat 1 (Down), Beat 2 (Down-Up), MISS Beat 3 in the air, and catch the "&" coming UP!',
        'Notice how your hand never stopped swinging like a pendulum!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Freezing your hand completely on Beat 3 instead of swinging it down in the air.',
      whyItHappens: 'When you freeze your hand at the top, your hand is already at the top—so it cannot do an Up-Strum on the "&" of 3!',
      quickFix: 'You MUST swing down in the air on Beat 3 so your hand is at the bottom, ready to brush UP on the "&"!',
    },
    checkpoint: {
      question: 'Why must your hand still swing downward in the air on Beat 3 (a "Ghost Strum") even when you don’t strum the strings on Beat 3?',
      options: [
        'Because it keeps your rhythm steady and puts your hand below the strings so it can brush UP on the "&" after Beat 3',
        'To fan cool air into the soundhole',
        'Because stopping your hand breaks the tuning pegs',
        'To mute all the strings with your elbow',
      ],
      correctIndex: 0,
      explanation: 'Brilliant! If your hand doesn’t travel down in the air on Beat 3, it won’t be at the bottom to brush UP on the "&" of 3.',
      hint: 'How can you do an Up-Strum if your hand is still sitting at the top?',
    },
  },
  {
    id: 'lesson-26',
    number: 26,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'The Famous Island Strum (Part 1: Vocal & Muted Groove)',
    durationMinutes: 6,
    objective: 'Internalize the D - D U - U D U Island Strum rhythm by chanting it and strumming lightly muted strings.',
    plainExplanation: [
      'Meet the most famous strumming pattern in the entire ukulele universe: the Island Strum (also called the Calypso Strum): Down – Down-Up – Up-Down-Up (D - D U - U D U)!',
      'Here is a classic music teacher rule: "If you can say it, you can play it." Before worrying about chords, let’s lock the rhythm into your voice and right hand.',
      'Lay your left fingers flat across the strings (just touching them lightly without pressing down) so they make a percussive "chucka-chucka" sound. Now chant out loud with your hand: "Down... Down-Up... Up-Down-Up!"',
    ],
    newTerms: ['ghost-strum'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'island-strum',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Step Through the Island Strum (D - D U - U D U)',
      instruction: 'Play the Island Strum pattern in the Rhythm Visualizer and tap along 4 times.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Click Play on the Rhythm Visualizer or tap Strum Down / Up 4 times.',
    },
    practicalExercise: {
      title: 'The Muted "Chucka" Island Groove',
      steps: [
        'Rest all four left-hand fingers lightly across the strings to mute them (like a miniature drum).',
        'Say out loud at a slow, relaxed speed: "Down... Down-Up... (ghost)... Up-Down-Up!"',
        'Strum along with your voice 8 times in a row until your hand moves on autopilot.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Playing "Down, Down-Up, Down-Up" and forgetting the Ghost Strum gap before the second Up.',
      whyItHappens: 'Our hands want to default back to Down-Strums after a pause.',
      quickFix: 'Emphasize the word "UP" in your voice after the gap: "Down... Down-Up... [air]... UP-Down-Up!"',
    },
    checkpoint: {
      question: 'What is the exact sequence of strokes in the signature Island Strum?',
      options: [
        'Down – Down-Up – Up-Down-Up (D - D U - U D U)',
        'Down – Down – Down – Down',
        'Up – Up – Down – Down',
        'Down – Up – Down – Rest',
      ],
      correctIndex: 0,
      explanation: 'You got it! "Down – Down-Up – Up-Down-Up" (D - D U - U D U) is the signature ukulele Island Strum.',
      hint: 'Chant it out loud: D - D U - U D U.',
    },
  },
  {
    id: 'lesson-27',
    number: 27,
    stageId: 5,
    stageTitle: 'Stage 5: Rhythm & Strumming',
    title: 'Mastering the Island Strum on C, Am, and F',
    durationMinutes: 7,
    objective: 'Play the full Island Strum (D - D U - U D U) across C Major, A Minor, and F Major.',
    plainExplanation: [
      'Now that your right hand feels the "Down... Down-Up... Up-Down-Up" rhythm, let’s bring your left hand back in on our three favorite chords: C, Am, and F!',
      'Notice that each full cycle of "D - D U - U D U" equals exactly ONE 4-beat measure (1 & 2 & 3 & 4 &).',
      'Right after the final "Up" on the "&" of Beat 4, your hand immediately drops into the first "Down" of the next measure! Start by playing two full cycles of D-DU-UDU on C, then two on Am, then two on F.',
    ],
    newTerms: ['ghost-strum', 'anchor-finger'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'island-strum',
      activeChordId: 'C',
      secondaryChordId: 'Am',
    },
    interactiveActivity: {
      title: 'Play Island Strum with Chords',
      instruction: 'Play the Island Strum visualizer while switching between C, Am, and F on the interactive stage (4 actions).',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Toggle chords C, Am, F and play/strum 4 times.',
    },
    practicalExercise: {
      title: 'Two Island Strums Per Chord Loop',
      steps: [
        'Set a relaxed tempo (around 70 BPM) and hold C Major.',
        'Play "D - D U - U D U" twice on C Major.',
        'Switch to Am and play "D - D U - U D U" twice, then anchor Middle Finger #2 to switch to F Major for two more!',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Stopping after "Up-Down-Up" for a long pause before starting the next "Down".',
      whyItHappens: 'Treating the pattern like an isolated phrase instead of a continuous loop.',
      quickFix: 'The last "Up" of the pattern (on "4 &") flows directly into Beat 1 ("Down") of the next measure without stopping!',
    },
    checkpoint: {
      question: 'How many 4/4 measures does one complete "D - D U - U D U" Island Strum fill?',
      options: [
        'Exactly 1 measure of 4 beats (counted 1 & 2 & 3 & 4 &)',
        '4 separate measures',
        'Half of a beat',
        '8 measures',
      ],
      correctIndex: 0,
      explanation: 'Spot on! One full "D - D U - U D U" cycle fills exactly 1 four-beat measure.',
      hint: 'Count the subdivisions: 1 (D) & (-) 2 (D) & (U) 3 (-) & (U) 4 (D) & (U).',
    },
  },

  // ==================== STAGE 6: CHORD TRANSITIONS ====================
  {
    id: 'lesson-28',
    number: 28,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'The G7 Chord: The Three-Finger Triangle (0-2-1-2)',
    durationMinutes: 6,
    objective: 'Build and strum the G7 chord (0-2-1-2) using Index (#1), Middle (#2), and Ring (#3) fingers.',
    plainExplanation: [
      'Ready for your first 3-finger chord? Meet G7 (0-2-1-2)! In music theory, a "7th" chord creates a delicious sense of musical tension and excitement that wants to resolve back home to C Major.',
      'Let’s build G7 step by step: 1) Leave the top G string (String 4) open (0). 2) Place Index Finger (#1) on Fret 1 of the E string (String 2)—the exact same spot as F Major! 3) Place Middle Finger (#2) on Fret 2 of the C string (String 3). 4) Place Ring Finger (#3) on Fret 2 of the bottom A string (String 1).',
      'Look at your three fingertips on the fretboard: they form a neat little triangle pointing toward the headstock!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'G7',
    },
    interactiveActivity: {
      title: 'Explore & Strum the G7 Triangle (0-2-1-2)',
      instruction: 'Strum G7 and pluck each of its 4 strings on the interactive stage (4 actions) to hear its bright, suspenseful sound.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" or pluck the 4 strings of G7 4 times.',
    },
    practicalExercise: {
      title: 'The Wrist-Twist Secret for G7',
      steps: [
        'Place Index (#1) on E string Fret 1, Middle (#2) on C string Fret 2, and Ring (#3) on A string Fret 2.',
        'If Middle and Ring feel crowded on Fret 2, rotate your left wrist slightly toward the tuning pegs (headstock)—feel how all three fingers suddenly line up comfortably!',
        'Strum G7 4 times, then resolve to C Major (0-0-0-3) and hear the musical "aaah, home!" feeling.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Your Middle and Ring fingers feel squished together and can’t both fit into Fret 2.',
      whyItHappens: 'Holding your hand completely perpendicular (square) to the neck.',
      quickFix: 'Angle your knuckles slightly toward the headstock so your fingers approach the strings at a natural 45-degree angle.',
    },
    checkpoint: {
      question: 'What are the fret numbers from top to bottom (G-C-E-A) for the G7 chord?',
      options: [
        '0 - 2 - 1 - 2 (forming a triangle pointing toward the headstock)',
        '0 - 0 - 0 - 3',
        '2 - 0 - 1 - 0',
        '2 - 2 - 2 - 2',
      ],
      correctIndex: 0,
      explanation: 'Yes! G7 is 0-2-1-2: open G, Fret 2 on C (Middle #2), Fret 1 on E (Index #1), and Fret 2 on A (Ring #3).',
      hint: 'Remember the little triangle on Frets 1 and 2 of the bottom three strings.',
    },
  },
  {
    id: 'lesson-29',
    number: 29,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'The Slide & Swivel Tricks: C ↔ G7 and F ↔ G7',
    durationMinutes: 6,
    objective: 'Use the Ring Finger Slide between C and G7, and the Index Finger Anchor Swivel between F and G7.',
    plainExplanation: [
      'Here is why we insisted on playing C Major with your Ring Finger (#3) back in Lesson 12! Look at the bottom A string in C (0-0-0-3) and G7 (0-2-1-2): both chords use your Ring Finger (#3) on the bottom A string!',
      'Shortcut #1 (The C ↔ G7 Slide): When switching from C to G7, NEVER lift your Ring Finger off the bottom string! Just relax its pressure slightly, slide it along the string from Fret 3 down to Fret 2, and drop Index (#1) and Middle (#2) into place.',
      'Shortcut #2 (The F ↔ G7 Swivel): Look at F (2-0-1-0) and G7 (0-2-1-2). Both chords have Index Finger (#1) on Fret 1 of the E string! Keep Index Finger #1 glued down as your pivot while Middle (#2) hops down one string from G-2 to C-2 and Ring (#3) lands on A-2.',
    ],
    newTerms: ['anchor-finger'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'F',
      secondaryChordId: 'G7',
    },
    interactiveActivity: {
      title: 'Test the F ↔ G7 Anchor & C ↔ G7 Slide',
      instruction: 'Switch between F, G7, and C on the interactive stage and strum 4 times—watch how Index Finger (#1) stays anchored between F and G7!',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle between F and G7 on the stage and strum 4 times.',
    },
    practicalExercise: {
      title: 'Slide & Swivel Mastery Drill',
      steps: [
        'Slide Drill: Switch C → G7 → C → G7 five times, sliding Ring Finger (#3) back and forth between Fret 3 and Fret 2 on the bottom string without lifting it.',
        'Swivel Drill: Switch F → G7 → F → G7 five times, keeping Index Finger (#1) glued to Fret 1 of the E string the entire time!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Lifting all your fingers off the ukulele when switching from F to G7.',
      whyItHappens: 'Not realizing that Index Finger #1 is already sitting in the exact spot G7 needs.',
      quickFix: 'Keep Index Finger #1 planted on E string Fret 1 and swivel your other two fingers around it!',
    },
    checkpoint: {
      question: 'What are the two secret finger shortcuts for switching to G7?',
      options: [
        'From C: slide Ring Finger (#3) from Fret 3 to Fret 2 on the A string. From F: keep Index Finger (#1) anchored on Fret 1 of the E string',
        'Jump all fingers 4 inches into the air on every chord change',
        'Use your thumb to press all three strings',
        'Retune the ukulele between chords',
      ],
      correctIndex: 0,
      explanation: 'Masterful! Sliding Ring Finger #3 (C ↔ G7) and anchoring Index Finger #1 (F ↔ G7) makes the three most common chords in ukulele music connect seamlessly.',
      hint: 'Which finger is on the A string for both C and G7? Which finger is on E string Fret 1 for both F and G7?',
    },
  },
  {
    id: 'lesson-30',
    number: 30,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'The G Major Chord: The Classic Triangle (0-2-3-2)',
    durationMinutes: 6,
    objective: 'Play the G Major chord (0-2-3-2) cleanly by angling your wrist so all three fingers fit comfortably.',
    plainExplanation: [
      'While G7 is suspenseful and bluesy, standard G Major (0-2-3-2) is bright, open, and one of the "Four Magic Chords" of pop and folk music.',
      'Like G7, G Major is also a 3-finger triangle on the bottom three strings—except the point of the triangle faces the soundhole instead of the headstock!',
      'To build G Major (0-2-3-2): 1) Leave the top G string open (0). 2) Place Index Finger (#1) on Fret 2 of the C string. 3) Place Middle Finger (#2) on Fret 2 of the bottom A string. 4) Tuck Ring Finger (#3) onto Fret 3 of the E string right between them!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'G',
    },
    interactiveActivity: {
      title: 'Strum & Inspect the G Major Chord (0-2-3-2)',
      instruction: 'Strum G Major and pluck its 4 strings on the interactive stage (4 actions) to see how the 0-2-3-2 triangle is formed.',
      type: 'strum-chord',
      requiredActionsCount: 4,
      actionHint: 'Click "Strum Down" or pluck the strings of G Major 4 times.',
    },
    practicalExercise: {
      title: 'Building the G Major Triangle',
      steps: [
        'First place your two "peace sign" fingers: Index (#1) on C string Fret 2, and Middle (#2) on bottom A string Fret 2 (skipping the E string between them).',
        'Now drop Ring Finger (#3) onto Fret 3 of the middle E string.',
        'Pluck all 4 strings one by one, then strum G Major 8 times!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Ring Finger (#3) on the E string accidentally touches and mutes the bottom A string.',
      whyItHappens: 'Ring Finger is collapsing flat instead of standing on its tip.',
      quickFix: 'Slide your thumb slightly lower on the back of the neck so your Ring Finger can arch cleanly over the A string.',
    },
    checkpoint: {
      question: 'How does the triangle shape of G Major (0-2-3-2) differ from G7 (0-2-1-2)?',
      options: [
        'In G Major, the middle note on the E string is at Fret 3 (pointing toward the body), whereas in G7 it is at Fret 1 (pointing toward the headstock)',
        'G Major uses only 1 finger while G7 uses 4 fingers',
        'G Major is played on the tuning pegs',
        'They are the exact same chord',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Both chords have Fret 2 on the C and A strings, while the E string note flips between Fret 1 (G7) and Fret 3 (G Major).',
      hint: 'Compare 0-2-1-2 (G7) and 0-2-3-2 (G). Which string changes?',
    },
  },
  {
    id: 'lesson-31',
    number: 31,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'The "Four Magic Chords" Progression (C – G – Am – F)',
    durationMinutes: 6,
    objective: 'Play the iconic C – G – Am – F chord progression used in hundreds of hit songs.',
    plainExplanation: [
      'What if you learned that one single 4-chord sequence unlocks hundreds of the most famous songs of the last 60 years—from "Let It Be" and "Stand By Me" to "Somewhere Over the Rainbow" and "I’m Yours"?',
      'That sequence is called a Chord Progression, and the most famous one of all is: C Major → G Major → A Minor → F Major!',
      'Notice how you already know every single chord in this progression: C (0-0-0-3), G (0-2-3-2), Am (2-0-0-0), and F (2-0-1-0)!',
    ],
    newTerms: ['chord', 'anchor-finger'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'C',
      secondaryChordId: 'G',
    },
    interactiveActivity: {
      title: 'Cycle Through C – G – Am – F',
      instruction: 'Select and strum C, G, Am, and F in order on the interactive fretboard (4 actions).',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Select C, G, Am, and F on the stage and strum 4 times.',
    },
    practicalExercise: {
      title: 'The Four Magic Chords Loop',
      steps: [
        'Play 4 steady down-strums on C Major (0-0-0-3).',
        'Switch to G Major (0-2-3-2) for 4 down-strums.',
        'Switch to Am (2-0-0-0) for 4 down-strums, then anchor Middle Finger #2 to play F Major (2-0-1-0) for 4 down-strums!',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Getting stuck on the jump from G Major (0-2-3-2) to A Minor (2-0-0-0).',
      whyItHappens: 'G uses 3 fingers on the bottom strings, and Am uses 1 finger on the top string.',
      quickFix: 'Focus 100% of your eyes on Fret 2 of the top G string on Beat 4 of the G measure—just aim Middle Finger #2 there and release the rest!',
    },
    checkpoint: {
      question: 'Which four chords make up the famous "Four Magic Chords" progression?',
      options: [
        'C Major – G Major – A Minor (Am) – F Major',
        'Only C Major played four times',
        'E Minor – D Minor – B7 – C#',
        'G – C – E – A single notes',
      ],
      correctIndex: 0,
      explanation: 'Yes! C – G – Am – F is the famous four-chord progression behind countless beloved songs.',
      hint: 'Three major chords (C, G, F) and one minor chord (Am).',
    },
  },
  {
    id: 'lesson-32',
    number: 32,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'The "Keep Strumming" Rule for Real Songs',
    durationMinutes: 5,
    objective: 'Maintain an unbroken right-hand strumming pulse even when your left hand is still mid-transition.',
    plainExplanation: [
      'Here is the single biggest difference between a hesitant beginner and a confident player: when a beginner’s left hand isn’t quite ready for the next chord, they freeze their right strumming hand and stop the beat.',
      'When the beat stops, the song falls apart! Instead, follow the Golden Rule of Accompaniment: "Your right hand is the train engine—it NEVER stops moving on the beat."',
      'What if your left fingers are a split-second late landing on G Major on Beat 1? Strum anyway! Even one slightly open strum on Beat 1 while your fingers land on Beat 2 sounds 100x better to listeners than stopping the rhythm!',
    ],
    newTerms: ['beat', 'tempo'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'down-down-up',
      activeChordId: 'C',
      secondaryChordId: 'G7',
    },
    interactiveActivity: {
      title: 'Practice Unbroken Strumming Across Changes',
      instruction: 'Start the Rhythm Visualizer and switch chords while it plays without pausing the beat (4 actions).',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Play the rhythm pattern or strum 4 times across chord switches.',
    },
    practicalExercise: {
      title: 'The Nonstop Train Engine Drill',
      steps: [
        'Start strumming "Down, Down-Up, Down, Down-Up" with your right hand at a slow tempo.',
        'Make a promise to yourself: no matter what happens in your left hand, your right hand is NOT allowed to stop for 60 seconds!',
        'Cycle through C → G → Am → F while keeping your right wrist flowing nonstop.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Stopping your right hand every 4 beats to "fix" your left hand fingers before strumming Beat 1.',
      whyItHappens: 'Perfectionism in the left hand overrides rhythm in the right hand.',
      quickFix: 'Remember: listeners forgive a slightly late finger, but they immediately notice when the beat stops. Keep strumming!',
    },
    checkpoint: {
      question: 'According to the "Keep Strumming Rule", what should you do if your left fingers haven’t quite finished forming the next chord when Beat 1 arrives?',
      options: [
        'Keep your right hand strumming right on the beat anyway while your left fingers finish landing',
        'Freeze both hands and apologize before starting the song over',
        'Strum twice as fast in the next measure to make up for lost time',
        'Skip that chord for the rest of the song',
      ],
      correctIndex: 0,
      explanation: '100% right! Keeping the rhythm flowing is always priority #1 when playing songs.',
      hint: 'Your right hand is the train engine that never stops.',
    },
  },
  {
    id: 'lesson-33',
    number: 33,
    stageId: 6,
    stageTitle: 'Stage 6: Chord Transitions',
    title: 'Song Workshop: "You Are My Sunshine" (C, F, G7)',
    durationMinutes: 8,
    objective: 'Perform the complete classic song "You Are My Sunshine" using C, F, and G7 with smooth slide & swivel transitions.',
    plainExplanation: [
      'You are ready to play one of the most iconic ukulele songs of all time: "You Are My Sunshine"!',
      'It uses the three family chords of the C Major key: C (0-0-0-3), F (2-0-1-0), and G7 (0-2-1-2). Notice how near the end ("Please don’t take my sunshine away"), C and G7 share a measure—2 beats on C ("Please don’t take my"), then slide Ring Finger #3 down to Fret 2 for 2 beats on G7 ("sun-shine a-"), and slide back to Fret 3 for C ("way!")!',
    ],
    newTerms: ['anchor-finger', 'measure'],
    visualMode: 'song',
    visualConfig: {
      songId: 'you-are-my-sunshine',
      activeChordId: 'C',
      secondaryChordId: 'F',
      strummingPatternId: 'down-down-up',
    },
    interactiveActivity: {
      title: 'Play Through "You Are My Sunshine"',
      instruction: 'Step through or play at least 5 measures of "You Are My Sunshine" in the interactive Song Stage.',
      type: 'play-song',
      requiredActionsCount: 5,
      actionHint: 'Click through the song measures or click "Strum Measure" 5 times.',
    },
    practicalExercise: {
      title: 'Master the Final Line Turnaround (C → G7 → C)',
      steps: [
        'First practice just the last 3 boxes: 2 strums on C ("Please don’t take my"), slide Ring Finger to G7 for 2 strums ("sun-shine a-"), then slide back to C ("way!").',
        'Now play the entire song from "You are my sunshine" all the way to the end using either 4 Down-Strums or "Down, Down-Up"!',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Playing 4 full beats on C and 4 full beats on G7 during "Please don’t take my sunshine away".',
      whyItHappens: 'Not noticing that those two quick chords split a 4-beat measure (2 beats each).',
      quickFix: 'Count "1 - 2" on C, then immediately slide to G7 for "3 - 4", then land back on C for Beat 1!',
    },
    checkpoint: {
      question: 'In the final phrase "Please don’t take my (C) / sunshine a- (G7) / way! (C)", what is the fastest way to move from C to G7 and back to C?',
      options: [
        'Slide your Ring Finger (#3) along the bottom A string from Fret 3 (C) to Fret 2 (G7) and back to Fret 3 (C)',
        'Take your hand completely off the neck and rebuild from scratch',
        'Use your pinky finger for all three chords',
        'Skip the G7 chord',
      ],
      correctIndex: 0,
      explanation: 'Spot on! The Ring Finger slide on the bottom A string makes that quick 2-beat C → G7 → C turnaround smooth and effortless.',
      hint: 'Remember Shortcut #1 from Lesson 29!',
    },
  },

  // ==================== STAGE 7: MUSIC FUNDAMENTALS MADE SIMPLE ====================
  {
    id: 'lesson-34',
    number: 34,
    stageId: 7,
    stageTitle: 'Stage 7: Music Fundamentals',
    title: 'Why Some Chords Sound Happy (Major) and Others Thoughtful (Minor)',
    durationMinutes: 5,
    objective: 'Hear and understand the emotional difference between Major chords (bright/happy) and Minor chords (warm/wistful).',
    plainExplanation: [
      'Now that your fingers can play several chords, let’s unlock a little music theory—not as dry rules, but to understand WHY chords feel the way they do!',
      'Chords come in two main flavors: Major and Minor. Major chords (written with just a capital letter like C, F, or G) have a slightly wider spacing between their first two notes, which sounds sunny, bright, and joyful to human ears.',
      'Minor chords (written with a lowercase "m" like Am, Dm, or Em) lower their middle note by just ONE fret! That tiny 1-fret shift changes the mood from bright sunshine to warm, thoughtful, or bittersweet candlelight.',
    ],
    newTerms: ['chord', 'pitch'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'F',
      secondaryChordId: 'Am',
    },
    interactiveActivity: {
      title: 'Compare Major vs. Minor Moods',
      instruction: 'Switch between C Major / F Major (bright) and A Minor / D Minor (thoughtful) on the interactive stage and strum 4 times to compare their emotional colors.',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle between Major and Minor chords and strum 4 times.',
    },
    practicalExercise: {
      title: 'Ear Training: Sunlight vs. Candlelight',
      steps: [
        'Strum C Major slowly and let it ring—notice the bright "sunlight" feeling.',
        'Now strum A Minor (Am) slowly and let it ring—hear the warm "candlelight" feeling.',
        'Songs mix Major and Minor chords together so the music has both light and shadow!',
      ],
      recommendedSeconds: 60,
    },
    commonMistake: {
      symptom: 'Thinking "Minor" means a less important or smaller chord.',
      whyItHappens: 'In everyday English, "minor" means small or unimportant.',
      quickFix: 'In music, "Minor" simply refers to the emotional flavor (thoughtful/warm) vs. "Major" (bright/sunny). Both are equally important!',
    },
    checkpoint: {
      question: 'In chord symbols, how can you tell at a glance whether a chord is Major or Minor?',
      options: [
        'A plain capital letter (like C, F, G) means Major; a capital letter followed by a lowercase "m" (like Am, Dm, Em) means Minor',
        'Major chords are always written in red ink',
        'Minor chords always use 4 fingers',
        'There is no difference in how they are written',
      ],
      correctIndex: 0,
      explanation: 'Correct! "C" means C Major, while "Am" means A Minor.',
      hint: 'Look at the lowercase "m" in Am, Dm, and Em.',
    },
  },
  {
    id: 'lesson-35',
    number: 35,
    stageId: 7,
    stageTitle: 'Stage 7: Music Fundamentals',
    title: 'The Musical Alphabet & Walking Up a String',
    durationMinutes: 5,
    objective: 'Understand how the 7 letters of the musical alphabet (A-B-C-D-E-F-G) repeat and map onto frets along the C string.',
    plainExplanation: [
      'Good news: the musical alphabet only has 7 letters: A – B – C – D – E – F – G! After G, it simply starts over again at A (A, B, C, D, E, F, G, A, B, C...).',
      'Each single fret on your ukulele raises a note by one "Half-Step" (the smallest step in Western music). Most natural letters sit 2 frets apart (a "Whole Step"), except for two cosy pairs that sit right next door (1 fret apart): B-to-C and E-to-F!',
      'Let’s walk up your C string (String 3): Open (0) = C · Fret 2 = D · Fret 4 = E · Fret 5 = F · Fret 7 = G! You just played a five-note scale on one single string!',
    ],
    newTerms: ['pitch', 'fret'],
    visualMode: 'fretboard',
    visualConfig: {
      targetFrets: [
        {string: 3, fret: 0, label: 'C (Open)'},
        {string: 3, fret: 2, finger: 1, label: 'D (Fret 2)'},
        {string: 3, fret: 4, finger: 3, label: 'E (Fret 4)'},
        {string: 3, fret: 5, finger: 4, label: 'F (Fret 5)'},
      ],
    },
    interactiveActivity: {
      title: 'Play C – D – E – F on the C String',
      instruction: 'Tap Fret 0 (C), Fret 2 (D), Fret 4 (E), and Fret 5 (F) on the C string (String 3) on the interactive fretboard.',
      type: 'press-fret',
      requiredActionsCount: 4,
      actionHint: 'Click Frets 0, 2, 4, and 5 on String 3 (C) in the fretboard diagram.',
    },
    practicalExercise: {
      title: 'One-String Do-Re-Mi Scale',
      steps: [
        'Pluck String 3 (C) open: that’s "Do" (C).',
        'Press Fret 2 on String 3: that’s "Re" (D). Press Fret 4: that’s "Mi" (E).',
        'Press Fret 5 (1 fret higher!): that’s "Fa" (F). Press Fret 7: that’s "Sol" (G)!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Jumping 2 frets from E (Fret 4) to Fret 6 and wondering why the scale sounds strange.',
      whyItHappens: 'Forgetting that E and F sit right next door (only 1 fret apart).',
      quickFix: 'Remember: E-to-F (Fret 4 to Fret 5 on the C string) is just a 1-fret neighbor step!',
    },
    checkpoint: {
      question: 'In the musical alphabet, what letter comes immediately after G?',
      options: [
        'A (the 7-letter musical alphabet loops from G right back to A)',
        'H',
        'Z',
        'There are no notes higher than G',
      ],
      correctIndex: 0,
      explanation: 'Spot on! The musical alphabet runs A-B-C-D-E-F-G and then loops back to A at a higher octave.',
      hint: 'Music only uses the first 7 letters of the alphabet.',
    },
  },
  {
    id: 'lesson-36',
    number: 36,
    stageId: 7,
    stageTitle: 'Stage 7: Music Fundamentals',
    title: 'How to Read Ukulele Tab (Tablature) for Melodies',
    durationMinutes: 6,
    objective: 'Read 4-line Ukulele Tablature (Tab) where lines represent strings and numbers represent frets.',
    plainExplanation: [
      'What if you want to pluck the recognizable single-note melody of a song instead of strumming chords? You don’t need to learn complex sheet music—ukulele players use a simple system called Tab (short for Tablature)!',
      'Tab draws 4 horizontal lines representing your 4 strings. IMPORTANT: Tab is drawn from the player’s point of view looking down at the ukulele in your lap, so the TOP line is String 1 (bottom A string), and the BOTTOM line is String 4 (top G string): from top line to bottom line it reads A – E – C – G.',
      'Numbers sitting on a line simply tell you which fret to press on that string! A "0" on the C line means pluck the C string open. A "3" on the E line means press Fret 3 on the E string and pluck it!',
    ],
    newTerms: ['tab'],
    visualMode: 'tab',
    visualConfig: {
      songId: 'twinkle-little-star',
    },
    interactiveActivity: {
      title: 'Step Through Interactive Tab Notes',
      instruction: 'Click or tap 4 notes in the interactive Tab Player above to see how each Tab number highlights the exact string and fret on the ukulele.',
      type: 'play-tab',
      requiredActionsCount: 4,
      actionHint: 'Click 4 notes in the Tab strip or press "Play Next Tab Note" 4 times.',
    },
    practicalExercise: {
      title: 'Decode Your First 4 Tab Notes',
      steps: [
        'Look at the first two notes of "Twinkle, Twinkle": "0 — 0" on the C line (second line from the bottom). Pluck the open C string twice!',
        'Now look at the next two notes: "3 — 3" on the E line (second line from the top). Press Fret 3 of the E string and pluck it twice!',
        'You just read and played "Twin-kle, twin-kle" from Tab!',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Playing the top line of Tab on the top G string.',
      whyItHappens: 'Tab puts the highest-sounding string (A, String 1) on the top line and the G string (String 4) on the bottom line.',
      quickFix: 'Look at the letters at the left edge of the Tab staff: Top line = A (String 1), Bottom line = G (String 4).',
    },
    checkpoint: {
      question: 'If you see the number "3" written on the E line of a Ukulele Tab, what does it tell you to do?',
      options: [
        'Press Fret 3 on the E string (String 2) and pluck that string once',
        'Pluck the open E string 3 times in a row',
        'Use 3 fingers at the same time on all strings',
        'Wait for 3 seconds of silence',
      ],
      correctIndex: 0,
      explanation: 'Exactly! In Tab, the line tells you WHICH string to play, and the number tells you WHICH fret to press on that string.',
      hint: 'In Tab, numbers = Fret numbers (0 = open, 1 = Fret 1, 3 = Fret 3).',
    },
  },
  {
    id: 'lesson-37',
    number: 37,
    stageId: 7,
    stageTitle: 'Stage 7: Music Fundamentals',
    title: 'Playing Your First Melody: "Twinkle, Twinkle, Little Star"',
    durationMinutes: 7,
    objective: 'Play the complete 14-note melody of "Twinkle, Twinkle, Little Star" using single-note Tab.',
    plainExplanation: [
      'Now let’s play the complete melody of "Twinkle, Twinkle, Little Star" using our interactive Tab guide!',
      'Here is a pro technique for playing melodies cleanly: assign one left-hand finger to each fret! Whenever Tab says Fret 1, use Index Finger (#1). Whenever Tab says Fret 2, use Middle Finger (#2). Whenever Tab says Fret 3, use Ring Finger (#3).',
      'That way, your left hand never has to jump around searching for frets—each finger already owns its own fret lane!',
    ],
    newTerms: ['tab'],
    visualMode: 'tab',
    visualConfig: {
      songId: 'twinkle-little-star',
    },
    interactiveActivity: {
      title: 'Play the "Twinkle, Twinkle" Melody Tab',
      instruction: 'Play through at least 6 notes of "Twinkle, Twinkle, Little Star" in the interactive Tab Player.',
      type: 'play-tab',
      requiredActionsCount: 6,
      actionHint: 'Click through 6 notes in the Tab Player or use "Play Next Tab Note".',
    },
    practicalExercise: {
      title: 'One-Finger-Per-Fret Melody Run',
      steps: [
        'Part 1 ("Twinkle, twinkle, little star"): C string 0-0 → E string 3-3 (Ring #3) → A string 0-0 → E string 3 (hold 2 beats).',
        'Part 2 ("How I wonder what you are"): E string 1-1 (Index #1) → E string 0-0 → C string 2-2 (Middle #2) → C string 0!',
        'Play the full 14-note melody slowly and smoothly.',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Using only your pointing finger to hop from Fret 1 to Fret 3 to Fret 2.',
      whyItHappens: 'It feels intuitive to poke at frets with one finger like typing on a phone.',
      quickFix: 'Keep Index (#1) over Fret 1, Middle (#2) over Fret 2, and Ring (#3) over Fret 3 so every note is right under a fingertip!',
    },
    checkpoint: {
      question: 'What does the "One-Finger-Per-Fret" rule mean when playing melodies in the first three frets?',
      options: [
        'Index Finger (#1) plays Fret 1 notes, Middle Finger (#2) plays Fret 2 notes, and Ring Finger (#3) plays Fret 3 notes',
        'You must press all four strings on every note',
        'You can only play one fret per song',
        'Your thumb presses Fret 1 while your elbow presses Fret 2',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Giving each finger its own fret column lets you play melodies smoothly without looking down.',
      hint: 'Match Finger 1, 2, 3 to Fret 1, 2, 3.',
    },
  },
  {
    id: 'lesson-38',
    number: 38,
    stageId: 7,
    stageTitle: 'Stage 7: Music Fundamentals',
    title: '3/4 Waltz Time: Counting in Threes ("Clementine" Rhythm)',
    durationMinutes: 6,
    objective: 'Feel and play a 3/4 Waltz strumming pattern (1 - 2 & - 3 &) and play "Oh My Darling, Clementine".',
    plainExplanation: [
      'Up to now, every song we played counted to 4 in each measure (1 - 2 - 3 - 4). But some beloved songs sway like a graceful waltz in groups of THREE beats per measure: | 1  2  3 | 1  2  3 |. This is called 3/4 Time!',
      'To make 3/4 time sound rich on the ukulele, play a warm Down-strum on Beat 1 ("ONE"), followed by lighter Down-Up pairs on Beats 2 and 3 ("two-and, three-and"): D – D U – D U!',
      'Let’s try this swaying 3/4 waltz groove on "Oh My Darling, Clementine" using C and G7!',
    ],
    newTerms: ['measure', 'beat'],
    visualMode: 'song',
    visualConfig: {
      songId: 'clementine',
      activeChordId: 'C',
      secondaryChordId: 'G7',
      strummingPatternId: 'waltz-3-4',
    },
    interactiveActivity: {
      title: 'Play "Clementine" in 3/4 Waltz Time',
      instruction: 'Step through or strum at least 4 measures of "Oh My Darling, Clementine" in the interactive Song Stage.',
      type: 'play-song',
      requiredActionsCount: 4,
      actionHint: 'Click through 4 measures or click "Strum Measure" 4 times.',
    },
    practicalExercise: {
      title: 'Swaying Waltz Groove (C ↔ G7)',
      steps: [
        'Count out loud in threes: "ONE - two-and - three-and, ONE - two-and - three-and."',
        'Hold C Major and play D – D U – D U for the first three measures of "Clementine".',
        'Slide your Ring Finger (#3) from Fret 3 down to Fret 2 to switch to G7 on Measure 4 ("Clem-en-tine!").',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Automatically playing a 4th beat out of habit when playing a 3/4 waltz song.',
      whyItHappens: 'Your muscles are used to counting to 4.',
      quickFix: 'Make Beat 1 noticeably warmer ("BOOM - chuck-a - chuck-a") and count "1 - 2 - 3" out loud!',
    },
    checkpoint: {
      question: 'How many beats are in each measure of a song written in 3/4 Waltz Time?',
      options: [
        '3 beats per measure (counted 1 - 2 - 3)',
        '4 beats per measure',
        '34 beats per measure',
        '7 beats per measure',
      ],
      correctIndex: 0,
      explanation: 'Yes! In 3/4 time, the top number (3) tells you there are 3 beats in every measure, giving the music a swaying waltz feel.',
      hint: 'Look at the top number of 3/4.',
    },
  },

  // ==================== STAGE 8: BUILDING REAL PLAYING SKILLS ====================
  {
    id: 'lesson-39',
    number: 39,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'Expanding Your Chord Palette: D Minor (Dm) & A7',
    durationMinutes: 6,
    objective: 'Play the soulful D Minor (2-2-1-0) and bluesy one-finger A7 (0-1-0-0) chords.',
    plainExplanation: [
      'Let’s add two super-expressive chords to your toolkit that unlock dozens more songs—and both are tiny variations on chords you already know!',
      'First is A7 (0-1-0-0): place just ONE finger—your Index Finger (#1)—on Fret 1 of the C string (String 3), leaving G, E, and A open. Instant jazzy, cheerful blues!',
      'Second is D Minor (Dm: 2-2-1-0): start by holding your familiar F Major chord (2-0-1-0). Now simply tuck your Ring Finger (#3) right underneath your Middle Finger onto Fret 2 of the C string! So F + Ring Finger on C-2 = Dm!',
    ],
    newTerms: ['chord', 'anchor-finger'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'Dm',
      secondaryChordId: 'A7',
    },
    interactiveActivity: {
      title: 'Explore & Strum Dm (2-2-1-0) and A7 (0-1-0-0)',
      instruction: 'Switch between Dm and A7 on the interactive stage and strum 4 times to hear how they sound together.',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle between Dm and A7 and strum 4 times on the stage.',
    },
    practicalExercise: {
      title: 'F → Dm → A7 Vintage Progression',
      steps: [
        'Hold F Major (2-0-1-0) and strum 4 times.',
        'Keep F in place and just add Ring Finger (#3) onto C string Fret 2 to turn it into Dm (2-2-1-0)! Strum 4 times.',
        'Now hop Index Finger (#1) to C string Fret 1 for one-finger A7 (0-1-0-0) and strum 4 times!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'In Dm (2-2-1-0), the E string sounds muted or buzzy.',
      whyItHappens: 'Ring Finger (#3) on C string Fret 2 is leaning down and touching the E string below it.',
      quickFix: 'Curve Ring Finger (#3) sharply on its tip and pull your elbow slightly closer to your ribs.',
    },
    checkpoint: {
      question: 'How do you turn an F Major chord (2-0-1-0) into a D Minor (Dm) chord (2-2-1-0)?',
      options: [
        'Keep F Major held down and simply add your Ring Finger (#3) onto Fret 2 of the C string (String 3)',
        'Remove all your fingers and play open strings',
        'Slide your whole hand up to Fret 7',
        'Move every finger down to the bottom string',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Dm (2-2-1-0) is just F Major (2-0-1-0) with your Ring Finger tucked onto Fret 2 of the C string.',
      hint: 'Compare F (2-0-1-0) and Dm (2-2-1-0).',
    },
  },
  {
    id: 'lesson-40',
    number: 40,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'The E Minor (Em) Staircase (0-4-3-2) & D Major (2-2-2-0)',
    durationMinutes: 6,
    objective: 'Play the E Minor diagonal staircase chord (0-4-3-2) and the three-finger D Major stack (2-2-2-0).',
    plainExplanation: [
      'Two more classic chords expand your range into new keys: E Minor (Em) and D Major (D)!',
      'E Minor (0-4-3-2) is famous as "The Staircase Chord". Starting from the bottom A string (String 1), walk your fingers up diagonally like stairs: Index (#1) on A string Fret 2 → Middle (#2) on E string Fret 3 → Ring (#3) on C string Fret 4 (and top G string open)!',
      'D Major (2-2-2-0) stacks Index (#1), Middle (#2), and Ring (#3) neatly inside Fret 2 on the top three strings (G, C, E), leaving the bottom A string open.',
    ],
    newTerms: ['chord'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'Em',
      secondaryChordId: 'D',
    },
    interactiveActivity: {
      title: 'Strum the Em Staircase & D Major Stack',
      instruction: 'Switch between Em (0-4-3-2) and D (2-2-2-0) on the interactive stage and strum 4 times.',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle between Em and D and strum 4 times.',
    },
    practicalExercise: {
      title: 'Building the Em Staircase from the Bottom Up',
      steps: [
        'Always build Em starting from the bottom string: place Index (#1) on bottom A string Fret 2.',
        'Step up to Middle (#2) on E string Fret 3, then Ring (#3) on C string Fret 4. Strum all 4 strings!',
        'Now try D Major (2-2-2-0): tilt your hand slightly so Index, Middle, and Ring stack comfortably inside Fret 2 of G, C, and E.',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Building the Em staircase upside down (putting Index on the C string instead of the bottom A string).',
      whyItHappens: 'Forgetting which end of the staircase starts at Fret 2.',
      quickFix: 'Remember "0 - 4 - 3 - 2": the lowest fret number (2) is on the bottom A string with your Index Finger (#1)!',
    },
    checkpoint: {
      question: 'When building the E Minor (Em: 0-4-3-2) "Staircase Chord", where does your Index Finger (#1) go?',
      options: [
        'On Fret 2 of the bottom A string (String 1), starting the diagonal staircase',
        'On Fret 4 of the top G string',
        'Behind the tuning pegs',
        'It stays off the ukulele',
      ],
      correctIndex: 0,
      explanation: 'Yes! Starting with Index (#1) on A string Fret 2 makes Middle (#2) on E-3 and Ring (#3) on C-4 fall naturally into place.',
      hint: 'Look at 0-4-3-2: the "2" is on the bottom A string.',
    },
  },
  {
    id: 'lesson-41',
    number: 41,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'Fingerpicking Pattern #1: The Flowing Arpeggio Wave',
    durationMinutes: 6,
    objective: 'Pluck strings 4 → 3 → 2 → 1 in a flowing fingerpicking pattern while holding chords.',
    plainExplanation: [
      'Up to now, we have either strummed all 4 strings together or plucked single-note melodies. There is a third magical technique called Fingerpicking (or playing an Arpeggio): holding a full chord with your left hand while plucking the strings one at a time in a flowing wave with your right hand!',
      'Assign your right-hand fingers to their own strings: Thumb (p) takes the top two strings (G and C), Index finger (i) rests under the E string, and Middle finger (m) rests under the bottom A string.',
      'Hold C Major with your left hand, and pluck top-to-bottom: G → C → E → A (1 - & - 2 - &). It sounds like a gentle harp!',
    ],
    newTerms: ['chord'],
    visualMode: 'chord',
    visualConfig: {
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Pluck a 4-String Arpeggio Wave',
      instruction: 'While C Major (or Am/F) is active on the stage, pluck Strings 4 (G) → 3 (C) → 2 (E) → 1 (A) in order 4 times.',
      type: 'pluck-strings',
      requiredActionsCount: 4,
      actionHint: 'Click Strings 4, 3, 2, and 1 in order on the interactive fretboard.',
    },
    practicalExercise: {
      title: 'The Harp-Wave Chord Progression (C → Am → F → G7)',
      steps: [
        'Hold C Major and pluck String 4 → String 3 → String 2 → String 1 twice at an even pace.',
        'Switch to Am and pluck 4 → 3 → 2 → 1 twice.',
        'Switch to F and pluck 4 → 3 → 2 → 1 twice, then G7 for 4 → 3 → 2 → 1 twice!',
      ],
      recommendedSeconds: 90,
    },
    commonMistake: {
      symptom: 'Looking back and forth frantically between your left hand and right hand.',
      whyItHappens: 'Your right hand isn’t anchored consistently over the strings.',
      quickFix: 'Rest your right pinky lightly on the wooden body below the bottom A string as a gentle touchpoint so your fingers always know where the strings are!',
    },
    checkpoint: {
      question: 'What is an "Arpeggio" (fingerpicking a chord)?',
      options: [
        'Holding a chord shape with your left hand while plucking the strings one after another so the notes ring out in a flowing wave',
        'Hitting the wooden body of the ukulele like a drum',
        'Strumming all four strings with all five fingers at once',
        'Loosening the strings while playing',
      ],
      correctIndex: 0,
      explanation: 'Exactly! "Arpeggio" comes from the Italian word for "like a harp"—playing the notes of a chord one by one.',
      hint: 'Think of the "Harp-Wave" sound.',
    },
  },
  {
    id: 'lesson-42',
    number: 42,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'Adding Musical Emotion: Dynamics & Palm Muting',
    durationMinutes: 5,
    objective: 'Control volume (playing softly vs. warmly) and stop strings cleanly with the palm of your strumming hand.',
    plainExplanation: [
      'Two players can play the exact same chords and strumming pattern, yet one sounds robotic and the other gives you goosebumps. What is the secret? Dynamics—the art of varying how softly or warmly you play!',
      'When playing a quiet verse, brush closer to the neck with a feather-light touch (musicians call playing softly "Piano"). When the chorus arrives, brush slightly fuller over the sweet spot ("Forte").',
      'Also try the Palm Stop: after strumming a chord, gently lay the soft heel of your right palm across all 4 strings to create crisp silence! Mixing ringing chords with sudden silence creates instant groove.',
    ],
    newTerms: ['dynamics'],
    visualMode: 'strumming',
    visualConfig: {
      strummingPatternId: 'island-strum',
      activeChordId: 'C',
    },
    interactiveActivity: {
      title: 'Practice Dynamic Strumming',
      instruction: 'Play or strum on the interactive stage 4 times while practicing soft vs. accented strokes.',
      type: 'tap-rhythm',
      requiredActionsCount: 4,
      actionHint: 'Click Strum Down / Up or run the Rhythm Visualizer 4 times.',
    },
    practicalExercise: {
      title: 'The Crescendo Wave & Palm Stop',
      steps: [
        'Hold C Major and strum 8 down-strums starting at a whisper (1, 2) and gradually growing fuller by beat 8 (a "Crescendo").',
        'Now strum once on Beat 1 and immediately rest your right palm gently on the strings on Beat 2 to stop the sound completely!',
        'Repeat "Strum (1) – Stop (2) – Strum (3) – Stop (4)" four times.',
      ],
      recommendedSeconds: 75,
    },
    commonMistake: {
      symptom: 'Slapping the strings too hard when trying to stop them with your palm, creating an unwanted bang.',
      whyItHappens: 'Dropping your hand from high in the air.',
      quickFix: 'Just touch the soft cushion of your palm gently against the strings—zero force needed to stop nylon strings from vibrating.',
    },
    checkpoint: {
      question: 'In music, what does the word "Dynamics" mean?',
      options: [
        'Varying how softly or loudly/warmly you play to express emotion and shape a song',
        'How many strings your instrument has',
        'The brand of tuning pegs on the headstock',
        'How fast you can change strings',
      ],
      correctIndex: 0,
      explanation: 'Spot on! Dynamics (soft whispers vs. warm full strumming) bring human emotion and storytelling to your playing.',
      hint: 'Think of whispering vs. speaking warmly when telling a story.',
    },
  },
  {
    id: 'lesson-43',
    number: 43,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'Spaced Review: Complete Chord & Rhythm Diagnostic',
    durationMinutes: 6,
    isSpacedReview: true,
    objective: 'Review all 9 chords (C, Am, F, G7, G, A7, Dm, Em, D) and switch between strumming patterns.',
    plainExplanation: [
      'Before your final Graduation Showcase in Lesson 44, let’s do a celebratory Spaced Review of your entire ukulele repertoire!',
      'Think back to Lesson 1 when we explored what a soundhole and a fret were. Today, you understand standard G-C-E-A re-entrant tuning, read both Chord Diagrams and single-note Tablature, know 9 essential chords, and can play in 4/4 time, 3/4 waltz time, fingerpicking, and the Island Strum!',
      'Use the interactive stage above to test your favorite chords and transitions.',
    ],
    newTerms: ['chord', 'anchor-finger', 'ghost-strum'],
    visualMode: 'transition',
    visualConfig: {
      activeChordId: 'C',
      secondaryChordId: 'G',
    },
    interactiveActivity: {
      title: 'Review 4 Different Chords on the Stage',
      instruction: 'Select and strum at least 4 chords on the interactive stage to verify your chord readiness.',
      type: 'switch-chords',
      requiredActionsCount: 4,
      actionHint: 'Toggle through different chords and strum 4 times.',
    },
    practicalExercise: {
      title: 'The 2-Minute All-Star Warmup',
      steps: [
        'Warmup 1: Play C → Am → F → G7 with "Down, Down-Up, Down, Down-Up".',
        'Warmup 2: Play F → Dm → A7 → Dm using your Anchor and Pivot fingers.',
        'Warmup 3: Play C → G → Am → F with the Island Strum (D - D U - U D U)!',
      ],
      recommendedSeconds: 120,
    },
    commonMistake: {
      symptom: 'Rushing through transitions when trying to show off all your chords.',
      whyItHappens: 'Excitement makes our right hand speed up past what our left hand can play cleanly.',
      quickFix: 'Smooth is fast! A relaxed 75 BPM groove with clean chords always sounds better than a rushed 120 BPM.',
    },
    checkpoint: {
      question: 'Which habit will help you improve the fastest when practicing a challenging chord switch (like G to Am)?',
      options: [
        'Slow the tempo down, keep your right hand moving steadily, and practice just that 2-chord switch slowly 10 times',
        'Play the easy parts of the song fast and stop every time the hard chord appears',
        'Press the strings three times harder',
        'Avoid songs that use more than one chord',
      ],
      correctIndex: 0,
      explanation: 'Exactly! Isolating a tricky 2-chord transition at a slow, relaxed tempo builds rock-solid muscle memory in minutes.',
      hint: 'How do musicians master a tricky transition without stress?',
    },
  },
  {
    id: 'lesson-44',
    number: 44,
    stageId: 8,
    stageTitle: 'Stage 8: Real Playing Skills',
    title: 'Graduation Showcase: "Aloha Horizon" (4-Chord Island Medley)',
    durationMinutes: 8,
    objective: 'Perform the complete 4-chord Graduation Song ("Aloha Horizon": C – G – Am – F) using the Island Strum and set up your daily 10-minute practice habit.',
    plainExplanation: [
      'Welcome to Lesson 44—your Beginner Ukulele Academy Graduation Showcase!',
      'In this milestone performance, you will put everything together on "Aloha Horizon": the Four Magic Chords (C – G – Am – F), the signature Island Strum (D - D U - U D U), your Anchor Finger between Am and F, and the Keep Strumming Rule!',
      'Remember: completing this 44-lesson curriculum is just the beginning of a lifelong musical joy. Just 10 minutes of relaxed playing a day (2 min tuning & finger warmup, 3 min chord switches, 5 min playing songs you love) will keep your skills growing every week!',
    ],
    newTerms: ['chord', 'ghost-strum', 'dynamics'],
    visualMode: 'song',
    visualConfig: {
      songId: 'four-magic-chords-medley',
      activeChordId: 'C',
      secondaryChordId: 'G',
      strummingPatternId: 'island-strum',
    },
    interactiveActivity: {
      title: 'Perform the Graduation Song: "Aloha Horizon"',
      instruction: 'Play or step through at least 6 measures of "Aloha Horizon" (C – G – Am – F) in the interactive Song Stage!',
      type: 'play-song',
      requiredActionsCount: 6,
      actionHint: 'Click through the measures or click "Strum Measure" / "Auto Play Song" 6 times.',
    },
    practicalExercise: {
      title: 'Your Graduation Concert Performance',
      steps: [
        'Check your posture: forearm cradling the body, neck angled slightly up, left thumb relaxed behind Fret 2.',
        'Start your Island Strum (D - D U - U D U) on C Major and play all 8 measures of "Aloha Horizon" (C → G → Am → F twice!).',
        'Finish on one extra-warm C Major chord and let it ring out until the sound fades completely. Take a bow—you are a ukulele player!',
      ],
      recommendedSeconds: 150,
    },
    commonMistake: {
      symptom: 'Waiting until you have a free 2-hour block on the weekend to practice instead of playing daily.',
      whyItHappens: 'Thinking practice has to be long to be effective.',
      quickFix: 'Your brain builds muscle memory while you sleep! Playing for 10 minutes every day beats playing for 2 hours once a week every single time.',
    },
    checkpoint: {
      question: 'What is the most effective way to continue building your ukulele muscle memory after graduating from this course?',
      options: [
        'Play for 10 enjoyable minutes every day (2 min warmup, 3 min chord transitions, 5 min playing songs)',
        'Only practice once a month for 3 hours straight',
        'Never play songs until you memorize 500 chords',
        'Keep the ukulele locked inside a closet so it stays clean',
      ],
      correctIndex: 0,
      explanation: 'Congratulations, graduate! Short, consistent, joyful daily playing (keep your ukulele out on a stand where you can reach it!) is the secret to lifelong musical joy.',
      hint: 'Consistency beats marathon sessions!',
    },
  },
];
