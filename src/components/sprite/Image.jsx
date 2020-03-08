import React from 'react';

import styled from 'styled-components';

const SpriteImage = styled.img`
  transform: translate(-${({ left }) => left}px, -${({ top }) => top}px);
`;

const Image = ({ image, size, step, direction }) => {
  const { width, height } = size;
  const top = height * (direction - 1);
  const left = width * step;

  return <SpriteImage src={image} top={top} left={left} />;
};

export default Image;
