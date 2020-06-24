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
  box-shadow: 0 0 0.5rem 0.1rem rgba(100, 100, 100, 0.2);
  background-color: ${({ theme }) => theme.COLORS[theme.COLOR]};
  cursor: pointer;

  ${({ theme }) =>
    theme.GRID.set()
      .flex({
        justify: 'center',
        align: 'center',
      })
      .getStyle()};
`;

export const StyledSettingsOpenButton = styled(StyledSettingsButton)`
  border-radius: 1rem;
  z-index: 2;
  font-size: 3.6rem;

  svg {
    padding: 0.7rem;
    background-color: rgba(150, 150, 150, 0.1);
    border-radius: inherit;
  }

  ${({ theme }) =>
    theme.GRID.set()
      .responsive({
        '>mobile': 'transform: translate(30%, 30%);',
        '<mobile': 'transform: translate(20%, 30%);',
      })
      .getStyle()};
`;

export const StyledSettingsItemButton = styled(StyledSettingsButton)`
  border-radius: 4rem;
  font-size: 2.6rem;
  z-index: 1;
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
