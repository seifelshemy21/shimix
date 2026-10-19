/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Canvas & Surface Hierarchy
        background: "#03040A",
        surface: "#10131c",
        "surface-dim": "#10131c",
        "surface-bright": "#363943",
        "surface-container-lowest": "#0b0e17",
        "surface-container-low": "#181b25",
        "surface-container": "#1c1f29",
        "surface-container-high": "#272a34",
        "surface-container-highest": "#32343f",
        "surface-variant": "#32343f",

        // Primary Tones (Electric Blue & Photonic Cyan)
        primary: "#a1c9ff",
        "on-primary": "#00325a",
        "primary-container": "#0096ff",
        "on-primary-container": "#002d52",
        "primary-fixed": "#d2e4ff",
        "primary-fixed-dim": "#a1c9ff",
        "on-primary-fixed": "#001c37",
        "on-primary-fixed-variant": "#00487f",
        "inverse-primary": "#0061a7",
        "surface-tint": "#a1c9ff",

        // Secondary Tones (Violet & Purple)
        secondary: "#cfbdff",
        "on-secondary": "#3a0092",
        "secondary-container": "#6700f6",
        "on-secondary-container": "#d5c5ff",
        "secondary-fixed": "#e9ddff",
        "secondary-fixed-dim": "#cfbdff",
        "on-secondary-fixed": "#22005d",
        "on-secondary-fixed-variant": "#5400cc",

        // Tertiary Tones (Photonic Cyan)
        tertiary: "#68d3ff",
        "on-tertiary": "#003546",
        "tertiary-container": "#009fcb",
        "on-tertiary-container": "#003040",
        "tertiary-fixed": "#bee9ff",
        "tertiary-fixed-dim": "#68d3ff",
        "on-tertiary-fixed": "#001f2a",
        "on-tertiary-fixed-variant": "#004d64",

        // Text & Outlines
        "on-surface": "#e0e2ef",
        "on-surface-variant": "#bfc7d5",
        "inverse-surface": "#e0e2ef",
        "inverse-on-surface": "#2d303a",
        "on-background": "#e0e2ef",
        outline: "#89919e",
        "outline-variant": "#3f4753",

        // Semantic & Error
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "status-live": "#00e676",

        // Legacy / Shimix Namespace Aliases
        shimix: {
          black: "#03040A",
          surface: "#080B14",
          card: "#0D1120",
          blue: "#0096FF",
          cyan: "#00C8FF",
          indigo: "#4030F0",
          purple: "#7020FF",
          white: "#F5F7FA",
          muted: "#8B93A7",
          border: "#1B2235",
        },
      },
      fontFamily: {
        "display-hero": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "headline-sm": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "code-md": ["JetBrains Mono", "monospace"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-hero-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "code-md": ["14px", { lineHeight: "22px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "600" }],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
      },
      backgroundImage: {
        "shimix-gradient": "linear-gradient(135deg, #00C8FF 0%, #0096FF 50%, #4030F0 100%)",
        "shimix-gradient-purple": "linear-gradient(135deg, #0096FF 0%, #7020FF 100%)",
        "shimix-button": "linear-gradient(to right, #0096ff 0%, #4030f0 50%, #7020ff 100%)",
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "spin-reverse-slow": "spin-reverse 38s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};