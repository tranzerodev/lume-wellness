import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutPage state domain
 */

const selectAboutPageDomain = state => state.aboutPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutPage
 */

const makeSelectAboutPage = () =>
  createSelector(
    selectAboutPageDomain,
    substate => substate,
  );

export default makeSelectAboutPage;
export { selectAboutPageDomain };
