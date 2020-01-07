import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the comingSoonPage state domain
 */

const selectComingSoonPageDomain = state =>
  state.comingSoonPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ComingSoonPage
 */

const makeSelectComingSoonPage = () =>
  createSelector(
    selectComingSoonPageDomain,
    substate => substate,
  );

export default makeSelectComingSoonPage;
export { selectComingSoonPageDomain };
