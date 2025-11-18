/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Brand Colors (Exact hex values from brand guidelines)
      colors: {
        // Primary Palette
        obsidian: '#0A0A0C',
        indigo: {
          DEFAULT: '#1A1F3B',
          dark: '#0A0F1F',
          light: '#182033',
        },
        blue: {
          DEFAULT: '#3B82F6',
          electric: '#3B82F6',
        },

        // Secondary Palette
        gold: {
          DEFAULT: '#F4C95D',
          solar: '#F4C95D',
        },
        crimson: '#D62828',
        slate: {
          DEFAULT: '#64748B',
          tech: '#64748B',
        },

        // Grays
        gray: {
          100: '#E6E6E6',
          300: '#B3B3B3',
          600: '#4A4A4A',
          900: '#1A1A1D',
        },

        // Status
        success: '#21C16B',
        warning: '#FFC83D',
        error: '#FF4D4F',
      },

      // Typography
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },

      // Spacing (4px base grid)
      spacing: {
        '0': '0',
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
        '40': '10rem',    // 160px
        '48': '12rem',    // 192px
      },

      // Border Radius
      borderRadius: {
        none: '0',
        sm: '0.25rem',    // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.5rem',     // 8px
        lg: '0.75rem',    // 12px
        xl: '1rem',       // 16px
        '2xl': '1.5rem',  // 24px
        '3xl': '2rem',    // 32px
        full: '9999px',
      },

      // Box Shadows (Cinematic depth)
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.15)',
        DEFAULT: '0 4px 8px rgba(0, 0, 0, 0.2)',
        md: '0 4px 12px rgba(0, 0, 0, 0.2)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.35)',
        xl: '0 12px 32px rgba(0, 0, 0, 0.4)',
        '2xl': '0 20px 48px rgba(0, 0, 0, 0.5)',

        // Glow effects
        glow: '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-gold': '0 0 32px rgba(244, 201, 93, 0.3)',
        'glow-crimson': '0 0 24px rgba(214, 40, 40, 0.3)',

        // Neon effects
        neon: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
        'neon-gold': '0 0 20px rgba(244, 201, 93, 0.5), 0 0 40px rgba(244, 201, 93, 0.2)',

        // Inner shadows
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      },

      // Animations & Transitions
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        DEFAULT: '300ms',
        slow: '450ms',
        slower: '600ms',
        slowest: '1000ms',
      },

      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.65, 0.0, 0.35, 1)',
        sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
        smooth: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
      },

      // Keyframe Animations
      keyframes: {
        // Fade animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

        // Slide animations
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        // Scale animations
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },

        // Glow pulse
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244, 201, 93, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(244, 201, 93, 0.6)' },
        },
        glowPulseBlue: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },

        // Scan line
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },

        // Shimmer
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // Float
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        // Spin (slow)
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        // Fade
        'fade-in': 'fadeIn 600ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',
        'fade-out': 'fadeOut 300ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',

        // Slide
        'slide-up': 'slideUp 600ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',
        'slide-down': 'slideDown 600ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',
        'slide-left': 'slideLeft 600ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',
        'slide-right': 'slideRight 600ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',

        // Scale
        'scale-in': 'scaleIn 300ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',
        'scale-out': 'scaleOut 300ms cubic-bezier(0.65, 0.0, 0.35, 1) forwards',

        // Effects
        'glow-pulse': 'glowPulse 1500ms ease-in-out infinite',
        'glow-pulse-blue': 'glowPulseBlue 1500ms ease-in-out infinite',
        'scan-line': 'scanLine 2000ms linear infinite',
        'shimmer': 'shimmer 2000ms linear infinite',
        'float': 'float 3000ms ease-in-out infinite',
        'spin-slow': 'spinSlow 3000ms linear infinite',
      },

      // Background Images & Patterns
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },

      backgroundSize: {
        'grid': '40px 40px',
      },

      // Z-Index
      zIndex: {
        'base': '0',
        'dropdown': '1000',
        'sticky': '1100',
        'fixed': '1200',
        'modal-backdrop': '1300',
        'modal': '1400',
        'popover': '1500',
        'tooltip': '1600',
      },

      // Max widths (content containers)
      maxWidth: {
        'container': '1200px',
        'prose': '700px',
      },
    },
  },
  plugins: [],
}
