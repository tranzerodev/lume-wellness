import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FooterSection from 'components/FooterSection';
import TopMenu from 'components/TopMenu';
import AnnouncementBar from 'components/AnnouncementBar';
import { bookingPrefix } from '../../constants/routing';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Page = ({ children }) => {
  const isBooking = Boolean(window.location.pathname !== bookingPrefix);
  console.log('bookingLink', { bookingPrefix });
  return (
    <Wrapper className={!isBooking ? 'booking-page' : null}>
      {isBooking && <AnnouncementBar />}
      {isBooking && <TopMenu />}
      {children}
      {isBooking && <FooterSection />}
    </Wrapper>
  );
};

Page.propTypes = propTypes;

export default Page;
