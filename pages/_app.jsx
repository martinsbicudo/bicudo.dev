import React from 'react';

import { func, string, number, oneOfType, objectOf } from 'prop-types';

import { GlobalProvider } from '@Context';

function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

App.propTypes = {
  Component: func.isRequired,
  pageProps: objectOf(oneOfType([func, string, number])).isRequired,
};

export default App;
