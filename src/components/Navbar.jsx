import Logo from '../assets/Logo.png'
import { useEffect, useRef, useState } from 'react';
import OverlayMenu from './OverlayMenu';
import { IoMdMenu } from "react-icons/io";
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { t, toggleLang, lang } = useLanguage();

    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);

    const lastScrollY = useRef(0);
    const timerId = useRef(null);

    useEffect(() => {
        const homeSeciton = document.querySelector("#home");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setForceVisible(true);
                    setVisible(true)
                } else {
                    setForceVisible(false)
                }
            }, { threshold: 0.1 }
        )
        if (homeSeciton) observer.observe(homeSeciton);

        return () => {
            if (homeSeciton) observer.unobserve(homeSeciton)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (forceVisible) {
                setVisible(true);
                return
            }
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setVisible(false)
            } else {
                setVisible(true);
                if (timerId.current) clearTimeout(timerId.current);
                timerId.current = setTimeout(() => {
                    setVisible(false);
                }, 3000)
            }
            lastScrollY.current = currentScrollY;
        }
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (timerId.current) clearTimeout(timerId.current);
        }
    }, [forceVisible])

    return (

        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>

                <div className='flex items-center space-x-2'>
                    <img src={Logo} alt="logo" className='w-8 h-8' />
                    <div className='text-2xl font-bold text-white hidden sm:block'>
                        Ashwin
                    </div>
                </div>

                <div className='block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2'>
                    <button onClick={() => setMenuOpen(true)}
                        className='text-white text-3xl focus:outline-none'>
                        <IoMdMenu />
                    </button>
                </div>

                {/* Right side: language toggle + reach out */}
                <div className='flex items-center gap-3'>
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLang}
                        title={lang === 'en' ? 'Switch to German' : 'Auf Englisch wechseln'}
                        className='cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-300'
                    >
                        <span className='text-base leading-none'>
                            {lang === 'en' ? '🇩🇪' : '🇬🇧'}
                        </span>
                        <span>{t.nav.langToggle}</span>
                    </button>

                    {/* Reach Out – hidden on small screens */}
                    <div className='hidden lg:block'>
                        <a href="#contact" className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'>
                            {t.nav.reachOut}
                        </a>
                    </div>
                </div>

            </nav>
            <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}