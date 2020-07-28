import React from 'react';

import { string } from 'prop-types';

import { Footer as FooterCommon, Link } from '@Common';

function Footer({ pid }) {
  function renderFooter() {
    return (
      <FooterCommon>
        <Link href="/blog/[pid]/comments" as={`/blog/${pid}/comments`}>
          Comentários
        </Link>
      </FooterCommon>
    );
  }

  return pid ? renderFooter() : null;
}

Footer.propTypes = {
  pid: string,
};

Footer.defaultProps = {
  pid: undefined,
};

export default Footer;
