import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the locationPage state domain
 */

const selectLocationPageDomain = state => state.locationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LocationPage
 */

const makeSelectLocationPage = () =>
  createSelector(
    selectLocationPageDomain,
    substate => substate,
  );

export default makeSelectLocationPage;
export { selectLocationPageDomain };
