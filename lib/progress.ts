"use client";

export interface UserProgress {
  completedLessons: string[];
  earnedBadges: string[];
  quizScores: Record<string, number>;
  lastVisited?: string;
}

const STORAGE_KEY = "ai-awareness-progress";

export function getProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { completedLessons: [], earnedBadges: [], quizScores: {} };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { completedLessons: [], earnedBadges: [], quizScores: {} };
    return JSON.parse(stored);
  } catch {
    return { completedLessons: [], earnedBadges: [], quizScores: {} };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage may be unavailable
  }
}

export function markLessonComplete(lessonId: string): UserProgress {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  saveProgress(progress);
  return progress;
}

export function saveQuizScore(lessonId: string, score: number): UserProgress {
  const progress = getProgress();
  progress.quizScores[lessonId] = score;
  saveProgress(progress);
  return progress;
}

export function earnBadge(badgeId: string): UserProgress {
  const progress = getProgress();
  if (!progress.earnedBadges.includes(badgeId)) {
    progress.earnedBadges.push(badgeId);
  }
  saveProgress(progress);
  return progress;
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
