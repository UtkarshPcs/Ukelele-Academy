'use client';

import {initializeApp, getApps, getApp} from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Validate connection to Firestore on boot
let hasTestedConnection = false;
export async function testFirestoreConnection(): Promise<void> {
  if (typeof window === 'undefined' || hasTestedConnection) return;
  hasTestedConnection = true;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('the client is offline')
    ) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

if (typeof window !== 'undefined') {
  testFirestoreConnection();
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface CloudLearnerProgressData {
  uid: string;
  displayName: string;
  currentLessonNumber: number;
  completedLessonNumbers: number[];
  knownDifficulties: string[];
  practiceMinutesTotal: number;
  dailyStreakCount: number;
  bestStreakCount: number;
  lastPracticeIsoDate: string;
  practicedIsoDates: string[];
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface CloudPracticeSessionItem {
  id: string;
  uid: string;
  date: string;
  lessonNumber: number;
  lessonTitle: string;
  minutes: number;
}

const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopup(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function signOutLearner(): Promise<void> {
  await signOut(auth);
}

export {onAuthStateChanged};
export type {User};

/**
 * Sanitizes outgoing payload to strictly conform to firebase-blueprint.json & firestore.rules
 */
function sanitizeProgressPayload(
  uid: string,
  displayName: string,
  state: {
    currentLessonNumber: number;
    completedLessonNumbers: number[];
    knownDifficulties: string[];
    practiceMinutesTotal: number;
    dailyStreakCount: number;
    bestStreakCount: number;
    lastPracticeIsoDate: string;
    practicedIsoDates: string[];
  }
) {
  const cleanName = (displayName || 'Ukulele Learner').trim().slice(0, 80) || 'Learner';
  const cleanLessonNum = Math.max(
    1,
    Math.min(44, Math.round(state.currentLessonNumber || 1))
  );
  const cleanCompleted = Array.from(
    new Set(
      (state.completedLessonNumbers || [])
        .map((n) => Math.round(Number(n)))
        .filter((n) => n >= 1 && n <= 44)
    )
  ).slice(0, 50);

  const cleanDifficulties = (state.knownDifficulties || [])
    .filter((s) => typeof s === 'string' && s.trim().length > 0)
    .map((s) => s.trim().slice(0, 120))
    .slice(0, 44);

  const cleanMinutes = Math.max(
    0,
    Math.min(100000, Math.round(state.practiceMinutesTotal || 0))
  );
  const cleanDailyStreak = Math.max(
    1,
    Math.min(10000, Math.round(state.dailyStreakCount || 1))
  );
  const cleanBestStreak = Math.max(
    cleanDailyStreak,
    Math.min(10000, Math.round(state.bestStreakCount || 1))
  );

  const isoRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  const todayFallback = new Date().toISOString().slice(0, 10);
  const cleanLastDate = isoRegex.test(state.lastPracticeIsoDate)
    ? state.lastPracticeIsoDate
    : todayFallback;

  const filteredDates = (state.practicedIsoDates || [])
    .filter((d) => typeof d === 'string' && isoRegex.test(d))
    .slice(-30);
  const cleanPracticedDates =
    filteredDates.length > 0 ? filteredDates : [cleanLastDate];

  return {
    uid,
    displayName: cleanName,
    currentLessonNumber: cleanLessonNum,
    completedLessonNumbers: cleanCompleted,
    knownDifficulties: cleanDifficulties,
    practiceMinutesTotal: cleanMinutes,
    dailyStreakCount: cleanDailyStreak,
    bestStreakCount: cleanBestStreak,
    lastPracticeIsoDate: cleanLastDate,
    practicedIsoDates: cleanPracticedDates,
  };
}

export async function fetchOrCreateCloudLearnerProgress(
  user: User,
  localFallback: {
    currentLessonNumber: number;
    completedLessonNumbers: number[];
    knownDifficulties: string[];
    practiceMinutesTotal: number;
    dailyStreakCount: number;
    bestStreakCount: number;
    lastPracticeIsoDate: string;
    practicedIsoDates: string[];
  }
): Promise<{
  progress: CloudLearnerProgressData;
  sessions: CloudPracticeSessionItem[];
}> {
  const learnerPath = `learners/${user.uid}`;
  const learnerRef = doc(db, 'learners', user.uid);

  let existingSnap;
  try {
    existingSnap = await getDoc(learnerRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, learnerPath);
  }

  if (existingSnap && existingSnap.exists()) {
    const cloudData = existingSnap.data() as CloudLearnerProgressData;
    const sessions = await fetchCloudPracticeSessions(user.uid);
    return {
      progress: cloudData,
      sessions,
    };
  }

  // Create initial cloud profile seeded with any existing local progress
  const sanitized = sanitizeProgressPayload(
    user.uid,
    user.displayName || 'Ukulele Learner',
    localFallback
  );

  try {
    await setDoc(learnerRef, {
      ...sanitized,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, learnerPath);
  }

  return {
    progress: sanitized,
    sessions: [],
  };
}

export async function syncCloudLearnerProgress(
  user: User,
  state: {
    currentLessonNumber: number;
    completedLessonNumbers: number[];
    knownDifficulties: string[];
    practiceMinutesTotal: number;
    dailyStreakCount: number;
    bestStreakCount: number;
    lastPracticeIsoDate: string;
    practicedIsoDates: string[];
  }
): Promise<void> {
  const learnerPath = `learners/${user.uid}`;
  const learnerRef = doc(db, 'learners', user.uid);
  const sanitized = sanitizeProgressPayload(
    user.uid,
    user.displayName || 'Ukulele Learner',
    state
  );

  try {
    await updateDoc(learnerRef, {
      displayName: sanitized.displayName,
      currentLessonNumber: sanitized.currentLessonNumber,
      completedLessonNumbers: sanitized.completedLessonNumbers,
      knownDifficulties: sanitized.knownDifficulties,
      practiceMinutesTotal: sanitized.practiceMinutesTotal,
      dailyStreakCount: sanitized.dailyStreakCount,
      bestStreakCount: sanitized.bestStreakCount,
      lastPracticeIsoDate: sanitized.lastPracticeIsoDate,
      practicedIsoDates: sanitized.practicedIsoDates,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, learnerPath);
  }
}

export async function logCloudPracticeSession(
  user: User,
  session: {
    id: string;
    date: string;
    lessonNumber: number;
    lessonTitle: string;
    minutes: number;
  }
): Promise<void> {
  const cleanSessionId =
    session.id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 64) ||
    `sess-${Date.now()}`;
  const sessionPath = `learners/${user.uid}/sessions/${cleanSessionId}`;
  const sessionRef = doc(db, 'learners', user.uid, 'sessions', cleanSessionId);

  try {
    await setDoc(sessionRef, {
      uid: user.uid,
      date: (session.date || 'Today').slice(0, 24),
      lessonNumber: Math.max(1, Math.min(44, Math.round(session.lessonNumber || 1))),
      lessonTitle: (session.lessonTitle || 'Ukulele Lesson').slice(0, 120),
      minutes: Math.max(1, Math.min(240, Math.round(session.minutes || 5))),
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, sessionPath);
  }
}

export async function fetchCloudPracticeSessions(
  uid: string
): Promise<CloudPracticeSessionItem[]> {
  const sessionsPath = `learners/${uid}/sessions`;
  const sessionsQuery = query(
    collection(db, 'learners', uid, 'sessions'),
    where('uid', '==', uid)
  );

  try {
    const snap = await getDocs(sessionsQuery);
    const items: CloudPracticeSessionItem[] = [];
    snap.forEach((docSnap) => {
      const d = docSnap.data();
      items.push({
        id: docSnap.id,
        uid: d.uid,
        date: d.date,
        lessonNumber: d.lessonNumber,
        lessonTitle: d.lessonTitle,
        minutes: d.minutes,
      });
    });
    return items.slice(0, 30);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, sessionsPath);
  }
}
