import React from 'react';
import styled from 'styled-components';
import { isMobile, isSafari } from 'react-device-detect';

import { IDEAL_WIDTH } from 'constants/numbers';

const LoadingContainer = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  background-color: black;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.2s;
`;

const GameTitle = styled.h1`
  line-height: 5rem;
  font-size: 4rem;
  font-family: 'DPComic';
  font-weight: normal;
  margin: 0;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  margin: 1rem;
`;

const Warning = styled.p`
  font-size: 0.8rem;
  color: red;
  margin: 1rem;
`;

const Loading = ({ isLoading, showLoading = true }) => {
  const side =
    window.innerWidth < IDEAL_WIDTH ? window.innerWidth : IDEAL_WIDTH;
  if (!isLoading) {
    return (
      <LoadingContainer
        height={side}
        width={side}
        opacity={showLoading ? 1 : 0}
      >
        <GameTitle>Gaming Life</GameTitle>
        <LoadingText>by Hanming Zhu</LoadingText>
        {isMobile && <Warning>Sound effects may lag on your device!</Warning>}
        {!isMobile && isSafari && (
          <Warning>Sound effects may be buggy on Safari!</Warning>
        )}
      </LoadingContainer>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <LoadingContainer height={side} width={side} opacity={1}>
          <GameTitle>Gaming Life</GameTitle>
          <LoadingText>LOADING...</LoadingText>
          <Warning>Sound effects will lag on Safari!</Warning>
        </LoadingContainer>
      </header>
    </div>
  );
};

export default Loading;
