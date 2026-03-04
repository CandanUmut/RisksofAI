"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { modules, getTotalLessons } from "@/lib/courses";
import { getProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

export default function CoursesPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const totalLessons = getTotalLessons();

  useEffect(() => {
    const p = getProgress();
    setCompletedLessons(p.completedLessons);
  }, []);

  const overallProgress = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0;

  const colorMap: Record<string, { border: string; badge: string; text: string }> = {
    blue: { border: "border-blue-800/50 hover:border-blue-600", badge: "bg-blue-900/50 text-blue-300", text: "text-blue-400" },
    red: { border: "border-red-800/50 hover:border-red-600", badge: "bg-red-900/50 text-red-300", text: "text-red-400" },
    purple: { border: "border-purple-800/50 hover:border-purple-600", badge: "bg-purple-900/50 text-purple-300", text: "text-purple-400" },
    green: { border: "border-green-800/50 hover:border-green-600", badge: "bg-green-900/50 text-green-300", text: "text-green-400" },
  };

  const progressBarColor: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">AI Awareness Courses</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Structured learning to understand AI systems, recognize risks, interact effectively, and prepare for what&apos;s coming.
        </p>
      </div>

      {/* Overall progress */}
      {completedLessons.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-white">Your Overall Progress</span>
            <span className="text-gray-400 text-sm">{completedLessons.length} / {totalLessons} lessons</span>
          </div>
          <ProgressBar value={overallProgress} />
          <div className="mt-2 text-right text-sm text-gray-400">{overallProgress}% complete</div>
        </div>
      )}

      {/* Modules */}
      <div className="space-y-8">
        {modules.map((module, mIdx) => {
          const colors = colorMap[module.color] ?? colorMap.blue;
          const pbColor = progressBarColor[module.color] ?? "bg-blue-500";
          const moduleLessonIds = module.lessons.map((l) => l.id);
          const completedInModule = moduleLessonIds.filter((id) => completedLessons.includes(id)).length;
          const moduleProgress = module.lessons.length > 0 ? Math.round((completedInModule / module.lessons.length) * 100) : 0;

          return (
            <div key={module.id} className={`bg-gray-900 border rounded-2xl overflow-hidden ${colors.border} transition-colors`}>
              {/* Module header */}
              <div className={`bg-gradient-to-r ${module.gradient} p-0.5`}>
                <div className="bg-gray-900 p-6 rounded-t-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-5xl">{module.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>
                          Module {mIdx + 1}
                        </span>
                        <span className="text-xs text-gray-500">{module.lessons.length} lessons</span>
                        {completedInModule > 0 && (
                          <span className="text-xs text-gray-500">{completedInModule}/{module.lessons.length} done</span>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{module.title}</h2>
                      <p className="text-gray-400 text-sm mt-1">{module.description}</p>
                    </div>
                    <Link
                      href={`/courses/${module.id}`}
                      className={`shrink-0 px-5 py-2.5 font-semibold text-sm rounded-xl border transition-all ${colors.text} ${colors.border} hover:bg-gray-800`}
                    >
                      {completedInModule > 0 ? "Continue" : "Start"} →
                    </Link>
                  </div>
                  {completedInModule > 0 && (
                    <div className="mt-4">
                      <ProgressBar value={moduleProgress} color={pbColor} />
                    </div>
                  )}
                </div>
              </div>

              {/* Lesson list */}
              <div className="divide-y divide-gray-800">
                {module.lessons.map((lesson, lIdx) => {
                  const done = completedLessons.includes(lesson.id);
                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${module.id}/${lesson.id}`}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${done ? "bg-green-600 text-white" : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"}`}>
                        {done ? "✓" : lIdx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{lesson.icon}</span>
                          <span className="font-medium text-white text-sm truncate">{lesson.title}</span>
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">{lesson.description}</div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                        <span className={`text-sm transition-transform group-hover:translate-x-1 ${colors.text}`}>→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
