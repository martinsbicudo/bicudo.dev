import React from 'react';

import NextLink from 'next/link';
import { string, node, oneOf, oneOfType } from 'prop-types';

import { StyledLink } from './styled';

function Link({ children, href, type, ...props }) {
  function renderLink() {
    switch (type) {
      case 'external':
        return <StyledLink href={href}>{children}</StyledLink>;

      default:
        return (
          <NextLink href={href} {...props}>
            <StyledLink>{children}</StyledLink>
          </NextLink>
        );
    }
  }
  return renderLink();
}

Link.propTypes = {
  children: oneOfType([string, node]).isRequired,
  href: string.isRequired,
  type: oneOf(['external', 'internal']),
};

Link.defaultProps = {
  type: 'external',
};

export default Link;
