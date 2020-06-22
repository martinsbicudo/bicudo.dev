import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

export default function useTheme(action = (_) => _) {
  const theme = useContext(ThemeContext);

  return action(theme);
}
