import React from 'react';
import { renderToString } from 'react-dom/server';
import { AiOutlineRead } from 'react-icons/ai';

import camelcase from 'camelcase';
import { string } from 'prop-types';
import readingTime from 'reading-time';
import stripHtml from 'string-strip-html';

import * as posts from '@Conf/posts';

import { StyledPostReadTime, StyledPostTitle, StyledPostDate } from './styled';

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
      <StyledPostReadTime>
        <AiOutlineRead />
        {getReadTime()}
      </StyledPostReadTime>
      <StyledPostDate>{meta.publishDate}</StyledPostDate>
      <StyledPostTitle>{meta.title}</StyledPostTitle>
      {Component}
    </>
  );
}

Post.propTypes = {
  pid: string.isRequired,
};

export default Post;
