/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6576FF",
        secondary: "#ffed4a",
        danger: "#e3342f",
        "brand-purple": "#816BFF",
        "brand-blue": "#4B97D3",
        "brand-turquoise": "#1FCEC9",
        "brand-black": "#3B4747",
      },
    },
  },
  plugins: [],
};
