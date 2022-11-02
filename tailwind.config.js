/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./Sections/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                leftLine: "leftLine 1s linear infinite",
                topLine: "topLine 1s linear infinite",
                rightLine: "rightLine 1s linear infinite",
                bottomLine: "bottomLine 1s linear infinite",
            },
            keyframes: {
                leftLine: {
                    "0%": {
                        left: "-100%",
                    },
                    "50%, 100%": {
                        left: "100%",
                    },
                },
                topLine: {
                    "0%": {
                        top: "-100%",
                    },
                    "50%, 100%": {
                        top: "100%",
                    },
                },
                rightLine: {
                    "0%": {
                        right: "-100%",
                    },
                    "50%, 100%": {
                        right: "100%",
                    },
                },
                bottomLine: {
                    "0%": {
                        bottom: "-100%",
                    },
                    "50%, 100%": {
                        bottom: "100%",
                    },
                },
            },
        },
        screens: {
            ss: "450px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1281px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
