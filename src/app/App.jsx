import React, { useEffect } from 'react';

import Loading from 'components/loading';
import Stage from 'components/stage';
import './App.scss';

const App = () => {
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
          <Stage />
        </header>
      </div>
    </React.Suspense>
  );
};

export default App;
