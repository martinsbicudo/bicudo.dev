import React from 'react';
import {
  AiOutlineControl,
  AiOutlineBgColors,
  AiOutlineThunderbolt,
} from 'react-icons/ai';

import Link from 'next/link';

import { Lightbox } from '@Common';

import {
  StyledSettings,
  StyledSettingsOpenButton,
  StyledSettingsItemButton,
  StyledSettingsList,
  StyledSettingsListItem,
} from './styled';

function Theme() {
  function renderOptions(isOpen) {
    return (
      isOpen && (
        <StyledSettingsList>
          <StyledSettingsListItem>
            <Link href="/settings/[sid]" as="/settings/display">
              <StyledSettingsItemButton>
                <AiOutlineBgColors />
              </StyledSettingsItemButton>
            </Link>
          </StyledSettingsListItem>
          <StyledSettingsListItem>
            <Link href="/settings/[sid]" as="/settings/shortcuts">
              <StyledSettingsItemButton>
                <AiOutlineThunderbolt />
              </StyledSettingsItemButton>
            </Link>
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
