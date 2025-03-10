/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./sofia-pdf-app/**/*.{js,ts,jsx,tsx,vue}', './components/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      'sm': '481px',     // Больше 480px
      'md': '769px',     // Больше 768px
      'lg': '1025px',    // Больше 1024px
      'xl': '1281px',    // Больше 1280px
      '2xl': '1537px',   // Больше 1536px
    },
    spacing: {
      0: '0',
      1: '0.25rem',    // 4px
      2: '0.5rem',     // 8px
      3: '0.75rem',    // 12px
      4: '1rem',       // 16px
      5: '1.25rem',    // 20px
      6: '1.5rem',     // 24px
      8: '2rem',       // 32px
      10: '2.5rem',    // 40px
      12: '3rem',      // 48px
      16: '4rem',      // 64px
      20: '5rem',      // 80px
      24: '6rem',      // 96px
      32: '8rem',      // 128px
      40: '10rem',     // 160px
      48: '12rem',     // 192px
      56: '14rem',     // 224px
      64: '16rem',     // 256px
    },
    fontSize: {
      xs: '1.0rem',     // 10px
      sm: '1.2rem',     // 12px
      base: '1.4rem',   // 14px
      lg: '1.6rem',     // 16px
      xl: '1.8rem',     // 18px
      '2xl': '2.0rem',  // 20px
      '3xl': '2.4rem',  // 24px
      '4xl': '3.0rem',  // 30px
      '5xl': '3.6rem',  // 36px
      '6xl': '4.0rem',  // 40px
      '7xl': '4.8rem',  // 48px
      '8xl': '6.0rem',  // 60px
      '9xl': '8.0rem',  // 80px
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--bg-color))',
        foreground: 'hsl(var(--fg-color))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
