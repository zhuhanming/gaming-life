import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UIFx from 'uifx';

import Player from 'components/player';
import * as stageBackgroundImage from 'assets/map/map1.png';
import bumpMp3 from 'assets/sounds/bump.mp3';
import selectMp3 from 'assets/sounds/select.mp3';
import menuMp3 from 'assets/sounds/menu-toggle.mp3';
import correctMp3 from 'assets/sounds/correct.mp3';
import wrongMp3 from 'assets/sounds/wrong.mp3';
import {
  checkIfValidPosition,
  isNextToSign,
  isNextToLeftDoor,
  isNextToRightDoor
} from 'utils/positionUtils';
import MainMenu from 'components/mainMenu';
import PauseMenu from 'components/pauseMenu';
import SignMenu from 'components/signMenu';
import DoorConfirmationMenu from 'components/doorConfirmationMenu';
import QuestionMenu from 'components/questionMenu';
import { updateGameState } from 'reducers/gameDux';
import { useSfx } from 'contexts/sfxContext';
import ProgressBar from 'components/progressBar';
import Buttons from 'components/buttons';
import CompletionMenu from 'components/completionMenu';
import { IDEAL_WIDTH } from 'constants/numbers';

import './Stage.scss';

const bump = new UIFx(bumpMp3);

const select = new UIFx(selectMp3, {
  volume: 0.5
});

const menuToggle = new UIFx(menuMp3);

const correct = new UIFx(correctMp3, {
  volume: 0.7
});

const wrong = new UIFx(wrongMp3, {
  volume: 0.7
});

const Container = styled.div.attrs(props => ({
  style: { transform: `translate(${props.x}px, ${props.y}px)` }
}))`
  transition: ${({ transition }) => transition}s;
  position: absolute;
  z-index: 1;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const StageBackgroundImage = styled.img`
  transform: scale(${({ scale }) => scale}, ${({ scale }) => scale});
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Stage = ({ isSafari = false, isMobile = false }) => {
  const { makeBumpSound, makeSelectSound } = useSfx();
  const [lastBump, setLastBump] = useState();
  const [previousCorrectAnswer, setPreviousCorrectAnswer] = useState(null);
  const game = useSelector(state => state.game);
  const { currentRoom, currentLevel, gameCompleted } = game;

  const dispatch = useDispatch();

  const [direction, setDirection] = useState(4);
  const [isMoving, setIsMoving] = useState(false);
  const [scale, setScale] = useState(1);
  const [transition, setTransition] = useState(0.1);
  const [menuState, setMenuState] = useReducer((s, a) => ({ ...s, ...a }), {
    isMainMenuShown: true,
    isPauseMenuShown: false,
    isSignMenuShown: false
  });
  const [doorState, setDoorState] = useReducer((s, a) => ({ ...s, ...a }), {
    doorSelected: null,
    isConfirmingDoor: false,
    showDoorQuestion: false
  });
  const [position, setPosition] = useReducer((s, a) => ({ ...s, ...a }), {
    x: 0,
    y:
      window.innerWidth < IDEAL_WIDTH
        ? (128 * window.innerWidth) / IDEAL_WIDTH
        : 128
  });

  useEffect(() => {
    const keyDownHandler = e => {
      if (
        menuState.isMainMenuShown ||
        menuState.isPauseMenuShown ||
        menuState.isSignMenuShown ||
        doorState.isConfirmingDoor ||
        doorState.showDoorQuestion ||
        gameCompleted
      ) {
        return;
      }
      const event = e || window.event;
      switch (event.keyCode) {
        case 37:
          // LEFT
          if (direction !== 2) {
            setDirection(2);
            if (isSafari) {
              setLastBump();
            }
          }
          if (!isMoving) {
            setIsMoving(true);
            if (isSafari) {
              setLastBump();
            }
          }
          break;
        case 38:
          // UP
          if (direction !== 4) {
            setDirection(4);
            if (isSafari) {
              setLastBump();
            }
          }
          if (!isMoving) {
            setIsMoving(true);
            if (isSafari) {
              setLastBump();
            }
          }
          break;
        case 39:
          // RIGHT
          if (direction !== 3) {
            setDirection(3);
            if (isSafari) {
              setLastBump();
            }
          }
          if (!isMoving) {
            setIsMoving(true);
            if (isSafari) {
              setLastBump();
            }
          }
          break;
        case 40:
          // DOWN
          if (direction !== 1) {
            setDirection(1);
            if (isSafari) {
              setLastBump();
            }
          }
          if (!isMoving) {
            setIsMoving(true);
            if (isSafari) {
              setLastBump();
            }
          }
          break;
        case 88:
          if (isNextToSign(position, scale)) {
            setMenuState({ isSignMenuShown: true });
            setIsMoving(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }
          if (isNextToLeftDoor(position, scale)) {
            setDoorState({ doorSelected: 'left', isConfirmingDoor: true });
            setIsMoving(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }
          if (isNextToRightDoor(position, scale)) {
            setDoorState({ doorSelected: 'right', isConfirmingDoor: true });
            setIsMoving(false);
            if (isSafari) {
              makeSelectSound();
            } else {
              select.play();
            }
          }
          break;
        case 80:
          if (
            !menuState.isMainMenuShown &&
            !menuState.isPauseMenuShown &&
            !menuState.isSignMenuShown
          ) {
            setMenuState({ isPauseMenuShown: true });
            setIsMoving(false);
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

    const keyUpHandler = e => {
      if (
        menuState.isMainMenuShown ||
        menuState.isPauseMenuShown ||
        menuState.isSignMenuShown ||
        doorState.isConfirmingDoor ||
        doorState.showDoorQuestion
      ) {
        return;
      }
      const event = e || window.event;
      switch (event.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          setIsMoving(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    // window.addEventListener('resize', resizeHandler);
    if (window.innerWidth < IDEAL_WIDTH) {
      setScale(window.innerWidth / IDEAL_WIDTH);
    }

    const handlePositionChange = async (dir, change) => {
      let newPosition;
      switch (dir) {
        case 'x':
          newPosition = { ...position, x: position.x + change };
          break;
        case 'y':
          newPosition = { ...position, y: position.y + change };
          break;
        default:
          newPosition = { ...position };
      }
      if (checkIfValidPosition(newPosition, scale)) {
        await setPosition(newPosition);
      } else if (!isSafari) {
        bump.play();
      } else if (lastBump) {
        const curr = new Date();
        if (curr - lastBump > 1000) {
          makeBumpSound();
          setLastBump(curr);
        }
      } else {
        const curr = new Date();
        makeBumpSound();
        setLastBump(curr);
      }
    };

    if (isMoving) {
      setTimeout(async () => {
        switch (direction) {
          case 1:
            await handlePositionChange('y', 4 * scale);
            break;
          case 2:
            await handlePositionChange('x', -4 * scale);
            break;
          case 3:
            await handlePositionChange('x', 4 * scale);
            break;
          case 4:
            await handlePositionChange('y', -4 * scale);
            break;
          default:
            break;
        }
      }, 3000 / 60);
    }

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [
    isMoving,
    direction,
    position,
    scale,
    menuState.isMainMenuShown,
    menuState.isPauseMenuShown,
    menuState.isSignMenuShown,
    doorState.isConfirmingDoor,
    doorState.showDoorQuestion,
    isSafari,
    lastBump,
    makeBumpSound,
    makeSelectSound,
    gameCompleted
  ]);

  const handleLeft = () => {
    if (direction !== 2) {
      setDirection(2);
      if (isSafari) {
        setLastBump();
      }
    }
    if (!isMoving) {
      setIsMoving(true);
      if (isSafari) {
        setLastBump();
      }
    }
  };

  const handleRight = () => {
    if (direction !== 3) {
      setDirection(3);
      if (isSafari) {
        setLastBump();
      }
    }
    if (!isMoving) {
      setIsMoving(true);
      if (isSafari) {
        setLastBump();
      }
    }
  };

  const handleUp = () => {
    if (direction !== 4) {
      setDirection(4);
      if (isSafari) {
        setLastBump();
      }
    }
    if (!isMoving) {
      setIsMoving(true);
      if (isSafari) {
        setLastBump();
      }
    }
  };

  const handleDown = () => {
    if (direction !== 1) {
      setDirection(1);
      if (isSafari) {
        setLastBump();
      }
    }
    if (!isMoving) {
      setIsMoving(true);
      if (isSafari) {
        setLastBump();
      }
    }
  };

  const handleSelect = () => {
    if (isNextToSign(position, scale)) {
      setMenuState({ isSignMenuShown: true });
      setIsMoving(false);
      if (isSafari) {
        makeSelectSound();
      } else {
        select.play();
      }
    }
    if (isNextToLeftDoor(position, scale)) {
      setDoorState({ doorSelected: 'left', isConfirmingDoor: true });
      setIsMoving(false);
      if (isSafari) {
        makeSelectSound();
      } else {
        select.play();
      }
    }
    if (isNextToRightDoor(position, scale)) {
      setDoorState({ doorSelected: 'right', isConfirmingDoor: true });
      setIsMoving(false);
      if (isSafari) {
        makeSelectSound();
      } else {
        select.play();
      }
    }
  };

  const handleRelease = () => {
    setIsMoving(false);
  };

  const handleSinglePositionChange = async (dir, change) => {
    let newPosition;
    switch (dir) {
      case 'x':
        newPosition = { ...position, x: position.x + change };
        break;
      case 'y':
        newPosition = { ...position, y: position.y + change };
        break;
      default:
        newPosition = { ...position };
    }
    if (checkIfValidPosition(newPosition, scale)) {
      await setPosition(newPosition);
    }
  };

  const turnPlayerAway = () => {
    if (direction === 4) {
      // change from up to down
      setDirection(1);
      handleSinglePositionChange('y', 8 * scale);
    } else if (direction === 2) {
      setDirection(3);
      handleSinglePositionChange('x', 8 * scale);
    } else if (direction === 3) {
      setDirection(2);
      handleSinglePositionChange('x', -8 * scale);
    }
  };

  const confirmDoorSelection = value => {
    if (value) {
      setDoorState({ showDoorQuestion: true, isConfirmingDoor: false });
    } else {
      setDoorState({ doorSelected: null, isConfirmingDoor: false });
      turnPlayerAway();
    }
  };

  const handleQuestionSubmit = (data, correctAnswer) => {
    setTransition(0);
    setDirection(4);
    setPosition({
      x: 0,
      y:
        window.innerWidth < IDEAL_WIDTH
          ? (128 * window.innerWidth) / IDEAL_WIDTH
          : 128
    });
    setDoorState({
      doorSelected: null
    });
    setPreviousCorrectAnswer(correctAnswer);
    dispatch(
      updateGameState({
        ...data,
        option: doorState.doorSelected
      })
    );
    setTransition(0.1);
  };

  const dismissQuestion = () => {
    setDoorState({
      isConfirmingDoor: false,
      showDoorQuestion: false
    });
  };

  const backToMenu = () => {
    setTransition(0);
    setDirection(4);
    setPosition({
      x: 0,
      y:
        window.innerWidth < IDEAL_WIDTH
          ? (128 * window.innerWidth) / IDEAL_WIDTH
          : 128
    });

    setDoorState({
      doorSelected: null,
      isConfirmingDoor: false,
      showDoorQuestion: false
    });

    setMenuState({
      isMainMenuShown: true,
      isPauseMenuShown: false,
      isSignMenuShown: false
    });
    setTransition(0.1);
  };

  return (
    <>
      {gameCompleted && !doorState.showDoorQuestion && (
        <CompletionMenu
          select={select}
          menuToggle={menuToggle}
          isSafari={isSafari}
          backToMenu={backToMenu}
        />
      )}
      {isMobile &&
        !menuState.isMainMenuShown &&
        !menuState.isPauseMenuShown &&
        !menuState.isSignMenuShown &&
        !doorState.isConfirmingDoor &&
        !doorState.showDoorQuestion &&
        !gameCompleted && (
          <Buttons
            width={
              window.innerWidth < IDEAL_WIDTH ? window.innerWidth : IDEAL_WIDTH
            }
            handleLeft={handleLeft}
            handleRight={handleRight}
            handleUp={handleUp}
            handleDown={handleDown}
            handleSelect={handleSelect}
            handleRelease={handleRelease}
          />
        )}
      {!menuState.isMainMenuShown && (
        <ProgressBar
          width={
            window.innerWidth < IDEAL_WIDTH ? window.innerWidth : IDEAL_WIDTH
          }
        />
      )}
      {doorState.showDoorQuestion && (
        <QuestionMenu
          questionId={
            doorState.doorSelected === null
              ? 2
              : currentRoom * 2 + (doorState.doorSelected === 'left' ? 0 : 1)
          }
          handleQuestionSubmit={handleQuestionSubmit}
          dismissQuestion={dismissQuestion}
          select={select}
          menuToggle={menuToggle}
          correct={correct}
          wrong={wrong}
          isSafari={isSafari}
          previousCorrectAnswer={previousCorrectAnswer}
        />
      )}
      {doorState.isConfirmingDoor && (
        <DoorConfirmationMenu
          doorSelected={doorState.doorSelected}
          confirmDoorSelection={confirmDoorSelection}
          select={select}
          menuToggle={menuToggle}
          isSafari={isSafari}
        />
      )}
      {menuState.isSignMenuShown && (
        <SignMenu
          currentLevel={currentLevel}
          setIsSignMenuShown={value => setMenuState({ isSignMenuShown: value })}
          select={select}
          isSafari={isSafari}
        />
      )}
      {menuState.isPauseMenuShown && (
        <PauseMenu
          setIsPauseMenuShown={value =>
            setMenuState({ isPauseMenuShown: value })
          }
          backToMenu={backToMenu}
          select={select}
          menuToggle={menuToggle}
          isSafari={isSafari}
        />
      )}
      {menuState.isMainMenuShown && (
        <MainMenu
          setIsMainMenuShown={value => setMenuState({ isMainMenuShown: value })}
          select={select}
          menuToggle={menuToggle}
          isSafari={isSafari}
        />
      )}
      <Container x={position.x} y={position.y} transition={transition}>
        <Player direction={direction} isMoving={isMoving} scale={scale * 1} />
      </Container>
      <StageBackgroundImage
        src={stageBackgroundImage}
        scale={scale * 1.5}
        unselectable="on"
      />
    </>
  );
};

export default Stage;
