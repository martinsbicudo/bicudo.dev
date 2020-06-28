import { useRouter } from 'next/router';
import { string, node } from 'prop-types';

import { Modal } from '@Container';

// eslint-disable-next-line import/no-cycle
import Error from '../Error';

function Layout({ children, sid }) {
  const { pathname } = useRouter();

  function modalExist() {
    return Modal.modalsId.includes(sid);
  }

  function renderChildren() {
    if (pathname.includes('settings') && !modalExist()) return <Error />;

    return children;
  }

  return renderChildren();
}

Layout.propTypes = {
  children: node.isRequired,
  sid: string,
};

Layout.defaultProps = {
  sid: undefined,
};

export default Layout;
