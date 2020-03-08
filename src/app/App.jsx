import React from 'react';

import Loading from 'components/loading';
import retryPromise from 'utils/promiseUtils';

import './App.scss';

const loadStage = () => import('components/stage');
const Stage = React.lazy(() => retryPromise(loadStage));

const App = () => {
  React.useEffect(() => {
    loadStage();
  }, []);

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
