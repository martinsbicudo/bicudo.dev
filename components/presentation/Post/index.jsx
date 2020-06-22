import React from 'react';

import { string } from 'prop-types';

import { Post as PostContainer } from '@Container';

function Post({ pid }) {
  return (
    <>
      <PostContainer.Main>
        <PostContainer.Post pid={pid} />
      </PostContainer.Main>
      <PostContainer.Footer>footer</PostContainer.Footer>
    </>
  );
}

Post.propTypes = {
  pid: string.isRequired,
};

export default Post;
