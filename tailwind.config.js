/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          subtle: '#181818',
          hover: '#1e1e1e',
          border: 'rgba(212, 175, 55, 0.15)',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4A460',
          champagne: '#F7E7CE',
          deep: '#B89224',
          muted: 'rgba(212, 175, 55, 0.4)',
        },
      },
      fontFamily: {
        serif: ['Zodiak', 'Playfair Display', 'Bodoni Moda', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight-hero': '-0.03em',
        'luxury': '0.3em',
        'luxury-wide': '0.4em',
        'luxury-ultra': '0.5em',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        '3d-drop': '0 25px 50px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 35px rgba(212, 175, 55, 0.25)',
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'plate-ambient': '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 120px rgba(212, 175, 55, 0.08)',
      },
      transitionTimingFunction: {
        'spring-luxury': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      animation: {
        'float-hero': 'floatHero 3s ease-in-out infinite',
        'float-reverse': 'floatReverse 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        floatHero: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-6deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-4deg)' },
        },
      },
    },
  },
  plugins: [],
}
