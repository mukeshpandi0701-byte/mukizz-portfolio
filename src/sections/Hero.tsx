"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";
import { PERSONAL } from "../constants/portfolio";

/* ─── Atmospheric background grid ──────────────────────────────────────────── */
function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots-dark" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-dark)" />
      </svg>

      {/* Subtle cyan glow — top left, very minimal */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,151,178,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle gold glow — bottom right, whisper only */}
      <div
        className="absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184,146,42,0.03) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}

/* ─── Status indicator with subtle animation ─────────────────────────────── */
function StatusIndicator() {
  const { state, available } = PERSONAL.status;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center gap-2"
    >
      <div className="relative h-2.5 w-2.5">
        <div
          className="absolute inset-0 rounded-full bg-cyan-400"
          style={{
            boxShadow: "0 0 8px rgba(0, 200, 220, 0.4)",
          }}
        />
        {available && (
          <div
            className="absolute inset-0 rounded-full bg-cyan-400 animate-breathe"
            style={{
              boxShadow: "0 0 12px rgba(0, 200, 220, 0.3)",
            }}
          />
        )}
      </div>
      <span className="text-sm font-medium text-text-secondary">{state}</span>
    </motion.div>
  );
}

/* ─── Current focus panel ──────────────────────────────────────────────────── */
function CurrentFocusPanel() {
  const { label, project, description } = PERSONAL.currentFocus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="glass rounded-lg p-4"
    >
      <div className="text-xs font-semibold tracking-wide text-text-muted mb-2">
        {label.toUpperCase()}
      </div>
      <h3 className="font-semibold text-text-primary mb-1">{project}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </motion.div>
  );
}

/* ─── Minimal terminal snippet ─────────────────────────────────────────────── */
function TerminalSnippet() {
  const codeLines = [
    '$ npm run build',
    '> Building Shipzilla v2.1.0...',
    '✓ 142 files compiled',
    '✓ Ready to ship',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glass rounded-lg p-4 font-mono text-xs"
    >
      <div className="space-y-1.5 text-text-secondary">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            {line.startsWith("$") && (
              <span className="text-cyan mr-2">{line.substring(0, 1)}</span>
            )}
            {line.startsWith("✓") && (
              <span className="text-cyan mr-2">✓</span>
            )}
            {line.startsWith(">") && (
              <span className="text-gold mr-2">&gt;</span>
            )}
            <span className={line.startsWith("✓") ? "text-cyan" : ""}>
              {line.replace(/^[$>✓]\s?/, "")}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Scroll indicator ─────────────────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="flex justify-center pt-8"
    >
      <ArrowDown className="h-5 w-5 text-text-muted opacity-50" />
    </motion.div>
  );
}

/* ─── Main Hero Section ──────────────────────────────────────────────────── */
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundGrid />

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* ─── LEFT SIDE: Typography + CTAs ───────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Name — premium gradient */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-hero block">Mukesh Pandi</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-text-secondary font-medium">
                {PERSONAL.tagline}
              </p>
              <p className="text-sm md:text-base text-text-muted mt-3 max-w-md leading-relaxed">
                {PERSONAL.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-white font-medium transition-all hover:bg-cyan-light focus-visible:outline-2 focus-visible:outline-cyan"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg surface-elevated font-medium text-text-primary transition-all hover:border-cyan hover:border hover:surface-elevated focus-visible:outline-2 focus-visible:outline-cyan"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT SIDE: Technical Composition ──────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <StatusIndicator />
            <CurrentFocusPanel />
            <TerminalSnippet />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
}
