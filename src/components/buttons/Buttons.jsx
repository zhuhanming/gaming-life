import React from 'react';
import styled from 'styled-components';

import DPad from './DPad';

import './Buttons.scss';

const ButtonContainer = styled.div`
  width: ${({ width }) => width}px;
  position: absolute;
  z-index: 1;
  transform: translate(0, ${({ width }) => (2 * width) / 3}px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${({ width }) => width / 3}px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Buttons = ({
  width,
  handleUp,
  handleDown,
  handleLeft,
  handleRight,
  handleSelect,
  handleRelease
}) => {
  return (
    <ButtonContainer width={width}>
      <DPad
        handleUp={handleUp}
        handleDown={handleDown}
        handleRight={handleRight}
        handleLeft={handleLeft}
        handleRelease={handleRelease}
      />
      <button
        type="button"
        className="select-button"
        onTouchStart={handleSelect}
      >
        <i className="fas fa-times" />
      </button>
    </ButtonContainer>
  );
};

export default Buttons;
