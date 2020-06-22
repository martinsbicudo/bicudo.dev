import { useEffect, useState } from 'react';

import camelcase from 'camelcase';
import { number, string } from 'prop-types';

import * as posts from '@Conf/posts';
import { Aside, Modal, Page as PageContainer, Photo } from '@Container';
import { useHistory } from '@Hook';

import Chat from './Chat';
import Error from './Error';
import Post from './Post';

function Presentation({ pid, sid, statusCode }) {
  const history = useHistory();
  const [pidState] = useState(pid);

  function postExist(id = pid) {
    return id in posts;
  }

  function modalExist(id = sid) {
    return Modal.modalsId.includes(id);
  }

  function getPrevPid() {
    const [, prevHistory] = history;
    const prevPid = prevHistory?.query?.pid ?? '';

    return camelcase(prevPid);
  }

  function renderModal() {
    if (!modalExist()) return null;

    return <Modal sid={sid} />;
  }

  function renderPage() {
    const prevPid = getPrevPid();

    if (statusCode === 404) return <Error />;
    if (prevPid && postExist(prevPid) && modalExist())
      return <Post pid={prevPid} />;
    if ((!pid && !sid) || modalExist()) return <Chat />;

    return !postExist() && !modalExist() ? <Error /> : <Post pid={pid} />;
  }

  useEffect(() => {
    console.log(pidState);
  }, [pid]);

  return (
    <>
      {renderModal()}
      <PageContainer>
        <Photo />
        <Aside />
        {renderPage()}
      </PageContainer>
    </>
  );
}

Presentation.getInitialProps = ({ res, query }) => {
  const statusCode = res?.statusCode;
  const pid = camelcase(query?.pid ?? '');
  const sid = query?.sid;

  return {
    pid,
    sid,
    statusCode,
  };
};

Presentation.propTypes = {
  pid: string.isRequired,
  sid: string,
  statusCode: number,
};

Presentation.defaultProps = {
  sid: undefined,
  statusCode: undefined,
};

export default Presentation;
