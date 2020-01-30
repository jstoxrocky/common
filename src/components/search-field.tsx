import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import * as types from '../types';
import Context from '../store';

const SearchField: React.FunctionComponent = (): React.ReactElement => {
  const {
    actions,
  } = useContext(Context);

  let onChangeDebounced = async (
    term: string,
  ): Promise<void> => {
    const params: types.Params = { term };
    actions.loadSearchResults(params);
  };

  onChangeDebounced = debounce(onChangeDebounced, 500);

  const handleClick = async (term: string): Promise<void> => {
    onChangeDebounced(term);
  };

  const searchField = (
    <TextField
      id="standard-basic"
      label="Search"
      onChange={(e): Promise<void> => handleClick(e.target.value)}
    />
  );
  return (
    <div className="control">{searchField}</div>
  );
};

export default SearchField;
