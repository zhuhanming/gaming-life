import React from 'react';

import Loading from 'components/loading';
import Stage from 'components/stage';
import './App.scss';

const App = () => {
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
