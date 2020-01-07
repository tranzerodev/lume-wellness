import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the BookingPage state domain
 */

const selectBookingPageDomain = state => state.bookingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BookingPage
 */

const makeSelectBookingPage = () =>
  createSelector(
    selectBookingPageDomain,
    substate => substate,
  );

export default makeSelectBookingPage;
export { selectBookingPageDomain };
