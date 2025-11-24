import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { fadeInLeftVariants, fadeInRightVariants, viewportConfig } from "../hooks/useAnimations";

export default function About() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 to-indigo-50"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={fadeInLeftVariants}
          custom={0}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 ${
              isDark ? "border-indigo-500" : "border-indigo-200"
            }`}
          >
            {/* Replace this image later */}
            <img
              src="/profile.jpg"
              alt="L Sai Priya"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={fadeInRightVariants}
          custom={0}
          className="text-center md:text-left"
        >
          <motion.h2
            variants={fadeInRightVariants}
            custom={0}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeInRightVariants}
            custom={1}
            className={`leading-relaxed mb-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm{" "}
            <span className={`font-semibold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
              L Sai Priya
            </span>
            , a Software Development Engineer passionate about building scalable, 
            clean, and user-focused solutions. With over a year of hands-on industry 
            experience, I enjoy exploring emerging technologies and continuously sharpening 
            my problem-solving and design-thinking abilities. I take pride in writing 
            maintainable code, architecting efficient systems, and contributing to products 
            that deliver real impact.
          </motion.p>
          <motion.p
            variants={fadeInRightVariants}
            custom={2}
            className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Backend-focused Software Engineer skilled in microservices, 
            high-performance APIs, and resilient distributed architectures 
            designed to handle millions of requests with low latency and reliability.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
