import Link from "next/link";

export default function AboutPage() {
  const keyFacts = [
    { stat: "300M+", label: "Jobs potentially disrupted by AI in the next decade", source: "Goldman Sachs Research" },
    { stat: "82%", label: "Of executives plan to accelerate AI adoption", source: "IBM Institute for Business Value" },
    { stat: "$25M", label: "Lost in a single deepfake video call fraud case (2024)", source: "Hong Kong Police" },
    { stat: "2x", label: "Higher false positive rate for Black defendants in COMPAS AI", source: "ProPublica Analysis" },
  ];

  const timeline = [
    { year: "2022", event: "ChatGPT launches — 1M users in 5 days; marks AI entering mainstream consciousness" },
    { year: "2023", event: "AI-generated content floods the internet; major platforms struggle to differentiate real from synthetic" },
    { year: "2024", event: "Deepfake fraud reaches new scale; AI takes over routine cognitive tasks in law, finance, and medicine" },
    { year: "2025", event: "EU AI Act takes full effect; first major binding AI regulation globally. AI agents begin operating autonomously" },
    { year: "2026+", event: "AI systems increasingly autonomous; governance gaps become critical; informed citizens are essential" },
  ];

  const principles = [
    { icon: "🎯", title: "Accuracy Over Alarm", desc: "We present documented facts, not speculation. AI risks are real enough without exaggeration." },
    { icon: "⚖️", title: "Balanced Perspective", desc: "AI brings genuine benefits alongside risks. We aim for nuance, not technophobia or uncritical enthusiasm." },
    { icon: "🔓", title: "Open Access", desc: "This education should be available to everyone, regardless of background or resources. Always free." },
    { icon: "🔄", title: "Living Content", desc: "AI is moving fast. We commit to updating content as the landscape evolves." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">🌍</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Why This Project Exists
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
          We are living through one of the most significant technological transitions in human history.
          Most people are not prepared. We think that needs to change.
        </p>
      </div>

      {/* The Problem */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-5">The Problem</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Artificial intelligence is being deployed in consequential decisions about your healthcare,
            finances, employment, and the information you see — right now. Yet most people have little
            understanding of how these systems work, what their limitations are, or what rights they have
            when AI makes decisions about them.
          </p>
          <p>
            Meanwhile, the governance of AI — who controls it, how it&apos;s regulated, whose values it
            encodes — is being decided in corporate boardrooms and government ministries with minimal
            public input. An uninformed public cannot meaningfully participate in these decisions.
          </p>
          <p className="font-semibold text-white">
            The goal of this project is to change that — one person at a time.
          </p>
        </div>
      </div>

      {/* Key Facts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Why Urgency Matters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keyFacts.map(({ stat, label, source }) => (
            <div key={stat} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">{stat}</div>
              <div className="text-white font-medium text-sm mb-2">{label}</div>
              <div className="text-gray-500 text-xs">Source: {source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The AI Acceleration Timeline</h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-800"></div>
          <div className="space-y-6">
            {timeline.map(({ year, event }) => (
              <div key={year} className="flex gap-4 items-start">
                <div className="w-14 shrink-0 text-right text-sm font-bold text-blue-400">{year}</div>
                <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-950 shrink-0 mt-0.5 z-10"></div>
                <div className="flex-1 pb-2">
                  <p className="text-gray-300 text-sm leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Principles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Editorial Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {principles.map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What You Can Do */}
      <div className="bg-gradient-to-br from-blue-950 to-purple-950 border border-blue-800/50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-5">What You Can Do</h2>
        <ul className="space-y-4">
          {[
            { icon: "📚", action: "Complete the courses on this platform", detail: "Knowledge is the foundation of everything else." },
            { icon: "🗣️", action: "Share what you learn", detail: "Send this to friends, family, coworkers. AI literacy needs to spread fast." },
            { icon: "🗳️", action: "Engage with AI governance", detail: "Contact your representatives. Many AI policies are being decided right now." },
            { icon: "🔍", action: "Practice critical evaluation", detail: "Apply what you learn every day when consuming information online." },
            { icon: "🤝", action: "Support AI safety organizations", detail: "Organizations working on beneficial AI need public support and visibility." },
          ].map(({ icon, action, detail }) => (
            <li key={action} className="flex items-start gap-3">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <div className="font-semibold text-white">{action}</div>
                <div className="text-gray-400 text-sm">{detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* External resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Further Reading</h2>
        <div className="space-y-3">
          {[
            { name: "AI Now Institute", url: "https://ainowinstitute.org", desc: "Research on social implications of AI" },
            { name: "Partnership on AI", url: "https://partnershiponai.org", desc: "Multi-stakeholder AI governance research" },
            { name: "Electronic Frontier Foundation — AI", url: "https://www.eff.org/ai", desc: "Civil liberties in the age of AI" },
            { name: "Future of Life Institute", url: "https://futureoflife.org", desc: "AI risk research and policy" },
            { name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf", desc: "US government AI risk management guide" },
          ].map(({ name, url, desc }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-all group"
            >
              <div className="flex-1">
                <div className="font-medium text-white group-hover:text-blue-400 transition-colors">{name}</div>
                <div className="text-gray-500 text-sm">{desc}</div>
              </div>
              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/courses"
          className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-lg"
        >
          Start Learning Now →
        </Link>
      </div>
    </div>
  );
}
