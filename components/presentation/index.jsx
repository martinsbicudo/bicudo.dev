import camelcase from 'camelcase';
import { number, string } from 'prop-types';

import * as posts from '@Conf/posts';
import {
  Aside,
  Modal,
  Page as PageContainer,
  Photo,
  Settings,
} from '@Container';
import { useHistory } from '@Hook';

import Blog from './Blog';
import Chat from './Chat';
import Error from './Error';

function Presentation({ pid, sid, statusCode }) {
  const history = useHistory();

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

  function getIsToRenderBlogList() {
    const [currentHistory, prevHistory] = history;
    const currentPagePathname = currentHistory?.pathname ?? '';
    const prevPagePathname = prevHistory?.pathname ?? '';

    return [currentPagePathname, prevPagePathname].includes('/blog');
  }

  function renderModal() {
    if (!modalExist()) return null;

    return <Modal sid={sid} />;
  }

  function renderPage() {
    const prevPid = getPrevPid();
    const isToRenderBlogList = getIsToRenderBlogList();

    if (statusCode === 404) return <Error />;
    if (isToRenderBlogList) return <Blog />;
    if (prevPid && postExist(prevPid) && modalExist())
      return <Blog pid={prevPid} />;
    if ((!pid && !sid) || modalExist()) return <Chat />;

    return !postExist() && !modalExist() ? <Error /> : <Blog pid={pid} />;
  }

  return (
    <>
      {renderModal()}
      <PageContainer>
        <Photo />
        <Aside />
        {renderPage()}
        <Settings />
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
