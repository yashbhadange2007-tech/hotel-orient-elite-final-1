const designTokens = {
  colors: {
    ink: {
      950: "#050403",
      900: "#080604",
      850: "#0d0a07",
      800: "#14100b",
      700: "#1f1710",
    },
    ivory: {
      50: "#fffaf0",
      100: "#f8eedb",
      200: "#ead8b8",
      300: "#d4bc8f",
    },
    gold: {
      100: "#fbefd0",
      200: "#efd78c",
      300: "#d8b758",
      400: "#b88e2d",
      500: "#8d651b",
    },
    ember: {
      300: "#c46c45",
      500: "#813c24",
      700: "#3a1a12",
    },
    sage: {
      300: "#b8c3a6",
      500: "#6f7c61",
      700: "#2f3729",
    },
    wine: {
      300: "#bb7b80",
      500: "#713a43",
      700: "#321920",
    },
    mist: {
      50: "rgba(255, 250, 240, 0.92)",
      100: "rgba(255, 250, 240, 0.72)",
      200: "rgba(255, 250, 240, 0.48)",
      300: "rgba(255, 250, 240, 0.26)",
      400: "rgba(255, 250, 240, 0.12)",
    },
  },
  fonts: {
    display: ['"Cormorant Garamond"', "Georgia", "serif"],
    sans: ['"Manrope"', '"Inter"', '"Segoe UI"', "Arial", "sans-serif"],
  },
  radii: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    glow: "0 0 52px rgba(212, 175, 55, 0.18)",
    luxury: "0 32px 90px rgba(0, 0, 0, 0.42)",
    inset: "inset 0 1px 0 rgba(255, 250, 240, 0.12)",
  },
  spacing: {
    cinematic: "clamp(5rem, 12vw, 10rem)",
    "section-sm": "clamp(3.5rem, 8vw, 7rem)",
    "section-md": "clamp(5rem, 10vw, 9rem)",
    "section-lg": "clamp(6rem, 14vw, 13rem)",
    gutter: "clamp(1rem, 4vw, 3rem)",
  },
  screens: {
    xs: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  transitions: {
    easing: {
      luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      hover: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
  },
};

export default designTokens;
