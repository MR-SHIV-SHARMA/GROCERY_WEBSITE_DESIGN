/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px", // => @media (min-width: 576px) { ... }
        "2xs": "576px", // => @media (min-width: 576px) { ... }
        // 'md': '768px',  // => @media (min-width: 768px) { ... }
        // 'lg': '992px',  // => @media (min-width: 992px) { ... }
        "2xl": "1280px", // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
