import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CurtainReveal({ children }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Start the reveal animation after a short delay
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const curtainVariants = {
    initial: { scaleX: 1 },
    revealed: { scaleX: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const monkeyVariants = {
    initial: { x: 0, y: 0, opacity: 1, rotate: 0 },
    pulling: {
      x: [0, 30, 60, 80],
      y: [0, -20, -40, -50],
      rotate: [0, -10, -15, -20],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      transition: { delay: 1.2, duration: 0.3 },
    },
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Curtain - Left Side */}
      <motion.div
        variants={curtainVariants}
        initial="initial"
        animate={isRevealed ? "revealed" : "initial"}
        className="fixed inset-0 origin-left z-40 top-0 left-0"
        style={{
          transformOrigin: "left",
          background: `linear-gradient(to right, 
            #8B0000 0%,
            #B22222 10%,
            #CD5C5C 20%,
            #B22222 30%,
            #8B0000 40%,
            #A52A2A 50%,
            #8B0000 60%,
            #B22222 70%,
            #CD5C5C 80%,
            #B22222 90%,
            #8B0000 100%)`,
          width: "50vw",
          height: "100vh",
        }}
      >
        {/* Vertical Drapes/Folds */}
        <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_8px,rgba(0,0,0,0.3)_8px,rgba(0,0,0,0.3)_16px,transparent_16px,transparent_24px)]"></div>
        
        {/* Horizontal Texture */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]"></div>

        {/* Diagonal Shadow for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-15"></div>

        {/* Top Rod/Texture */}
        <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-yellow-700 via-yellow-600 to-yellow-800 shadow-lg"></div>
      </motion.div>

      {/* Curtain - Right Side */}
      <motion.div
        variants={{
          initial: { scaleX: 1 },
          revealed: { scaleX: 0, transition: { duration: 1.2, ease: "easeInOut" } },
        }}
        initial="initial"
        animate={isRevealed ? "revealed" : "initial"}
        className="fixed inset-0 origin-right z-40 top-0 right-0"
        style={{
          transformOrigin: "right",
          background: `linear-gradient(to left, 
            #8B0000 0%,
            #B22222 10%,
            #CD5C5C 20%,
            #B22222 30%,
            #8B0000 40%,
            #A52A2A 50%,
            #8B0000 60%,
            #B22222 70%,
            #CD5C5C 80%,
            #B22222 90%,
            #8B0000 100%)`,
          width: "50vw",
          height: "100vh",
        }}
      >
        {/* Vertical Drapes/Folds */}
        <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_8px,rgba(0,0,0,0.3)_8px,rgba(0,0,0,0.3)_16px,transparent_16px,transparent_24px)]"></div>
        
        {/* Horizontal Texture */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]"></div>

        {/* Diagonal Shadow for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-15"></div>

        {/* Top Rod/Texture */}
        <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-yellow-700 via-yellow-600 to-yellow-800 shadow-lg"></div>
      </motion.div>

      {/* Brown Thread - Right Side */}
      <motion.div
        initial={{ pathLength: 0 }}
        animate={isRevealed ? { pathLength: 0 } : { pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed z-45 pointer-events-none"
        style={{
          bottom: "100px",
          right: "80px",
          width: "200px",
          height: "200px",
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="M 100 0 Q 80 50, 60 100"
            stroke="#8B4513"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Monkey Character - Bottom Right Corner */}
      <motion.div
        variants={monkeyVariants}
        initial="initial"
        animate={isRevealed ? ["pulling", "hidden"] : "initial"}
        className="fixed bottom-20 right-12 z-50 text-7xl"
        style={{ transformOrigin: "center" }}
      >
        🐵
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-30 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
