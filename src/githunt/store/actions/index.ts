import { Action } from '@ngrx/store';
import { SearchResults } from '../../models';

export const GET_SEARCH_REPOS = '[Githunt] Get repo search result';
export const GET_SEARCH_REPOS_SUCCESS = '[Githunt] get repo success';
export const GET_SEARCH_REPOS_FAILED = '[Githunt] get repo failed';

export class GetSearchRepos implements Action {
  readonly type = GET_SEARCH_REPOS;
  constructor(public searchTerm: string) {}
}

export class GetSearchReposSuccess implements Action {
  readonly type = GET_SEARCH_REPOS_SUCCESS;
  constructor(public results: SearchResults) {}
}

export class GetSearchReposFailed implements Action {
  readonly type = GET_SEARCH_REPOS_FAILED;
  constructor() {}
}

export type SearchRepoActions =
  | GetSearchRepos
  | GetSearchReposSuccess
  | GetSearchReposFailed;
