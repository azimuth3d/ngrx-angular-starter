import { Component, OnInit } from '@angular/core';
import { SearchResults, ResultItem } from '../models';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions';
import * as fromReducers from '../store/reducers';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'git-hunt',
  templateUrl: 'githunt.container.html',
  styleUrls: ['githunt.container.scss']
})
export class GithuntContainer implements OnInit {
  searchResults: Observable<SearchResults>;
  resultItems: Observable<ResultItem[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.searchResults = this.store.select(fromReducers.getSearchResults);
    this.resultItems = this.store.select(fromReducers.getSearchItems);
  }

  applySearch(term: string) {
    this.store.dispatch(new fromActions.GetSearchRepos(term));
  }
}
