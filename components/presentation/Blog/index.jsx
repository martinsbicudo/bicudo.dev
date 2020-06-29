import React from 'react';

import { string } from 'prop-types';

import { Blog as BlogContainer, Layout } from '@Container';
import { withError } from '@Hoc';

function Blog({ pid, sid }) {
  return (
    <Layout sid={sid}>
      <BlogContainer.Main>
        {pid ? <BlogContainer.Post pid={pid} /> : 'LISTA MAROTA'}
      </BlogContainer.Main>
      <BlogContainer.Footer>footer</BlogContainer.Footer>
    </Layout>
  );
}

Blog.propTypes = {
  pid: string,
  sid: string,
};

Blog.defaultProps = {
  pid: undefined,
  sid: undefined,
};

export default withError(Blog);
