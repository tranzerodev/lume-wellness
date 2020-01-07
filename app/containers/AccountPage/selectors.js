import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the accountPage state domain
 */

const selectAccountPageDomain = state => state.accountPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AccountPage
 */

const makeSelectAccountPage = () =>
  createSelector(
    selectAccountPageDomain,
    substate => substate,
  );

export default makeSelectAccountPage;
export { selectAccountPageDomain };
