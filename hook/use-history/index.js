import { useContext } from 'react';

import { HistoryContext } from '@Context';

export default function useRobot() {
  const history = useContext(HistoryContext);

  return history;
}
