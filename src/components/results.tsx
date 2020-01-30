import React, { useContext } from 'react';
import Context from '../store';
import Result from './result';

const Results: React.FunctionComponent = () => {
  const {
    state: {
      selection,
    },
  } = useContext(Context);

  if (selection === null || selection === undefined) {
    return <div className="content" />;
  }

  /* eslint-disable no-underscore-dangle */
  const currentResult = (
    <Result
      _id={selection._id}
      name={selection.name}
      picture={selection.picture}
      description={selection.description}
      link={selection.link}
    />
  );
  /* eslint-enable no-underscore-dangle */

  return (
    <div className="content">{currentResult}</div>
  );
};

export default Results;
