export const staggerParentContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeXY = {
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
      duration: 2.5,
    },
  },
};

export const fade = {
  hidden: {
    x: -2,
    opacity: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

export const transitionSettings = {
  duration: 1,
  ease: "easeIn",
  type: "linear",
  bounce: 0.05,
  damping: 20,
  stiffness: 30,
};
