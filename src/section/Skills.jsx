import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
    const skills = [
        { icon: <FaReact />, name: 'React' },
        { icon: <RiNextjsLine />, name: 'React' },
        { icon: <SiTailwindcss />, name: 'TailwindCss' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <IoLogoJavascript />, name: 'JavaScript' },
        { icon: <FaFigma />, name: 'Figma' },
        { icon: <TbBrandFramerMotion />, name: 'Framer Motion' },
        { icon: <SiMongodb />, name: 'MongoDB' },
    ]

    const repeated = [...skills, ...skills, ...skills, ...skills, ...skills]

    const [dir, setDir] = useState(-1) //direction of the flow -1,0,1
    const [active, setActive] = useState(false) //to see if the section is active for animation to work
    const sectionRef = useRef(null);
    const tractRef = useRef(null)
    const touchY = useRef(null); //for devices with screen touch
    const x = useMotionValue(0) //used this for smooth scroll of skills unlike with react with lag

    useEffect(() => {
        // tells if our section is visible on screen or not
        const el = sectionRef.current; //bring ths ref of current DOM
        if (!el) return;

        const io = new IntersectionObserver((
            [entry]) => {
            setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
        },
            { threshold: [0.1] }
        )
        io.observe(el);
        return () => io.disconnect();
    }, [])


    useEffect(() => {

        // progress of the mouse

        if (!active) return;

        const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
        const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
        const onTouchMove = (e) => {
            if (touchY.current == null) return;
            const delta = e.touches[0].clientY - touchY.current;
            setDir(delta > 0 ? 1 : -1);
            touchY.current = e.touches[0].clientY;
        };
        window.addEventListener('wheel', onWheel, { passive: true });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        return () => {
            window.addEventListener('wheel', onWheel, { passive: true });
            window.addEventListener('touchstart', onTouchStart, { passive: true });
            window.addEventListener('touchmove', onTouchMove, { passive: true });
        }
    }, [active]);

    useEffect(() => {
        let id;
        let last = performance.now();
        const SPEED = 80;

        const tick = (now) => {
            const dt = (now - last) / 1000;
            last = now;
            let next = x.get() + SPEED * dir * dt;
            const loop = tractRef.current?.scrollWidth / 2 || 0;

            if (loop) {
                if (next <= -loop) next += loop;
                else if (next > 0) next -= loop;
            }
            x.set(next);
            id = requestAnimationFrame(tick);
        }
        id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [dir, x]);

    return (
        <section id="skills" ref={sectionRef} className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
            <div></div>
            <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                My Skills
            </motion.h2>
            <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Modern Application | Modern Technologies.
            </motion.p>
            <div className="relative w-full overflow-hidden">

                <motion.div ref={tractRef} style={{ x, whiteSpace: "nowrap", willChange: "transform" }} className="flex gap-10 text-6xl text-[#1cd8d2]">
                    {repeated.map((s, i) => (
                        <div key={i} aria-label={s.name} title={s.name} className="flex flex-col items-center gap-2 min-w-[120px]" >
                            <span className="hover:scale-125 transition-transform duration-300">
                                {s.icon}
                            </span>
                            <p className="text-lg">{s.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}