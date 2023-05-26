export const animationStaggerFadeIn = {
  start: { opacity: 0, y: 5 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.25,
      delayChildren: 0.15,
      staggerChildren: 0.15,
    },
  },
};
