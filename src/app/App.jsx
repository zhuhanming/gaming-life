import React, { useEffect, useState } from 'react';
import { isBrowser, isSafari } from 'react-device-detect';

import Loading from 'components/loading';
import Stage from 'components/stage';
import Sounds from 'components/sounds/Sounds';

import './App.scss';

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const adjustVh = () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    // We listen to the resize event
    window.addEventListener('resize', adjustVh);

    setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    window.dispatchEvent(new Event('resize'));

    return () => {
      window.removeEventListener('resize', adjustVh);
    };
  }, []);

  if (isSafari) {
    console.log('SAFARI!!');
  } else {
    console.log('NOT SAFARI!!!');
  }

  return (
    <React.Suspense fallback={<Loading isLoading />}>
      <>
        {isBrowser && isSafari && <Sounds />}
        <div className="App">
          <header className="App-header">
            {showLoading && <Loading isLoading={false} />}
            <Stage isSafari={isBrowser && isSafari} />
          </header>
        </div>
      </>
    </React.Suspense>
  );
};

export default App;
