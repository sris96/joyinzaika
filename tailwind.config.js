/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'golden': {
          50: '#fdfbf4',
          100: '#faf4e0',
          200: '#f5e8c1',
          300: '#efd598',
          400: '#e8bd6e',
          500: '#daa520',
          600: '#c4931d',
          700: '#a37919',
          800: '#846119',
          900: '#6c5018',
        },
        'warm': {
          50: '#fdf8f3',
          100: '#faeee2',
          200: '#f4dbc4',
          300: '#ecc39d',
          400: '#e2a574',
          500: '#d88954',
          600: '#c97248',
          700: '#a75a3c',
          800: '#874936',
          900: '#6f3d2f',
        },
        'earth': {
          50: '#f9f6f3',
          100: '#f2ebe2',
          200: '#e3d3c3',
          300: '#d0b39d',
          400: '#ba8f76',
          500: '#a9735a',
          600: '#9c604e',
          700: '#824d42',
          800: '#6a403a',
          900: '#583531',
        },
        'sage': {
          50: '#f6f9f5',
          100: '#e9f0e6',
          200: '#d3e1cd',
          300: '#b0c9a5',
          400: '#87ab77',
          500: '#668e54',
          600: '#507340',
          700: '#405b35',
          800: '#35492d',
          900: '#2d3d27',
        }
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Yeseva One', 'Georgia', 'serif'],
        'brand': ['Bebas Neue', 'Impact', 'sans-serif'],
        'comfort': ['Comfortaa', 'Circular', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-light': 'bounceLight 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}