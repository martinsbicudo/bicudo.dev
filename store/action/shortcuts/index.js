import types from '~/store/reducer/shortcuts/types';

export const addPressedKeys = (payload) => ({
  type: types.ADD_PRESSED_KEYS,
  payload,
});

export const addShortcuts = (payload) => ({
  type: types.ADD_SHORTCUTS,
  payload,
});

export const verifyShortcuts = () => (...[, getState]) => {
  const {
    shortcuts: { pressedKeys, events },
  } = getState();

  Object.entries(events).forEach(([shortcut, event]) => {
    pressedKeys.endsWith(shortcut) && event();
  });

  return {
    type: types.VERIFY_SHORTCUTS,
  };
};
