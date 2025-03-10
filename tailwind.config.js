/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./sofia-pdf-app/**/*.{js,ts,jsx,tsx,vue}', './components/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
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
