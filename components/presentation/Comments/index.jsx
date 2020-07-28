import React from 'react';

import constants from '@Conf/constants';

import { DiscussionEmbed } from 'disqus-react';
import { string } from 'prop-types';

import { Layout } from '@Container';
import { withError } from '@Hoc';

function Blog({ pid, sid }) {
  function getDisqusShortname() {
    return constants.IS_DEV ? 'bicudodev' : 'bicudodev';
  }

  function getDisqusUrl() {
    return typeof window !== 'undefined' ? { url: window.location.href } : {};
  }

  return (
    <Layout sid={sid}>
      <p>{pid}</p>
      <DiscussionEmbed
        shortname={getDisqusShortname()}
        config={{
          ...getDisqusUrl(),
          identifier: 'test',
          title: 'test',
          language: 'pt-br',
        }}
      />
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
