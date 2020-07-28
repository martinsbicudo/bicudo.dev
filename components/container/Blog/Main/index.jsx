import React from 'react';

import { string } from 'prop-types';

import { Main as MainCommon } from '@Common';

import List from '../List';
import Post from '../Post';
import { StyledMainContent } from './styled';

function Main({ pid }) {
  function renderContent() {
    if (pid) return <Post pid={pid} />;
    return <List />;
  }

  return (
    <MainCommon>
      <StyledMainContent>{renderContent()}</StyledMainContent>
    </MainCommon>
  );
}

Main.propTypes = {
  pid: string,
};

Main.defaultProps = {
  pid: undefined,
};

export default Main;
