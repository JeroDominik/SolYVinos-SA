import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: '(min-aspect-ratio: 3/2)' },
        tallscreen: { raw: '(min-aspect-ratio: 13/20)' }
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' }
        },
        'nav-shadown': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'nav-shadown': 'nav-shadown 1s linear both',
        slideIn: 'slideIn 0.7s ease-in-out forwards'
      }
    }
  },
  variants: {
    extend: {
      scrollBehavior: ['responsive']
    }
  },
  plugins: []
}
export default config
