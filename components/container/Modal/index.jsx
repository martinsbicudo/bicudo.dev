import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Router from 'next/router';
import { string } from 'prop-types';

import Display from './Display';
import Shortcuts from './Shortcuts';
import {
  StyledModal,
  StyledModalContainer,
  StyledModalContent,
  StyledModalClose,
} from './styled';

const contents = {
  display: Display,
  shortcuts: Shortcuts,
};

function Modal({ sid }) {
  function renderContent() {
    const ModalContent = contents[sid];

    return <ModalContent />;
  }

  function handleClose() {
    return Router.back({ shallow: true });
  }

  return (
    <StyledModal>
      <StyledModalContainer>
        <StyledModalContent>
          <StyledModalClose onClick={handleClose}>
            <AiOutlineClose />
          </StyledModalClose>
          {renderContent()}
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModal>
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
