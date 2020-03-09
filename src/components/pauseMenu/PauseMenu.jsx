import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSfx } from 'contexts/sfxContext';

import './PauseMenu.scss';

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
  font-size: ${({ scaled }) => (scaled ? 1.2 : 1.6)}rem;
  margin-bottom: 2rem;
`;

const Instruction = styled.p`
  margin: 0.1rem;
`;

const PauseMenu = ({ setIsPauseMenuShown, backToMenu }) => {
  const { makeSelectSound, makeMenuSound } = useSfx();
  const isScaled = window.innerWidth < 313 * 1.5;
  const side = isScaled ? window.innerWidth : 313 * 1.5;
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    const keyDownHandler = e => {
      const event = e || window.event;
      switch (event.keyCode) {
        case 38:
          // UP
          if (optionSelected > 0) {
            setOptionSelected(optionSelected - 1);
            makeMenuSound();
          }
          break;
        case 40:
          // DOWN
          if (optionSelected < 1) {
            setOptionSelected(optionSelected + 1);
            makeMenuSound();
          }
          break;
        case 88:
          // X
          if (optionSelected === 0) {
            setIsPauseMenuShown(false);
            makeSelectSound();
          } else if (optionSelected === 1) {
            backToMenu();
            makeSelectSound();
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
  }, [
    setIsPauseMenuShown,
    optionSelected,
    backToMenu,
    makeSelectSound,
    makeMenuSound
  ]);

  return (
    <Container height={side} width={side}>
      <GameTitle>Paused</GameTitle>
      <Menu className="pause-menu">
        <Instructions scaled={isScaled}>
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
            makeSelectSound();
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
          onClick={() => {
            backToMenu();
            makeSelectSound();
          }}
        >
          Back to Main Menu
        </button>
      </Menu>
    </Container>
  );
};

export default PauseMenu;
