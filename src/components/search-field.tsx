import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import * as types from '../types';
import Context from '../store';

const SearchField: React.FunctionComponent = (): React.ReactElement => {
  const {
    state: {
      results,
    },
    actions,
  } = useContext(Context);

  let onChangeDebounced = async (
    term: string,
  ): Promise<void> => {
    if (term !== '') {
      const params: types.Params = { term };
      actions.loadSearchResults(params);
    }
  };

  onChangeDebounced = debounce(onChangeDebounced, 500);

  const onChange = async (term: string): Promise<void> => {
    onChangeDebounced(term);
  };

  const handleClick = (e, selection): void => {
    actions.setCurrentSelection(selection);
  };

  /* eslint-disable react/jsx-props-no-spreading */
  const searchField = (params): JSX.Element => (
    <TextField
      {...params}
      id="standard-basic"
      label="Search"
      style={{ width: 300 }}
      onChange={(e): Promise<void> => onChange(e.target.value)}
    />
  );

  const autoComplete = (
    <Autocomplete
      id="combo-box-demo"
      options={results}
      getOptionLabel={(result): string => result.name}
      renderInput={(params): JSX.Element => searchField(params)}
      onChange={(e, values): void => handleClick(e, values)}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */

  return (
    <div className="control">{autoComplete}</div>
  );
};

export default SearchField;
