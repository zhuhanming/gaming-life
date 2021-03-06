import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { resetGameState } from 'reducers/gameDux';
import { useSfx } from 'contexts/sfxContext';
import { IDEAL_WIDTH } from 'constants/numbers';

import './MainMenu.scss';

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

const MainMenu = ({
  setIsMainMenuShown,
  select,
  menuToggle,
  isSafari = false
}) => {
  const { makeSelectSound, makeMenuSound } = useSfx();
  const dispatch = useDispatch();
  const isScaled = window.innerWidth < IDEAL_WIDTH;
  const side = isScaled ? window.innerWidth : IDEAL_WIDTH;
  const [optionSelected, setOptionSelected] = useState(0);

  const gameState = useSelector(state => state.game.gameState);
  const canResume = Object.prototype.hasOwnProperty.call(gameState, 'level-1');

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
          if (optionSelected < (canResume ? 1 : 0)) {
            setOptionSelected(optionSelected + 1);
            if (isSafari) {
              makeMenuSound();
            } else {
              menuToggle.play();
            }
          }
          break;
        case 88:
          if (optionSelected === 0) {
            dispatch(resetGameState());
            setIsMainMenuShown(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          } else if (optionSelected === 1) {
            setIsMainMenuShown(false);
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
  });

  return (
    <Container height={side} width={side}>
      <GameTitle>Gaming Life</GameTitle>
      <Menu className="main-menu" scaled={isScaled}>
        <Instructions>
          <Instruction>
            {canResume
              ? 'You have an ongoing game.'
              : 'Welcome to Gaming Life.'}
          </Instruction>
          <Instruction>Arrow keys to move.</Instruction>
          <Instruction>X to interact.</Instruction>
          <Instruction>P to pause.</Instruction>
        </Instructions>
        <button
          type="button"
          onMouseOver={() => setOptionSelected(0)}
          onFocus={() => setOptionSelected(0)}
          onClick={() => {
            dispatch(resetGameState());
            setIsMainMenuShown(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }}
          className={`main-menu__button ${
            optionSelected === 0 ? 'active' : ''
          }`}
        >
          New Game
        </button>
        {canResume && (
          <button
            type="button"
            onMouseOver={() => setOptionSelected(1)}
            onFocus={() => setOptionSelected(1)}
            onClick={() => {
              setIsMainMenuShown(false);
              if (isSafari) {
                makeSelectSound();
              } else {
                select.play();
              }
            }}
            className={`main-menu__button ${
              optionSelected === 1 ? 'active' : ''
            }`}
          >
            Resume Game
          </button>
        )}
      </Menu>
    </Container>
  );
};

export default MainMenu;
