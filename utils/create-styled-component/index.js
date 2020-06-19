import styled from 'styled-components';

export default (tag, modifiers = [], config = {}) =>
  styled(tag).withConfig({
    ...config,
    shouldForwardProp(prop) {
      const verify =
        (config.shouldForwardProp?.(prop) ?? true) && !modifiers.includes(prop);

      return verify;
    },
  });
