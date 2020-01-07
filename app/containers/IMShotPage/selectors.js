import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the massagePage state domain
 */

const selectIMShotPageDomain = state => state.imshotPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MassagePage
 */

const makeSelectIMShotPage = () =>
  createSelector(
    selectIMShotPageDomain,
    substate => substate,
  );

export default makeSelectIMShotPage;
export { selectIMShotPageDomain };
