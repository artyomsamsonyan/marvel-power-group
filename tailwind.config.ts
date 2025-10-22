import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: '#F6D330',
                black: '#000',
                textBlack: '#0B0D21',
                darkPurple: '#210B20',
            },
            fontFamily: {
                alata: ['Alata', 'sans-serif'],
                sofia: ['Sofia Pro', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;