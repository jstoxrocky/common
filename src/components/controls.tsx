import React from 'react';
import SearchField from './search-field';

const Controls: React.FunctionComponent = (): React.ReactElement => (
  <div className="controls">
    <div className="control">
      <SearchField />
    </div>
  </div>
);

export default Controls;
