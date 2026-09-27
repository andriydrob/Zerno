/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3EFE6',
        ink: '#26231D',
        coffee: {
          DEFAULT: '#5B3A29',
          dark: '#3E271B'
        },
        moss: {
          DEFAULT: '#7C8B6F',
          dark: '#5F6C54'
        },
        line: '#D9D0BF'
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};
