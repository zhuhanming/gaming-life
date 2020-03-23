import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import './ProgressBar.scss';

const ProgressBarContainer = styled.div`
  position: absolute;
  z-index: 0;
  width: ${({ width }) => width}px;
  height: 6px;
  background-color: transparent;
  transform: translate(0px, ${({ width }) => -(width / 2 + 3)}px);
  display: flex;
  justify-content: space-between;
`;

const ProgressBarMinibar = styled.div`
  background-color: ${({ color }) => color};
  width: calc((1 / 6) * 100% - 0.2rem);
  height: 100%;
`;

const ProgressBar = ({ width }) => {
  const { correctStreak } = useSelector(state => state.game);
  const { length } = correctStreak;

  return (
    <ProgressBarContainer width={width}>
      {correctStreak.map(record => (
        <ProgressBarMinibar
          color={record ? 'green' : 'brown'}
          key={`progress-item-${record}-${Math.random()}`}
        >
          &nbsp;
        </ProgressBarMinibar>
      ))}
      {_.times(6 - length, i => (
        <ProgressBarMinibar color="dimgrey" key={`placeholder-progress-${i}`}>
          &nbsp;
        </ProgressBarMinibar>
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
