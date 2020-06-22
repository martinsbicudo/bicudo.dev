import camelcase from 'camelcase';
import { number, string } from 'prop-types';

import * as posts from '@Conf/posts';
import { Aside, Page as PageContainer, Photo } from '@Container';

import Chat from './Chat';
import Error from './Error';
import Post from './Post';

function Presentation({ pid, statusCode }) {
  function renderComponent() {
    if (statusCode === 404) return <Error />;
    if (!pid) return <Chat />;

    return pid in posts ? <Post pid={pid} /> : <Error />;
  }

  return (
    <PageContainer>
      <Photo />
      <Aside />
      {renderComponent()}
    </PageContainer>
  );
}

Presentation.getInitialProps = ({ res, query }) => {
  const statusCode = res?.statusCode;
  const pid = camelcase(query?.pid ?? '');

  return {
    pid,
    statusCode,
  };
};

Presentation.propTypes = {
  pid: string.isRequired,
  statusCode: number,
};

Presentation.defaultProps = {
  statusCode: undefined,
};

export default Presentation;
