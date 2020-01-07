import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ivDripPage state domain
 */

const selectIvDripPageDomain = state => state.ivDripPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IvDripPage
 */

const makeSelectIvDripPage = () =>
  createSelector(
    selectIvDripPageDomain,
    substate => substate,
  );

export default makeSelectIvDripPage;
export { selectIvDripPageDomain };
