module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  darkMode: 'class',
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      indigo: {
        light: '#3949ab',
        DEFAULT: '#5c6ac4',
        dark: '#303f9f'
      },
      white: '#ffffff',
      headerWhite: '#f6f4f2',
      blue: {
        fifty: '#e3f2fd',
        one: '#bbdefb',
        two: '#90caf9',
        eight: '#1565c0',
        five: '#2196f3',
        seven: '#1976d2',
        nine: '#0d47a1',
        light: '#207DFF',
        medium: '#005c98'
      },
      amber: {
        DEFAULT: '#ffc107',
        fifty: '#fff8e1',
        one: '#ffecb3',
        two: '#ffe082',
        five: '#ffc107',
        eight: '#ff8f00',
        nine: '#ff6f00',
        seven: '#ffa000'
      },
      black: {
        left: '#17191ad0',
        right: '#352d2d',
        borders: '',
        base: '#414141',
        dark: '#222831'
      },
      gray: {
        base: '#616161',
        background: '#FDFAF6',
        primary: '#dbdbdb',
        borderbg: '#6b6363',
        formbg: '#362525'
      },
      grey: {
        one: '#f5f5f5',
        fifty: '#fafafa',
        six: '#757575',
        seven: '#616161',
        eight: '#424242'
      },
      yellow: {
        one: '#fff9c4',
        two: '#fff59d',
        six: '#fdd835',
        five: '#ffeb3b',
        eight: '#f9a825',
        nine: '#f57f17',
        base: '#fbc02d',
        primary: '#ffff8d'
      },
      green: {
        fifty: '#f1f8e9',
        one: '#dcedc8',
        two: '#c5e1a5',
        four: '#66bb6a',
        five: '#8bc34a',
        six: '#43a047',
        seven: '#689f38',
        eight: '#558b2f',
        nine: '#33691e'
      },
      red: {
        primary: '#ed4956',
        secondary: '#db3236',
        light: '#FECACA',
        one: '#ffcdd2',
        two: '#ef9a9a',
        five: '#f44336',
        six: '#e53935'
      },
      purple: {
        fifty: '#f3e5f5',
        one: '#e1bee7',
        two: '#ce93d8',
        four: '#ab47bc',
        five: '#9c27b0',
        seven: '#7b1fa2',
        eight: '#6a1b9a',
        nine: '#4a148c'
      },
      orange: {
        fifty: '#fff3e0',
        base: '#f32c2c',
        secondary: '#b30606'
      },
      darkMode: {
        base: '#121212',
        primary: '#272727',
        orange: '#ffab91'
      }
    }
    // backgroundImage: ({
    //   'work': "url('../asserts/images/work.svg')",
    //   'hero-sm': "url('/storage/img/sys/sm-hero.jpg')",
    // }),
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active'],
      display: ['group-hover'],
      visibility: ['hover', 'focus'],
      divideColor: ['group-hover']
    }
  }
};
