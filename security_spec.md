# Security Specification (`security_spec.md`)

## 1. Data Invariants & Master Source of Truth
1. **Master Gate & Ownership Invariant:** `/learners/{userId}` is the Master Source of Truth for a learner's account. A learner document can only be read, created, or updated by a signed-in user with a verified email (`request.auth.token.email_verified == true`) whose `request.auth.uid == userId` and `incoming().uid == request.auth.uid`.
2. **Relational Subcollection Sync:** `/learners/{userId}/sessions/{sessionId}` belongs to `/learners/{userId}`. A session document cannot exist unless `/learners/$(userId)` exists and `get(/databases/$(database)/documents/learners/$(userId)).data.uid == request.auth.uid`.
3. **Strict Key & Type Bounds:** Every string and array is strictly bounded (`maxLength` / `.size()`) to prevent Denial-of-Wallet and payload poisoning.
4. **Temporal & Identity Immutability:** `uid` and `createdAt` are immutable across updates; `createdAt` and `updatedAt` must equal `request.time`.

## 2. The "Dirty Dozen" Payloads
1. **Identity Spoofing on Learner Create:** Authenticated user `user_A` attempts to create `/learners/user_A` with `uid: "user_B"`. -> `PERMISSION_DENIED`
2. **Cross-User Read (PII/Progress Scraping):** Authenticated user `user_A` attempts `get` on `/learners/user_B`. -> `PERMISSION_DENIED`
3. **Unverified Email Spoof Attack:** User with `email_verified: false` attempts `create` on `/learners/user_A`. -> `PERMISSION_DENIED`
4. **Shadow Field Injection on Create:** User sends valid `LearnerProgress` payload plus `"isAdmin": true`. -> `PERMISSION_DENIED`
5. **Shadow Field Injection on Update:** User updates `/learners/user_A` adding `"bonusStreak": 999`. -> `PERMISSION_DENIED`
6. **Immortal Field Mutation (`createdAt` / `uid`):** User attempts to modify `createdAt` or `uid` during an update on `/learners/user_A`. -> `PERMISSION_DENIED`
7. **Client Timestamp Forgery:** User sends a past or future `updatedAt` timestamp (`updatedAt != request.time`). -> `PERMISSION_DENIED`
8. **Value Poisoning on Whitelisted Key:** User updates `dailyStreakCount` with a string `"one_hundred"` or negative integer `-5`. -> `PERMISSION_DENIED`
9. **Array Overflow Attack:** User sends `completedLessonNumbers` with 500 elements (`size() > 50`). -> `PERMISSION_DENIED`
10. **Path Variable ID Poisoning:** User attempts to create `/learners/user_A/sessions/bad id with spaces!`. -> `PERMISSION_DENIED`
11. **Orphaned Subcollection Write:** User `user_A` attempts to create `/learners/user_A/sessions/sess_1` before `/learners/user_A` exists. -> `PERMISSION_DENIED`
12. **Blanket List Scraping:** User `user_A` attempts an unconstrained `list` query on `/learners` or `/learners/user_B/sessions`. -> `PERMISSION_DENIED`
