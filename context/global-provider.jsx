import React from 'react';

import { node } from 'prop-types';

import * as providers from './providers';

function GlobalProvider({ children }) {
  const ComposeProviders = Object.values(providers).reduceRight(
    (current, Provider) => <Provider>{current}</Provider>,
    children
  );

  return ComposeProviders;
}

GlobalProvider.propTypes = {
  children: node.isRequired,
};

export default GlobalProvider;
