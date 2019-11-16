export default {
    typography: {
      h1: {
        fontSize: '2rem',
      },
      h2: {
        fontSize: '1.8rem',
      },
      h3: {
        fontSize: '1.5rem',
      },
      body1: {
        fontSize: '1.125rem',
      },
      body2: {
        fontSize: '1rem',
      },
      // h4, h5 ,h6, subtitle1, subtitle2, button, caption, overline
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      background: {
        default: "#ffffff"
      },
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#6200EE',
        // dark: will be calculated from palette.primary.main,
        contrastText: '#fff'
      },
      secondary: {
        // light: '#0066ff',
        main: '#03DAC6',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#fff',
      },
    },
  }