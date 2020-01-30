import React, { useReducer } from 'react';
import App from './components/app';
import searchReducer, { initialState as resultsInitialState } from './reducers/search-reducer';
import Context from './store';
import * as types from './types';
import loadSearchResults from './actions/load-search-results';

const Root: React.FunctionComponent = (): React.ReactElement => {
  const [resultsState, searchDispatch] = useReducer(searchReducer, resultsInitialState);
  const actions = {
    loadSearchResults: async (params: types.Params): Promise<void> => (
      searchDispatch(await loadSearchResults(params))
    ),
  };
  const value: types.Context = {
    state: { ...resultsState },
    actions,
  };
  return (
    <Context.Provider value={value}>
      <App />
    </Context.Provider>
  );
};

export default Root;
