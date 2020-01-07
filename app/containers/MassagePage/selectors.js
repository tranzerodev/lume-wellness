import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the massagePage state domain
 */

const selectMassagePageDomain = state => state.massagePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MassagePage
 */

const makeSelectMassagePage = () =>
  createSelector(
    selectMassagePageDomain,
    substate => substate,
  );

export default makeSelectMassagePage;
export { selectMassagePageDomain };
