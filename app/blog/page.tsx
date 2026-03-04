import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  red: { bg: "bg-red-900/40", text: "text-red-400", border: "border-red-800" },
  purple: { bg: "bg-purple-900/40", text: "text-purple-400", border: "border-purple-800" },
  blue: { bg: "bg-blue-900/40", text: "text-blue-400", border: "border-blue-800" },
  green: { bg: "bg-green-900/40", text: "text-green-400", border: "border-green-800" },
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/80 border border-blue-800/50 rounded-full text-blue-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Analysis &amp; Insight
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">The AI Aware Blog</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          In-depth articles on AI risks, psychology, and what every informed citizen should understand about artificial intelligence.
        </p>
      </div>

      {/* Posts */}
      <div className="space-y-8">
        {blogPosts.map((post) => {
          const colors = categoryColors[post.categoryColor] ?? categoryColors.blue;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-5xl shrink-0 mt-1">{post.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-gray-500">·</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">{post.subtitle}</p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read article <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-950/50 border-t border-gray-800 flex items-center gap-2">
                <span className="text-xs text-gray-500">{post.sections.length} sections</span>
                <span className="text-gray-700">·</span>
                <span className="text-xs text-gray-500">{post.keyTakeaways.length} key takeaways</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-br from-blue-950 to-purple-950 border border-blue-800/50 rounded-3xl p-10 text-center">
        <div className="text-4xl mb-4">🎓</div>
        <h2 className="text-2xl font-bold text-white mb-3">Want Structured Learning?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
          These posts go deeper on topics covered in our interactive courses. Take the full curriculum to earn badges and track your progress.
        </p>
        <Link
          href="/courses"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25"
        >
          Explore All Courses →
        </Link>
      </div>
    </div>
  );
}
