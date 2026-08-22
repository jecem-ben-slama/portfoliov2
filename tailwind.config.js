/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-raised': 'var(--ink-raised)',
        paper: 'var(--paper)',
        'paper-dim': 'var(--paper-dim)',
        line: 'var(--line)',
        signal: 'var(--signal)',
        'signal-dim': 'var(--signal-dim)',
        state: 'var(--state)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

