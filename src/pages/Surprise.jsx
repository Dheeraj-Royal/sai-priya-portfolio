import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FiDownload, FiSun, FiMoon } from "react-icons/fi";

export default function Surprise() {
  const [displayedText, setDisplayedText] = useState("");
  const { isDark, toggleTheme } = useTheme();
  const message =
    "Code runs, systems scale, but the rarest thing is finding someone who builds with heart. You’re doing amazing — keep believing in yourself. This world runs better with you in it 💙";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + message[i]);
      i++;
      if (i === message.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/HBD_2025.pdf";
    link.download = "HBD_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-300 text-center px-6 ${
      isDark
        ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
        : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    } ${isDark ? "text-gray-100" : "text-gray-800"}`}>
      
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-6 right-6 p-3 rounded-lg transition duration-200"
        style={{
          backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
          color: isDark ? "#fbbf24" : "#1f2937"
        }}
        aria-label="Toggle dark mode"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.button>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-3xl md:text-4xl font-bold mb-8 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        💻 A Little Secret Message
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className={`max-w-3xl text-lg md:text-xl leading-relaxed font-light ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.p>

      {/* Download Button */}
      <motion.button
        onClick={handlePdfDownload}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-semibold transition duration-200"
        title="Download Note"
      >
        <FiDownload size={20} />
        Download Note
      </motion.button>

      {/* Animated Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
        className="mt-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 100"
          className="w-64 mx-auto"
        >
          <path
            d="M20 60 Q60 10, 120 60 T220 60 Q260 10, 300 60 T380 60 Q420 10, 480 60"
            fill="transparent"
            stroke={isDark ? "#818cf8" : "#6366f1"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="1000,0"
              dur="3s"
              fill="freeze"
            />
          </path>
          <text
            x="70"
            y="70"
            fontSize="22"
            fill={isDark ? "#d1d5db" : "#374151"}
            fontFamily="cursive"
          >
            — from someone who believes in you 💙
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
