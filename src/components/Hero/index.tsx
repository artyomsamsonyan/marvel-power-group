"use client";

import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen ">
            <div className='flex flex-col justify-end w-full min-h-screen z-20'>
                <Image
                    src="/assets/images/heroBckImg.jpg"
                    alt="Marvel Power Group office building"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(0deg, #000000 4.66%, rgba(0, 0, 0, 0) 76.78%)' }}
                    aria-hidden="true"
                />
                <div className="relative z-20 mx-auto max-w-[1142px] px-[15px] flex flex-col justify-between pt-[78px] md:pt-[155px]">
                    <div className="flex flex-col items-center justify-center flex-1 pt-[42px] md:pt-0">
                        <h1
                            className="font-alata font-normal text-white mb-[18px] md:mb-[41px] text-center"
                            style={{
                                fontSize: 'clamp(50px, 8vw, 115px)',
                                lineHeight: 'clamp(60px, 9vw, 130px)',
                            }}
                        >
                            Marvel Power Group
                        </h1>

                        <p
                            className="font-sofiaLight font-light text-center text-white mb-[44px] md:mb-[79px] "
                            style={{
                                fontSize: 'clamp(14px, 2vw, 25px)',
                                lineHeight: 'clamp(20px, 2.5vw, 35px)',
                            }}
                        >
                            Marvel Power Group is a boutique consulting firm with a fresh, markets-based approach to value creation. We offer services to clients in energy, water, manufacturing and transportation sectors.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex uppercase items-center gap-2 bg-yellow py-[17px] px-[40px] mb-5 md:mb-[106px] leading-3.5 tracking-[0.6px] font-sofiaSemi font-semibold text-3.5 text-black transition hover:brightness-95 focus:outline-2 focus:outline-yellow focus:outline-offset-2"
                        >
                            <span>Contact us</span>
                            <svg
                                width="20"
                                height="10"
                                viewBox="0 0 20 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2.14286L8.46323 0L14 0V10H8.46323L6 7.85714V2.14286Z" fill="black" />
                                <path d="M14 2H20V4H14V2Z" fill="black" />
                                <path d="M14 6H20V8H14V6Z" fill="black" />
                                <path d="M0 6L0 4H6V6H0Z" fill="black" />
                                <path d="M8 6.5V3.5L9.33333 2H12V8H9.33333L8 6.5Z" fill="#F9D023" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="hidden md:flex flex-col items-center justify-center w-full relative z-20 pb-[55px]" aria-hidden="true">
                    <div className="flex justify-between w-full items-end mb-7">
                        <div />
                        <div className="h-[15px] w-px bg-white" />
                        <div className="h-[15px] w-px bg-white" />
                        <div className="h-[101px] w-px bg-yellow" />
                        <div className="h-[15px] w-px bg-white" />
                        <div className="h-[15px] w-px bg-white" />
                        <div />
                    </div>
                    <p className="font-sofiaLight font-light text-3.5 text-center text-white">
                        Scroll for more
                    </p>
                </div>
            </div>
        </section>
    );
}