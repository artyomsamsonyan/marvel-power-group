'use client';

import { useState, useEffect, useRef } from 'react';
import MainLogo from './components/MainLogo';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const activeSection = useActiveSection();
    const burgerButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);


    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen && burgerButtonRef.current) {
            burgerButtonRef.current.focus();
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 z-40 left-0 right-0 z-50 transition-colors duration-200 ${isMobileMenuOpen ? 'bg-black text-white' : isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'
                }`}
        >
            <div className="relative mx-auto max-w-[1142px] md:py-[37px] px-[15px] py-5">
                <div className="flex items-center justify-between">
                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/">
                        <MainLogo isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} />
                    </Link>

                    <nav className="hidden md:flex items-center gap-[66px]">
                        <a
                            href="#about"
                            className={`font-sofiaNormal font-normal text-[18px] pb-1 border-b transition-all duration-300 ${activeSection === 'about'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className={`font-sofiaNormal font-normal text-[18px] pb-1 border-b transition-all duration-300 ${activeSection === 'services'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className={`font-sofiaNormal font-normal text-[18px] pb-1 border-b transition-all duration-300 ${activeSection === 'contact'
                                ? 'border-yellow'
                                : 'border-transparent hover:border-yellow'
                                } ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            Contact
                        </a>
                    </nav>

                    <button
                        ref={burgerButtonRef}
                        className={`block md:hidden ${isMobileMenuOpen || isScrolled ? 'text-white' : 'text-black'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <rect y="17.6777" width="25" height="2" transform="rotate(-45 0 17.6777)" fill="currentColor" />
                                <rect width="25" height="2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 19.0918 17.6777)" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg width="25" height="9" viewBox="0 0 25 9" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="2" fill="currentColor" />
                                <rect y="7" width="25" height="2" fill="currentColor" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div
                ref={menuRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                className={`block md:hidden fixed inset-0 bg-white z-70 top-[78px] overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center gap-4 justify-between pt-[42px] pb-[69px] px-5 h-full overflow-y-auto">
                    <nav className="flex flex-col items-center gap-[23px]">
                        <a
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="#about"
                            className="font-sofiaNormal font-normal text-[40px] leading-[51px] text-black"
                        >
                            About
                        </a>
                        <a
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="#services"
                            className="font-sofiaNormal font-normal text-[40px] leading-[51px] text-black"
                        >
                            Services
                        </a>
                        <a
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="#contact"
                            className="font-sofiaNormal font-normal text-[40px] leading-[51px] text-black"
                        >
                            Contact
                        </a>
                    </nav>
                    <a
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="#contact"
                        className="flex uppercase items-center gap-2 bg-yellow py-[17px] px-[40px] font-sofiaSemi font-semibold text-3.5 leading-3.5 text-black transition hover:brightness-95"
                    >
                        <span>Contact us</span>
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 2.14286L8.46323 0L14 0V10H8.46323L6 7.85714V2.14286Z" fill="black" />
                            <path d="M14 2H20V4H14V2Z" fill="black" />
                            <path d="M14 6H20V8H14V6Z" fill="black" />
                            <path d="M0 6L0 4H6V6H0Z" fill="black" />
                            <path d="M8 6.5V3.5L9.33333 2H12V8H9.33333L8 6.5Z" fill="#F9D023" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}