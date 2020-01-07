import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the servicesPage state domain
 */

const selectServicesPageDomain = state => state.servicesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ServicesPage
 */

const makeSelectServicesPage = () =>
  createSelector(
    selectServicesPageDomain,
    substate => substate,
  );

export default makeSelectServicesPage;
export { selectServicesPageDomain };
