import React from 'react';

import NextLink from 'next/link';
import { string, node, oneOfType } from 'prop-types';

import { StyledLink } from './styled';

function Link({ children, href, ...props }) {
  function renderLink() {
    const startsExternalLink = ['http', 'mailto'];
    const isExternal = startsExternalLink.some((starts) =>
      href.startsWith(starts)
    );

    if (isExternal)
      return (
        <StyledLink href={href} {...props}>
          {children}
        </StyledLink>
      );

    return (
      <NextLink href={href} {...props}>
        <StyledLink>{children}</StyledLink>
      </NextLink>
    );
  }

  return renderLink();
}

Link.propTypes = {
  children: oneOfType([string, node]).isRequired,
  href: string.isRequired,
};

export default Link;
