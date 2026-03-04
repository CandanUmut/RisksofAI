"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { QuizQuestion } from "@/lib/courses";

interface QuizSectionProps {
  questions: QuizQuestion[];
  lessonId: string;
  onComplete: (score: number) => void;
}

export default function QuizSection({ questions, onComplete }: QuizSectionProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === q.correctIndex;
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      const finalScore = answers.filter(Boolean).length + (selected === q.correctIndex ? 1 : 0);
      setFinished(true);
      onComplete(Math.round((finalScore / questions.length) * 100));
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">
          {pct === 100 ? "🏆" : pct >= 66 ? "⭐" : "📚"}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Quiz Complete!
        </h3>
        <p className="text-gray-400 mb-6">
          You scored <span className="text-white font-bold">{score}/{questions.length}</span> ({pct}%)
        </p>
        <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
          <div
            className={clsx(
              "h-3 rounded-full transition-all duration-1000",
              pct === 100 ? "bg-yellow-500" : pct >= 66 ? "bg-green-500" : "bg-blue-500"
            )}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-gray-300 text-sm">
          {pct === 100
            ? "Perfect score! You've mastered this lesson."
            : pct >= 66
            ? "Great job! You have a solid understanding."
            : "Keep learning — review the lesson and try again!"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-400">
          Question {currentQ + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={clsx(
                "h-1.5 w-8 rounded-full transition-colors",
                i < currentQ
                  ? answers[i] ? "bg-green-500" : "bg-red-500"
                  : i === currentQ
                  ? "bg-blue-500"
                  : "bg-gray-700"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-5">{q.question}</h3>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={clsx(
              "w-full text-left px-4 py-3 rounded-xl border transition-all text-sm",
              submitted
                ? idx === q.correctIndex
                  ? "bg-green-900/50 border-green-500 text-green-300"
                  : idx === selected && idx !== q.correctIndex
                  ? "bg-red-900/50 border-red-500 text-red-300"
                  : "bg-gray-900 border-gray-700 text-gray-500"
                : selected === idx
                ? "bg-blue-900/50 border-blue-500 text-blue-300"
                : "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800"
            )}
          >
            <span className="font-mono text-xs mr-3 opacity-60">
              {String.fromCharCode(65 + idx)}.
            </span>
            {opt}
          </button>
        ))}
      </div>

      {submitted && (
        <div className={clsx(
          "p-4 rounded-xl mb-5 text-sm",
          selected === q.correctIndex
            ? "bg-green-900/30 border border-green-700 text-green-300"
            : "bg-red-900/30 border border-red-700 text-red-300"
        )}>
          <span className="font-semibold mr-2">
            {selected === q.correctIndex ? "✓ Correct!" : "✗ Incorrect."}
          </span>
          {q.explanation}
        </div>
      )}

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
