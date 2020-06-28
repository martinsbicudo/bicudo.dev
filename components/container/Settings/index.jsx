import React from 'react';
import {
  AiOutlineControl,
  AiOutlineCloseSquare,
  AiOutlineBgColors,
  AiOutlineMacCommand,
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

  function openSettings(sid) {
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

  function handleClick(sid, close) {
    return () => {
      openSettings(sid);
      close();
    };
  }

  function renderOptions(values) {
    return (
      values.isOpen && (
        <StyledSettingsList>
          <StyledSettingsListItem>
            <StyledSettingsItemButton
              onClick={handleClick('display', values.close)}
            >
              <AiOutlineBgColors />
            </StyledSettingsItemButton>
          </StyledSettingsListItem>
          <StyledSettingsListItem>
            <StyledSettingsItemButton
              onClick={handleClick('shortcuts', values.close)}
            >
              <AiOutlineMacCommand />
            </StyledSettingsItemButton>
          </StyledSettingsListItem>
        </StyledSettingsList>
      )
    );
  }

  return (
    <Lightbox inside={false}>
      {({ isOpen, close, toggle }) => (
        <StyledSettings>
          <StyledSettingsOpenButton onClick={toggle}>
            {isOpen ? <AiOutlineCloseSquare /> : <AiOutlineControl />}
          </StyledSettingsOpenButton>
          {renderOptions({ isOpen, close })}
        </StyledSettings>
      )}
    </Lightbox>
  );
}

export default Theme;
