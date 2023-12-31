/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/images/login-signup-bg.png')",
        "homepage-bg": "url('/images/homepage-bg.png')",
      },
      colors: {
        primary: "#323377",
        secondary: "#F4F4F4",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["18px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};
