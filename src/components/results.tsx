import React, { useContext } from 'react';
import Context from '../store';

const Results: React.FunctionComponent = () => {
  const {
    state: {
      results,
    },
  } = useContext(Context);

  const currentResults = results.map((result) => (
    <div>
      {result.description}
      {result.name}
    </div>
  ));

  return (
    <div className="content">{currentResults}</div>
  );
};

export default Results;
