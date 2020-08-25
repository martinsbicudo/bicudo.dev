import React from 'react';
import { useSelector } from 'react-redux';
import Scrollbar from 'react-scrollbars-custom';

import {
  StyledShortcuts,
  StyledShortcutsTitle,
  StyledShortcutsInfo,
  StyledShortcutsItem,
  StyledShortcutsCommands,
  StyledShortcutsCommand,
  StyledShortcutsDescription,
} from './styled';

function Shortcuts() {
  const { events } = useSelector((state) => state.shortcuts);

  function getAmountItems() {
    return Object.keys(events).length;
  }

  return (
    <>
      <StyledShortcutsTitle>Shortcuts</StyledShortcutsTitle>
      <StyledShortcutsInfo>
        Digite o comando/palavra no seu teclado e veja a mágica <br />
        <strong>(Não funciona em tablets ou celulares)</strong>
      </StyledShortcutsInfo>
      <StyledShortcuts>
        <StyledShortcutsItem>
          <StyledShortcutsCommand>Comando</StyledShortcutsCommand>
          <StyledShortcutsDescription>
            Funcionalidade
          </StyledShortcutsDescription>
        </StyledShortcutsItem>
        <StyledShortcutsCommands amount={getAmountItems()}>
          <Scrollbar>
            {Object.entries(events).map(([shortcut, { description }]) => (
              <StyledShortcutsItem key={shortcut}>
                <StyledShortcutsCommand>{shortcut}</StyledShortcutsCommand>
                <StyledShortcutsDescription>
                  {description}
                </StyledShortcutsDescription>
              </StyledShortcutsItem>
            ))}
          </Scrollbar>
        </StyledShortcutsCommands>
      </StyledShortcuts>
    </>
  );
}

export default Shortcuts;
