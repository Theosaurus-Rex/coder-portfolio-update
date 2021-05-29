module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Anonymous Pro', 'monospace'],
      'subheading': ['Raleway', 'sans-serif'],
      'body': ['Courier Prime', 'monospace']
     },
    extend: {
      backgroundImage: theme => ({
        'heart': "url('img/pixel-heart.png')",
       }),
      colors: {
        'robins-egg-blue': {
          DEFAULT: '#00C4CC',
          '50': '#B3FCFF',
          '100': '#99FBFF',
          '200': '#66F9FF',
          '300': '#33F7FF',
          '400': '#00F5FF',
          '500': '#00C4CC',
          '600': '#009399',
          '700': '#006266',
          '800': '#003133',
          '900': '#000000'
        },
        'cream': {
          DEFAULT: '#F8F8EF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F8F8EF',
          '600': '#E8E8CC',
          '700': '#D9D9A8',
          '800': '#C9C985',
          '900': '#BABA61'
        },

        'coral': {
          DEFAULT: '#FF8882',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFE9E8',
          '400': '#FFB9B5',
          '500': '#FF8882',
          '600': '#FF574F',
          '700': '#FF271C',
          '800': '#E80B00',
          '900': '#B50900'
        },
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
