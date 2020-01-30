import React from 'react';
import Controls from './controls';
import Results from './results';

const App: React.FunctionComponent = (): React.ReactElement => (
  <div className="container">
    <div className="title">
      <h1>Common</h1>
    </div>
    <Controls />
    <Results />
  </div>
);

export default App;
