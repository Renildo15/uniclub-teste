import type { Config } from "tailwindcss";
import daisyui from 'daisyui'
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [
    tailwindScrollbarHide,
    daisyui
  ],
  daisyui: {
    themes: ["light"]
  }
} satisfies Config;
