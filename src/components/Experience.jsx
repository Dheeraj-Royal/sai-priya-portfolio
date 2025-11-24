import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Experience() {
  const { isDark } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experience = [
    {
      logo: "/company1.png",
      title: "Software Development Engineer 1",
      company: "Dream11",
      years: "Dec 2024 – Present",
      description: `• Developed backend services for the Winners Hub Platform, supporting real-time winner tracking and multi-regional aggregation for millions of users.
        • Designed high-performance caching architecture, reducing database load by 70% and achieving sub-50ms response times for winner data.
        • Engineered high-throughput backend systems using Kafka, Redis, MySQL, and Caffeine Cache, ensuring sub-50ms latency and 99.9% uptime during IPL-scale traffic. Conducted load testing, profiling, and API optimization to support millions of concurrent users.
        • Contributed to Feeds Aggregator, integrated multi-sport real-time scorecard APIs handling millions of requests with sub-100ms latency.
        • Integrated multiple third-party data providers through fault-tolerant pipelines with automated retries and monitoring.
        • Built advanced player analytics with career- and format-wise performance insights and predictive metrics.
        • Achieved 99.9% uptime for critical data operations across all sports feeds.
        • Built an AI-powered Test Case Generator that automates test case creation by analyzing Figma designs and PRDs, reducing manual test authoring time by 80% across 20+ product squads.
        • Implemented a multi-agent system for parallel analysis of designs and requirements, enabling real-time streaming and automated export to Google Sheets for enterprise-scale adoption.`,
      shortDescription:
        "Developed backend services for the Winners Hub Platform, supporting real-time winner tracking and multi-regional aggregation for millions of users. Designed high-performance caching architecture, reducing database load by 70% and"
      // tech: ["Java", "Vert.x", "MySQL", "Redis", "AWS", "Docker", "Kafka"],
    },

    {
      logo: "/company2.png",
      title: "DevOps Engineer",
      company: "HashedIn by Deloitte",
      years: "Aug 2024 – Nov 2024",
      description:
        `• Implemented robust CI/CD pipelines to streamline development and deployment processes. Automated build, test, and deployment workflows to improve efficiency and reduce errors.
        • Managed AWS infrastructure (EC2, S3, and VPC) for high availability and scalability. Monitored and optimized application performance, enhancing system reliability and user experience.`,
      shortDescription:
        "Implemented robust CI/CD pipelines to streamline development and deployment processes. Automated build, test, and deployment workflows to improve efficiency and",
      // tech: ["Python", "Spark", "PySpark", "Airflow", "MongoDB", "SQL", "Apache Kafka"],
    },

    {
      logo: "/company3.png",
      title: "Intern – ML & Data Science",
      company: "Wholesome Eten",
      years: "Oct 2022 – May 2023",
      description:
        `• Created a Food Tracking system with Target Calorie Prediction capabilities. Developed and implemented a Recommendation Optimization System and Personal Assistant. 
        • Integrated NLP-based translations to enhance user interaction and experience. Designed a Personal Assistant within the App.`,
      shortDescription:
        "Created a Food Tracking system with Target Calorie Prediction capabilities. Developed and implemented a Recommendation Optimization System and",
      // tech: ["React", "JavaScript", "REST APIs", "Node.js", "MongoDB", "Git"],
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className={`min-h-screen px-6 py-16 pt-28 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 to-indigo-50"
      }`}
    >
      <h2 className={`text-4xl font-bold text-center mb-16 ${
        isDark ? "text-white" : "text-gray-800"
      }`}>
        Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 ${
              experience.length % 2 !== 0 && index === experience.length - 1
                ? "md:grid-cols-[120px_1fr] md:w-fit md:mx-auto"
                : "md:grid-cols-[120px_1fr]"
            } gap-8 items-start`}
          >
            {/* Left Column: Logo + Years */}
            <div className="flex flex-col items-center md:items-start">
              <div className={`w-24 h-24 rounded-full overflow-hidden shadow-md border-4 flex items-center justify-center bg-white transition-colors duration-300 ${
                isDark ? "border-indigo-400" : "border-indigo-200"
              }`}>
                <img
                    src={item.logo}
                    alt={item.company}
                    className="w-16 h-16 object-contain object-center p-2"
                />
                </div>


              <p className={`mt-4 text-sm font-semibold transition-colors duration-300 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                {item.years}
              </p>
            </div>

            {/* Right Column: Role + Company + Description */}
            <div>
              <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-800"
              }`}>
                {item.title}
              </h3>

              <p className={`font-semibold mt-1 transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}>
                {item.company}
              </p>

              <div className={`w-12 h-1 rounded-full my-4 transition-colors duration-300 ${
                isDark ? "bg-indigo-400" : "bg-indigo-500"
              }`}></div>

              {/* Scrollable Description */}
              <div className={`max-h-48 overflow-y-auto pr-3 mb-4 rounded-lg p-3 transition-colors duration-300 ${
                expandedIndex === index
                  ? isDark
                    ? "bg-gray-800"
                    : "bg-indigo-50"
                  : ""
              }`}>
                <p className={`leading-relaxed transition-colors duration-300 whitespace-pre-line ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {expandedIndex === index
                    ? item.description
                    : item.shortDescription}
                </p>
              </div>

              {/* Read More/Less Button */}
              {item.description !== item.shortDescription && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className={`mb-4 font-semibold hover:underline transition-all duration-200 ${
                    isDark ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              )}

              {/* Tech Stack */}
              {item.tech && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-xs rounded-full transition ${
                          isDark
                            ? "bg-indigo-900/50 text-indigo-300"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
