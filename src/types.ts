export type Term = string;

export interface Result {
  _id: string;
  picture: string;
  description: string;
  link: string;
  name: string;
}

export type Results = Result[];

export interface SearchPayload {
  results: Results;
}

export interface PendingSearchPayloadAction {
  type: string;
  payload: Promise<SearchPayload>;
}

export interface SearchAction {
  type: string;
  payload: SearchPayload;
}

export interface ResultsState {
  results: Results;
}

export interface Params {
  term: Term;
}

export interface AppState {
  results: Results;
}

export interface Actions {
  loadSearchResults: Function;
}

export interface Context {
  state: AppState;
  actions: Actions;
}
