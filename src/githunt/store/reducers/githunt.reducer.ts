import * as fromActions from './githunt.reducers';

describe('All githunt module actions perform correctly', () => {
  test('githunt search repo actions working properly', () => {
    const desireAction = {
      type: fromActions.GET_SEARCH_REPOS,
      searchTerm: 'test'
    };
    const result = new fromActions.GetSearchRepos('test');
    expect(result).toEqual(desireAction);
  });
});
