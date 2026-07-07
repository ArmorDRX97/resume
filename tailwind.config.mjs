/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        muted: '#4B5563',
        line: '#E5E7EB',
        canvas: '#F7F8FA',
        blue: '#2563EB',
        cyan: '#06B6D4',
        violet: '#6366F1',
        graphite: '#0B1120',
      },
      boxShadow: {
        soft: '0 18px 70px rgba(15, 23, 42, 0.10)',
        glow: '0 22px 80px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
};
