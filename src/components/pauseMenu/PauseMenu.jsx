import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UIFx from 'uifx';

import selectMp3 from 'assets/sounds/select.mp3';
import menuMp3 from 'assets/sounds/menu-toggle.mp3';

import './PauseMenu.scss';

const select = new UIFx(selectMp3, {
  volume: 0.5
});

const menuToggle = new UIFx(menuMp3);

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: slategray;
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
`;

const GameTitle = styled.h1`
  line-height: 5rem;
  font-size: 4rem;
  font-family: 'DPComic';
  font-weight: normal;
  margin: 0;
`;

const Menu = styled.div`
  height: calc(80% - 5rem);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;
  color: white;
`;

const Instructions = styled.div`
  margin-bottom: 2rem;
`;

const Instruction = styled.p`
  margin: 0.1rem;
  font-size: 1.6rem;
`;

const PauseMenu = ({ setIsPauseMenuShown }) => {
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
            setIsPauseMenuShown(false);
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
  }, [setIsPauseMenuShown, optionSelected]);

  return (
    <Container height={side} width={side}>
      <GameTitle>Paused</GameTitle>
      <Menu className="pause-menu">
        <Instructions>
          <Instruction>Arrow keys to move.</Instruction>
          <Instruction>X to interact.</Instruction>
          <Instruction>P to pause.</Instruction>
        </Instructions>
        <button
          type="button"
          onMouseOver={() => setOptionSelected(0)}
          onFocus={() => setOptionSelected(0)}
          onClick={() => {
            setIsPauseMenuShown(false);
            select.play();
          }}
          className={`pause-menu__button ${
            optionSelected === 0 ? 'active' : ''
          }`}
        >
          Resume Game
        </button>
        <button
          type="button"
          className={`pause-menu__button ${
            optionSelected === 1 ? 'active' : ''
          }`}
        >
          Back to Main Menu
        </button>
      </Menu>
    </Container>
  );
};

export default PauseMenu;
