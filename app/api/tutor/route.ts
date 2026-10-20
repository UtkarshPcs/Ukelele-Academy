import {NextRequest, NextResponse} from 'next/server';
import {GoogleGenAI} from '@google/genai';

interface TutorRequestPayload {
  message: string;
  explainDifferently?: boolean;
  context: {
    currentLessonNumber: number;
    currentLessonTitle: string;
    currentStageTitle: string;
    learningObjective: string;
    plainExplanation: string[];
    activeChord?: string;
    secondaryChord?: string;
    strummingPattern?: string;
    practicalExerciseTitle: string;
    practicalExerciseSteps: string[];
    commonMistakeSymptom: string;
    commonMistakeFix: string;
    checkpointQuestion: string;
    checkpointHint: string;
    completedLessonNumbers: number[];
    knownDifficulties: string[];
    activityProgressText: string;
  };
  history: Array<{role: 'user' | 'assistant'; content: string}>;
}

const GROQ_QWEN_MODELS = [
  'qwen/qwen3.8-27b',
  'qwen/qwen3.6-27b',
  'qwen/qwen3-32b',
  'qwen-2.5-32b',
];

function stripThinkTags(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}

function buildSystemPrompt(payload: TutorRequestPayload): string {
  const {context, explainDifferently} = payload;
  const completedCount = context.completedLessonNumbers.length;
  const difficultiesList =
    context.knownDifficulties.length > 0
      ? context.knownDifficulties.join(', ')
      : 'None flagged yet';

  return `You are "Koa", a warm, patient, expert personal ukulele teacher inside the "Koa & Strum — Beginner Ukulele Academy" app.
Your student began at ABSOLUTE ZERO musical experience. Never assume they know musical jargon unless it was already taught in Lessons 1 to ${context.currentLessonNumber}.

=== CURRENT LEARNER CONTEXT ===
- Current Lesson: Lesson ${context.currentLessonNumber} of 44 — "${context.currentLessonTitle}" (${context.currentStageTitle})
- Lesson Learning Objective: ${context.learningObjective}
- Lesson Summary: ${context.plainExplanation.join(' ')}
- Active Chord / Focus on Interactive Fretboard: ${context.activeChord || 'Open strings / Anatomy'}${context.secondaryChord ? ` transitioning to ${context.secondaryChord}` : ''}
- Active Strumming Pattern: ${context.strummingPattern || 'Single plucks / Simple down-strums'}
- Current Practical Exercise: "${context.practicalExerciseTitle}" (${context.practicalExerciseSteps.join(' -> ')})
- Common Mistake for This Lesson: "${context.commonMistakeSymptom}" -> Fix: "${context.commonMistakeFix}"
- Current Lesson Checkpoint Question: "${context.checkpointQuestion}" (Hint: "${context.checkpointHint}")
- Learner Progress: Completed ${completedCount} of 44 lessons (${context.completedLessonNumbers.map((n) => `#${n}`).join(', ') || 'just starting Lesson 1'})
- Learner's Interactive Activity Progress: ${context.activityProgressText}
- Known Difficulties / Flagged Topics: ${difficultiesList}

=== STRICT PEDAGOGICAL & TEACHING RULES ===
1. PLAIN ENGLISH FIRST: Explain everything in warm, clear, everyday language. Whenever you mention a musical term (like fret, open string, nut, chord, beat, measure, anchor finger, or re-entrant tuning), briefly remind them what it means in plain English.
2. REFER TO VISUAL ELEMENTS ON SCREEN: Refer directly to the interactive ukulele stage they are looking at (e.g., "Look at the interactive fretboard on your screen: String 4 is the top G string closest to your chin, and String 1 is the bottom A string closest to the floor", or "Click the '0.5x Slow' button on the stage to hear the notes cascade slowly").
3. HINTS BEFORE ANSWERS: If the student asks for the answer to the Lesson Checkpoint quiz, DO NOT give away the exact multiple-choice answer right away—give them a friendly hint first so they can experience the "aha!" moment themselves.
4. HONEST ABOUT SENSORY LIMITS: Clearly distinguish what you can infer from their text description vs. what you can actually hear or see. For example, never pretend you just heard their physical ukulele through the chat text; instead say, "Based on what you described (a dull thud or metallic buzz), here are the 3 physical things to check on your fingers..." and remind them they can use the built-in Microphone Pitch Tuner in the Practice Studio to check tuning.
5. ACCURATE UKULELE FACTS ONLY:
   - Standard ukulele tuning from top string (String 4, closest to chin) to bottom string (String 1, closest to floor) is G4 (392 Hz) - C4 (261.6 Hz) - E4 (329.6 Hz) - A4 (440 Hz), remembered as "Good Chefs Eat Apples".
   - The 4th string (G) is tuned HIGHER than C and E (re-entrant tuning).
   - Finger numbers: 1 = Index, 2 = Middle, 3 = Ring, 4 = Pinky.
   - Standard chord shapes (G-C-E-A): C = 0-0-0-3 (Ring #3), Am = 2-0-0-0 (Middle #2), F = 2-0-1-0 (Middle #2 on G-2, Index #1 on E-1), G7 = 0-2-1-2 (Middle #2 on C-2, Index #1 on E-1, Ring #3 on A-2), G = 0-2-3-2 (Index #1 on C-2, Ring #3 on E-3, Middle #2 on A-2), A7 = 0-1-0-0, Dm = 2-2-1-0, Em = 0-4-3-2, D = 2-2-2-0.
6. KEEP IT SCANNABLE & DIGESTIBLE: Keep responses concise (2 to 4 short paragraphs or a clean 3-step bullet list). Never overwhelm the learner with a wall of text.
${
  explainDifferently
    ? `7. SPECIAL MODE — THE LEARNER SAID "I STILL DON'T UNDERSTAND": Slow way down! Apologize warmly for any confusion, use a completely fresh everyday analogy (like holding a sandwich, climbing a ladder, or a clock pendulum), and guide them through just ONE tiny, zero-stress step right now.`
    : ''
}`;
}

function buildCurriculumGroundedFallback(payload: TutorRequestPayload): string {
  const {message, explainDifferently, context} = payload;
  const q = message.toLowerCase();

  if (explainDifferently || q.includes("don't understand") || q.includes('confused')) {
    return `Let’s slow way down and try a completely fresh angle—no rush at all!

Think of **${context.currentLessonTitle}** using a simple everyday picture:
1. **The One Tiny Goal:** Right now, we only care about one thing: *${context.learningObjective}*
2. **Simple Analogy:** ${context.plainExplanation[1] || context.plainExplanation[0]}
3. **Try Just This One Step:** Look at the interactive ukulele diagram on your screen and try Step 1 of our exercise: *"${context.practicalExerciseSteps[0]}"*

Watch out for this common hiccup: **${context.commonMistakeSymptom}**—if that happens, simply **${context.commonMistakeFix}**. Tell me how that one step feels!`;
  }

  if (q.includes('buzz') || q.includes('wrong') || q.includes('mute') || q.includes('thud') || q.includes('sound')) {
    return `While I can't hear your physical ukulele through text chat, a **buzzing** or **muted "thud"** sound on **${context.activeChord || 'your strings'}** almost always comes from one of these 3 easy-to-fix finger positions:

1. **Find the "Sweet Spot" Behind the Fret Wire:** Make sure your fingertip is pressing in the wooden space *just behind* the metal fret wire (closer to the tuning pegs)—not directly on top of the metal wire (which muffles the string) and not too far back (which causes buzzing).
2. **Use Your Curled "Cat's Claw" Fingertip:** Stand right up on the very tip of your finger so the soft belly of your finger doesn't lean down and accidentally mute the open string below it.
3. **Lesson-Specific Check:** ${context.commonMistakeSymptom} → **Quick Fix:** ${context.commonMistakeFix}

Try plucking each of the 4 strings one by one from top (G) to bottom (A) on the interactive fretboard to compare which string needs a tiny adjustment!`;
  }

  if (q.includes('checkpoint') || q.includes('quiz') || q.includes('answer') || q.includes('hint')) {
    return `Here is a helpful hint for the **Lesson ${context.currentLessonNumber} Checkpoint** without spoiling the "aha!" moment:

- **The Question asks:** *"${context.checkpointQuestion}"*
- **Your Hint:** ${context.checkpointHint}
- **Where to look:** Check the first paragraph of our lesson explanation or click the highlighted parts on the interactive fretboard stage above. You've got this!`;
  }

  return `Here is how to master **Lesson ${context.currentLessonNumber}: ${context.currentLessonTitle}** step by step:

- **What We're Focusing On:** ${context.learningObjective}
- **Key Takeaway:** ${context.plainExplanation[0]}
- **Try This Next on Your Ukulele:** ${context.practicalExerciseSteps.join(' → ')}
- **Pro Tip if It Feels Tricky:** ${context.commonMistakeFix}

You can also click **"0.5x Slow"** on the interactive fretboard above to hear and see each string vibration in slow motion, or click **"I still don't understand"** below if you'd like me to explain this with a different analogy!`;
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as TutorRequestPayload;
    const systemPrompt = buildSystemPrompt(payload);

    const groqKey = process.env.GROQ_API_KEY;
    const hasValidGroqKey =
      Boolean(groqKey) &&
      groqKey !== 'MY_GROQ_API_KEY' &&
      groqKey!.trim().length > 10;

    // 1. Primary Integration: Groq API with Qwen Model
    if (hasValidGroqKey) {
      const messages = [
        {role: 'system', content: systemPrompt},
        ...payload.history.slice(-8).map((m) => ({
          role: m.role,
          content: m.content,
        })),
        {
          role: 'user',
          content: payload.explainDifferently
            ? `I still don't understand "${payload.context.currentLessonTitle}". Please slow down, use a totally different everyday analogy, and walk me through one tiny step at a time. (${payload.message})`
            : payload.message,
        },
      ];

      for (const modelId of GROQ_QWEN_MODELS) {
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
                messages,
                temperature: 0.6,
                max_completion_tokens: 700,
              }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            const rawReply = data.choices?.[0]?.message?.content || '';
            const cleanReply = stripThinkTags(rawReply);
            if (cleanReply) {
              return NextResponse.json({
                reply: cleanReply,
                provider: `Groq API · ${modelId}`,
                liveAi: true,
              });
            }
          }
        } catch {
          // Try next Qwen model ID in fallback order
        }
      }
    }

    // 2. Secondary Server-Side AI Fallback: Gemini API if GROQ_API_KEY is not configured
    const geminiKey = process.env.GEMINI_API_KEY;
    const hasValidGeminiKey =
      Boolean(geminiKey) &&
      geminiKey !== 'MY_GEMINI_API_KEY' &&
      geminiKey!.trim().length > 10;

    if (hasValidGeminiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey: geminiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const conversationTranscript = payload.history
          .slice(-6)
          .map((m) => `${m.role === 'user' ? 'Learner' : 'Tutor Koa'}: ${m.content}`)
          .join('\n\n');

        const userPrompt = `${
          conversationTranscript
            ? `Recent Conversation:\n${conversationTranscript}\n\n`
            : ''
        }Learner Question: ${
          payload.explainDifferently
            ? `I still don't understand "${payload.context.currentLessonTitle}". Please slow down, use a different analogy, and guide me through one small step at a time. (${payload.message})`
            : payload.message
        }`;

        const res = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.65,
          },
        });

        if (res.text) {
          return NextResponse.json({
            reply: stripThinkTags(res.text),
            provider: 'Koa AI Tutor (Server Connected)',
            liveAi: true,
          });
        }
      } catch {
        // Fall through to curriculum-grounded pedagogical engine
      }
    }

    // 3. Resilient Curriculum-Grounded Fallback when AI keys are unavailable
    const fallbackReply = buildCurriculumGroundedFallback(payload);
    return NextResponse.json({
      reply: fallbackReply,
      provider: 'Curriculum Coach (Offline-Ready Mode)',
      liveAi: false,
    });
  } catch (error) {
    console.error('Tutor API error:', error);
    return NextResponse.json(
      {
        reply:
          'Let’s take a calm breath and focus on one step at a time: check that your left thumb is resting gently behind Fret 2 on the neck, press just behind the metal fret wire with your curled fingertip, and strum lightly where the neck meets the body.',
        provider: 'Curriculum Coach (Fallback)',
        liveAi: false,
      },
      {status: 200}
    );
  }
}
