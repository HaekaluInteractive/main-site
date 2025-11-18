/**
 * Haeka Interactive Design Tokens
 * Centralized brand values for consistent theming
 * Reference: VISUAL_IDENTITY_SYSTEM.md
 */

export const colors = {
  // Primary Palette
  obsidianBlack: '#0A0A0C',
  deepIndigo: '#1A1F3B',
  electricBlue: '#3B82F6',

  // Secondary Palette
  solarGold: '#F4C95D',
  crimsonPulse: '#D62828',
  techSlate: '#64748B',

  // Extended Palette
  primaryDark: '#0A0F1F',
  primaryLight: '#182033',

  // Grays
  gray: {
    100: '#E6E6E6',
    300: '#B3B3B3',
    600: '#4A4A4A',
    900: '#1A1A1D',
  },

  // Status
  status: {
    success: '#21C16B',
    warning: '#FFC83D',
    error: '#FF4D4F',
  },

  // Transparent variations for overlays
  overlay: {
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.10)',
    dark: 'rgba(10, 10, 12, 0.90)',
  },
} as const;

export const typography = {
  fontFamily: {
    display: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    body: 'Inter, ui-sans-serif, system-ui, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  lineHeight: {
    none: '1',
    tight: '1.1',
    heading: '1.2',
    normal: '1.5',
    body: '1.6',
    relaxed: '1.75',
  },
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.01em',
    wider: '0.05em',
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
  full: '9999px',
} as const;

export const boxShadow = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.15)',
  DEFAULT: '0 4px 8px rgba(0, 0, 0, 0.2)',
  md: '0 4px 12px rgba(0, 0, 0, 0.2)',
  lg: '0 8px 24px rgba(0, 0, 0, 0.35)',
  xl: '0 12px 32px rgba(0, 0, 0, 0.4)',

  // Glow effects
  glow: '0 0 40px rgba(59, 130, 246, 0.4)',
  glowGold: '0 0 32px rgba(244, 201, 93, 0.3)',
  glowCrimson: '0 0 24px rgba(214, 40, 40, 0.3)',

  // Neon effects
  neon: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
  neonGold: '0 0 20px rgba(244, 201, 93, 0.5), 0 0 40px rgba(244, 201, 93, 0.2)',
} as const;

export const animation = {
  duration: {
    instant: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '450ms',
    slower: '600ms',
    slowest: '1000ms',
  },
  easing: {
    // Standard easings
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

    // Custom Haeka easings
    cinematic: 'cubic-bezier(0.65, 0.0, 0.35, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    smooth: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;
