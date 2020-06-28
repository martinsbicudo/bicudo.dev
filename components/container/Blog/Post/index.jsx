import React from 'react';

import camelcase from 'camelcase';
import { string } from 'prop-types';

import * as posts from '@Conf/posts';

function Post({ pid }) {
  function renderPost() {
    const Component = posts[camelcase(pid)];
    return <Component />;
  }

  return renderPost();
}

Post.propTypes = {
  pid: string.isRequired,
};

export default Post;
