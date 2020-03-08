import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.p`
  font-size: 2rem;
`;

const Loading = () => {
  const side = window.innerWidth < 313 * 1.5 ? window.innerWidth : 313 * 1.5;
  return (
    <div className="App">
      <header className="App-header">
        <Container height={side} width={side}>
          <LoadingText>LOADING...</LoadingText>
        </Container>
      </header>
    </div>
  );
};

export default Loading;
