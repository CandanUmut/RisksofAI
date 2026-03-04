import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AIAware — AI Education for Everyone",
  description: "Interactive education platform to understand AI risks, master AI interaction, and prepare for an AI-driven future. Earn badges as you learn.",
  keywords: ["AI education", "artificial intelligence risks", "AI awareness", "AI literacy"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gray-950 text-gray-100 min-h-screen antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="border-t border-gray-800 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🤖</span>
                  <span className="font-bold text-white">AI<span className="text-blue-500">Aware</span></span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering people with the knowledge and skills to navigate an AI-transformed world safely and critically.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Learn</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/courses" className="hover:text-white transition-colors">All Courses</a></li>
                  <li><a href="/badges" className="hover:text-white transition-colors">Earn Badges</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About This Project</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://www.partnershiponai.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Partnership on AI</a></li>
                  <li><a href="https://www.eff.org/ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">EFF on AI</a></li>
                  <li><a href="https://aiforgood.itu.int" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI for Good (ITU)</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
              <p>Built to help humanity prepare for the age of AI. Free and open to all.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
