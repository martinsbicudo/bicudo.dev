import React from 'react';
import { AiOutlineCheck, AiOutlineSmile } from 'react-icons/ai';

import { useTheme } from '@Hook';

import {
  StyledDisplay,
  StyledDisplayTitle,
  StyledDisplayDescription,
  StyledDisplaySubtitle,
  StyledDisplayList,
  StyledDisplayItem,
  StyledDisplayButtons,
  StyledDisplayTypeButton,
  StyledDisplayColorButton,
  StyledDisplayFontSizeButton,
} from './styled';

function Display() {
  const {
    TYPE,
    TYPES,
    COLOR,
    FONT_SIZE,
    FONT_SIZES,
    COLORS_THEME,
    HELPERS: { setType, setColor, setFontSize, getFontSizeFromKey },
  } = useTheme();
  const [types, colors, fontSizes] = [
    TYPES,
    COLORS_THEME,
    FONT_SIZES,
  ].map((values) => Object.keys(values));

  function isActive(values) {
    if (values.fontSize)
      return getFontSizeFromKey(values.fontSize) === FONT_SIZE;

    return values.type ? values.type === TYPE : values.color === COLOR;
  }

  function getCheck(values) {
    return isActive(values) ? <AiOutlineCheck /> : null;
  }

  return (
    <StyledDisplay>
      <StyledDisplayTitle>PERSONALIZAÇÃO DO SITE</StyledDisplayTitle>
      <StyledDisplayDescription>
        Aqui você aqui pode mudar a <strong>cor de fundo</strong>,{' '}
        <strong>cor padrão</strong> e o <strong>tamanho da fonte</strong> como
        preferir <AiOutlineSmile />
      </StyledDisplayDescription>
      <StyledDisplayList>
        <StyledDisplayItem>
          <StyledDisplaySubtitle>COR DE FUNDO</StyledDisplaySubtitle>
          <StyledDisplayButtons>
            {types.map((type) => (
              <StyledDisplayTypeButton
                key={type}
                type={type}
                active={isActive({ type })}
                onClick={() => setType(type)}
              >
                {getCheck({ type })}
              </StyledDisplayTypeButton>
            ))}
          </StyledDisplayButtons>
        </StyledDisplayItem>
        <StyledDisplayItem>
          <StyledDisplaySubtitle>COR PADRÃO</StyledDisplaySubtitle>
          <StyledDisplayButtons>
            {colors.map((color) => (
              <StyledDisplayColorButton
                key={color}
                color={color}
                active={isActive({ color })}
                onClick={() => setColor(color)}
              >
                {getCheck({ color })}
              </StyledDisplayColorButton>
            ))}
          </StyledDisplayButtons>
        </StyledDisplayItem>
        <StyledDisplayItem>
          <StyledDisplaySubtitle>TAMANHO DA FONTE</StyledDisplaySubtitle>
          <StyledDisplayButtons>
            {fontSizes.map((fontSize) => (
              <StyledDisplayFontSizeButton
                key={fontSize}
                size={fontSize}
                active={isActive({ fontSize })}
                onClick={() => setFontSize(fontSize)}
              >
                {fontSize}
              </StyledDisplayFontSizeButton>
            ))}
          </StyledDisplayButtons>
        </StyledDisplayItem>
      </StyledDisplayList>
    </StyledDisplay>
  );
}

export default Display;
