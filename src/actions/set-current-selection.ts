import * as constants from '../constants';
import * as types from '../types';

const setCurrentSelection = (result: types.Result): types.SetCurrentSelectionAction => ({
  type: constants.SET_CURRENT_RESULT,
  result,
});

export default setCurrentSelection;
