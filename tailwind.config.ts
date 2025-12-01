import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        horizon: {
          blue: '#1C4B82',
          orange: '#FF6B35',
          gold: '#F5C16C',
          midnight: '#0A0E1A',
          mint: '#9AE3D4',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(28, 75, 130, 0.35)',
        neon: '0 0 25px rgba(255, 107, 53, 0.35)',
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(28, 75, 130, 0.25), transparent 30%), radial-gradient(circle at 50% 80%, rgba(154, 227, 212, 0.2), transparent 35%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
