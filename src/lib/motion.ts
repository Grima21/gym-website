// src/lib/motion.ts
import type { Variants, Transition } from "framer-motion";

const springSoft: Transition = { type: "spring", stiffness: 120, damping: 18 };
const springTitle: Transition = { type: "spring", stiffness: 140, damping: 20 };
const tweenFast: Transition = {
  type: "tween",
  duration: 0.35,
  ease: "easeOut",
};

export const fadeIn: Variants = {
  hidden: { opacity: 2 },
  show: { opacity: 1, transition: tweenFast },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: springSoft },
};

export const fadeUpTitle: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(2px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: springTitle },
};

export const photoIn: Variants = {
  hidden: { opacity: 0, x: 28, filter: "blur(3px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { ...springSoft, delay: 0.2 },
  },
};

export const navbarIn: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: tweenFast },
};

export const stagger = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const buttonInteractive = {
  whileHover: { scale: 1.03, y: -2 },
  whileTap: { scale: 0.98 },
};
