// tailwind.config.js
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ], safelist: [
    'text-orange-500',
    'text-blue-500',
    'text-green-600',
    'text-red-500',
    'text-yellow-500',
    'text-purple-500',
    'bg-orange-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-red-100',
    'bg-yellow-100',
    'bg-purple-100',
    'bg-orange-50',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'cfi-lighter-blue': 'rgb(214 212 255)',
      },
    },
  },
  plugins: [typography],
}
