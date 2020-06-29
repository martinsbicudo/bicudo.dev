import Color from 'color';

import { createStyledComponent as styled } from '@Utils';

export const StyledInfos = styled('div')`
  overflow-x: hidden;
`;

export const StyledInfosTitle = styled('h1')`
  display: flex;
  align-items: center;
  font-weight: lighter;
  font-size: 2.4rem;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
    color: ${({ theme }) => Color(theme.COLORS[theme.COLOR]).darken(0.5)};
  }
`;

export const StyledInfosList = styled('dl')`
  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const StyledInfosListName = styled('dt')`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 10px 0 5px;
`;

export const StyledInfosListContent = styled('dd')`
  font-size: 1.4rem;
  font-weight: lighter;
`;

export const StyledInfosItems = styled('ul')`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  width: calc(100% + 10px);
`;

export const StyledInfosItemsItem = styled('li')`
  padding: 5px;
`;
