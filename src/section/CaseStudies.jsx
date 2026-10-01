import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CaseStudies() {
    const { t } = useLanguage();
    const { heading, readCaseStudy, items } = t.caseStudies;

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    ];

    return (
        <section id='casestudies' className="min-h-fit w-full flex relative bg-black text-white overflow-hidden py-16">

            {/* Glow Effect div */}
            <div className="absolute inset-0 pointer-events-none">
                {glows.map((c, i) => (
                    <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col gap-12">
                <motion.div className="flex flex-col items-center gap-8"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="w-full flex flex-col items-center text-center">

                        <motion.h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] z-10 text-center mb-10"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {heading}
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">

                            {items.map((item, i) => {
                                const isInternal = item.value3.startsWith('/');
                                const CardComponent = isInternal ? Link : 'a';
                                const cardProps = isInternal
                                    ? { to: item.value3 }
                                    : { href: item.value3, target: "_blank", rel: "noopener noreferrer" };

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.4 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="flex"
                                    >
                                        <CardComponent
                                            {...cardProps}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between w-full hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_25px_rgba(28,216,210,0.15)] transition-all duration-300 cursor-pointer text-left"
                                        >
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-[#1cd8d2] transition-colors">
                                                    {item.label}
                                                </h3>
                                                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                                                    {item.value}
                                                </p>
                                                <p className="text-sm text-gray-400 leading-relaxed text-justify">
                                                    {item.value2}
                                                </p>
                                            </div>

                                            <div className="pt-6">
                                                <div className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-bold text-sm flex items-center justify-center gap-2 group-hover:opacity-90 group-hover:shadow-[0_0_15px_rgba(28,216,210,0.4)] transition-all">
                                                    <span>{readCaseStudy || "Read Case Study"}</span>
                                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </CardComponent>
                                    </motion.div>
                                );
                            })}

                        </div>

                    </div>

                </motion.div>
            </div>

        </section>
    );
}
