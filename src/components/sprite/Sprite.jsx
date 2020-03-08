import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Image from './Image';

import './Sprite.scss';

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
  transform: scale(${({ scale }) => `${scale}, ${scale}`});
  transform-origin: center center;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Sprite = ({
  size,
  scale,
  image,
  direction,
  framesPerStep,
  totalSteps,
  isMoving
}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isMoving) {
      setTimeout(() => {
        setStep((step + 1) % totalSteps);
      }, 1000 / (60 / framesPerStep));
    } else {
      setStep(0);
    }
  }, [isMoving, framesPerStep, step, totalSteps]);

  const { width, height } = size;
  return (
    <Container width={width} height={height} scale={scale}>
      <Image image={image} size={size} direction={direction} step={step} />
    </Container>
  );
};

export default Sprite;
