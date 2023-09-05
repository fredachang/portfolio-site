export const staggerParentContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      // delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const fadeX = (distance: number, duration: number) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: duration,
    },
  },
});

export const fadeXWithDelay = (
  distance: number,
  duration: number,
  delay: number
) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: duration,
      delay: delay,
    },
  },
});

export const fadeRightWithDelay = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0,
    },
  },
};

export const fade = (
  enterDuration: number,
  exitDuration: number,
  delay: number
) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: enterDuration,
      ease: "easeOut",
      delay: delay,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: exitDuration,
      ease: "linear",
    },
  },
});

export const fadeUp = (distance: number, duration: number) => ({
  hidden: {
    opacity: 1,
    y: distance,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: duration,
    },
  },
});

export const fadeDown = (distance: number, duration: number) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: duration,
    },
  },
});

export const primaryTransition = {
  // duration: 0.2,
  ease: "easeInOut",
  type: "spring",
  bounce: 0.05,
  damping: 20,
  stiffness: 60,
};

export const hoverTransition = {
  // duration: 0.2,
  ease: "easeInOut",
  type: "linear",
  bounce: 0.05,
  damping: 10,
  stiffness: 20,
};

export const headerTransition = {
  duration: 2,
  ease: "easeInOut",
  type: "linear",
};

export const moveUpWhileHover = {
  y: -6,
  transition: { type: "spring", duration: 0.7 },
};

export const moveLeftWhileHover = {
  x: -8,
  transition: { type: "spring", duration: 0.5 },
};

export const moveRightWhileHover = {
  x: 8,
  transition: { type: "spring", duration: 0.5 },
};

export const rotate = {
  rotate: 180,
  transition: { ease: "easeInOut", type: "spring", duration: 3 },
};

export const scaleUp = {
  scale: 1.2,
  transition: { ease: "easeInOut", type: "spring", duration: 0.5 },
};
