import designTokens from "./src/styles/design-tokens.js";

const { colors, fonts, radii, shadows, spacing, screens, transitions } = designTokens;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens,
    extend: {
      colors,
      fontFamily: fonts,
      borderRadius: radii,
      boxShadow: shadows,
      spacing,
      transitionTimingFunction: transitions.easing,
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.16), transparent 34%), linear-gradient(180deg, #080604 0%, #12100c 48%, #050403 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(212,175,55,0.75), transparent)",
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.02))",
      },
      keyframes: {
        "soft-grain": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "25%": { transform: "translate3d(-1%, 1%, 0)" },
          "50%": { transform: "translate3d(1%, -1%, 0)" },
          "75%": { transform: "translate3d(-1%, -1%, 0)" },
        },
      },
      animation: {
        "soft-grain": "soft-grain 9s steps(8) infinite",
      },
    },
  },
  plugins: [],
};
