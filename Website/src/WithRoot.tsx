import * as React from 'react';

import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
  palette: {
    primary:{
      contrastText: '#FFFFFF',
      dark: '#388E3C',      
      light: '#66BB6A',
      main: '#388E3C',          
    },
    secondary: {
      contrastText: '#26C9FF',
      dark: '#263238',      
      light: '#455A64',
        main: '#FFFF00',  
    }       
  },
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;