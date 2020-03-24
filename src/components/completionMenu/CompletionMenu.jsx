import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as Sentry from '@sentry/browser';

import { IDEAL_WIDTH, NUMBER_OF_QUESTIONS } from 'constants/numbers';
import { useSfx } from 'contexts/sfxContext';
import { resetGameState } from 'reducers/gameDux';

import './CompletionMenu.scss';

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ gameCompleted }) =>
    gameCompleted ? 'slategray' : 'rgba(0, 0, 0, 0.4)'};
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

const CompletionMenu = ({
  select,
  menuToggle,
  isSafari = false,
  backToMenu
}) => {
  const dispatch = useDispatch();
  const { makeSelectSound, makeMenuSound } = useSfx();
  const isScaled = window.innerWidth < IDEAL_WIDTH;
  const side = isScaled ? window.innerWidth : IDEAL_WIDTH;
  const [optionSelected, setOptionSelected] = useState(0);
  const [isJeremyFernando, setIsJeremyFernando] = useState(null);
  const game = useSelector(state => state.game);
  const numberOfQuestionsCorrect = game.correctStreak.filter(x => x).length;

  useEffect(() => {
    const keyDownHandler = async e => {
      const event = e || window.event;
      switch (event.keyCode) {
        case 38:
          // UP
          if (optionSelected > 0) {
            if (isSafari) {
              makeMenuSound();
            } else {
              await menuToggle.play();
            }
            setOptionSelected(optionSelected - 1);
          }
          break;
        case 40:
          // DOWN
          if (isJeremyFernando === null || isJeremyFernando) {
            if (optionSelected < 1) {
              if (isSafari) {
                makeMenuSound();
              } else {
                await menuToggle.play();
              }
              setOptionSelected(optionSelected + 1);
            }
          }
          break;
        case 88:
          // X
          if (optionSelected === 0) {
            if (isSafari) {
              makeSelectSound();
            } else {
              await select.play();
            }
            if (isJeremyFernando === null) {
              setIsJeremyFernando(false);
              let result = 'This is not Fernando.\n';
              result += `Total correct: ${numberOfQuestionsCorrect}\n`;
              result += 'Options selected: \n';
              const keys = Object.keys(game.gameState);
              keys
                .map(x => {
                  let newX = '';
                  newX += `Question: ${game.gameState[x].question} `;
                  newX += `${
                    game.gameState[x].isCorrect ? 'Correct' : 'Wrong'
                  } Answer: ${game.gameState[x].optionSelected}`;
                  return newX;
                })
                .forEach(x => {
                  result += `${x}\n`;
                });
              Sentry.captureMessage(result);
            } else {
              dispatch(resetGameState());
              backToMenu();
            }
          } else if (optionSelected === 1) {
            if (isSafari) {
              makeSelectSound();
            } else {
              await select.play();
            }
            if (isJeremyFernando === null) {
              setIsJeremyFernando(true);
              setOptionSelected(0);
              let result = 'This is Fernando.\n';
              result += `Total correct: ${numberOfQuestionsCorrect}\n`;
              result += 'Options selected: \n';
              const keys = Object.keys(game.gameState);
              keys
                .map(x => {
                  let newX = '';
                  newX += `Question: ${game.gameState[x].question} `;
                  newX += `${
                    game.gameState[x].isCorrect ? 'Correct' : 'Wrong'
                  } Answer: ${game.gameState[x].optionSelected}`;
                  return newX;
                })
                .forEach(x => {
                  result += `${x}\n`;
                });
              Sentry.captureMessage(result);
            } else if (isJeremyFernando) {
              window.open(
                'https://www.hanmingdev.com/gaming_life_essay',
                '_blank'
              );
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
    optionSelected,
    select,
    menuToggle,
    isSafari,
    makeMenuSound,
    makeSelectSound,
    game,
    isJeremyFernando,
    numberOfQuestionsCorrect,
    backToMenu,
    dispatch
  ]);

  return (
    <Container
      height={side}
      width={side}
      gameCompleted={isJeremyFernando !== null}
    >
      {isJeremyFernando !== null && <GameTitle>Thank You</GameTitle>}
      {isJeremyFernando === null && (
        <Menu className="completion-menu" scaled={isScaled}>
          <Instructions>
            <Instruction>
              Last question! Are you Dr Jeremy Fernando?
            </Instruction>
          </Instructions>
          <button
            type="button"
            onMouseOver={() => setOptionSelected(0)}
            onFocus={() => setOptionSelected(0)}
            onClick={async () => {
              if (isSafari) {
                makeSelectSound();
              } else {
                await select.play();
              }
              setIsJeremyFernando(false);
            }}
            className={`completion-menu__button ${
              optionSelected === 0 ? 'active' : ''
            }`}
          >
            No
          </button>
          <button
            type="button"
            onMouseOver={() => setOptionSelected(1)}
            onFocus={() => setOptionSelected(1)}
            onClick={async () => {
              if (isSafari) {
                makeSelectSound();
              } else {
                await select.play();
              }
              setIsJeremyFernando(true);
              setOptionSelected(0);
            }}
            className={`completion-menu__button ${
              optionSelected === 1 ? 'active' : ''
            }`}
          >
            Yes
          </button>
        </Menu>
      )}
      {isJeremyFernando !== null && isJeremyFernando && (
        <Menu className="completion-menu" scaled={isScaled}>
          <Instructions>
            <Instruction>
              {numberOfQuestionsCorrect === NUMBER_OF_QUESTIONS
                ? 'All questions correct! Guess I paid attention in class!'
                : `${numberOfQuestionsCorrect}/${NUMBER_OF_QUESTIONS} questions correct. Guess I didn't pay enough attention!`}
            </Instruction>
            {/* <Instruction>An email has been sent to me about this.</Instruction> */}
            <Instruction>
              Every path has unique questions. Do explore more!
            </Instruction>
          </Instructions>
          <button
            type="button"
            onMouseOver={() => setOptionSelected(0)}
            onFocus={() => setOptionSelected(0)}
            onClick={async () => {
              if (isSafari) {
                makeSelectSound();
              } else {
                await select.play();
              }
              dispatch(resetGameState());
              backToMenu();
            }}
            className={`completion-menu__button ${
              optionSelected === 0 ? 'active' : ''
            }`}
          >
            Start Over
          </button>
          <button
            type="button"
            onMouseOver={() => setOptionSelected(1)}
            onFocus={() => setOptionSelected(1)}
            onClick={async () => {
              if (isSafari) {
                makeSelectSound();
              } else {
                await select.play();
              }
              window.open(
                'https://www.hanmingdev.com/gaming_life_essay',
                '_blank'
              );
            }}
            className={`completion-menu__button ${
              optionSelected === 1 ? 'active' : ''
            }`}
          >
            Read My Essay
          </button>
        </Menu>
      )}
      {isJeremyFernando !== null && !isJeremyFernando && (
        <Menu className="completion-menu" scaled={isScaled}>
          <Instructions>
            <Instruction>
              {numberOfQuestionsCorrect === NUMBER_OF_QUESTIONS
                ? 'All questions correct! Guess you paid attention in class!'
                : `${numberOfQuestionsCorrect}/${NUMBER_OF_QUESTIONS} questions correct. Guess you didn't pay enough attention!`}
            </Instruction>
            {/* <Instruction>An email has been sent to me about this.</Instruction> */}
            <Instruction>
              Every path has unique questions. Do explore more!
            </Instruction>
          </Instructions>
          <button
            type="button"
            onMouseOver={() => setOptionSelected(0)}
            onFocus={() => setOptionSelected(0)}
            onClick={async () => {
              if (isSafari) {
                makeSelectSound();
              } else {
                await select.play();
              }
              dispatch(resetGameState());
              backToMenu();
            }}
            className={`completion-menu__button ${
              optionSelected === 0 ? 'active' : ''
            }`}
          >
            Start Over
          </button>
        </Menu>
      )}
    </Container>
  );
};

export default CompletionMenu;
