import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const categoryColors: Record<string, { bg: string; text: string; border: string; highlight: string }> = {
  red: { bg: "bg-red-900/40", text: "text-red-400", border: "border-red-800", highlight: "border-l-red-500 bg-red-950/30" },
  purple: { bg: "bg-purple-900/40", text: "text-purple-400", border: "border-purple-800", highlight: "border-l-purple-500 bg-purple-950/30" },
  blue: { bg: "bg-blue-900/40", text: "text-blue-400", border: "border-blue-800", highlight: "border-l-blue-500 bg-blue-950/30" },
  green: { bg: "bg-green-900/40", text: "text-green-400", border: "border-green-800", highlight: "border-l-green-500 bg-green-950/30" },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const colors = categoryColors[post.categoryColor] ?? categoryColors.blue;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-300 truncate">{post.title}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.date}</span>
          <span className="text-gray-700">·</span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl shrink-0">{post.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">{post.title}</h1>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-gray-600 pl-5 italic">
          {post.subtitle}
        </p>
      </div>

      {/* Summary */}
      <div className={`rounded-2xl border p-6 mb-10 ${colors.border} ${colors.bg}`}>
        <h2 className={`text-xs font-bold uppercase tracking-widest mb-2 ${colors.text}`}>Overview</h2>
        <p className="text-gray-200 leading-relaxed">{post.summary}</p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {post.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-white mb-4 leading-snug">{section.heading}</h2>
            <p className="text-gray-300 leading-relaxed text-base">{section.content}</p>
            {section.highlight && (
              <div className={`mt-5 border-l-4 pl-5 py-3 rounded-r-xl ${colors.highlight}`}>
                <p className={`font-semibold text-sm leading-relaxed ${colors.text}`}>{section.highlight}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="mt-12 bg-gray-900 border border-gray-700 rounded-2xl p-7">
        <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span>✅</span> Key Takeaways
        </h2>
        <ul className="space-y-3">
          {post.keyTakeaways.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className={`mt-0.5 font-bold shrink-0 ${colors.text}`}>✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
        >
          ← All articles
        </Link>
        <Link
          href="/courses"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-colors"
        >
          Take the full course →
        </Link>
      </div>

      {/* Other posts */}
      {blogPosts.filter((p) => p.slug !== post.slug).length > 0 && (
        <div className="mt-14 border-t border-gray-800 pt-10">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">More Articles</h3>
          <div className="space-y-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .map((p) => {
                const c = categoryColors[p.categoryColor] ?? categoryColors.blue;
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex items-start gap-4 p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-all group"
                  >
                    <span className="text-3xl shrink-0">{p.icon}</span>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${c.bg} ${c.text} ${c.border} mb-2 inline-block`}>
                        {p.category}
                      </span>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors leading-snug">{p.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{p.readTime}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
