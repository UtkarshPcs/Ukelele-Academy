import {NextRequest, NextResponse} from 'next/server';
import {GoogleGenAI, Type} from '@google/genai';
import {CHORD_LIBRARY} from '@/lib/ukulele-theory';

export interface SuggestedChordItem {
  id: string;
  fullName: string;
  frets: [number, number, number, number];
  fingers: [number, number, number, number];
  whyItFits: string;
}

export interface ChordSuggestionResponse {
  title: string;
  feelingMatch: string;
  recommendedBpm: number;
  strummingTip: string;
  chords: SuggestedChordItem[];
  provider: string;
}

const VALID_CHORD_IDS = Object.keys(CHORD_LIBRARY);

function hydrateChords(
  rawChords: Array<{id: string; whyItFits: string}>
): SuggestedChordItem[] {
  const result: SuggestedChordItem[] = [];
  for (const item of rawChords) {
    const normalizedId =
      VALID_CHORD_IDS.find(
        (k) => k.toLowerCase() === item.id.trim().toLowerCase()
      ) || 'C';
    const lib = CHORD_LIBRARY[normalizedId] || CHORD_LIBRARY.C;
    result.push({
      id: lib.id,
      fullName: lib.fullName,
      frets: lib.frets,
      fingers: lib.fingers,
      whyItFits: item.whyItFits || lib.moodDescription,
    });
  }
  return result.length > 0
    ? result
    : [
        {
          id: 'C',
          fullName: CHORD_LIBRARY.C.fullName,
          frets: CHORD_LIBRARY.C.frets,
          fingers: CHORD_LIBRARY.C.fingers,
          whyItFits: CHORD_LIBRARY.C.moodDescription,
        },
      ];
}

function buildCuratedMoodSuggestion(prompt: string): ChordSuggestionResponse {
  const q = prompt.toLowerCase();

  if (q.includes('jazz') || q.includes('lounge') || q.includes('chill') || q.includes('lo-fi') || q.includes('dream')) {
    return {
      title: 'Velvet Sunset Lounge (Jazzy & Dreamy ii–V–I)',
      feelingMatch:
        'Seventh chords (like Cmaj7, Dm, and G7) add a lush 4th note on top of standard triads, creating that warm, sophisticated jazz-cafe and lo-fi sunset harmony.',
      recommendedBpm: 68,
      strummingTip: 'Use a gentle thumb brush or soft Down - Down-Up groove at 68 BPM.',
      chords: hydrateChords([
        {
          id: 'Cmaj7',
          whyItFits:
            'Only 1 finger (Middle #2 on Fret 2 of the A string)! Replaces plain C Major with a dreamy, floating Major 7th color.',
        },
        {
          id: 'Am',
          whyItFits:
            'Adds a mellow, late-night minor warmth while sharing open C and E strings.',
        },
        {
          id: 'Dm',
          whyItFits:
            'The classic jazz "ii" chord (2-2-1-0)—sets up a soulful, velvety groove.',
        },
        {
          id: 'G7',
          whyItFits:
            'Provides gentle dominant 7th tension (0-2-1-2) that glides smoothly back into Cmaj7.',
        },
      ]),
      provider: 'Koa Harmony Engine',
    };
  }

  if (q.includes('sad') || q.includes('melanchol') || q.includes('emotional') || q.includes('heart') || q.includes('minor') || q.includes('rain')) {
    return {
      title: 'Rain on the Windowpane (Emotional Minor Progression)',
      feelingMatch:
        'Starting on a Minor chord (A Minor) instead of a Major chord immediately sets an introspective, bittersweet, and cinematic mood.',
      recommendedBpm: 64,
      strummingTip: 'Try slow 4-beat down-strums or fingerpicking Strings 4 → 3 → 2 → 1 in a wave.',
      chords: hydrateChords([
        {
          id: 'Am',
          whyItFits:
            'Our emotional home base (2-0-0-0)—warm, wistful, and played with just one finger.',
        },
        {
          id: 'Dm',
          whyItFits:
            'Deepens the melancholy feeling with a rich minor harmony (2-2-1-0).',
        },
        {
          id: 'F',
          whyItFits:
            'Adds a brief ray of tender hope (2-0-1-0) using your Middle Finger as an anchor from Am.',
        },
        {
          id: 'E7',
          whyItFits:
            'Creates a dramatic, yearning pull (1-2-0-2) that resolves achingly back home to A Minor.',
        },
      ]),
      provider: 'Koa Harmony Engine',
    };
  }

  if (q.includes('simple') || q.includes('easy') || q.includes('beginner') || q.includes('one finger') || q.includes('first')) {
    return {
      title: 'Zero-Stress One-Finger & Two-Finger Breeze',
      feelingMatch:
        'Every single chord in this progression uses only 1 or 2 fingers, letting a brand-new player sound musical immediately without finger acrobatics.',
      recommendedBpm: 70,
      strummingTip: 'Play 4 steady, relaxed down-strums per chord (1 - 2 - 3 - 4).',
      chords: hydrateChords([
        {
          id: 'C',
          whyItFits:
            'Uses just 1 finger (Ring #3 on Fret 3 of the bottom A string) for a clear, sunny sound.',
        },
        {
          id: 'Cmaj7',
          whyItFits:
            'Uses just 1 finger on Fret 2 of the same bottom A string—creating a smooth walking melody!',
        },
        {
          id: 'Am',
          whyItFits:
            'Uses just 1 finger (Middle #2 on Fret 2 of the top G string) for warm contrast.',
        },
        {
          id: 'F',
          whyItFits:
            'Keep Middle #2 anchored from Am and add Index #1 on E string Fret 1 for a cozy lift.',
        },
      ]),
      provider: 'Koa Harmony Engine',
    };
  }

  if (q.includes('blues') || q.includes('funky') || q.includes('groovy') || q.includes('soul')) {
    return {
      title: 'Front Porch Ukulele Blues (Dominant 7th Groove)',
      feelingMatch:
        'Dominant 7th chords (A7, C7, G7) have a built-in bluesy sparkle and swagger that sounds playful and rhythmic.',
      recommendedBpm: 76,
      strummingTip: 'Use the "Down, Down-Up, Down, Down-Up" bounce with a slight swing!',
      chords: hydrateChords([
        {
          id: 'C7',
          whyItFits:
            'Super-easy 1-finger blues chord (0-0-0-1) that kicks off the groove with attitude.',
        },
        {
          id: 'F',
          whyItFits:
            'Answers C7 with a warm, grounded subdominant chord (2-0-1-0).',
        },
        {
          id: 'A7',
          whyItFits:
            'Another 1-finger gem (0-1-0-0) that adds a ragtime/blues twist.',
        },
        {
          id: 'G7',
          whyItFits:
            'The classic blues turnaround chord (0-2-1-2) that drives the rhythm back to the top.',
        },
      ]),
      provider: 'Koa Harmony Engine',
    };
  }

  // Default: Happy / Uplifting / Island / Campfire
  return {
    title: 'Golden Hour Island Sunshine (Happy & Uplifting)',
    feelingMatch:
      'Built around bright Major harmonies (C, G, and F) with a touch of warm A Minor, this is the quintessential happy Hawaiian ukulele progression.',
    recommendedBpm: 80,
    strummingTip: 'Play with the famous Island Strum: Down – Down-Up – Up-Down-Up (D - D U - U D U)!',
    chords: hydrateChords([
      {
        id: 'C',
        whyItFits:
          'Bright, open, and joyful home chord (0-0-0-3)—instantly puts a smile on the listener’s face.',
      },
      {
        id: 'G',
        whyItFits:
          'Adds uplifting, energetic forward momentum (0-2-3-2).',
      },
      {
        id: 'Am',
        whyItFits:
          'Provides just a hint of warm heart (2-0-0-0) so the happiness feels genuine and rich.',
      },
      {
        id: 'F',
        whyItFits:
          'Lifts the progression into a sunny chorus feeling (2-0-1-0) before returning home to C.',
      },
    ]),
    provider: 'Koa Harmony Engine',
  };
}

export async function POST(req: NextRequest) {
  try {
    const {prompt} = (await req.json()) as {prompt?: string};
    const userMood = (prompt || 'happy island ukulele').trim();

    const systemInstruction = `You are an expert ukulele teacher and music theorist.
The user will describe a musical feeling, mood, or context (e.g. "happy", "sad", "simple", "jazzy", "campfire", "dreamy").
Select 3 or 4 ukulele chords from this exact supported list: ${VALID_CHORD_IDS.join(', ')}.
Return ONLY valid JSON with:
{
  "title": "Creative title for this progression",
  "feelingMatch": "Plain-English explanation of why these chords fit the user's mood/feeling",
  "recommendedBpm": 76,
  "strummingTip": "Simple strumming pattern suggestion (e.g. D - D U - U D U)",
  "chords": [
    { "id": "C", "whyItFits": "Plain-English reason why this chord fits and how it feels in the progression" }
  ]
}`;

    // 1. Try Groq API Qwen model first if configured
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey && groqKey !== 'MY_GROQ_API_KEY' && groqKey.trim().length > 10) {
      for (const modelId of ['qwen/qwen3.8-27b', 'qwen/qwen3.6-27b', 'qwen-2.5-32b']) {
        try {
          const response = await fetch(
            'https://api.groq.com/openai/v1/chat/completions',
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${groqKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: modelId,
                response_format: {type: 'json_object'},
                messages: [
                  {role: 'system', content: systemInstruction},
                  {
                    role: 'user',
                    content: `Suggest a ukulele chord progression for this feeling or context: "${userMood}"`,
                  },
                ],
                temperature: 0.6,
              }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            const rawText = (data.choices?.[0]?.message?.content || '')
              .replace(/<think>[\s\S]*?<\/think>/gi, '')
              .trim();
            const parsed = JSON.parse(rawText);
            if (parsed && Array.isArray(parsed.chords)) {
              return NextResponse.json({
                title: parsed.title || 'Custom Ukulele Progression',
                feelingMatch: parsed.feelingMatch || '',
                recommendedBpm: Number(parsed.recommendedBpm) || 74,
                strummingTip:
                  parsed.strummingTip || 'Play 4 steady down-strums per chord.',
                chords: hydrateChords(parsed.chords),
                provider: `Groq AI · ${modelId}`,
              } satisfies ChordSuggestionResponse);
            }
          }
        } catch {
          // Continue to next fallback
        }
      }
    }

    // 2. Try Server-Side Gemini API if configured
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && geminiKey !== 'MY_GEMINI_API_KEY' && geminiKey.trim().length > 10) {
      try {
        const ai = new GoogleGenAI({
          apiKey: geminiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const res = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `Suggest a 4-chord ukulele progression for this musical feeling or context: "${userMood}". Choose chords only from: ${VALID_CHORD_IDS.join(', ')}.`,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                title: {type: Type.STRING},
                feelingMatch: {type: Type.STRING},
                recommendedBpm: {type: Type.INTEGER},
                strummingTip: {type: Type.STRING},
                chords: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: {type: Type.STRING},
                      whyItFits: {type: Type.STRING},
                    },
                    required: ['id', 'whyItFits'],
                  },
                },
              },
              required: [
                'title',
                'feelingMatch',
                'recommendedBpm',
                'strummingTip',
                'chords',
              ],
            },
          },
        });

        if (res.text) {
          const parsed = JSON.parse(res.text.trim());
          return NextResponse.json({
            title: parsed.title,
            feelingMatch: parsed.feelingMatch,
            recommendedBpm: Number(parsed.recommendedBpm) || 74,
            strummingTip: parsed.strummingTip,
            chords: hydrateChords(parsed.chords),
            provider: 'AI Chord Architect',
          } satisfies ChordSuggestionResponse);
        }
      } catch {
        // Fall through to curated mood engine
      }
    }

    // 3. Curated Mood & Harmony Fallback
    return NextResponse.json(buildCuratedMoodSuggestion(userMood));
  } catch {
    return NextResponse.json(buildCuratedMoodSuggestion('happy'));
  }
}
