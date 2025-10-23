'use client';

import { useState, useEffect } from 'react';
import MainLogo from './components/MainLogo';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const activeSection = useActiveSection();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 50;
                    setIsScrolled(scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'}`}
        >
            <div className="mx-auto max-w-[1142px] py-[37px] px-4">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <MainLogo isScrolled={isScrolled} />
                    </Link>
                    <nav className="hidden md:flex items-center gap-[66px]">
                        <a
                            href="#about"
                            className={`font-sofia font-normal text-[18px] pb-1 border-b border-transparent transition-all duration-300 ${activeSection === 'about'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'
                                }`}
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className={`font-sofia font-normal text-[18px] pb-1 border-b border-transparent transition-all duration-300  ${activeSection === 'services'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'
                                }`}
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className={`font-sofia font-normal text-[18px] pb-1 border-b border-transparent transition-all duration-300  ${activeSection === 'contact'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'
                                }`}
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}