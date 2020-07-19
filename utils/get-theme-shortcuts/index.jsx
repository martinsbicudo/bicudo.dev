import React from 'react';

import { useTheme } from '@Hook';

export default () => {
  const { TYPES, COLORS, COLORS_THEME, FONT_SIZES, HELPERS } = useTheme();
  const [types, colors, sizes] = [
    TYPES,
    COLORS_THEME,
    FONT_SIZES,
  ].map((values) => Object.keys(values));

  function createShortcuts(values, event, getDescription) {
    return values.reduce(
      (currentValues, value) => ({
        ...currentValues,
        [value]: {
          description: getDescription(value),
          event() {
            return event(value);
          },
        },
      }),
      {}
    );
  }

  return {
    ...createShortcuts(types, HELPERS.setType, (value) => (
      <p>
        Muda o site para <strong data-label>{value.toLowerCase()} mode</strong>
      </p>
    )),
    ...createShortcuts(colors, HELPERS.setColor, (value) => (
      <p>
        Troca a cor principal para{' '}
        <span data-color={value}>{COLORS[value]}</span>
      </p>
    )),
    ...createShortcuts(sizes, HELPERS.setFontSize, (value) => (
      <p>
        Tamanho padrão da fonte muda para{' '}
        <strong data-label>
          {`${HELPERS.getFontSizeFromType(value) * 10}px`}
        </strong>
      </p>
    )),
  };
};
