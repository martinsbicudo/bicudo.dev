import { string, node } from 'prop-types';

import {
  Aside,
  Modal,
  Page as PageContainer,
  Photo,
  Settings,
} from '@Container';

function Layout({ children, sid }) {
  function renderModal() {
    if (!Modal.modalsId.includes(sid)) return null;

    return <Modal sid={sid} />;
  }

  return (
    <>
      {renderModal()}
      <PageContainer>
        <Photo />
        <Aside />
        {children}
        <Settings />
      </PageContainer>
    </>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  sid: string,
};

Layout.defaultProps = {
  sid: undefined,
};

export default Layout;
