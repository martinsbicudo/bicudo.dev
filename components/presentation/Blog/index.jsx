import React from 'react';

import { string } from 'prop-types';

import { Blog as BlogContainer } from '@Container';

function Blog({ pid }) {
  return (
    <>
      <BlogContainer.Main>
        {pid ? <BlogContainer.Post pid={pid} /> : 'LISTA MAROTA'}
      </BlogContainer.Main>
      <BlogContainer.Footer>footer</BlogContainer.Footer>
    </>
  );
}

Blog.propTypes = {
  pid: string,
};

Blog.defaultProps = {
  pid: undefined,
};

export default Blog;
