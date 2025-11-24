import { motion } from "framer-motion";

export default function WavingHand() {
  const waveAnimation = {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transformOrigin: ["70% 70%"],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
    },
  };

  return (
    <motion.span
      animate={waveAnimation}
      className="inline-block text-6xl"
      style={{ display: "inline-block" }}
    >
      👋
    </motion.span>
  );
}
