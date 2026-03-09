import React from 'react'
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext";


export default function Projects() {
    const { t } = useLanguage();
    const { heading, items } = t.projects;

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    ]

    return (
        <section id='projects' className="min-h-fit w-full flex relative bg-black text-white overflow-hidden ">

            {/* Glow Effect div */}
            <div className="absolute inset-0 pointer-events-none">
                {glows.map((c, i) => (
                    <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
                ))}
            </div>


            <div className="relative z-10  min-w-9/12 mx-auto px-6 md:px-10 lg:px-12 py-6 flex flex-col gap-12 ">
                <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left ">

                        <motion.h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] z-10 text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {heading}
                        </motion.h2>

                        <div className="mt-6 grid grid-col-1 lg:grid-cols-3 sm:grid-cols-1 gap-3 lg:gap-20  max-w-auto mx-[2vw] ">

                            {items.map((item, i) => (
                                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center min-w-[350px]"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="py-2 text-2xl font-medium mb-2 ">
                                        {item.label}
                                    </div>
                                    <div className="text-md px-5 text-justify text-gray-400">
                                        <li>
                                            {item.value}
                                        </li>
                                    </div>
                                    <div className="pt-2 text-justify px-5 text-md text-gray-400">
                                        <li>
                                            {item.value2}
                                        </li>
                                    </div>

                                    <div className="pt-2 text-justify px-5 underline text-md text-gray-400">
                                        <li>
                                            {item.value3}
                                        </li>
                                    </div>
                                </motion.div>
                            ))}



                        </div>



                    </div>



                </motion.div>
            </div>


        </section>
    )
}
