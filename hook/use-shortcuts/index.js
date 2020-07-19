import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';

import keyevents from 'key-events';

import { shortcuts } from '~/store/action';

export default function useShortcuts() {
  const keys = keyevents();
  const dispatch = useDispatch();
  const { pressedKeys } = useSelector((state) => state.shortcuts);

  function addPressedKeys(key) {
    return dispatch(shortcuts.addPressedKeys(key));
  }

  function addShortcuts(events) {
    return dispatch(shortcuts.addShortcuts(events));
  }

  useEffect(() => {
    keys.on('keydown', addPressedKeys);
    return () => keys.off('keydown', addPressedKeys);
  }, []);

  useUpdateEffect(() => {
    dispatch(shortcuts.verifyShortcuts());
  }, [pressedKeys]);

  return {
    addShortcuts,
  };
}
