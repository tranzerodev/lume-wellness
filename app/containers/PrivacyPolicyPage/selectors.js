import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the privacyPolicyPage state domain
 */

const selectPrivacyPolicyPageDomain = state =>
  state.privacyPolicyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PrivacyPolicyPage
 */

const makeSelectPrivacyPolicyPage = () =>
  createSelector(
    selectPrivacyPolicyPageDomain,
    substate => substate,
  );

export default makeSelectPrivacyPolicyPage;
export { selectPrivacyPolicyPageDomain };
