import COLORS_TEXT from './colors-text';
import COLORS_THEME from './colors-theme';
import FONT_SIZES from './font-sizes';
import GRID from './grid';
import STATUS from './status';
import TYPES from './types';
import TYPOGRAPHY from './typography';

export default {
  COLORS: {
    ...TYPES,
    ...COLORS_TEXT,
    ...COLORS_THEME,
  },
  COLORS_TEXT,
  COLORS_THEME,
  TYPES,
  GRID,
  FONT_SIZES,
  STATUS,
  TYPOGRAPHY,
};
