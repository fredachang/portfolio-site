export const staggerParentContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      // delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const fadeX = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "linear",
      ease: "easeIn",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "linear",
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

export const fadeXYWithDelay = {
  hidden: {
    opacity: 0,
    x: -10,
    y: -10,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

export const carouselFade = {
  hidden: {
    opacity: 0.8,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      ease: "linear",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

export const primaryTransition = {
  // duration: 0.2,
  ease: "easeInOut",
  type: "spring",
  bounce: 0.05,
  damping: 20,
  stiffness: 60,
};

export const moveUpWhileHover = {
  y: -12,
  transition: { type: "spring", duration: 0.4 },
};

export const moveLeftWhileHover = {
  x: -8,
  transition: { type: "spring", duration: 0.5 },
};
