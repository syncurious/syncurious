import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient-white': 'var(--radial-gradient-white)',
      },
      fontFamily: {
        primary: "var(--font-primary)",
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': '480px',   // Larger mobile screens
        'tablet': '768px',   // Tablets and small devices
        'laptop': '1024px',  // Standard laptops
        'desktop': '1280px', // Larger desktops
        'wide': '1440px',    // Wide screens
        'ultrawide': '1920px' // Ultra-wide screens
      },
    },
  },
  plugins: [],
} satisfies Config;
