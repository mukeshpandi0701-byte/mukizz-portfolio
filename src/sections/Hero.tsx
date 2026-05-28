"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { PERSONAL } from "../constants/portfolio";
import {
  containerVariantsLoose,
  fadeInUp,
  fadeInRight,
  scaleIn,
  floatingVariantsOffset,
  cardHover,
} from "../lib/motion";

/* ─── Animated Background Grid ──────────────────────────────────────────── */
function AnimatedBackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layered dots grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots-premium" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.8" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-premium)" />
      </svg>

      {/* Cyan radial light — top left */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(0,151,178,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gold radial light — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(184,146,42,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette pointer-events-none" />
    </div>
  );
}

/* ─── Floating Status Badge ────────────────────────────────────────────── */
function StatusBadge() {
  const { state, available } = PERSONAL.status;

  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-2 w-fit"
    >
      <div className="relative h-3 w-3">
        <div
          className="absolute inset-0 rounded-full bg-cyan"
          style={{
            boxShadow: "0 0 12px rgba(0, 200, 220, 0.5)",
          }}
        />
        {available && (
          <div
            className="absolute inset-0 rounded-full bg-cyan animate-pulse"
            style={{
              boxShadow: "0 0 16px rgba(0, 200, 220, 0.4)",
            }}
          />
        )}
      </div>
      <span className="text-sm font-medium text-text-secondary">{state}</span>
    </motion.div>
  );
}

/* ─── Premium Glass Panel — Current Focus ───────────────────────────────── */
function CurrentFocusPanel() {
  const { label, project, description } = PERSONAL.currentFocus;

  return (
    <motion.div
      variants={cardHover}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(0, 151, 178, 0.2)",
      }}
      className="glass-dark rounded-lg p-5 border border-cyan-border backdrop-blur-lg"
    >
      <div className="text-xs font-bold tracking-widest text-gold mb-2">
        {label}
      </div>
      <h3 className="font-semibold text-text-primary mb-2 text-sm">{project}</h3>
      <p className="text-xs text-text-muted leading-relaxed">{description}</p>

      {/* Accent line */}
      <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-cyan to-transparent" />
    </motion.div>
  );
}

/* ─── Premium Glass Panel — Terminal Snippet ───────────────────────────── */
function TerminalSnippet() {
  const codeLines = [
    { prefix: "$", text: "npm run build", color: "cyan" },
    { prefix: ">", text: "Building next-gen AI platform...", color: "gold" },
    { prefix: "✓", text: "Shipped 2 products", color: "cyan" },
    { prefix: "✓", text: "Ready for next challenge", color: "cyan" },
  ];

  return (
    <motion.div
      variants={cardHover}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(0, 151, 178, 0.15)",
      }}
      className="glass-dark rounded-lg p-5 border border-cyan-border font-mono text-xs backdrop-blur-lg"
    >
      <div className="space-y-2 text-text-secondary">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex gap-2"
          >
            <span className={line.color === "cyan" ? "text-cyan" : "text-gold"}>
              {line.prefix}
            </span>
            <span className={line.color === "cyan" ? "text-cyan-light" : "text-white"}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
/* ─── Floating Tech Badge ────────────────────────────────────────────────── */
function FloatingTechBadge({ tech, delay }: { tech: string; delay: number }) {
  return (
    <motion.div
      variants={floatingVariantsOffset(delay)}
      className="glass-light rounded-full px-3 py-1.5 border border-border-subtle text-xs font-medium text-text-secondary"
    >
      {tech}
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero Section"
      role="banner"
    >
      <BackgroundGrid />

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12">
        {/* Container with min-height to prevent layout shift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[600px]">
          {/* ─── LEFT SIDE: Typography + CTAs ───────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-hero block">{PERSONAL.name}</span>
              </h1>
            </motion.div>

            {/* Subheading & Bio */}
            <motion.div variants={itemVariants}>
              <h2 className="text-lg md:text-xl text-text-secondary font-medium">{PERSONAL.tagline}</h2>
              <p className="text-sm md:text-base text-text-muted mt-3 max-w-md leading-relaxed">
                {PERSONAL.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.nav variants={itemVariants} className="flex gap-4 pt-4" aria-label="Hero Actions">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-white font-medium transition-all hover:bg-cyan-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                aria-label="View my projects"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg surface-elevated font-medium text-text-primary transition-all hover:border-cyan hover:border hover:surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                aria-label={`Send me an email at ${PERSONAL.email}`}
              >
                Get In Touch
              </a>
            </motion.nav>
          </motion.div>

          {/* ─── RIGHT SIDE: Technical Composition ──────────────────────────── */}
          <motion.aside
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col gap-6"
            aria-label="Developer Status and Activity"
          >
            <StatusIndicator />
            <CurrentFocusPanel />
            <TerminalSnippet />
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        {mounted && <ScrollIndicator />}
      </div>
    </section>
  );
}
