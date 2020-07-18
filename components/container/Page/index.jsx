import React, { useEffect } from 'react';

import Router from 'next/router';
import { node } from 'prop-types';

import { Container } from '@Common';
import { useShortcuts } from '@Hook';
import { getThemeShortcuts } from '@Utils';

import { StyledPage, StyledPageContent } from './styled';

function Box({ children }) {
  const { startVerifyPressedKeys, addShortcuts } = useShortcuts();
  const themeShortcuts = getThemeShortcuts();

  const pageShortcuts = {
    BICUDO: () => {
      const pathname = '/blog/o-bicudo';
      return Router.asPath !== pathname && Router.push('/blog/[pid]', pathname);
    },
    POSTS: () => {
      const pathname = '/blog';
      return Router.asPath !== pathname && Router.push(pathname);
    },
  };

  useEffect(() => {
    startVerifyPressedKeys();
    addShortcuts({
      ...themeShortcuts,
      ...pageShortcuts,
    });
  }, []);

  return (
    <StyledPage>
      <Container>
        <StyledPageContent>{children}</StyledPageContent>
      </Container>
    </StyledPage>
  );
}

Box.propTypes = {
  children: node.isRequired,
};

export default Box;
