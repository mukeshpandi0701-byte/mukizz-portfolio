import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-3 focus:rounded-lg focus:bg-cyan focus:text-white focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Hero Section */}
        <article className="w-full">
          <Hero />
        </article>

        {/* Sections will be added incrementally */}
        {/* 
          Future sections:
          - About/Skills
          - Projects/Portfolio
          - Experience/Timeline
          - Contact
        */}
      </main>

      {/* Footer with structured data and links */}
      <footer className="mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Brand */}
            <div>
              <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-[var(--text-primary)]">
                Mukesh Pandi
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] max-w-xs">
                Building ambitious products at the intersection of web and AI.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#projects"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <nav aria-label="Social Media Links">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://github.com/mukeshpandi0701-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                    aria-label="GitHub Profile"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/mukesh-pandi-a269bb396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
            <p className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} Mukesh Pandi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
