import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the saunaPage state domain
 */

const selectSaunaPageDomain = state => state.saunaPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SaunaPage
 */

const makeSelectSaunaPage = () =>
  createSelector(
    selectSaunaPageDomain,
    substate => substate,
  );

export default makeSelectSaunaPage;
export { selectSaunaPageDomain };
