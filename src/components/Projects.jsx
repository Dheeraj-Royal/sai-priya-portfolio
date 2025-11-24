import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { fadeInUpVariants, viewportConfig } from "../hooks/useAnimations";

const projects = [
  {
    title: "NutriSustain: Personalized Health-Based Food Recommendation System",
    description:
      "Developed a personalized, nutritious health-focused food recommendation system leveraging machine learning algorithms to offer tailored food suggestions aligned with individual user preferences and dietary needs. Utilized Python programming alongside RNN GAN algorithms to drive the recommendation system, ensuring precise and relevant food choices. Conducted research and co-authored a paper published in IEEE.",
    tech: ["Python", "RNN", "GAN", "Machine Learning", "Research"],
    link: "https://ieeexplore.ieee.org/document/10717303",
  },
  // {
  //   title: "Data Dashboard",
  //   description:
  //     "An interactive analytics dashboard integrating APIs and data visualization libraries to present metrics in real-time.",
  //   tech: ["Node.js", "MongoDB", "Chart.js"],
  //   link: "#",
  // },
  // {
  //   title: "Task Manager App",
  //   description:
  //     "A simple full-stack task management app that supports CRUD operations and persistent storage.",
  //   tech: ["React", "Express", "MongoDB"],
  //   link: "#",
  // },
  // {
  //   title: "Data Dashboard",
  //   description:
  //     "An interactive analytics dashboard integrating APIs and data visualization libraries to present metrics in real-time.",
  //   tech: ["Node.js", "MongoDB", "Chart.js"],
  //   link: "#",
  // },
  // {
  //   title: "Task Manager App",
  //   description:
  //     "A simple full-stack task management app that supports CRUD operations and persistent storage.",
  //   tech: ["React", "Express", "MongoDB"],
  //   link: "#",
  // },
];

export default function Projects() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];
  const isExpanded = expandedId === currentIndex;
  const shouldShowReadMore = currentProject.description.length > 200;
  const displayDesc = isExpanded ? currentProject.description : currentProject.description.substring(0, 200);

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center px-6 py-16 pt-28 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-950"
          : "bg-gradient-to-b from-white to-indigo-50"
      }`}
      style={{ willChange: "contents" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Featured Projects
        </motion.h2>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[500px]" style={{ willChange: "contents" }}>
          {/* Left Arrow Button */}
          <button
            onClick={goToPrevious}
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-3xl md:text-4xl font-bold transition-colors duration-300 flex-shrink-0 rounded-md ${
              isDark
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-700"
            }`}
            style={{ transform: "translate3d(0, 0, 0)", WebkitFontSmoothing: "antialiased" }}
            aria-label="Previous project"
          >
            <span className="select-none">&lt;</span>
          </button>

          {/* Project Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-2xl flex flex-col ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-indigo-50"
            }`}
            style={{ minHeight: isExpanded ? "auto" : "24rem", transition: "min-height 0.4s ease-in-out" }}
          >
            <div className="flex flex-col h-full">
              <motion.h3
                className={`text-2xl font-bold mb-4 line-clamp-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {currentProject.title}
              </motion.h3>

              {/* Scrollable Description */}
              <div className={`flex-grow overflow-y-auto pr-3 mb-4 rounded-lg p-3 transition-colors duration-300 ${
                isExpanded
                  ? isDark
                    ? "bg-gray-700/50"
                    : "bg-indigo-50"
                  : ""
              }`}
              style={{ scrollBehavior: "smooth" }}>
                <p className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {displayDesc}
                  {shouldShowReadMore && !isExpanded && "..."}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 space-y-3">
              {shouldShowReadMore && (
                <motion.button
                  onClick={() => setExpandedId(isExpanded ? null : currentIndex)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2 rounded-lg font-medium text-sm transition ${
                    isDark
                      ? "bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50"
                      : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  }`}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </motion.button>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {currentProject.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 text-xs rounded-full transition ${
                      isDark
                        ? "bg-indigo-900/50 text-indigo-300"
                        : "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Footer with project link and counter */}
              <div className="flex items-center justify-between">
                <motion.a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`font-medium text-sm inline-flex items-center gap-1 hover:underline ${
                    isDark
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  {/* View Project → */}
                  View Publication →
                </motion.a>

                <span className={`text-xs font-semibold ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}>
                  {currentIndex + 1} / {projects.length}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button
            onClick={goToNext}
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-3xl md:text-4xl font-bold transition-colors duration-300 flex-shrink-0 rounded-md ${
              isDark
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-700"
            }`}
            style={{ transform: "translate3d(0, 0, 0)", WebkitFontSmoothing: "antialiased" }}
            aria-label="Next project"
          >
            <span className="select-none">&gt;</span>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? isDark
                    ? "bg-indigo-400 w-8"
                    : "bg-indigo-600 w-8"
                  : isDark
                  ? "bg-gray-600 hover:bg-gray-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
