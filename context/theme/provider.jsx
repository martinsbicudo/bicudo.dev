import React, { useState } from 'react';
import { useEvent } from 'react-use';

import { node } from 'prop-types';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyle, theme } from '@Conf/styles';

function ThemeProvider({ children }) {
  const [maxHeight, setMaxHeight] = useState(null);
  const [config, setConfig] = useState({
    TYPE: 'LIGHT',
    COLOR: 'THIRDY',
    FONT_SIZE: 1,
  });

  function setTheme(values) {
    setConfig((currentConfig) => ({
      ...currentConfig,
      ...values,
    }));
  }

  function getMaxHeightInPx() {
    const height = window.innerHeight * 0.01;
    return `${height * 100}px;`;
  }

  function getMaxHeight() {
    if (typeof window !== 'undefined') {
      const height = maxHeight || getMaxHeightInPx();
      return `max-height: ${height};`;
    }

    return '';
  }

  useEvent('resize', () => {
    const height = getMaxHeightInPx();
    setMaxHeight(height);
  });

  const value = {
    ...config,
    ...theme,
    HELPERS: {
      setType: (TYPE) => setTheme({ TYPE }),
      setColor: (COLOR) => setTheme({ COLOR }),
      setFontSize: (FONT_SIZE) => setTheme({ FONT_SIZE }),
    },
  };

  return (
    <StyledProvider theme={value}>
      <GlobalStyle getMaxHeight={getMaxHeight} />
      {children}
    </StyledProvider>
  );
}

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
