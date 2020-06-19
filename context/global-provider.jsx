import React from 'react';

import { node } from 'prop-types';

import * as providers from './providers';

function GlobalProvider({ children }) {
  function ComposeProviders({ children: component }) {
    return Object.values(providers).reduceRight(
      (current, Provider) => <Provider>{current}</Provider>,
      component
    );
  }

  return <ComposeProviders>{children}</ComposeProviders>;
}

GlobalProvider.propTypes = {
  children: node.isRequired,
};

export default GlobalProvider;
