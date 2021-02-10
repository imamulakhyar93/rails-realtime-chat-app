module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        royalblue: {
          50: "#f0f9fb",
          100: "#daf7f8",
          200: "#adeef1",
          300: "#75e1eb",
          400: "#30c8e2",
          500: "#11a8d5",
          600: "#0d87be",
          700: "#126c99",
          800: "#135371",
          900: "#124358",
        },
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
  purge: {
    content: ["./app/**/*.html.erb"],
  },
};
