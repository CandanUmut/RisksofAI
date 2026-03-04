"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { modules, badges, type Module, type Lesson } from "@/lib/courses";
import { getProgress, markLessonComplete, saveQuizScore, earnBadge } from "@/lib/progress";
import QuizSection from "@/components/QuizSection";

interface Props {
  module: Module;
  lesson: Lesson;
  moduleId: string;
  lessonId: string;
}

export default function LessonClient({ module, lesson, moduleId, lessonId }: Props) {
  const [activeSection, setActiveSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonDone, setLessonDone] = useState(false);
  const [newBadge, setNewBadge] = useState<typeof badges[0] | null>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    const p = getProgress();
    if (p.completedLessons.includes(lessonId)) {
      setLessonDone(true);
      setShowQuiz(true);
      if (p.quizScores[lessonId] !== undefined) {
        setQuizScore(p.quizScores[lessonId]);
      }
    }
  }, [lessonId]);

  const handleQuizComplete = useCallback((score: number) => {
    setQuizScore(score);
    let progress = markLessonComplete(lessonId);
    progress = saveQuizScore(lessonId, score);
    setLessonDone(true);

    const allModuleLessonIds = module.lessons.map((l) => l.id);
    const allDone = allModuleLessonIds.every((id) => progress.completedLessons.includes(id));
    if (allDone) {
      progress = earnBadge(module.badgeId);
      const earnedBadge = badges.find((b) => b.id === module.badgeId);
      if (earnedBadge) setNewBadge(earnedBadge);

      const allModulesDone = modules.every((m) =>
        m.lessons.every((l) => progress.completedLessons.includes(l.id))
      );
      if (allModulesDone) earnBadge("master-badge");
    }
  }, [lessonId, module]);

  const currentLessonIdx = module.lessons.findIndex((l) => l.id === lessonId);
  const nextLesson = module.lessons[currentLessonIdx + 1];
  const nextModule = !nextLesson ? modules[modules.findIndex((m) => m.id === moduleId) + 1] : null;

  const colorMap: Record<string, { text: string; border: string; bg: string; highlight: string }> = {
    blue: { text: "text-blue-400", border: "border-blue-800", bg: "bg-blue-950/50", highlight: "border-l-blue-500 bg-blue-950/30" },
    red: { text: "text-red-400", border: "border-red-800", bg: "bg-red-950/50", highlight: "border-l-red-500 bg-red-950/30" },
    purple: { text: "text-purple-400", border: "border-purple-800", bg: "bg-purple-950/50", highlight: "border-l-purple-500 bg-purple-950/30" },
    green: { text: "text-green-400", border: "border-green-800", bg: "bg-green-950/50", highlight: "border-l-green-500 bg-green-950/30" },
  };

  const colors = colorMap[module.color] ?? colorMap.blue;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Badge celebration overlay */}
      {newBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setNewBadge(null)}
        >
          <div className="bg-gray-900 border border-yellow-500/50 rounded-3xl p-10 text-center max-w-sm mx-4 shadow-2xl">
            <div className="text-8xl mb-4 animate-float">{newBadge.icon}</div>
            <div className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2">Badge Earned!</div>
            <h2 className="text-2xl font-bold text-white mb-2">{newBadge.name}</h2>
            <p className="text-gray-400 text-sm mb-6">{newBadge.description}</p>
            <button
              onClick={() => setNewBadge(null)}
              className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-colors"
            >
              Awesome! →
            </button>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 flex-wrap">
        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
        <span>/</span>
        <Link href={`/courses/${moduleId}`} className="hover:text-white transition-colors">{module.title}</Link>
        <span>/</span>
        <span className="text-gray-300 truncate">{lesson.title}</span>
      </div>

      {/* Lesson header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{module.title}</div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{lesson.title}</h1>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">{lesson.description}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 flex-wrap">
          <span>{lesson.duration}</span>
          <span>·</span>
          <span>{lesson.sections.length} sections</span>
          <span>·</span>
          <span>{lesson.quiz.length} quiz questions</span>
          {lessonDone && <span className="text-green-400 font-medium">✓ Completed</span>}
        </div>
      </div>

      {/* Section navigation tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {lesson.sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveSection(idx); setShowQuiz(false); }}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${!showQuiz && activeSection === idx ? `${colors.bg} ${colors.text} border ${colors.border}` : "bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800"}`}
          >
            {idx + 1}. {section.title.split(":")[0].split(" ").slice(0, 3).join(" ")}
          </button>
        ))}
        <button
          onClick={() => setShowQuiz(true)}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${showQuiz ? "bg-blue-900/50 text-blue-300 border border-blue-700" : "bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800"}`}
        >
          Quiz
        </button>
      </div>

      {/* Section content */}
      {!showQuiz && (
        <div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">
              {lesson.sections[activeSection].title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              {lesson.sections[activeSection].content}
            </p>
            {lesson.sections[activeSection].highlight && (
              <div className={`mt-5 border-l-4 pl-4 py-2 rounded-r-lg ${colors.highlight}`}>
                <p className={`font-semibold text-sm ${colors.text}`}>
                  {lesson.sections[activeSection].highlight}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveSection((s) => Math.max(0, s - 1))}
              disabled={activeSection === 0}
              className="px-4 py-2 bg-gray-900 border border-gray-700 text-gray-400 rounded-xl text-sm disabled:opacity-40 hover:bg-gray-800 transition-colors"
            >
              ← Previous
            </button>

            {activeSection < lesson.sections.length - 1 ? (
              <button
                onClick={() => setActiveSection((s) => s + 1)}
                className="px-6 py-2 rounded-xl font-semibold text-sm transition-all text-white bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                Next Section →
              </button>
            ) : (
              <button
                onClick={() => setShowQuiz(true)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Take Quiz →
              </button>
            )}
          </div>

          {/* Key takeaways */}
          <div className="mt-8 bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 text-sm">Key Takeaways</h3>
            <ul className="space-y-2">
              {lesson.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className={`mt-0.5 ${colors.text}`}>✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Quiz section */}
      {showQuiz && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Knowledge Check</h2>
            {lessonDone && quizScore !== null && (
              <span className="text-sm text-green-400 font-medium">Previous score: {quizScore}%</span>
            )}
          </div>
          <QuizSection
            questions={lesson.quiz}
            lessonId={lessonId}
            onComplete={handleQuizComplete}
          />
        </div>
      )}

      {/* After completion */}
      {lessonDone && (
        <div className="mt-8 bg-green-950/30 border border-green-800/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎉</span>
            <div>
              <h3 className="font-bold text-white">Lesson Complete!</h3>
              <p className="text-gray-400 text-sm">Ready for the next one?</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {nextLesson ? (
              <Link
                href={`/courses/${moduleId}/${nextLesson.id}`}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Next: {nextLesson.title} →
              </Link>
            ) : nextModule ? (
              <Link
                href={`/courses/${nextModule.id}`}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Next Module: {nextModule.title} →
              </Link>
            ) : (
              <Link
                href="/badges"
                className="px-5 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                View Your Badges 🏆
              </Link>
            )}
            <Link
              href={`/courses/${moduleId}`}
              className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-xl text-sm transition-colors"
            >
              Back to Module
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
