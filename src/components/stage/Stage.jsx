import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import UIFx from 'uifx';

import Player from 'components/player';
import * as stageBackgroundImage from 'assets/map/map1.png';
import bumpMp3 from 'assets/sounds/bump.mp3';
import selectMp3 from 'assets/sounds/select.mp3';
import {
  checkIfValidPosition,
  isNextToSign,
  isNextToLeftDoor,
  isNextToRightDoor
} from 'utils/positionUtils';
import MainMenu from 'components/mainMenu';

import './Stage.scss';

const bump = new UIFx(bumpMp3, {
  throttleMs: 50
});

const select = new UIFx(selectMp3, {
  volume: 0.5
});

const Container = styled.div.attrs(props => ({
  style: { transform: `translate(${props.x}px, ${props.y}px)` }
}))`
  transition: 0.1s;
  position: absolute;
  z-index: 1;
`;

const StageBackgroundImage = styled.img`
  transform: scale(${({ scale }) => scale}, ${({ scale }) => scale});
`;

const Stage = () => {
  const [direction, setDirection] = useState(4);
  const [isMoving, setIsMoving] = useState(false);
  const [scale, setScale] = useState(1);
  const [isMainMenuShown, setIsMainMenuShown] = useState(true);
  const [position, setPosition] = useReducer((s, a) => ({ ...s, ...a }), {
    x: 0,
    y:
      window.innerWidth < 313 * 1.5
        ? (128 * window.innerWidth) / (313 * 1.5)
        : 128
  });

  useEffect(() => {
    const keyDownHandler = e => {
      if (isMainMenuShown) {
        return;
      }
      const event = e || window.event;
      switch (event.keyCode) {
        case 37:
          // LEFT
          if (direction !== 2) {
            setDirection(2);
          }
          if (!isMoving) {
            setIsMoving(true);
          }
          break;
        case 38:
          // UP
          if (direction !== 4) {
            setDirection(4);
          }
          if (!isMoving) {
            setIsMoving(true);
          }
          break;
        case 39:
          // RIGHT
          if (direction !== 3) {
            setDirection(3);
          }
          if (!isMoving) {
            setIsMoving(true);
          }
          break;
        case 40:
          // DOWN
          if (direction !== 1) {
            setDirection(1);
          }
          if (!isMoving) {
            setIsMoving(true);
          }
          break;
        case 88:
          if (isNextToSign(position, scale)) {
            select.play();
          }
          if (isNextToLeftDoor(position, scale)) {
            select.play();
          }
          if (isNextToRightDoor(position, scale)) {
            select.play();
          }
          break;
        default:
          break;
      }
    };

    const keyUpHandler = e => {
      if (isMainMenuShown) {
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
    if (window.innerWidth < 313 * 1.5) {
      setScale(window.innerWidth / (313 * 1.5));
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
      } else {
        bump.play();
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
  }, [isMoving, direction, position, scale, isMainMenuShown]);

  return (
    <>
      {isMainMenuShown ? (
        <MainMenu setIsMainMenuShown={setIsMainMenuShown} />
      ) : (
        <>
          <Container x={position.x} y={position.y}>
            <Player
              direction={direction}
              isMoving={isMoving}
              scale={scale * 1}
            />
          </Container>
          <StageBackgroundImage
            src={stageBackgroundImage}
            scale={scale * 1.5}
          />
        </>
      )}
    </>
  );
};

export default Stage;
