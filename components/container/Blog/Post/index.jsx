import React from 'react';
import { renderToString } from 'react-dom/server';

import camelcase from 'camelcase';
import { string } from 'prop-types';
import readingTime from 'reading-time';
import stripHtml from 'string-strip-html';

import * as posts from '@Conf/posts';

import { StyledPostReadTime } from './styled';

function Post({ pid }) {
  const { meta, default: PostComponent } = posts[camelcase(pid)];
  const Component = <PostComponent />;

  function getReadTime() {
    const postHtmlString = renderToString(Component);
    const postString = stripHtml(postHtmlString);
    const { text } = readingTime(postString);

    return text.replace('read', 'de leitura');
  }

  return (
    <>
      <StyledPostReadTime>{getReadTime()}</StyledPostReadTime>
      <p>{meta.publishDate}</p>
      <h1>{meta.title}</h1>
      {Component}
    </>
  );
}

Post.propTypes = {
  pid: string.isRequired,
};

export default Post;
