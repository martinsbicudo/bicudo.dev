import React from 'react';
import {
  AiOutlineControl,
  AiOutlineBgColors,
  AiOutlineThunderbolt,
} from 'react-icons/ai';

import { useRouter } from 'next/router';

import { Lightbox } from '@Common';

import {
  StyledSettings,
  StyledSettingsOpenButton,
  StyledSettingsItemButton,
  StyledSettingsList,
  StyledSettingsListItem,
} from './styled';

function Theme() {
  const { pathname, query, push } = useRouter();

  function handleClick(sid) {
    return push(
      {
        pathname,
        query: {
          sid,
          ...query,
        },
      },
      `/settings/${sid}`
    );
  }

  function renderOptions(isOpen) {
    return (
      isOpen && (
        <StyledSettingsList>
          <StyledSettingsListItem>
            <StyledSettingsItemButton onClick={() => handleClick('display')}>
              <AiOutlineBgColors />
            </StyledSettingsItemButton>
          </StyledSettingsListItem>
          <StyledSettingsListItem>
            <StyledSettingsItemButton onClick={() => handleClick('shortcuts')}>
              <AiOutlineThunderbolt />
            </StyledSettingsItemButton>
          </StyledSettingsListItem>
        </StyledSettingsList>
      )
    );
  }

  return (
    <Lightbox inside={false}>
      {({ isOpen, toggle }) => (
        <StyledSettings>
          <StyledSettingsOpenButton onClick={toggle}>
            <AiOutlineControl />
          </StyledSettingsOpenButton>
          {renderOptions(isOpen)}
        </StyledSettings>
      )}
    </Lightbox>
  );
}

export default Theme;
