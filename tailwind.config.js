/** @type {import('tailwindcss').Config} */
const zinc = {
    z50: "rgb(250, 250, 250)",
    z100: "rgb(244, 244, 245)",
    z200: "rgb(228, 228, 231)",
    z300: "rgb(212, 212, 216)",
    z400: "rgb(161, 161, 170)",
    z500: "rgb(113, 113, 122)",
    z600: "rgb(82, 82, 91)",
    z700: "rgb(63, 63, 70)",
    z800: "rgb(39, 39, 42)",
    z900: "rgb(24, 24, 27)",
    z950: "rgb(9, 9, 11)",
}
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontSize: {
                xs: ["clamp(0.8rem, calc(0.68rem + 0.29vw), 1rem)", "1.2"],
                sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.5"],
                base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
                lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.5"],
                xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
                "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.73rem)", "1.2"],
                "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
                "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
                "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
                "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
            },
            borderColor: {
                DEFAULT: require("./src/styles/theme").nextDark["base-100"],
            },
            borderRadius: {
                sq: "21%",
            },
            boxShadow: {
                box: "0 0 12px 0 rgb(0 0 0 / 0.2), 0 0 6px 0 rgb(0 0 0 / 0.2)",
            },
            maxWidth: {
                "prose-narrow": "45ch",
                "prose-wide": "80ch",
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },

    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-animate"),
        require("@headlessui/tailwindcss")({ prefix: "ui" }),

        function ({ addComponents }) {
            addComponents({
                ".bg-blur": {
                    "&::before": {
                        content: `""`,
                        pointerEvents: "none",
                        position: "absolute",
                        inset: "0",
                        zIndex: "-1",
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                        backdropFilter: "blur(16px) saturate(1.8)",
                    },
                },
            })
        },
    ],

    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [
            { ...require("./src/styles/theme") },
            "winter",
            {
                testTheme: {
                    primary: "#0ea5e9",
                    secondary: "#6366f1",
                    accent: "#e879f9",
                    neutral: "#4b5563",
                    "base-100": "#111827",
                    info: "#2dd4bf",
                    success: "#4ade80",
                    warning: "#facc15",
                    error: "#f87171",
                },
            },
            {
                night: {
                    ...require("daisyui/src/colors/themes")["[data-theme=night]"],
                    neutral: zinc.z600,
                    "neutral-focus": zinc.z500,
                    "base-100": zinc.z700,
                    "base-200": zinc.z800,
                    "base-300": zinc.z950,
                },
            },
        ],
    },
}
