import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogPage state domain
 */

const selectBlogPageDomain = state => state.post;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogPage
 */

const makeSelectBlogPage = () =>
  createSelector(
    selectBlogPageDomain,
    substate => substate && substate.postsList,
  );

export default makeSelectBlogPage;
export { selectBlogPageDomain };
