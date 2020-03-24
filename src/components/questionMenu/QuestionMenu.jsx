import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getQuestionAtId } from 'data/questions';
import { useSfx } from 'contexts/sfxContext';
import { IDEAL_WIDTH } from 'constants/numbers';

import './QuestionMenu.scss';

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
  font-size: ${({ scaled }) => (scaled ? 0.8 : 1)}rem;
`;

const Instructions = styled.div`
  margin-bottom: 2rem;
`;

const Instruction = styled.p`
  margin: 0.1rem;
`;

const QuestionMenu = ({
  questionId,
  handleQuestionSubmit,
  dismissQuestion,
  select,
  menuToggle,
  correct,
  wrong,
  isSafari = false,
  previousCorrectAnswer
}) => {
  const {
    makeSelectSound,
    makeMenuSound,
    makeCorrectSound,
    makeWrongSound
  } = useSfx();
  const isScaled = window.innerWidth < IDEAL_WIDTH;
  const side = isScaled ? window.innerWidth : IDEAL_WIDTH;
  const [optionSelected, setOptionSelected] = useState(0);
  const [isQuestionCorrect, setIsQuestionCorrect] = useState(null);
  let question;
  try {
    question = getQuestionAtId(questionId);
  } catch (e) {
    question = {
      question: "Oops! We're still designing questions!",
      correctAnswer: "I'll come back later!",
      wrongAnswers: []
    };
  }
  const [questionAnswers] = useState(
    [...question.wrongAnswers, question.correctAnswer].sort(
      (_a, _b) => 0.5 - Math.random()
    )
  );

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
          if (optionSelected < questionAnswers.length - 1) {
            setOptionSelected(optionSelected + 1);
            if (isSafari) {
              makeMenuSound();
            } else {
              menuToggle.play();
            }
          }
          break;
        case 88:
          // X
          if (
            question.question === "Oops! We're still designing questions!" &&
            question.correctAnswer === "I'll come back later!"
          ) {
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
            dismissQuestion();
            break;
          }
          if (isQuestionCorrect !== null) {
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
            dismissQuestion();
            break;
          }
          // eslint-disable-next-line no-case-declarations
          const data = {
            question: question.question,
            optionSelected: questionAnswers[optionSelected],
            isCorrect:
              questionAnswers[optionSelected] === question.correctAnswer
          };
          if (data.isCorrect) {
            if (isSafari) {
              makeCorrectSound();
            } else {
              correct.play();
            }
          } else if (isSafari) {
            makeWrongSound();
          } else {
            wrong.play();
          }
          handleQuestionSubmit(data, question.correctAnswer);
          setIsQuestionCorrect(data.isCorrect);
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
    questionAnswers,
    handleQuestionSubmit,
    question.correctAnswer,
    question.question,
    dismissQuestion,
    isQuestionCorrect,
    correct,
    wrong,
    select,
    menuToggle,
    isSafari,
    makeCorrectSound,
    makeMenuSound,
    makeSelectSound,
    makeWrongSound
  ]);

  if (isQuestionCorrect !== null) {
    return (
      <Container height={side} width={side}>
        <Menu className="question-menu" scaled={isScaled}>
          <Instructions>
            <Instruction>
              {isQuestionCorrect
                ? 'Excellent! Correct answer!'
                : 'Uh-oh! The correct answer was:'}
            </Instruction>
            {!isQuestionCorrect && (
              <Instruction>&quot;{previousCorrectAnswer}&quot;</Instruction>
            )}
            {!isQuestionCorrect && (
              <Instruction>Try harder for the next question!</Instruction>
            )}
          </Instructions>
          <button
            type="button"
            onClick={() => {
              if (isSafari) {
                makeSelectSound();
              } else {
                select.play();
              }
              dismissQuestion();
            }}
            className="question-menu__button active"
          >
            Next Question!
          </button>
        </Menu>
      </Container>
    );
  }

  return (
    <Container height={side} width={side}>
      <Menu className="question-menu" scaled={isScaled}>
        <Instructions>
          <Instruction>{question.question}</Instruction>
        </Instructions>
        {questionAnswers.map((answer, id) => (
          <button
            type="button"
            onMouseOver={() => setOptionSelected(id)}
            onFocus={() => setOptionSelected(id)}
            onClick={() => {
              if (
                question.question ===
                  "Oops! We're still designing questions!" &&
                question.correctAnswer === "I'll come back later!"
              ) {
                if (isSafari) {
                  makeSelectSound();
                } else {
                  select.play();
                }
                dismissQuestion();
                return;
              }
              // eslint-disable-next-line no-case-declarations
              const data = {
                question: question.question,
                optionSelected: questionAnswers[optionSelected],
                isCorrect:
                  questionAnswers[optionSelected] === question.correctAnswer
              };
              if (data.isCorrect) {
                if (isSafari) {
                  makeCorrectSound();
                } else {
                  correct.play();
                }
              } else if (isSafari) {
                makeWrongSound();
              } else {
                wrong.play();
              }
              handleQuestionSubmit(data);
              setIsQuestionCorrect(data.isCorrect);
            }}
            className={`question-menu__button ${
              optionSelected === id ? 'active' : ''
            }`}
            // eslint-disable-next-line react/no-array-index-key
            key={`${questionId}-${id}`}
          >
            {answer}
          </button>
        ))}
      </Menu>
    </Container>
  );
};

export default QuestionMenu;
