/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4285F4", // Google blue
        secondary: "#EA4335", // Google red
        accent1: "#FBBC05", // Google yellow
        accent2: "#34A853", // Google green
        neutral: "#F8F9FA", // Light gray background
        dark: "#202124", // Dark text
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};
