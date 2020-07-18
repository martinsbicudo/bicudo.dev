import { useState, useEffect } from 'react';
import { useUpdateEffect } from 'react-use';

import keyevents from 'key-events';

export default function useShortcuts(shortcuts) {
  const [pressedKeys, setPressedKeys] = useState('');

  function addPressedKeys(key) {
    return setPressedKeys((currentKeys) => `${currentKeys}${key}`);
  }

  useEffect(() => {
    const keys = keyevents();
    keys.on('keydown', addPressedKeys);
  }, []);

  useUpdateEffect(() => {
    Object.entries(shortcuts).forEach(([shortcut, event]) => {
      pressedKeys.endsWith(shortcut) && event();
    });
  }, [pressedKeys]);
}
