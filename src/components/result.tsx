import React from 'react';
import * as types from '../types';

/* eslint-disable no-underscore-dangle */
const Result: React.FunctionComponent<types.Result> = (result: types.Result) => (
  <div key={result._id}>
    <img src={result.picture} alt="" />
    <div>{result._id}</div>
    <div>{result.name}</div>
    <div>{result.link}</div>
    <div>{result.description}</div>
  </div>
);
/* eslint-enable no-underscore-dangle */

export default Result;
