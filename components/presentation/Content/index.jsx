import camelcase from 'camelcase';
import { useRouter } from 'next/router';
import { string, node } from 'prop-types';

import * as posts from '@Conf/posts';
import { Modal } from '@Container';
import { useHistory } from '@Hook';

// eslint-disable-next-line import/no-cycle
import Error from '../Error';

function Layout({ children, pid, sid }) {
  const [, prevHistory] = useHistory();
  const { pathname } = useRouter();

  function getPrevSid() {
    return prevHistory?.query?.sid ?? '';
  }

  function modalExist() {
    const currentModalExist = Modal.modalsId.includes(sid);
    const prevModalExist = Modal.modalsId.includes(getPrevSid());

    if (currentModalExist && !prevModalExist && prevHistory) return false;

    return currentModalExist;
  }

  function postExist() {
    return pid ? camelcase(pid) in posts : true;
  }

  function renderChildren() {
    if ((pathname.includes('settings') && !modalExist()) || !postExist())
      return <Error />;

    return children;
  }

  return renderChildren();
}

Layout.propTypes = {
  children: node.isRequired,
  pid: string,
  sid: string,
};

Layout.defaultProps = {
  pid: undefined,
  sid: undefined,
};

export default Layout;
