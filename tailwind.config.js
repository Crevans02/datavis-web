module.exports = {
  purge: [],
  theme: {
    extend: {
      opacity: {
        '10': '0.1'
      }
    },
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      dark: '#0E1723',
      'primary': '#FFD262',
      'primary-shadow': '#E4B24E',
      'twitter': '#00ACED',
      'twitter-shadow': '#0D8BBA',
      'github': '#211F1F',
      'github-shadow': '#000000',
      beige: '#FAF9F7',
      white: {
        100: '#fff',
        75: 'rgba(255,255,255,0.75)',
        50: 'rgba(255,255,255,0.50)',
        25: 'rgba(255,255,255,0.25)',
        10: 'rgba(255,255,255,0.1)',
        05: 'rgba(255,255,255,0.05)',
      }
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['p22-mackinac-pro', 'serif'],
    },
    boxShadow: {
      default: '4px 4px 0px 0 rgba(0, 0, 0, 0.05)',
      primary: '4px 4px 0px 0 rgba(228, 178, 78, 1)',
      twitter: '4px 4px 0px 0 rgba(13, 139, 186, 1)',
      github: '4px 4px 0px 0 rgba(0, 0, 0, 1)',
    }
  },
  variants: {},
  plugins: [],
}
