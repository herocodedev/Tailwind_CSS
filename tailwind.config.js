module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          to: { display: "flex" },
          from: { display: "none" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
