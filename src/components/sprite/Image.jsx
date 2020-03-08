import React from 'react';

import styled from 'styled-components';

const SpriteImage = styled.img`
  transform: translate(-${({ left }) => left}px, -${({ top }) => top}px);
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Image = ({ image, size, step, direction }) => {
  const { width, height } = size;
  const top = height * (direction - 1);
  const left = width * step;

  return <SpriteImage src={image} top={top} left={left} />;
};

export default Image;
