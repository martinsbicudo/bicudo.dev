import React from 'react';

import { Post as PostContainer } from '@Container';

function Post() {
  return (
    <>
      <PostContainer.Main>main</PostContainer.Main>
      <PostContainer.Footer>footer</PostContainer.Footer>
    </>
  );
}

export default Post;
