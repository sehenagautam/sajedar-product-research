module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        emerald: {
          400: '#34d399',
          500: '#22c55e',
          600: '#16a34a',
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        },
        orange: {
          400: '#f59e42',
        },
        blue: {
          900: '#23243a',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(34,197,94,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}; 