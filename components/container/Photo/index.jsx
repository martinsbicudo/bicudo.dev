import React from 'react';

import Link from 'next/link';

import { StyledPhoto, StyledPhotoImage } from './styled';

function Photo() {
  return (
    <Link href="/blog/[pid]" as="/blog/o-bicudo">
      <StyledPhoto>
        <StyledPhotoImage src="/images/bicudo.jpeg" />
      </StyledPhoto>
    </Link>
  );
}

export default Photo;
