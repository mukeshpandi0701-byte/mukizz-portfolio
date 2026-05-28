/**
 * Framer Motion Variants & Animation Utilities
 * Premium cinematic motion system for the portfolio
 */

import { Variants } from "framer-motion";

/* ─── Timing Functions ──────────────────────────────────────────────────── */
export const timing = {
  // Cubic bezier curves for premium feel
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",    // Smooth deceleration
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",   // Smooth both ends
  spring: {
    gentle: { type: "spring", stiffness: 100, damping: 15 },
    responsive: { type: "spring", stiffness: 300, damping: 30 },
    bouncy: { type: "spring", stiffness: 400, damping: 10 },
  },
};

/* ─── Container Animations ──────────────────────────────────────────────── */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      duration: 0.3,
    },
  },
};

export const containerVariantsLoose = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      duration: 0.4,
    },
  },
};

/* ─── Item Animations — Fade In ───────────────────────────────────────── */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/* ─── Scale Animations ──────────────────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleInSlow: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

/* ─── Hover Effects — Buttons & Interactive ────────────────────────────── */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: timing.spring.responsive,
};

export const hoverElevate = {
  whileHover: { y: -4 },
  whileTap: { y: 0 },
  transition: { duration: 0.2 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(0, 200, 220, 0.3)",
  },
  transition: { duration: 0.3 },
};

/* ─── Card Hover Effects ────────────────────────────────────────────────── */
export const cardHover = {
  whileHover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 151, 178, 0.15)",
  },
  transition: { duration: 0.3 },
};

export const cardTilt = {
  whileHover: { rotateX: 5, rotateY: -5, z: 100 },
  style: { perspective: 1000 },
  transition: timing.spring.responsive,
};

/* ─── Floating Animation ────────────────────────────────────────────────── */
export const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingVariantsOffset = (delay: number): Variants => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

/* ─── Parallax Variants ────────────────────────────────────────────────── */
export const parallaxVariants = (offset: number): Variants => ({
  animate: {
    y: [0, offset, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

/* ─── Pulse/Breathing Animation ────────────────────────────────────────── */
export const breatheVariants: Variants = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ─── Shimmer/Glow Animation ────────────────────────────────────────────── */
export const shimmerVariants: Variants = {
  animate: {
    backgroundPosition: ["200% center", "-200% center"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* ─── Text Stagger Animation ────────────────────────────────────────────── */
export const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const textCharVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

/* ─── Page Transition ────────────────────────────────────────────────────── */
export const pageEnterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0 },
};

/* ─── Stagger Grid Animation ────────────────────────────────────────────── */
export const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

/* ─── List Item Animation ────────────────────────────────────────────────── */
export const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

/* ─── Header Scroll Animation ────────────────────────────────────────────── */
export const headerScrollVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: { y: -100, opacity: 0 },
};

/* ─── Section Divider Animation ────────────────────────────────────────── */
export const dividerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

/* ─── Loading Skeleton ──────────────────────────────────────────────────── */
export const skeletonVariants: Variants = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* ─── Badge/Chip Animation ──────────────────────────────────────────────── */
export const badgeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

/* ─── Spotlight/Reveal Animation ────────────────────────────────────────── */
export const spotlightVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

/* ─── Utility Function: Stagger Helper ──────────────────────────────────── */
export const createStaggerVariants = (
  staggerDelay: number = 0.08,
  delayChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/* ─── Utility Function: Delay Helper ────────────────────────────────────── */
export const withDelay = (
  duration: number = 0.6,
  delay: number = 0
) => ({
  duration,
  delay,
});
