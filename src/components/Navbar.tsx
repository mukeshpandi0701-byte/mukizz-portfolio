"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "../constants/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 pt-4"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        <nav
          className="flex w-full max-w-3xl items-center justify-between rounded-xl px-6 py-3 transition-all duration-300"
          style={{
            background: scrolled
              ? "rgba(27, 33, 56, 0.7)"
              : "rgba(20, 24, 39, 0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: scrolled
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Wordmark */}
          <a
            href="#hero"
            className="font-mono text-sm font-bold tracking-widest uppercase select-none text-text-primary"
          >
            {PERSONAL.alias}
            <span className="text-gold opacity-60">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary transition-colors hover:text-text-primary relative group"
              >
                {link.label}
                {active === link.label && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-lg bg-cyan opacity-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Social links — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={PERSONAL.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-cyan transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={PERSONAL.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.044-8.789 0-9.707h3.554v1.375c.427-.659 1.19-1.597 2.898-1.597 2.117 0 3.704 1.385 3.704 4.362v5.567zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.953.77-1.71 1.958-1.71 1.187 0 1.915.757 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.645h3.203v10.807zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-5 right-5 z-40 glass rounded-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-cyan/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border-subtle pt-4 flex gap-4">
                <a
                  href={PERSONAL.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-cyan transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={PERSONAL.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-cyan transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.044-8.789 0-9.707h3.554v1.375c.427-.659 1.19-1.597 2.898-1.597 2.117 0 3.704 1.385 3.704 4.362v5.567zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.953.77-1.71 1.958-1.71 1.187 0 1.915.757 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.645h3.203v10.807zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
