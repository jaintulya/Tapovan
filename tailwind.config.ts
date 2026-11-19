import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f2b5c',
          dark: '#081733',
          light: '#1e3a8a',
          subtle: '#f0f4fa'
        },
        saffron: {
          DEFAULT: '#d97706',
          dark: '#b45309',
          light: '#fbbf24',
          soft: '#fef3c7'
        },
        gold: '#f59e0b',
        cream: '#fbfbf9',
        emerald: {
          DEFAULT: '#059669',
          soft: '#ecfdf5'
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
