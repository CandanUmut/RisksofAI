"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { badges, modules, getTotalLessons } from "@/lib/courses";
import { getProgress, resetProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

export default function BadgesPage() {
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [showReset, setShowReset] = useState(false);
  const totalLessons = getTotalLessons();

  useEffect(() => {
    const p = getProgress();
    setEarnedBadges(p.earnedBadges);
    setCompletedLessons(p.completedLessons);
    setQuizScores(p.quizScores);
  }, []);

  const handleReset = () => {
    resetProgress();
    setEarnedBadges([]);
    setCompletedLessons([]);
    setQuizScores({});
    setShowReset(false);
  };

  const overallProgress = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0;
  const avgScore = Object.values(quizScores).length > 0
    ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.values(quizScores).length)
    : null;

  const colorMap: Record<string, { ring: string; glow: string; badge: string }> = {
    blue: { ring: "ring-blue-500", glow: "shadow-blue-500/25", badge: "from-blue-600 to-cyan-500" },
    red: { ring: "ring-red-500", glow: "shadow-red-500/25", badge: "from-red-600 to-orange-500" },
    purple: { ring: "ring-purple-500", glow: "shadow-purple-500/25", badge: "from-purple-600 to-pink-500" },
    green: { ring: "ring-green-500", glow: "shadow-green-500/25", badge: "from-green-600 to-emerald-500" },
    gold: { ring: "ring-yellow-500", glow: "shadow-yellow-500/25", badge: "from-yellow-500 to-amber-400" },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-3">Your Achievements</h1>
        <p className="text-gray-400 text-lg">
          Earn badges by completing AI awareness modules. Each badge represents real knowledge you can use.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
          <div className="text-3xl font-extrabold text-white">{earnedBadges.length}</div>
          <div className="text-gray-400 text-sm mt-1">Badges Earned</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
          <div className="text-3xl font-extrabold text-white">{completedLessons.length}</div>
          <div className="text-gray-400 text-sm mt-1">Lessons Done</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
          <div className="text-3xl font-extrabold text-white">{avgScore !== null ? `${avgScore}%` : "—"}</div>
          <div className="text-gray-400 text-sm mt-1">Avg Quiz Score</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
          <div className="text-3xl font-extrabold text-white">{overallProgress}%</div>
          <div className="text-gray-400 text-sm mt-1">Overall Progress</div>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
        <div className="flex justify-between text-sm mb-3">
          <span className="font-medium text-white">Course Completion</span>
          <span className="text-gray-400">{completedLessons.length} / {totalLessons} lessons</span>
        </div>
        <ProgressBar value={overallProgress} />
        {overallProgress === 100 && (
          <p className="text-green-400 text-sm mt-3 font-medium text-center">
            🏆 Congratulations! You have completed all courses!
          </p>
        )}
      </div>

      {/* Badges grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Badge Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => {
            const earned = earnedBadges.includes(badge.id);
            const colors = colorMap[badge.color] ?? colorMap.blue;
            const relatedModule = modules.find((m) => m.badgeId === badge.id);

            return (
              <div
                key={badge.id}
                className={`relative bg-gray-900 border rounded-2xl p-6 text-center transition-all ${earned ? `border-gray-700 ring-1 ${colors.ring} shadow-lg ${colors.glow}` : "border-gray-800 opacity-60"}`}
              >
                {!earned && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gray-950/50">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔒</div>
                      {relatedModule && (
                        <Link
                          href={`/courses/${relatedModule.id}`}
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Complete {relatedModule.title} →
                        </Link>
                      )}
                      {badge.id === "master-badge" && (
                        <p className="text-xs text-gray-400">Complete all modules</p>
                      )}
                    </div>
                  </div>
                )}

                <div className={`inline-flex w-20 h-20 rounded-2xl items-center justify-center text-5xl mb-4 bg-gradient-to-br ${colors.badge}`}>
                  {badge.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{badge.name}</h3>
                <p className="text-gray-400 text-sm">{badge.description}</p>

                {earned && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-green-900/50 border border-green-700 rounded-full text-green-400 text-xs font-medium">
                    <span>✓</span> Earned
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Module progress breakdown */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Module Progress</h2>
        <div className="space-y-4">
          {modules.map((module) => {
            const done = module.lessons.filter((l) => completedLessons.includes(l.id)).length;
            const pct = Math.round((done / module.lessons.length) * 100);
            const pbColor: Record<string, string> = { blue: "bg-blue-500", red: "bg-red-500", purple: "bg-purple-500", green: "bg-green-500" };

            return (
              <div key={module.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl">{module.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white text-sm">{module.title}</span>
                      <span className="text-gray-400 text-sm">{done}/{module.lessons.length}</span>
                    </div>
                  </div>
                </div>
                <ProgressBar value={pct} color={pbColor[module.color]} />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">{pct}% complete</span>
                  <Link href={`/courses/${module.id}`} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    {done === module.lessons.length ? "Review →" : "Continue →"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset */}
      <div className="border-t border-gray-800 pt-8">
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="text-sm text-gray-500 hover:text-red-400 transition-colors"
          >
            Reset all progress
          </button>
        ) : (
          <div className="bg-red-950/30 border border-red-800 rounded-xl p-4 flex items-center gap-4 flex-wrap">
            <p className="text-red-300 text-sm flex-1">This will delete all your progress and badges. Are you sure?</p>
            <div className="flex gap-2">
              <button onClick={handleReset} className="px-4 py-1.5 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors">
                Reset
              </button>
              <button onClick={() => setShowReset(false)} className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
