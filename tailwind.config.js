module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27496c",
          secondary: "#f5b971",
          accent: "#f0f0f0",
          textColor: "#1a1a1a1a",
          neutral: "#f0f0f0",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
