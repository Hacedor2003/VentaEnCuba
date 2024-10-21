/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: '#c62323',
      },
      fontFamily: {
				'ArcaMajora-bold': ['ArcaMajora-bold'],
				'ArcaMajora-Heavy': ['ArcaMajora-Heavy'],
        'conthrax': ['conthrax'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}