import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledDisplay = styled('div')``;

export const StyledDisplayTitle = styled('h1')`
  font-size: 1.8rem;
  text-align: center;
  margin: 0 auto;
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  background: rgba(150, 150, 150, 0.1);
  width: max-content;
  color: ${({ theme }) => Color(theme.COLORS[theme.COLOR]).darken(0.3)};
`;

export const StyledDisplayDescription = styled('p')`
  font-size: 1.2rem;
  opacity: 0.6;
  text-align: center;
  width: 100%;
  max-width: 30rem;
  margin: 0.5rem auto 2rem;

  svg {
    font-size: 1.6rem;
    margin-bottom: -0.35rem;
  }
`;

export const StyledDisplaySubtitle = styled('h2')`
  font-size: 1rem;
  margin: 0 0 0.5rem 0.5rem;
  opacity: 0.6;
`;

export const StyledDisplayList = styled('ul')`
  list-style: none;
`;

export const StyledDisplayItem = styled('li')`
  padding: 1rem 0;
`;

export const StyledDisplayButtons = styled('div')`
  background-color: rgba(150, 150, 150, 0.1);
  border-radius: 0.5rem;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'space-evenly',
        wrap: true,
      })
      .getStyle()}
`;

export const StyledDisplayButton = styled('button', [
  'type',
  'color',
  'active',
])`
  margin: 1rem;
  cursor: pointer;
  border: 0.1rem solid rgba(150, 150, 150, 0.1);
  transition: opacity 0.2s;
  will-change: opacity;
  color: ${({ theme, type, color }) =>
    type && type === 'DARK'
      ? theme.COLORS.LIGHT
      : Color(theme.COLORS[type || color || theme.COLOR]).darken(0.5)};

  ${({ theme, type, color, active }) =>
    active
      ? `
        box-shadow: 0 0 0.1rem 0.4rem ${Color(
          theme.COLORS[type || color || theme.COLOR]
        ).lighten(0.15)}};`
      : `
        &:not(:hover) {
          opacity: 0.8;
        }
      `}

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()}

  svg {
    font-size: 2.6rem;
  }
`;

export const StyledDisplayTypeButton = styled(StyledDisplayButton)`
  flex: 1;
  border-radius: inherit;
  height: 6rem;
  background-color: ${({ theme, type }) => theme.COLORS[type]};
`;

export const StyledDisplayColorButton = styled(StyledDisplayButton)`
  border-radius: 6rem;
  min-width: 6rem;
  height: 6rem;
  background-color: ${({ theme, color }) => theme.COLORS[color]};
`;

export const StyledDisplayFontSizeButton = styled(StyledDisplayButton)`
  flex: 1;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: inherit;
  background-color: ${({ theme, active }) =>
    active
      ? theme.COLORS[theme.COLOR]
      : Color(theme.COLORS[theme.COLOR]).lighten(0.2)};
`;
