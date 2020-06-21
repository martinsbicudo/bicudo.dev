import React from 'react';
import reactToString from 'react-to-string';

import { string, array, node, arrayOf, objectOf, oneOfType } from 'prop-types';

import {
  StyledInfos,
  StyledInfosTitle,
  StyledInfosList,
  StyledInfosListName,
  StyledInfosListContent,
  StyledInfosItems,
  StyledInfosItemsItem,
} from './styled';

function Infos({ className, items }) {
  function getItemKey(i) {
    return reactToString(i).toLowerCase().replace(/ /g, '-');
  }

  function List(listItem) {
    return (
      <>
        <StyledInfosListName>{listItem.name}</StyledInfosListName>
        <StyledInfosListContent>
          {Array.isArray(listItem.content) ? (
            <StyledInfosItems>
              {listItem.content.map((i) => (
                <StyledInfosItemsItem key={getItemKey(i)}>
                  {i}
                </StyledInfosItemsItem>
              ))}
            </StyledInfosItems>
          ) : (
            listItem.content
          )}
        </StyledInfosListContent>
      </>
    );
  }

  function Content(item) {
    return (
      <>
        <StyledInfosTitle>{item.title}</StyledInfosTitle>
        <StyledInfosList>
          {item.list.map((listItem) => (
            <List key={getItemKey(listItem.name)} {...listItem} />
          ))}
        </StyledInfosList>
      </>
    );
  }

  return (
    <StyledInfos className={className}>
      {items.map((item) => (
        <Content key={getItemKey(item.title)} {...item} />
      ))}
    </StyledInfos>
  );
}

Infos.propTypes = {
  className: string,
  items: arrayOf(objectOf(oneOfType([string, array, node]))).isRequired,
};

Infos.defaultProps = {
  className: undefined,
};

export default Infos;
