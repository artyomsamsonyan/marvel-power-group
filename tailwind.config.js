// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                alata: ['var(--font-alata)', 'sans-serif'],
            },
            colors: {
                yellow: "#F6D330",
                "text-black": "#0B0D21",
                "dark-purple": "#210B20",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(180deg, #000000 4.66%, rgba(0, 0, 0, 0) 76.78%)",
            },
        },
    },
    plugins: [],
};
