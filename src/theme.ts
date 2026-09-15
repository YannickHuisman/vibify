export const theme = {
  colors: {
    orange: '#ff5100',
    orangeDark: '#d14200',
    orangeSoft: 'rgba(255, 81, 0, 0.12)',

    mars: '#6d222a',
    marsSoft: 'rgba(109, 34, 42, 0.16)',
    marsStrong: '#8a2b35',

    green: '#1db954',
    greenSoft: 'rgba(29, 185, 84, 0.12)',

    ink: '#16181d',

    text: '#16181d',
    muted: '#767c88',

    background: '#eef0f5',
    surface: '#ffffff',
    surfaceSoft: '#f5f6fa',

    topBar: '#ff5100',
    topBarText: '#ffffff',
    topBarHover: 'rgba(255, 255, 255, 0.16)',

    focus: '#ff5100',
    onAccent: '#ffffff',

    toast: '#16181d',
    toastText: '#ffffff',
    backdrop: 'rgba(22, 24, 29, 0.5)',
  },

  fonts: {
    display: 'var(--font-display), system-ui, sans-serif',
    body: 'var(--font-body), system-ui, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    display: '28px',
    hero: '40px',
  },

  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  radius: {
    sm: '6px',
    md: '14px',
    lg: '20px',
    pill: '999px',
  },

  glass: {
    toolbar: 'rgba(238, 240, 245, 0.72)',
    surface: 'rgba(255, 255, 255, 0.72)',
    surfaceStrong: 'rgba(255, 255, 255, 0.92)',
    blur: 'blur(16px) saturate(180%)',
  },

  shadows: {
    card: '0 1px 2px rgba(22, 24, 29, 0.04), 0 6px 16px rgba(22, 24, 29, 0.06)',
    cardHover: '0 2px 4px rgba(22, 24, 29, 0.06), 0 16px 32px rgba(22, 24, 29, 0.14)',
    bar: '0 1px 3px rgba(22, 24, 29, 0.08), 0 8px 24px rgba(22, 24, 29, 0.08)',
    float: '0 24px 64px rgba(22, 24, 29, 0.28)',
    inset: 'inset 0 1px 3px rgba(22, 24, 29, 0.07)',
  },

  durations: {
    fast: '150ms',
    base: '220ms',
  },

  layout: {
    topBarHeight: '60px',
    sidebarWidth: '232px',
    contentWidth: '960px',
    mainPadding: '24px',
  },

  breakpoints: {
    mobile: 768,
  },
} as const;

export type Theme = typeof theme;
