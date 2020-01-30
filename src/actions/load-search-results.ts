import * as constants from '../constants';
import * as endpoints from '../package/endpoints';
import * as types from '../types';

const loadSearchResults = async (params: types.Params): Promise<types.SearchAction> => {
  const payload = await endpoints.loadSearchResults(params);
  return {
    type: constants.LOAD_SEARCH_RESULTS,
    payload,
  };
};

export default loadSearchResults;
