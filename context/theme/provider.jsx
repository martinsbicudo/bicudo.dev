import React, { useState } from 'react';
import {
  useEvent,
  useLocalStorage,
  useUpdateEffect,
  useEffectOnce,
} from 'react-use';

import { node } from 'prop-types';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyle, theme } from '@Conf/styles';
import { useShortcuts } from '@Hook';

function ThemeProvider({ children }) {
  const [maxHeight, setMaxHeight] = useState(null);
  const [config, setConfig] = useState({
    TYPE: 'DARK',
    COLOR: 'PRIMARY',
    FONT_SIZE: 1,
  });
  const [configStorage, setConfigStorage] = useLocalStorage(
    'bicudo.theme',
    config
  );

  useEffectOnce(() => {
    setConfig(configStorage);
  });

  useUpdateEffect(() => {
    setConfigStorage(config);
  }, [config]);

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

  function getFontSizeFromKey(FONT_SIZE) {
    const [syzes, typographies] = [
      theme.FONT_SIZES,
      theme.TYPOGRAPHY,
    ].map((values) => Object.values(values));
    const fontSizeIndex = syzes.indexOf(FONT_SIZE);

    return typographies[fontSizeIndex];
  }

  const HELPERS = {
    setType: (TYPE) => setTheme({ TYPE }),
    setColor: (COLOR) => setTheme({ COLOR }),
    setFontSize: (FONT_SIZE) =>
      setTheme({
        FONT_SIZE:
          typeof FONT_SIZE === 'string'
            ? getFontSizeFromKey(FONT_SIZE)
            : FONT_SIZE,
      }),
    getFontSizeFromKey,
  };

  function getShortcuts() {
    const [types, colors, sizes] = [
      theme.TYPES,
      theme.COLORS_THEME,
      theme.FONT_SIZES,
    ].map((values) => Object.keys(values));

    function createShortcutes(values, action) {
      return values.reduce(
        (currentValues, value) => ({
          ...currentValues,
          [value]: () => action(value),
        }),
        {}
      );
    }

    return {
      ...createShortcutes(types, HELPERS.setType),
      ...createShortcutes(colors, HELPERS.setColor),
      ...createShortcutes(sizes, HELPERS.setFontSize),
    };
  }

  useShortcuts(getShortcuts());

  const value = {
    ...config,
    ...theme,
    HELPERS,
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
