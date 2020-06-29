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
    COLOR,
    FONT_SIZE,
    COLORS,
    TYPOGRAPHY,
    HELPERS: { setType, setColor, setFontSize },
  } = useTheme();
  const typesKeys = ['DARK', 'LIGHT'];
  const extraColorsKeys = ['WHITE', 'BLACK'];
  const sizesText = ['SMALL', 'NORMAL', 'MIDDLE', 'LARGE'];

  function getTypes() {
    return Object.keys(COLORS).filter((key) => typesKeys.includes(key));
  }

  function getColors() {
    return Object.keys(COLORS).filter(
      (key) => ![...typesKeys, ...extraColorsKeys].includes(key)
    );
  }

  function getFontSizes() {
    return Object.values(TYPOGRAPHY).filter((value, i) => i < 4);
  }

  function isActive(values) {
    if (values.fontSize) return values.fontSize === FONT_SIZE;

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
            {getTypes().map((type) => (
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
            {getColors().map((color) => (
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
            {getFontSizes().map((fontSize, i) => (
              <StyledDisplayFontSizeButton
                key={fontSize}
                size={fontSize}
                active={isActive({ fontSize })}
                onClick={() => setFontSize(fontSize)}
              >
                {sizesText[i]}
              </StyledDisplayFontSizeButton>
            ))}
          </StyledDisplayButtons>
        </StyledDisplayItem>
      </StyledDisplayList>
    </StyledDisplay>
  );
}

export default Display;
