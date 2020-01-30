import React, { useContext } from 'react';
import Context from '../store';
import Result from './result';
import * as types from '../types';

const Results: React.FunctionComponent = () => {
  const {
    state: {
      results,
    },
  } = useContext(Context);

  /* eslint-disable no-underscore-dangle */
  const currentResults = results.map((result: types.Result) => (
    <Result
      _id={result._id}
      name={result.name}
      picture={result.picture}
      description={result.description}
      link={result.link}
    />
  ));
  /* eslint-enable no-underscore-dangle */

  return (
    <div className="content">{currentResults}</div>
  );
};

export default Results;
