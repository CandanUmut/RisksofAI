import Link from "next/link";
import { modules, getTotalLessons, badges } from "@/lib/courses";

export default function Home() {
  const totalLessons = getTotalLessons();

  const stats = [
    { value: `${modules.length}`, label: "Modules" },
    { value: `${totalLessons}`, label: "Lessons" },
    { value: `${badges.length}`, label: "Badges" },
    { value: "Free", label: "Always" },
  ];

  const features = [
    { icon: "🎓", title: "Structured Learning", desc: "Carefully crafted modules that take you from AI basics to advanced governance concepts." },
    { icon: "🧩", title: "Interactive Quizzes", desc: "Test your knowledge after each lesson with scenario-based questions and instant feedback." },
    { icon: "🏅", title: "Badge System", desc: "Earn badges as you complete modules and demonstrate your AI awareness expertise." },
    { icon: "📱", title: "Learn Anywhere", desc: "Progress saved locally — pick up exactly where you left off, on any device." },
    { icon: "🔒", title: "Privacy First", desc: "No accounts, no tracking. Your progress stays on your device." },
    { icon: "🌍", title: "For Everyone", desc: "No technical background required. Clear, jargon-free explanations for all." }
  ];

  const urgentTopics = [
    { icon: "🎭", topic: "Deepfakes & Synthetic Media", urgency: "Critical" },
    { icon: "⚖️", topic: "Algorithmic Discrimination", urgency: "High" },
    { icon: "👁️", topic: "AI Surveillance", urgency: "High" },
    { icon: "🧠", topic: "AI Manipulation Tactics", urgency: "High" },
    { icon: "💼", topic: "Job Market Transformation", urgency: "Medium" },
    { icon: "🏛️", topic: "AI Governance Crisis", urgency: "Critical" },
  ];

  const urgencyColor: Record<string, string> = {
    Critical: "bg-red-900/50 text-red-400 border-red-800",
    High: "bg-orange-900/50 text-orange-400 border-orange-800",
    Medium: "bg-yellow-900/50 text-yellow-400 border-yellow-800",
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/80 border border-blue-800/50 rounded-full text-blue-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              The AI transformation is happening now
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Understand AI.
              <br />
              <span className="gradient-text">Be Ready.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              AI is reshaping jobs, democracy, privacy, and truth itself. This free, interactive
              education platform gives you the knowledge to navigate what&apos;s coming — and help
              shape it for the better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/courses"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 text-lg"
              >
                Start Learning Free →
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-700 transition-all text-lg"
              >
                Why This Matters
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4">
                  <div className="text-3xl font-extrabold text-white">{value}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gray-950/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Topics You Need to Understand Now</h2>
            <p className="text-gray-400">These AI developments are affecting people today — not in the future.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {urgentTopics.map(({ icon, topic, urgency }) => (
              <div key={topic} className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-800 rounded-xl">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="text-sm font-medium text-white">{topic}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border mt-1 inline-block ${urgencyColor[urgency]}`}>
                    {urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Four Modules. Deep Understanding.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each module builds on the last, creating a complete picture of AI&apos;s impact on your world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/courses/${module.id}`}
                className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{module.icon}</span>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">{module.lessons.length} lessons</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{module.description}</p>
                  <div className="mt-4 text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Start Module →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-950/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Learning That Sticks</h2>
            <p className="text-gray-400 text-lg">Interactive, engaging, and designed for real understanding — not just surface familiarity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-950 to-purple-950 border border-blue-800/50 rounded-3xl p-12">
            <div className="text-5xl mb-6">🌍</div>
            <h2 className="text-4xl font-bold text-white mb-4">The Future Is Being Decided Now</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              AI governance, safety standards, and societal norms are being set right now — by technologists, policymakers, and companies.
              An informed public is the most important check on this process. Start your journey today.
            </p>
            <Link
              href="/courses"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-lg"
            >
              Begin Your AI Education →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
