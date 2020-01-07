import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cryoPage state domain
 */

const selectCryoPageDomain = state => state.cryoPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CryoPage
 */

const makeSelectCryoPage = () =>
  createSelector(
    selectCryoPageDomain,
    substate => substate,
  );

export default makeSelectCryoPage;
export { selectCryoPageDomain };
