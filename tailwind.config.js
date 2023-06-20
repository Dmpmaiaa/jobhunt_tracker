/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/images/login-signup-bg.png')"
      },
      colors: {
        'primary': '#323377',
        'secondary': '#F4F4F4',
        
      }
    },
  },
  plugins: [],
}
