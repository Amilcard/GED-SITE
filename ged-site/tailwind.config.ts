import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // GED APP IDENTITY - STRICT MATCH
        // Primary = Dark Blue Gray #2E4053 (Textes, Titres, Identité)
        primary: {
          DEFAULT: '#2E4053',
          foreground: '#FFFFFF',
          50: '#F4F6F7',
          100: '#E1E5E8',
          200: '#CED4D9',
          300: '#BCC4C9',
          400: '#5D6D7E',
          500: '#2E4053',
          600: '#283747',
          700: '#212F3C',
          800: '#1B2631',
          900: '#154360',
        },
        // Secondary = Golden Yellow #FAB231 (Action - CTA, Prix, Focus)
        secondary: {
          DEFAULT: '#FAB231',
          foreground: '#2E4053', // Contrast Text on Gold
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DC6F',
          400: '#F4D03F',
          500: '#FAB231',
          600: '#D4AC0D',
          700: '#B7950B',
          800: '#9A7D0A',
          900: '#7D6608',
        },
        // Brand Identity
        brand: {
          DEFAULT: '#2E4053', // Dark Blue
          gold: '#FAB231',
          teal: '#00D49C',
          light: '#F8F9FA',
        },
        muted: {
          DEFAULT: '#F8F9FA',
          foreground: '#6B7280',
        },
        accent: {
          DEFAULT: '#00D49C', // Teal Green
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#2E4053',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2E4053',
        },
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'sans-serif'],
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
        brand: '16px', // Keep for cards
        pill: '9999px',  // Match app style
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        md: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        lg: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'brand': '0 4px 6px -1px rgba(46, 64, 83, 0.1), 0 2px 4px -1px rgba(46, 64, 83, 0.06)',
        'brand-lg': '0 10px 15px -3px rgba(46, 64, 83, 0.1), 0 4px 6px -2px rgba(46, 64, 83, 0.05)',
        'brand-xl': '0 20px 25px -5px rgba(46, 64, 83, 0.1), 0 10px 10px -5px rgba(46, 64, 83, 0.04)',
        'brand-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.12)', // Keep this alias for ease of use if needed, but 'card-hover' is the main one from app.
      },
      spacing: {
        section: '120px',
        card: '80px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
