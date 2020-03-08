import React, { useEffect, useState } from 'react';

import Loading from 'components/loading';
import Stage from 'components/stage';
import './App.scss';

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    window.dispatchEvent(new Event('resize'));

    return () => {
      window.removeEventListener('resize', () => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    };
  }, []);
  return (
    <React.Suspense fallback={<Loading isLoading />}>
      <div className="App">
        <header className="App-header">
          {showLoading && <Loading isLoading={false} />}
          <Stage />
        </header>
      </div>
    </React.Suspense>
  );
};

export default App;
