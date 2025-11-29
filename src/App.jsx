import { useState } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import WavingHand from "./components/WavingHand";
import { useTheme } from "./hooks/useTheme";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const logoSrc = isDark ? "/sp-dark.png" : "/sp-light.png";
  useEffect(() => {
    const lightLogo = new Image();
    const darkLogo = new Image();

    lightLogo.src = "/sp-light.png";
    darkLogo.src = "/sp-dark.png";
  }, []);



  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "L_Sai_Priya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
        {/* Navbar */}
        <nav
          className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-lg z-50 transition-colors duration-300 transform-gpu h-[72px] overflow-hidden w-screen"
          style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
        >
          <div className="flex justify-between items-center px-6 py-4 h-full max-w-full" style={{ maxWidth: "100vw" }}>
            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex-shrink-0 min-w-0">
              L Sai Priya
            </h1> */}
            <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
              <img
                src={logoSrc}
                alt="SP logo"
                className="w-8 h-8 object-contain"
              />
              {/* <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Sai Priya
              </h1> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center ml-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 ml-auto" style={{ transform: "translate3d(0,0,0)" }}>
              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-2 sm:px-3 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition duration-200 flex-shrink-0 text-xs sm:text-sm whitespace-nowrap"
                style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
                aria-label="Download Resume"
                title="Download Resume"
              >
                <FiDownload size={16} />
                <span className="font-medium hidden sm:inline">Resume</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 flex-shrink-0 inline-flex items-center justify-center"
                style={{ transform: "translate3d(0,0,0)", willChange: "transform", width: "40px", height: "40px" }}
                aria-label="Toggle dark mode"
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-gray-800 dark:text-gray-100 text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle mobile menu"
                title={menuOpen ? "Close menu" : "Open menu"}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Outside Navbar */}
        {menuOpen && (
          <div className="fixed top-[72px] left-0 right-0 md:hidden bg-white dark:bg-gray-900 shadow-inner border-t border-gray-200 dark:border-gray-800 z-40 animate-menu-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                {item.name}
              </a>
            ))}
            {/* <div className="px-6 py-3 border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={handleResumeDownload}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition"
              >
                <FiDownload size={18} />
                Download Resume
              </button>
            </div> */}
          </div>
        )}

        {/* Sections */}
        <main className="pt-[72px]">
          {/* Home Section */}
          <section id="home" className={`min-h-screen flex items-center justify-center text-center px-6 transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-gray-950 to-gray-900"
              : "bg-gradient-to-br from-white to-indigo-50"
          }`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}>
                Hi, I'm L Sai Priya <WavingHand />
              </h2>
              <p className={`text-lg md:text-xl mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                Software Development Engineer | Building clean, scalable solutions
              </p>
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-semibold transition duration-200"
              >
                <FiDownload size={20} />
                Download Resume
              </motion.button>
            </motion.div>
          </section>

          {/* Placeholder Sections */}
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
