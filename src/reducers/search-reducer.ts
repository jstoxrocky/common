import * as types from '../types';
import * as constants from '../constants';

export const initialState: types.ResultsState = {
  results: [],
  selection: undefined,
};

export default (
  state: types.ResultsState = initialState,
  action: types.Action,
): types.ResultsState => {
  Object.freeze(state);
  switch (action.type) {
    case constants.LOAD_SEARCH_RESULTS:
      return { ...state, results: (action as types.SearchAction).payload.results };
    case constants.SET_CURRENT_RESULT:
      return { ...state, selection: (action as types.SetCurrentSelectionAction).result };
    default:
      return state;
  }
};
