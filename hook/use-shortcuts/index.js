import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';

import keyevents from 'key-events';

import { shortcuts } from '~/store/action';

export default function useShortcuts() {
  const dispatch = useDispatch();
  const { pressedKeys } = useSelector((state) => state.shortcuts);

  function addPressedKeys(key) {
    return dispatch(shortcuts.addPressedKeys(key));
  }

  function startVerifyPressedKeys() {
    const keys = keyevents();
    return keys.on('keydown', addPressedKeys);
  }

  function addShortcuts(events) {
    return dispatch(shortcuts.addShortcuts(events));
  }

  useUpdateEffect(() => {
    dispatch(shortcuts.verifyShortcuts());
  }, [pressedKeys]);

  return {
    startVerifyPressedKeys,
    addPressedKeys,
    addShortcuts,
  };
}
