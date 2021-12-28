export const animaHome = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      delay: 1,
    },
  },
};

export const animaDelayI = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 3,
    },
  },
};

export const animaDelayII = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const animaContainer = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export const animaItems = {
  hidden: { y: 20, x: 200, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const animaSubItems = {
  hidden: { y: 20, x: 200, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const animaLine = {
  hidden: { height: 2.5, opacity: 0 },
  visible: {
    height: '120px',
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};
