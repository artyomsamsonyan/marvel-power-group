"use client";

import Arrow from "./components/ArrowRight";
import Bullet from "./components/Bullet";

const servicesData = [
    {
        title: "Enterprise Strategy",
        link: "#contact",
        items: [
            "Procurement and investment diligence",
            "Customer engagement and retention",
            "Renewable, DER, and EV program structuring",
            "Reliability planning and reporting",
        ],
    },
    {
        title: "Wholesale Power",
        link: "#contact",
        items: [
            "Commodity advisory and RFPs",
            "Energy, capacity, REC, RIN, and LCFS placement",
            "Enterprise PPA structuring",
            "Contract extensions and re‑packaging",
        ],
    },
    {
        title: "Market Development",
        link: "#contact",
        items: [
            "New venture setup",
            "Demand planning and acquisition",
            "Project development and regulatory support",
            "Partnership structuring",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative bg-yellow">
            <div className="relative z-20 mx-auto max-w-[1142px] px-[15px] pt-[54px] md:pt-[101px] pb-[62px] md:pb-[130px]">
                <h2
                    className="font-alata font-normal text-black mb-[35px] md:mb-[62px]"
                    style={{
                        fontSize: 'clamp(40px, 6vw, 90px)',
                        lineHeight: 'clamp(34px, 6vw, 80px)',
                    }}
                >
                    Services
                </h2>

                <div
                    className="mb-[24px] md:mb-[45px] bg-white"
                    style={{
                        height: 'clamp(4px, 0.5vw, 6px)',
                        width: 'clamp(65px, 8vw, 100px)',
                    }}
                />

                <div
                    className="max-w-[837px] font-sofia font-light text-black mb-[56px] md:mb-[47px]"
                    style={{
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        lineHeight: 'clamp(24px, 2vw, 26px)',
                    }}
                >
                    <p>
                        Our clients are at the forefront of energy transition and innovation. Their task is complex: balance reliability and cost effectiveness with new customer demands, investment decisions, decarbonization goals and an evolving menu of new technologies. We understand the task and bring deep expertise to addressing these challenges.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-[54px] md:gap-[30px]">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex-1">
                            <h3
                                className="font-sofia font-bold text-black max-w-[288px] mb-[25px] md:mb-[33px]"
                                style={{
                                    fontSize: 'clamp(25px, 3vw, 40px)',
                                    lineHeight: 'clamp(16px, 3.5vw, 42px)',
                                }}
                            >
                                {service.title}
                            </h3>

                            <ul className="space-y-3">
                                {service.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-[9px] md:gap-[15px] font-sofia font-light text-black"
                                        style={{
                                            fontSize: 'clamp(14px, 1.5vw, 18px)',
                                            lineHeight: 'clamp(16px, 1.8vw, 20px)',
                                        }}
                                    >
                                        <Bullet />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={service.link}
                                aria-label={`Contact us about ${service.title}`}
                                className="mt-[25px] md:mt-[41px] ml-[13px] md:ml-[20px] inline-flex items-center transition-opacity hover:opacity-70 focus:outline-2 focus:outline-black focus:outline-offset-4"
                            >
                                <Arrow />
                            </a>
                        </div>
                    ))}
                </div>

                <div
                    className="font-sofia font-light text-black mt-[40px] md:mt-[47px] max-w-[837px]"
                    style={{
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        lineHeight: 'clamp(24px, 2vw, 26px)',
                    }}
                >
                    <p>
                        Our clients are time constrained and under‑resourced. Agendas shift, budgets move and priorities change. We understand. We are agile, creative and immediately responsive to your various working styles, governance requirements and evolving needs.
                    </p>
                </div>
            </div>

            <div
                className="absolute bottom-[-7px] left-0 right-0 hidden md:flex flex-col items-center justify-center w-full"
                aria-hidden="true"
            >
                <div className="flex justify-between z-5 w-full items-end">
                    <div className=""></div>
                    <div className="h-[15px] w-px bg-black"></div>
                    <div className="h-[15px] w-px bg-black"></div>
                    <div className="h-[15px] w-px bg-black"></div>
                    <div className="h-[15px] w-px bg-black"></div>
                    <div className="h-[15px] w-px bg-black"></div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    );
}