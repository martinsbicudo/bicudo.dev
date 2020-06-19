import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

export default function useTheme(action) {
  const theme = useContext(ThemeContext);

  return action(theme);
}
