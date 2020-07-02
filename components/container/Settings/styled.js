// import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledSettings = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const StyledSettingsButton = styled('button')`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 0 0 5px 1px rgba(100, 100, 100, 0.2);
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  cursor: pointer;

  svg {
    opacity: 0.7;
  }

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()};
`;

export const StyledSettingsOpenButton = styled(StyledSettingsButton)`
  border-radius: 10px;
  z-index: 2;
  font-size: 3.6rem;

  svg {
    padding: 0.7rem;
    background-color: rgba(150, 150, 150, 0.2);
    border-radius: inherit;
  }

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>mobile': 'transform: translate(25%, 30%);',
        '<mobile': 'transform: translate(15%,25%);',
      })
      .getStyle()};
`;

export const StyledSettingsItemButton = styled(StyledSettingsButton)`
  border-radius: 40px;
  font-size: 2.2rem;
  z-index: 1;
  box-shadow: 0 0 20px rgba(100, 100, 100, 0.3);
  border: 5px solid rgba(255, 255, 255, 0.5);
`;

export const StyledSettingsList = styled('ul')`
  list-style: none;
`;

export const StyledSettingsListItem = styled('li')`
  @keyframes first-button-move {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -95%);
    }
  }

  @keyframes last-button-move {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-105%, 0);
    }
  }

  &:first-child > button {
    transform: translate(0, -95%);
    animation: first-button-move 0.3s;
  }

  &:last-child > button {
    transform: translate(-105%, 0);
    animation: last-button-move 0.3s;
  }
`;
