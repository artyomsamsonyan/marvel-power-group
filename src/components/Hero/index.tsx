"use client";

export default function Hero() {
    return (
        <section id="home" className="h-full min-h-[100vh] w-full">
            <div
                className="bg-cover bg-center h-full relative"
                style={{
                    backgroundImage: "url(/assets/images/heroBckImg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="z-20 relative max-w-[1142px] px-4 mx-auto h-full py-[55px]">
                    <div className="flex h-full w-full flex-col items-center justify-between">
                        <div className="flex h-full w-full flex-col items-center justify-center pt-[140px]">
                            <h1 className="font-alata font-normal text-[115px] leading-[130px] text-white pb-[41px] ">Marvel Power Group</h1>
                            <p className="font-sofia font-light text-[25px] leading-[35px] text-center text-white pb-[79px]">
                                Marvel Power Group is a boutique consulting firm with a fresh, markets-based approach to value creation. We offer services to clients in energy, water, manufacturing and transportation sectors.
                            </p>
                            <a
                                href="#contact"
                                className="flex uppercase items-center gap-2 bg-yellow py-[17px] px-[40px] mb-[106px] font-sofia font-semibold text-[14px] text-black transition hover:brightness-95"
                            >
                                <span>
                                    Contact us
                                </span>
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 2.14286L8.46323 0L14 0V10H8.46323L6 7.85714V2.14286Z" fill="black" />
                                    <path d="M14 2H20V4H14V2Z" fill="black" />
                                    <path d="M14 6H20V8H14V6Z" fill="black" />
                                    <path d="M0 6L0 4H6V6H0Z" fill="black" />
                                    <path d="M8 6.5V3.5L9.33333 2H12V8H9.33333L8 6.5Z" fill="#F9D023" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex justify-between z-5 w-full items-end mb-7">
                                <div className="h-[15px] w-px bg-white"></div>
                                <div className="h-[15px] w-px bg-white"></div>
                                <div className="h-[101px] w-px bg-yellow"></div>
                                <div className="h-[15px] w-px bg-white"></div>
                                <div className="h-[15px] w-px bg-white"></div>
                            </div>
                            <div className="font-sofia font-light text-[14px] text-center text-white">Scroll for more</div>
                        </div>
                    </div>
                </div>
                <div className="z-10 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-center "
                    style={{ background: 'linear-gradient(0deg, #000000 4.66%, rgba(0, 0, 0, 0) 76.78%)' }}
                >
                </div>
            </div>
        </section>
    );
}
