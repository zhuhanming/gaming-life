import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSfx } from 'contexts/sfxContext';
import { IDEAL_WIDTH } from 'constants/numbers';

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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;
  color: white;
  font-size: ${({ scaled }) => (scaled ? 0.8 : 1)}rem;
`;

const Instructions = styled.div`
  margin-bottom: 2rem;
`;

const Instruction = styled.p`
  margin: 0.1rem;
`;

const PauseMenu = ({
  setIsPauseMenuShown,
  backToMenu,
  select,
  menuToggle,
  isSafari = false
}) => {
  const { makeSelectSound, makeMenuSound } = useSfx();
  const isScaled = window.innerWidth < IDEAL_WIDTH;
  const side = isScaled ? window.innerWidth : IDEAL_WIDTH;
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    const keyDownHandler = e => {
      const event = e || window.event;
      switch (event.keyCode) {
        case 38:
          // UP
          if (optionSelected > 0) {
            setOptionSelected(optionSelected - 1);
            if (isSafari) {
              makeMenuSound();
            } else {
              menuToggle.play();
            }
          }
          break;
        case 40:
          // DOWN
          if (optionSelected < 1) {
            setOptionSelected(optionSelected + 1);
            if (isSafari) {
              makeMenuSound();
            } else {
              menuToggle.play();
            }
          }
          break;
        case 80:
          // P
          setIsPauseMenuShown(false);
          if (isSafari) {
            makeSelectSound();
          } else {
            select.play();
          }
          break;
        case 88:
          // X
          if (optionSelected === 0) {
            setIsPauseMenuShown(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          } else if (optionSelected === 1) {
            backToMenu();
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
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
    select,
    menuToggle,
    isSafari,
    makeMenuSound,
    makeSelectSound
  ]);

  return (
    <Container height={side} width={side}>
      <GameTitle>Paused</GameTitle>
      <Menu className="pause-menu" scaled={isScaled}>
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
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
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
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }}
        >
          Back to Main Menu
        </button>
      </Menu>
    </Container>
  );
};

export default PauseMenu;
