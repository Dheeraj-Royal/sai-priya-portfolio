import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export default function Surprise() {
  const { isDark, toggleTheme } = useTheme();

  const message = `Code runs, systems scale, but the rarest thing is finding someone who builds with heart. 
  You’re doing amazing — keep believing in yourself. 
  This world runs better with you in it 💙.`;

  const words = message.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // ⭐ Word-by-word reveal (NO SOUND)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev.length >= words.length) {
          clearInterval(interval);
          setTimeout(() => launchConfetti(), 500);
          return prev;
        }
        return [...prev, words[prev.length]];
      });
      index++;
    }, 350);
    return () => clearInterval(interval);
  }, []);

  // ⭐ Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  // ⭐ Improved Falling Particles (visible on both themes)
  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() * 2 + 1.5,
      v: Math.random() * 0.6 + 0.4,
      o: Math.random() * 0.5 + 0.3,
      color: isDark
        ? `rgba(200,200,255,${Math.random() * 0.5 + 0.3})`
        : `rgba(120,120,180,${Math.random() * 0.5 + 0.3})`
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.v;
        if (p.y > canvas.height) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, [isDark]);

  // ⭐ Confetti
  function launchConfetti() {
    const duration = 1500;
    const end = Date.now() + duration;

    (function frame() {
      makeConfetti({
        count: 5,
        velocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() * 0.3 }
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function makeConfetti({ count, velocity, spread, origin }) {
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "fixed w-2 h-2 rounded-sm pointer-events-none";
      div.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
      div.style.top = origin.y * window.innerHeight + "px";
      div.style.left = origin.x * window.innerWidth + "px";

      const angle = Math.random() * spread;
      const speed = velocity + Math.random() * 8;

      let x = 0,
        y = 0;

      const interval = setInterval(() => {
        x += Math.cos(angle) * (speed / 10);
        y += Math.sin(angle) * (speed / 10);

        div.style.transform = `translate(${x}px, ${y}px) rotate(${
          Math.random() * 180
        }deg)`;

        if (y > window.innerHeight) {
          div.remove();
          clearInterval(interval);
        }
      }, 16);

      document.body.appendChild(div);
    }
  }

  const handlePdf = () => {
    const a = document.createElement("a");
    a.href = "/HBD_2025.pdf";
    a.download = "HBD_2025.pdf";
    a.click();
  };

  return (
    <div
      className={`relative min-h-screen px-6 flex flex-col justify-center items-center text-center transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800"
      }`}
    >
      {/* Falling Particles */}
      <canvas
        id="particles"
        className="fixed inset-0 pointer-events-none opacity-80"
      />

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 p-3 rounded-lg shadow-md"
        style={{
          backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
          color: isDark ? "#fbbf24" : "#1f2937"
        }}
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.button>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        💙 A Quiet Little Message
      </motion.h1>

      {/* Message */}
      <p
        className={`max-w-3xl text-xl md:text-2xl leading-relaxed font-light ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {visibleWords.join(" ")}{" "}
        <span
          className={`inline-block w-2 ${
            cursorVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            borderRight: isDark
              ? "2px solid #fbbf24"
              : "2px solid #4b5563"
          }}
        >
          &nbsp;
        </span>
      </p>

      {/* Download Button */}
      <motion.button
        onClick={handlePdf}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl shadow-lg text-lg font-semibold"
      >
        <FiDownload size={22} />
        Download Note
      </motion.button>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="mt-14"
      >
        <svg viewBox="0 0 500 120" className="w-72 mx-auto">
          <path
            d="M20 80 Q60 20, 120 80 T220 80 Q260 20, 300 80 T380 80 Q420 20, 480 80"
            fill="transparent"
            stroke={isDark ? "#818cf8" : "#6366f1"}
            strokeWidth="3"
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
            y="100"
            fontSize="24"
            fill={isDark ? "#d1d5db" : "#374151"}
            fontFamily="cursive"
          >
            — from your so called gottam😂💙
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
