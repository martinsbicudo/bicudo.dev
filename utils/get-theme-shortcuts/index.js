import { useTheme } from '@Hook';

export default () => {
  const { TYPES, COLORS_THEME, FONT_SIZES, HELPERS } = useTheme();
  const [types, colors, sizes] = [
    TYPES,
    COLORS_THEME,
    FONT_SIZES,
  ].map((values) => Object.keys(values));

  function createShortcuts(values, action) {
    return values.reduce(
      (currentValues, value) => ({
        ...currentValues,
        [value]: () => action(value),
      }),
      {}
    );
  }

  return {
    ...createShortcuts(types, HELPERS.setType),
    ...createShortcuts(colors, HELPERS.setColor),
    ...createShortcuts(sizes, HELPERS.setFontSize),
  };
};
