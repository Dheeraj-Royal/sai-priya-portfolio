import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiDatadog,
  SiApachekafka,
  SiApachespark,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { scaleInVariants, viewportConfig } from "../hooks/useAnimations";

export default function Skills() {
  const { isDark } = useTheme();

  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-600" /> },
    { name: "Vert.x", icon: <span className="text-2xl">⚡</span> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "Kafka", icon: <SiApachekafka className={isDark ? "text-white" : "text-black"} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Redis", icon: <SiRedis className="text-red-600" /> },
    // { name: "Caffeine Cache", icon: <span className="text-2xl">⚙️</span> },
    { name: "Spark", icon: <SiApachespark className="text-orange-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
    { name: "Git", icon: <SiGit className="text-red-600" /> },
    { name: "Datadog", icon: <SiDatadog className="text-purple-600" /> },
    { name: "Gen AI", icon: <span className="text-2xl">🤖</span> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={viewportConfig}
          className={`text-3xl md:text-4xl font-bold mb-8 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={scaleInVariants}
              custom={idx}
              whileHover={{ scale: 1.15, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300 cursor-pointer ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-50 hover:bg-indigo-50"
              }`}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
