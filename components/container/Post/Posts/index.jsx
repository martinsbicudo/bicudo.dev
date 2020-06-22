import React from 'react';

import camelcase from 'camelcase';
import { useRouter } from 'next/router';

import * as posts from '@Conf/posts';

function Posts() {
  const { query } = useRouter();

  function renderPost() {
    const pid = camelcase(query.pid);
    const postExist = pid in posts;

    if (postExist) {
      const Component = posts[pid];
      return <Component />;
    }

    return null;
  }

  return renderPost();
}

export default Posts;
