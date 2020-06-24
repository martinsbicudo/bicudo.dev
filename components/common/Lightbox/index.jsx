import React, { useState } from 'react';

import isFunction from 'is-function';
import { string, node, func, oneOfType, bool } from 'prop-types';

import { StyledLightbox } from './styled';

function Lightbox({ className, children, startOpen, inside, onOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(startOpen);

  function setIsOpenMiddleware(value) {
    setIsOpen(value);
    return value ? onOpen() : onClose();
  }

  function open() {
    return setIsOpenMiddleware(true);
  }

  function close() {
    return setIsOpenMiddleware(false);
  }

  function toggle() {
    return setIsOpenMiddleware(!isOpen);
  }

  function renderLightbox() {
    const lightboxProps = {
      onClick: close,
      className,
    };
    const Children = () =>
      isFunction(children)
        ? children({ isOpen, open, close, toggle })
        : children;

    if (inside)
      return (
        isOpen && (
          <StyledLightbox {...lightboxProps}>
            <Children />
          </StyledLightbox>
        )
      );

    return (
      <>
        {isOpen && <StyledLightbox {...lightboxProps} />}
        <Children />
      </>
    );
  }

  return renderLightbox();
}

Lightbox.propTypes = {
  className: string,
  children: oneOfType([node, func]).isRequired,
  startOpen: bool,
  inside: bool,
  onOpen: func,
  onClose: func,
};

Lightbox.defaultProps = {
  className: undefined,
  startOpen: false,
  inside: true,
  onOpen: () => {},
  onClose: () => {},
};

export default Lightbox;
