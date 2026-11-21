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
        // Crest-Sampled Deep Forest Green (Primary Brand)
        forest: {
          50: '#f2f6f5',
          100: '#e1edea',
          200: '#c4dbd5',
          300: '#9bc0b7',
          400: '#6f9f95',
          500: '#4e8277',
          600: '#3c675f',
          700: '#2f514b',
          800: '#233d38',
          900: '#1b3832', // Primary deep green from crest
          950: '#0e1f1c',
          DEFAULT: '#1b3832',
        },
        // Crest-Sampled Restrained Purple / Plum (Heritage Accent)
        plum: {
          50: '#f8f6f8',
          100: '#f0ecf1',
          200: '#e3dae4',
          300: '#cebfcf',
          400: '#b29bb4',
          500: '#957897',
          600: '#7a5d7c',
          700: '#664c67',
          800: '#553f56',
          900: '#473648',
          DEFAULT: '#5f4c5f', // Crest plum
        },
        // Crest-Sampled Muted Gold / Warm Brass
        gold: {
          50: '#fbf8f0',
          100: '#f5eedb',
          200: '#ebdbb4',
          300: '#dfc488',
          400: '#d3ab5e',
          500: '#c29b38', // Crest gold
          600: '#a77f2c',
          700: '#856124',
          800: '#6d4f23',
          900: '#5c4221',
          DEFAULT: '#c29b38',
        },
        // Charcoal & Slate (Warm Neutral Reading Text)
        charcoal: {
          50: '#f6f7f7',
          100: '#eceeee',
          200: '#d5d9da',
          300: '#b0b8ba',
          400: '#849194',
          500: '#647276',
          600: '#525e62',
          700: '#434d50',
          800: '#373f41',
          900: '#1e2528',
          950: '#13181a',
          DEFAULT: '#1e2528',
        },
        // Warm Off-White / Alabaster Backgrounds
        ivory: {
          50: '#fdfcf9',
          100: '#faf9f5',
          200: '#f4f1ea',
          300: '#eae4d7',
          400: '#ddd4c0',
          DEFAULT: '#faf9f5',
        },
        // Backwards compatibility mappings
        navy: {
          DEFAULT: '#1b3832', // Aliased to Forest Green
          dark: '#132824',
          light: '#2a524a',
          subtle: '#f0f5f3',
        },
        saffron: {
          DEFAULT: '#c29b38',
          dark: '#9c781e',
          light: '#dfc488',
          soft: '#fbf8f0',
        },
        cream: '#faf9f5',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
