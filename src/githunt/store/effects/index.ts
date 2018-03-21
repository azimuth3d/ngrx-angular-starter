import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import {
  switchMap,
  map,
  debounceTime,
  distinctUntilChanged,
  tap,
  catchError
} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import * as actions from '../actions';
import * as fromSearch from '../../models';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  @Effect()
  query$: Observable<Action> = this.actions$
    .ofType(actions.GET_SEARCH_REPOS)
    .pipe(
      map((action: actions.GetSearchRepos) => action.searchTerm),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        return this.http
          .get<fromSearch.SearchResults>(
            `https://api.github.com/search/repositories?q=${searchTerm}`
          )
          .pipe(
            map((result: fromSearch.SearchResults) => {
              return new actions.GetSearchReposSuccess(result);
            }),
            catchError(error => of(new actions.GetSearchReposFailed(error)))
          );
      })
    );
}
