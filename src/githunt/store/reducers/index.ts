import * as fromActions from '../actions';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { SearchResults } from '../../models';

// Default data / initial state

// Reducer
export interface SearchState {
  results?: SearchResults;
  loaded: boolean | false;
  loading: boolean | false;
}

const initialState = {
  results: {},
  loaded: false,
  loading: false
};

export function searchReducer(
  state: SearchState = initialState,
  action: fromActions.SearchRepoActions
) {
  switch (action.type) {
    case fromActions.GET_SEARCH_REPOS_SUCCESS:
      return { ...state, results: action.results };
    default:
      return state;
  }
}

export interface State {
  searchItems: SearchState;
}

export const reducers: ActionReducerMap<State> = {
  searchItems: searchReducer
};

// Create the default selectors

export const getSearchs = createFeatureSelector<State>('searchs');

export const getSearchsState = createSelector(
  getSearchs,
  (state: State) => state.searchItems
);

export const getSearchResults = createSelector(
  getSearchsState,
  (state: SearchState) => state.results
);

export const getSearchItems = createSelector(
  getSearchsState,
  (state: SearchState) => state.results.items
);
