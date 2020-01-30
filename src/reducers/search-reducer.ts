import * as types from '../types';
import * as constants from '../constants';

export const initialState: types.ResultsState = {
  results: [],
};

export default (
  state: types.ResultsState = initialState,
  action: types.SearchAction,
): types.ResultsState => {
  Object.freeze(state);
  switch (action.type) {
    case constants.LOAD_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload.results,
      };
    default:
      return state;
  }
};
