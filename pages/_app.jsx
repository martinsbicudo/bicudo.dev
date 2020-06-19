import React from 'react';

import { func, string, number, oneOfType, objectOf } from 'prop-types';

import ThemeProvider from '@Context/theme/provider';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: func.isRequired,
  pageProps: objectOf(oneOfType([func, string, number])).isRequired,
};

export default App;
