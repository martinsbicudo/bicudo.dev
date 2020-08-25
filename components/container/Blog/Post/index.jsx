import React from 'react';
import { AiOutlineRead } from 'react-icons/ai';

import camelcase from 'camelcase';
import { string } from 'prop-types';
import readingTime from 'reading-time';

import * as posts from '@Conf/posts';
import { getPostAsString } from '@Utils';

import { StyledPostReadTime, StyledPostTitle, StyledPostDate } from './styled';

function Post({ pid }) {
  const { meta, default: PostComponent } = posts[camelcase(pid)];

  function getReadTime() {
    const postString = getPostAsString(PostComponent);
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
      <PostComponent />
    </>
  );
}

Post.propTypes = {
  pid: string.isRequired,
};

export default Post;
