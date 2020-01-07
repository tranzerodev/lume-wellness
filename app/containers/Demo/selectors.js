import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the demo state domain
 */

const selectDemoDomain = state => state.demo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Demo
 */

const makeSelectDemo = () =>
  createSelector(
    selectDemoDomain,
    substate => substate,
  );

export default makeSelectDemo;
export { selectDemoDomain };
