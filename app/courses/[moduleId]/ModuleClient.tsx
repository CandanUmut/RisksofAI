"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { type Module } from "@/lib/courses";
import { getProgress } from "@/lib/progress";
import ProgressBar from "@/components/ProgressBar";

interface Props {
  module: Module;
}

export default function ModuleClient({ module }: Props) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setCompletedLessons(getProgress().completedLessons);
  }, []);

  const completedCount = module.lessons.filter((l) => completedLessons.includes(l.id)).length;
  const progress = Math.round((completedCount / module.lessons.length) * 100);

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    blue: { text: "text-blue-400", border: "border-blue-700", bg: "bg-blue-900/30" },
    red: { text: "text-red-400", border: "border-red-700", bg: "bg-red-900/30" },
    purple: { text: "text-purple-400", border: "border-purple-700", bg: "bg-purple-900/30" },
    green: { text: "text-green-400", border: "border-green-700", bg: "bg-green-900/30" },
    orange: { text: "text-orange-400", border: "border-orange-700", bg: "bg-orange-900/30" },
  };

  const pbColor: Record<string, string> = {
    blue: "bg-blue-500", red: "bg-red-500", purple: "bg-purple-500", green: "bg-green-500", orange: "bg-orange-500"
  };

  const colors = colorMap[module.color] ?? colorMap.blue;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
        <span>/</span>
        <span className="text-gray-300">{module.title}</span>
      </div>

      {/* Module header */}
      <div className={`rounded-2xl border p-8 mb-10 ${colors.border} ${colors.bg}`}>
        <div className="flex items-start gap-5">
          <div className="text-6xl">{module.icon}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-white mb-2">{module.title}</h1>
            <p className="text-gray-300 leading-relaxed">{module.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>{module.lessons.length} lessons</span>
              <span>·</span>
              <span>{completedCount} completed</span>
            </div>
          </div>
        </div>

        {completedCount > 0 && (
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Module Progress</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} color={pbColor[module.color]} />
          </div>
        )}
      </div>

      {/* Lessons */}
      <div className="space-y-4">
        {module.lessons.map((lesson, idx) => {
          const done = completedLessons.includes(lesson.id);
          return (
            <Link
              key={lesson.id}
              href={`/courses/${module.id}/${lesson.id}`}
              className="group flex items-start gap-5 p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-gray-600 transition-all hover:shadow-xl"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors ${done ? "bg-green-600 text-white" : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"}`}>
                {done ? "✓" : idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{lesson.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{lesson.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span>{lesson.duration}</span>
                  <span>·</span>
                  <span>{lesson.quiz.length} quiz questions</span>
                  <span>·</span>
                  <span>{lesson.sections.length} sections</span>
                </div>
              </div>
              <div className={`shrink-0 mt-1 text-lg group-hover:translate-x-1 transition-transform ${colors.text}`}>→</div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10">
        <Link href="/courses" className="text-gray-400 hover:text-white text-sm transition-colors">
          ← Back to all courses
        </Link>
      </div>
    </div>
  );
}
