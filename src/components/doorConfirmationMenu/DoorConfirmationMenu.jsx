import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import './DoorConfirmationMenu.scss';

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
`;

const Menu = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;
  color: white;
  padding: 1rem;
`;

const Instructions = styled.div`
  margin-bottom: 2rem;
`;

const Instruction = styled.p`
  margin: 0.1rem;
  font-size: 1.6rem;
`;

const DoorConfirmationMenu = ({
  confirmDoorSelection,
  doorSelected,
  select,
  menuToggle
}) => {
  const side = window.innerWidth < 313 * 1.5 ? window.innerWidth : 313 * 1.5;
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    const keyDownHandler = e => {
      const event = e || window.event;
      switch (event.keyCode) {
        case 38:
          // UP
          if (optionSelected > 0) {
            setOptionSelected(optionSelected - 1);
            menuToggle.play();
          }
          break;
        case 40:
          // DOWN
          if (optionSelected < 1) {
            setOptionSelected(optionSelected + 1);
            menuToggle.play();
          }
          break;
        case 88:
          // X
          if (optionSelected === 0) {
            confirmDoorSelection(true);
            select.play();
          } else if (optionSelected === 1) {
            confirmDoorSelection(false);
            select.play();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [confirmDoorSelection, optionSelected, select, menuToggle]);

  return (
    <Container height={side} width={side}>
      <Menu className="door-confirmation-menu">
        <Instructions>
          <Instruction>
            Are you sure you wish to choose the {doorSelected} door?
          </Instruction>
          <Instruction>There is no going back!</Instruction>
        </Instructions>
        <button
          type="button"
          onMouseOver={() => setOptionSelected(0)}
          onFocus={() => setOptionSelected(0)}
          onClick={() => {
            confirmDoorSelection(true);
            select.play();
          }}
          className={`door-confirmation-menu__button ${
            optionSelected === 0 ? 'active' : ''
          }`}
        >
          Confirm
        </button>
        <button
          type="button"
          onMouseOver={() => setOptionSelected(1)}
          onFocus={() => setOptionSelected(1)}
          onClick={() => {
            confirmDoorSelection(false);
            select.play();
          }}
          className={`door-confirmation-menu__button ${
            optionSelected === 1 ? 'active' : ''
          }`}
        >
          Nevermind
        </button>
      </Menu>
    </Container>
  );
};

export default DoorConfirmationMenu;
