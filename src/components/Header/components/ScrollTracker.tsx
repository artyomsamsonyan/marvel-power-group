"use client";
import { useEffect, useState } from "react";

interface Section {
    id: string;
    title: string;
    theme: "light" | "dark";
}

const sections: Section[] = [
    { id: "hero", title: "Home", theme: "dark" },
    { id: "about", title: "About", theme: "light" },
    { id: "services", title: "Services", theme: "light" },
    { id: "contact", title: "Contact", theme: "dark" },
];


export default function ScrollTracker() {
    const [activeSection, setActiveSection] = useState<string>("");
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        const matchedSection = sections.find((s) => s.id === id);
                        if (matchedSection) {
                            setActiveSection(matchedSection.id);
                            setTheme(matchedSection.theme);
                        }
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end gap-[26px] z-60`}
        >
            {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                const lineColor = theme === "dark" ? "bg-white" : "bg-dark-purple";

                return (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`relative flex items-center gap-1.5 transition-all duration-300 ${theme === "dark" ? "text-white" : "text-dark-purple"
                            }`}
                    >
                        <span className="text-[10px] font-sofiaNormal font-normal leading-3">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {isActive ? (
                            <>
                                <span className="text-3.5 font-sofiaLight font-light leading-[15px] font-medium">
                                    {section.title}
                                </span>
                                <span
                                    className={`h-[1px] transition-all duration-500 ease-in-out ${lineColor}`}
                                    style={{ width: "60px" }}
                                ></span>
                            </>
                        ) : (
                            <span
                                className={`h-[1px] transition-all duration-500 ease-in-out ${lineColor}`}
                                style={{ width: "21px" }}
                            ></span>
                        )}
                    </a>
                );
            })}
        </nav>
    );
}