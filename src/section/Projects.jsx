import React from 'react'
import { motion } from "framer-motion"


export default function Projects() {
    const stats = [
        { label: "Next.js Food Delivery App", value: "Built to understand the complete full-stack workflow using Next.js (App Router). Focused mainly on backend logic, API routes, and data flow rather than UI polish.", value2: "Practiced full-stack integration: sending requests from pages, handling responses, and displaying results.", value3: "https://next-js-food-delivery-kcbe-git-main-ashwin-umarjikars-projects.vercel.app" },


        { label: "Portfolio", value: "Built a responsive personal portfolio using React and Vite, enhanced with Framer Motion animations for smooth transitions and a modern user experience.", value2: 'Added smooth micro-interactions and page/section transitions using Framer Motion to improve the overall UX', value3: "https://portfolio-pi-one-0usjbay29r.vercel.app/" },

        { label: "Restaurant App", value: "Built a food app prototype using React + Vite, focused on understanding real project structure and end-to-end app flow.", value2: 'A learning-focused project to gain hands-on experience with a full app workflow. Implemented Redux Toolkit patterns (store/slices) and worked on connecting UI pages with state (categories/cart)', value3: 'https://food-app-mocha-omega.vercel.app/' },

        { label: "Tic Tac Toe", value: "Built a classic two-player Tic Tac Toe game to practice React state handling and component structure; deployed with Vercel (live demo link included in the repo).", value2: 'Simple game project built with Vite to practice UI logic, state management, and deployment workflow', value3: 'https://tic-tac-toe-red-psi-70.vercel.app/' },
        { label: "Task Master", value: "Task management dashboard: Create, view, update, and delete tasks with a clean, responsive interface for daily tracking.", value2: 'Productivity features: Organize tasks by key details (like status/priority/due dates) to stay on top of work and deadlines.', value3: 'https://task-masater-git-main-ashwin-umarjikars-projects.vercel.app/' },

    ]

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
        // "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
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
                            Projects
                        </motion.h2>

                        <div className="mt-6 grid grid-col-1 lg:grid-cols-3 sm:grid-cols-1 gap-3 lg:gap-20  max-w-auto mx-[2vw] ">



                            {stats.map((item, i) => (
                                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center min-w-[350px]"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="py-2
                                    text-2xl font-medium mb-2 ">
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
