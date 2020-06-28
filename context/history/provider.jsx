import React, { useEffect } from 'react';
import { useSessionStorage } from 'react-use';

import { useRouter } from 'next/router';
import { node } from 'prop-types';

import HistoryContext from '.';

function HistoryProvider({ children }) {
  const router = useRouter();
  const [history, setHistory] = useSessionStorage('_history.bicudo', []);

  function addHistory() {
    const { pathname, route, query, asPath, basePath } = router;

    setHistory((currentHistory) => [
      {
        pathname,
        route,
        query,
        asPath,
        basePath,
      },
      ...currentHistory,
    ]);
  }

  useEffect(() => {
    addHistory();
  }, [router]);

  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
}

HistoryProvider.propTypes = {
  children: node.isRequired,
};

export default HistoryProvider;
