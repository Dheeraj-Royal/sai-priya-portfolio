import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Hook for scroll-based parallax effects
 * @param {number} offset - The multiplier for parallax offset (0-1 recommended)
 * @returns {object} - ref and style for parallax effect
 */
export const useParallax = (offset = 0.5) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * offset);
  return { ref, y };
};

/**
 * Common animation variants for sections
 */
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: "some",
};
