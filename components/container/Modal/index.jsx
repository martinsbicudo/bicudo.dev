import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Router from 'next/router';
import { string } from 'prop-types';

import { Lightbox } from '@Common';
import { useHistory } from '@Hook';

import Display from './Display';
import Shortcuts from './Shortcuts';
import { StyledModal, StyledModalContent, StyledModalClose } from './styled';

const contents = {
  display: Display,
  shortcuts: Shortcuts,
};

function Modal({ sid }) {
  const history = useHistory();

  function renderContent() {
    const ModalContent = contents[sid];

    return <ModalContent />;
  }

  // eslint-disable-next-line consistent-return
  function handleClose() {
    if (history.length > 1) return Router.back();

    return Router.push('/');
  }

  return (
    <Lightbox inside={false} onClose={handleClose} startOpen>
      {({ close }) => (
        <StyledModal>
          <StyledModalContent>
            <StyledModalClose onClick={close}>
              <AiOutlineClose />
            </StyledModalClose>
            {renderContent()}
          </StyledModalContent>
        </StyledModal>
      )}
    </Lightbox>
  );
}

Modal.propTypes = {
  sid: string,
};

Modal.defaultProps = {
  sid: undefined,
};

Modal.modalsId = Object.keys(contents);

export default Modal;
