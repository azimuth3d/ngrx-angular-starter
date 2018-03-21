import * as fromActions from './githunt.actions';
import { SearchResults } from '../../models';

describe('All githunt module actions perform correctly', () => {
  test('githunt search repo actions working properly', () => {
    const desireAction = {
      type: fromActions.GET_SEARCH_REPOS,
      searchTerm: 'test'
    };
    const result = new fromActions.GetSearchRepos('test');
    expect(result).toEqual(desireAction);
  });

  test('githunt search repo success actions working properly', () => {
    const searchResults: SearchResults = {
      total_count: 555,
      incomplete_results: true,
      items: []
    };

    const desireAction = {
      type: fromActions.GET_SEARCH_REPOS_SUCCESS,
      results: searchResults
    };

    const final = new fromActions.GetSearchReposSuccess(searchResults);
    expect(final).toEqual(desireAction);
  });

  test('githunt search repo failed actions working properly', () => {
    const desireAction = {
      type: fromActions.GET_SEARCH_REPOS_FAILED,
      error: 'Cannot connect to git for Hunt!'
    };

    const final = new fromActions.GetSearchReposFailed(
      'Cannot connect to git for Hunt!'
    );
    expect(final).toEqual(desireAction);
  });
});
