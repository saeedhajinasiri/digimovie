/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#121212',
      'grey': {
        50: '#f7f7f7',
        100: '#b7b7b7',
        200: '#acacac',
        300: '#a5a5a5',
        400: '#9e9e9e',
        500: '#8d8d8d',
        600: '#707070',
        700: '#545556',
        800: "#373737",
        900: '#2e2e2e',
      },
      'primary': {
        light: '#7DE5CB',
        DEFAULT: '#27D4A8',
        dark: '#177F65',
      },
      'secondary': {
        light: '#ffffff',
        DEFAULT: '#f7f8fc',
        dark: '#c4c5c9',
      },
      'tertiary': {
        light: '#ffffff',
        DEFAULT: '#d1d1d1',
        dark: '#a0a0a0',
      },
      'info': {
        light: '#B5D9FD',
        DEFAULT: '#84BFFC',
        dark: '#5084BA',
      },
      'success': {
        light: '#A7D4A9',
        DEFAULT: '#6CB76F',
        dark: '#416E43',
      },
      'warning': {
        light: '#FACB7E',
        DEFAULT: '#F7A928',
        dark: '#946518',
      },
      'danger': {
        light: '#F7B1B1',
        DEFAULT: '#F27D7D',
        dark: '#AB4D4D',
      },
      'control': {
        light: '#ffffff',
        DEFAULT: '#ffffff',
        dark: '#cccccc',
      },
      'purple': {
        light: '#ABA2F9',
        DEFAULT: '#6F63EE',
        dark: '#3A31AB',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
    },
    fontFamily: {
      'sans-regular': 'IRANSansRegular',
      'sans-medium': 'IRANSansMedium',
      'sans-bold': 'IRANSansBold',
      'sans-light': 'IRANSansLight',
    },
    fontSize: {
      'm-xxs': '0.4rem',
      'm-xs': '0.5rem',
      'm-sm': '0.625rem',
      'm-base': '0.75rem',
      'm-lg': '0.875rem',
      'm-xl': '0.9375rem',
      'm-xxl': '1rem',

      't-xxs': '0.5rem',
      't-xs': '0.625rem',
      't-sm': '0.75rem',
      't-base': '0.875rem',
      't-lg': '1rem',
      't-xl': '1.125rem',
      't-xxl': '1.25rem',

      'd-xxs': '0.75rem',
      'd-xs': '0.875rem',
      'd-sm': '1rem',
      'd-base': '1.125rem',
      'd-lg': '1.25rem',
      'd-xl': '1.5rem',
      'd-xxl': '1.75rem',
    },
    lineHeight: {
      'm-xs': '1rem',
      'm-sm': '1.25rem',
      'm-base': '1.5rem',
      'm-lg': '1.75rem',
      'm-xl': '1.875rem',
      'm-xxl': '2rem',

      't-xs': '1.25rem',
      't-sm': '1.5rem',
      't-base': '1.75rem',
      't-lg': '2rem',
      't-xl': '2.25rem',
      't-xxl': '2.5rem',

      'd-xs': '1.75rem',
      'd-sm': '2rem',
      'd-base': '2.25rem',
      'd-lg': '2.5rem',
      'd-xl': '3rem',
      'd-xxl': '3.5rem',
    },
    minWidth: {
      '10': '40px',
      '12': '48px',
      '14': '56px',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({addComponents}) {
      addComponents({
        '.btn-huge': {
          height: '56px',
          '@media (min-width: 640px)': {
            height: '56px',
          },
          '@media (min-width: 1024px)': {
            height: '64px',
          }
        },
        '.btn-large': {
          height: '48px',
          '@media (min-width: 640px)': {
            height: '48px',
          },
          '@media (min-width: 1024px)': {
            height: '56px',
          }
        },
        '.btn-medium': {
          height: '40px',
          '@media (min-width: 640px)': {
            height: '40px',
          },
          '@media (min-width: 1024px)': {
            height: '48px',
          }
        },
        '.btn-small': {
          height: '32px',
          '@media (min-width: 640px)': {
            height: '32px',
          },
          '@media (min-width: 1024px)': {
            height: '40px',
          }
        },
        '.btn-tiny': {
          height: '24px',
          '@media (min-width: 640px)': {
            height: '24px',
          },
          '@media (min-width: 1024px)': {
            height: '32px',
          }
        },
        '.btn-shape-huge': {
          maxWidth: '56px',
          minWidth: '56px',
          padding: 0,
          '@media (min-width: 640px)': {
            maxWidth: '56px',
            minWidth: '56px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '64px',
            minWidth: '64px',
          }
        },
        '.btn-shape-large': {
          maxWidth: '48px',
          minWidth: '48px',
          padding: 0,
          '@media (min-width: 640px)': {
            maxWidth: '48px',
            minWidth: '48px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '56px',
            minWidth: '56px',
          }
        },
        '.btn-shape-medium': {
          maxWidth: '40px',
          minWidth: '40px',
          padding: 0,
          '@media (min-width: 640px)': {
            maxWidth: '40px',
            minWidth: '40px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '48px',
            minWidth: '48px',
          }
        },
        '.btn-shape-small': {
          maxWidth: '32px',
          minWidth: '32px',
          padding: 0,
          '@media (min-width: 640px)': {
            maxWidth: '32px',
            minWidth: '32px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '40px',
            minWidth: '40px',
          }
        },
        '.btn-shape-tiny': {
          maxWidth: '24px',
          minWidth: '24px',
          padding: 0,
          '@media (min-width: 640px)': {
            maxWidth: '24px',
            minWidth: '24px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '32px',
            minWidth: '32px',
          }
        }
      })
    })
  ],
}
