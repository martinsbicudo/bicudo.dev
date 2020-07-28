import React from 'react';

import { string } from 'prop-types';

import { Blog as BlogContainer, Layout } from '@Container';
import { withError } from '@Hoc';

function Blog({ pid, sid }) {
  return (
    <Layout sid={sid}>
      <BlogContainer.Main pid={pid} />
      <BlogContainer.Footer pid={pid} />
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
