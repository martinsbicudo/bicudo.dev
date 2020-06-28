import React from 'react';

import { useRouter } from 'next/router';
import { string } from 'prop-types';

import { Error as ErrorContainer } from '@Container';

import Layout from '../Layout';

function Error({ sid }) {
  const router = useRouter();

  return (
    <Layout sid={sid || router.query.sid}>
      <ErrorContainer.Main>Erouuuuuuuuu</ErrorContainer.Main>
      <ErrorContainer.Footer>footer</ErrorContainer.Footer>
    </Layout>
  );
}

Error.getInitialProps = ({ query }) => query;

Error.propTypes = {
  sid: string,
};

Error.defaultProps = {
  sid: undefined,
};

export default Error;
