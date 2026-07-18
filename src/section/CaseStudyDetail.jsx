import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { caseStudiesData } from "../data/caseStudiesData";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import {
  FaArrowLeft,
  FaClock,
  FaUser,
  FaLaptop,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaBullseye,
  FaCheckCircle,
  FaLightbulb,
  FaMobileAlt,
  FaVideo,
  FaFileAlt,
  FaInfoCircle,
  FaTimesCircle
} from "react-icons/fa";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  // Find study data
  const study = caseStudiesData[id];
  const content = study ? study[lang] : null;

  // Fallback to English if current language translation is missing
  const activeContent = content || (study ? study["en"] : null);

  useEffect(() => {
    // If case study doesn't exist, redirect back to home
    if (!study) {
      navigate("/");
    }
  }, [study, navigate]);

  if (!activeContent) {
    return null;
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Helper to determine icon for standard lists based on title
  const getListIcon = (sectionTitle) => {
    const titleLower = sectionTitle.toLowerCase();
    if (titleLower.includes("problem") || titleLower.includes("issue") || titleLower.includes("departure")) {
      return <FaExclamationTriangle className="text-red-400 text-xl shrink-0 mt-1" />;
    }
    if (titleLower.includes("impact") || titleLower.includes("result") || titleLower.includes("ergebnis") || titleLower.includes("erfolg") || titleLower.includes("auswirkung")) {
      return <FaCheckCircle className="text-[#00bf8f] text-xl shrink-0 mt-1" />;
    }
    if (titleLower.includes("lesson") || titleLower.includes("erkenntnis") || titleLower.includes("style") || titleLower.includes("work")) {
      return <FaLightbulb className="text-amber-400 text-xl shrink-0 mt-1" />;
    }
    if (titleLower.includes("objective") || titleLower.includes("ziel")) {
      return <FaBullseye className="text-[#1cd8d2] text-xl shrink-0 mt-1" />;
    }
    return <FaCheckCircle className="text-[#00bf8f] text-xl shrink-0 mt-1" />;
  };

  // Helper for text-list icon
  const getTextListIcon = (index) => {
    const icons = [FaVideo, FaFileAlt, FaInfoCircle, FaCheckCircle];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="text-[#00bf8f] text-2xl shrink-0 mt-0.5" />;
  };

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse delay-500" />
      </div>

      <Navbar />

      <main className="flex-grow pt-24 pb-16 relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
        {/* Top Back Button */}
        <div className="mb-8">
          <Link
            to="/#casestudies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-semibold cursor-pointer"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            {lang === "en" ? "Back to Portfolio" : "Zurück zum Portfolio"}
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] leading-tight">
              {activeContent.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
              {activeContent.subtitle}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <FaLaptop className="text-[#1cd8d2] text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Product / Client</p>
                  <p className="text-sm font-semibold truncate max-w-[150px]" title={activeContent.summary.product || activeContent.summary.client}>
                    {activeContent.summary.product ? activeContent.summary.product.split(' (')[0] : activeContent.summary.client}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <FaCalendarAlt className="text-[#00bf8f] text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Feature</p>
                  <p className="text-sm font-semibold truncate max-w-[150px]">
                    {activeContent.summary.feature ? activeContent.summary.feature.replace('.', '') : "Portal Section"}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <FaUser className="text-[#1cd8d2] text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Role</p>
                  <p className="text-sm font-semibold truncate max-w-[150px]">
                    {activeContent.summary.role.replace('.', '')}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <FaClock className="text-[#00bf8f] text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Timeline</p>
                  <p className="text-sm font-semibold truncate max-w-[150px]">
                    {activeContent.summary.timeline.split(' (')[0]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Summary */}
          {activeContent.summary.description && (
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#1cd8d2]" />
                {lang === "en" ? "Summary" : "Zusammenfassung"}
              </h2>
              <p className="text-gray-300 text-justify leading-relaxed">
                {activeContent.summary.description}
              </p>
            </motion.div>
          )}

          {/* Render Generic Sections based on Type */}
          {activeContent.sections.map((section, sIdx) => {
            // Type 1: paragraph
            if (section.type === "paragraph") {
              return (
                <motion.div key={sIdx} variants={itemVariants} className="space-y-4">
                  <h2 className="text-3xl font-bold text-[#1cd8d2] border-b border-white/10 pb-2">
                    {section.title}
                  </h2>
                  <div className="bg-[#302b63]/15 border-l-4 border-[#00bf8f] rounded-r-xl p-6 sm:p-8">
                    <p className="text-gray-200 text-lg leading-relaxed text-justify whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              );
            }

            // Type 2: list
            if (section.type === "list") {
              return (
                <motion.div key={sIdx} variants={itemVariants} className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#1cd8d2] border-b border-white/10 pb-2">
                    {section.title}
                  </h2>
                  {section.intro && (
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {section.intro}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:bg-white/10 transition-colors">
                        {getListIcon(section.title)}
                        <p className="text-gray-200 text-justify text-sm sm:text-base leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            // Type 3: numbered-list
            if (section.type === "numbered-list") {
              return (
                <motion.div key={sIdx} variants={itemVariants} className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#00bf8f] border-b border-white/10 pb-2">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row gap-6 hover:border-white/20 transition-all">
                        <div className="flex md:flex-col items-center justify-center shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-bold text-xl flex items-center justify-center shadow-lg">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed text-justify whitespace-pre-line">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            // Type 4: text-list
            if (section.type === "text-list") {
              return (
                <motion.div key={sIdx} variants={itemVariants} className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#1cd8d2] border-b border-white/10 pb-2">
                    {section.title}
                  </h2>
                  {section.intro && (
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                      {section.intro}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 hover:border-white/20 transition-colors">
                        {getTextListIcon(idx)}
                        <div>
                          <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400 text-justify leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {section.outro && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6">
                      <p className="text-gray-300 leading-relaxed text-justify font-light text-sm sm:text-base">
                        {section.outro}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            }

            return null;
          })}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
