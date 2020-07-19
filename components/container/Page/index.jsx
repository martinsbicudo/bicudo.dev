import React, { useEffect } from 'react';

import Router from 'next/router';
import { node } from 'prop-types';

import { Container } from '@Common';
import { useShortcuts } from '@Hook';
import { getThemeShortcuts } from '@Utils';

import { StyledPage, StyledPageContent } from './styled';

function Box({ children }) {
  const { addShortcuts } = useShortcuts();
  const themeShortcuts = getThemeShortcuts();

  const pageShortcuts = {
    BICUDO: {
      description: (
        <p>
          Abre a página de apresentação do <strong data-label>bicudo</strong>
        </p>
      ),
      event() {
        const pathname = '/blog/o-bicudo';
        return (
          Router.asPath !== pathname && Router.push('/blog/[pid]', pathname)
        );
      },
    },
    POSTS: {
      description: (
        <p>
          Abre a página de <strong data-label>posts</strong>
        </p>
      ),
      event() {
        const pathname = '/blog';
        return Router.asPath !== pathname && Router.push(pathname);
      },
    },
  };

  useEffect(() => {
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
