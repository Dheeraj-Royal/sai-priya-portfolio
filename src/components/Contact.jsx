import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { viewportConfig } from "../hooks/useAnimations";



export default function Contact() {
  const { isDark } = useTheme();

  const socialLinks = [
    // {
    //   icon: SiGithub,
    //   href: "https://github.com/",
    //   label: "GitHub",
    // },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/sai-priya-8228ba213/",
      label: "LinkedIn",
    },
    {
      icon: SiGmail,
      href: "saipriya0712@gmail.com",
      label: "Email",
    },
    {
      icon: FiPhone,
      href: "tel:+916301476539",
      label: "Phone",
    },
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
      id="contact"
      className={`min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-950"
          : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={viewportConfig}
        className={`max-w-2xl w-full text-center rounded-2xl shadow-lg p-10 transition-colors duration-300 ${
          isDark
            ? "bg-gray-800 shadow-2xl shadow-gray-950"
            : "bg-gray-50"
        }`}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={viewportConfig}
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Let's Connect ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={viewportConfig}
          className={`mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          I'm always open to discussing new opportunities, collaborations, or
          just sharing ideas about tech and creativity.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center gap-8 text-4xl mb-8"
        >
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-gray-400 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                aria-label={link.label}
                title={link.label}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Animated Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={viewportConfig}
          className="mt-8"
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
              x="100"
              y="70"
              fontSize="24"
              fill={isDark ? "#c7d2fe" : "#374151"}
              fontFamily="cursive"
            >
              — L Sai Priya
            </text>
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={viewportConfig}
          className={`text-sm mt-8 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © {new Date().getFullYear()} L Sai Priya. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
