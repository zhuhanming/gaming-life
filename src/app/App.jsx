import React, { useEffect } from 'react';

import Loading from 'components/loading';
import Stage from 'components/stage';
import './App.scss';

const App = () => {
  let audioCtx;
  window.onload = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    // eslint-disable-next-line no-unused-vars
    audioCtx = new AudioContext();
  };
  useEffect(() => {
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    return () => {
      window.removeEventListener('resize', () => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    };
  });
  return (
    <React.Suspense fallback={<Loading />}>
      <div className="App">
        <header className="App-header">
          <Stage audioCtx={audioCtx} />
        </header>
      </div>
    </React.Suspense>
  );
};

export default App;
