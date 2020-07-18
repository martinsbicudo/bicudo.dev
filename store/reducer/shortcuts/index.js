import types from './types';

const initialState = {
  pressedKeys: '',
  events: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PRESSED_KEYS:
      return {
        ...state,
        pressedKeys: `${state.pressedKeys}${payload}`,
      };

    case types.ADD_SHORTCUTS:
      return {
        ...state,
        events: {
          ...state.events,
          ...payload,
        },
      };

    default:
      return state;
  }
};
