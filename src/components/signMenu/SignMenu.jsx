import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSfx } from 'contexts/sfxContext';
import { IDEAL_WIDTH } from 'constants/numbers';

import './SignMenu.scss';

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
  font-size: ${({ scaled }) => (scaled ? 0.8 : 1)}rem;
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
`;

const SignMenu = ({
  setIsSignMenuShown,
  currentLevel,
  select,
  isSafari = false
}) => {
  const { makeSelectSound } = useSfx();
  const isScaled = window.innerWidth < IDEAL_WIDTH;
  const side = isScaled ? window.innerWidth : IDEAL_WIDTH;
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    const keyDownHandler = e => {
      const event = e || window.event;
      switch (event.keyCode) {
        case 88:
          // X
          if (optionSelected === 0) {
            setIsSignMenuShown(false);
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
  }, [setIsSignMenuShown, optionSelected, select, isSafari, makeSelectSound]);

  return (
    <Container height={side} width={side}>
      <Menu className="sign-menu" scaled={isScaled}>
        <Instructions>
          <Instruction>Question #{currentLevel}.</Instruction>
          <Instruction>Choose one of the two doors above.</Instruction>
          <Instruction>Each door leads to a question of its own.</Instruction>
        </Instructions>
        <button
          type="button"
          onMouseOver={() => setOptionSelected(0)}
          onFocus={() => setOptionSelected(0)}
          onClick={() => {
            setIsSignMenuShown(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }}
          className={`sign-menu__button ${
            optionSelected === 0 ? 'active' : ''
          }`}
        >
          Ok, got it
        </button>
      </Menu>
    </Container>
  );
};

export default SignMenu;
