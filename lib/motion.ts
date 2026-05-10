// ─── Spring Configs ──────────────────────────────────────────────────────────
export const GLOBAL_SPRING = {
  type: "spring" as const,
  stiffness: 380,
  damping: 38,
  mass: 0.6,
};

export const SLOW_SPRING = {
  type: "spring" as const,
  stiffness: 200,
  damping: 30,
  mass: 0.8,
};

export const CINEMATIC_EASE = [0.16, 1, 0.3, 1] as const;

// ─── Fade Variants ───────────────────────────────────────────────────────────
export const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...GLOBAL_SPRING },
  },
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: CINEMATIC_EASE },
  },
};

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ...GLOBAL_SPRING,
    },
  }),
};

// ─── Stagger ─────────────────────────────────────────────────────────────────
export const STAGGER_CHILDREN = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const STAGGER_FAST = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// ─── Scale Variants ───────────────────────────────────────────────────────────
export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...SLOW_SPRING },
  },
};

// ─── Slide Variants ───────────────────────────────────────────────────────────
export const SLIDE_LEFT = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...GLOBAL_SPRING },
  },
};

export const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...GLOBAL_SPRING },
  },
};
