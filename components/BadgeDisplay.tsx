"use client";

import { clsx } from "clsx";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface BadgeDisplayProps {
  badge: Badge;
  earned: boolean;
  size?: "sm" | "md" | "lg";
}

const colorMap: Record<string, string> = {
  blue: "from-blue-600 to-cyan-500 border-blue-500/50",
  red: "from-red-600 to-orange-500 border-red-500/50",
  purple: "from-purple-600 to-pink-500 border-purple-500/50",
  green: "from-green-600 to-emerald-500 border-green-500/50",
  gold: "from-yellow-500 to-amber-400 border-yellow-500/50",
};

export default function BadgeDisplay({ badge, earned, size = "md" }: BadgeDisplayProps) {
  const sizeClasses = {
    sm: { container: "p-3", icon: "text-2xl", name: "text-xs", desc: "text-xs" },
    md: { container: "p-5", icon: "text-4xl", name: "text-sm", desc: "text-xs" },
    lg: { container: "p-8", icon: "text-6xl", name: "text-base", desc: "text-sm" },
  }[size];

  return (
    <div
      className={clsx(
        "relative rounded-2xl border text-center transition-all duration-300",
        sizeClasses.container,
        earned
          ? `bg-gradient-to-br ${colorMap[badge.color] ?? colorMap.blue} shadow-lg`
          : "bg-gray-900 border-gray-700 opacity-50 grayscale"
      )}
    >
      {!earned && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gray-950/60">
          <span className="text-2xl">🔒</span>
        </div>
      )}
      <div className={clsx("mb-2", sizeClasses.icon)}>{badge.icon}</div>
      <div className={clsx("font-bold text-white mb-1", sizeClasses.name)}>{badge.name}</div>
      <div className={clsx("text-gray-300", sizeClasses.desc)}>{badge.description}</div>
    </div>
  );
}
