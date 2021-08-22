module.exports = {
  purge: [
    './src/*.html',
    './src/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': {
            opacity: '0',
            transform: 'translate(-15%)',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },

      },
      animation: {
        show: 'show 350ms ease-in',
      },
      rotate: {
        12: '12deg',
      },
      dropShadow: {
        fancy: '0 0 1px rgb(57, 185, 129)',
      },
      fontSize: {
        super: '9.5rem',
      },
      backgroundImage: {
        waves: 'url("./waves.svg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
