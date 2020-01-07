import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the termsofServicesPage state domain
 */

const selectTermsofServicesPageDomain = state =>
  state.termsofServicesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TermsofServicesPage
 */

const makeSelectTermsofServicesPage = () =>
  createSelector(
    selectTermsofServicesPageDomain,
    substate => substate,
  );

export default makeSelectTermsofServicesPage;
export { selectTermsofServicesPageDomain };
