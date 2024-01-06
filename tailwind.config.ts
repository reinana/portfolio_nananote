import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                pudding: "#FFD37A",
                caramel: "#CF7508",
                lightYellow: "#F5EECA",
                black: "#020201"
            },
            boxShadow: {
                "2xl" : "20px 20px 60px #bebebe"
            },
            animation: {
                "kenburns-right": "kenburns-right 5s ease   both"
            },
            keyframes: {
                "kenburns-right": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "84% 50%"
                    },
                    to: {
                        transform: "scale(1.25) translateX(20px)",
                        "transform-origin": "right"
                    }
                }
            }
        },
    },
    plugins: [],
};
export default config;
