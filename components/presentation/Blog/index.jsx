import React from 'react';

import { useRouter } from 'next/router';
import { string } from 'prop-types';

import { Blog as BlogContainer } from '@Container';

import Content from '../Content';
import Layout from '../Layout';

function Blog({ pid, sid }) {
  const router = useRouter();

  return (
    <Content sid={sid}>
      <Layout sid={sid || router.query.sid}>
        <BlogContainer.Main>
          {pid ? <BlogContainer.Post pid={pid} /> : 'LISTA MAROTA'}
        </BlogContainer.Main>
        <BlogContainer.Footer>footer</BlogContainer.Footer>
      </Layout>
    </Content>
  );
}

Blog.getInitialProps = ({ query }) => query;

Blog.propTypes = {
  pid: string,
  sid: string,
};

Blog.defaultProps = {
  pid: undefined,
  sid: undefined,
};

export default Blog;
