/**
 *
 * Announcement Bar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIdentityContext } from 'react-netlify-identity';

import { Bar, Text, BoldText } from './styles';

const AnnouncementBar = props => {
  const identity = useIdentityContext();
  return (
    <>
      <Bar>
        <a
          href="http://lumeholiday.pagedemo.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>
            We’re making gifting easy this year with our giftcard offers.
          </Text>
          <BoldText>SHOP OFFERS</BoldText>
        </a>
      </Bar>
    </>
  );
};

AnnouncementBar.propTypes = {};

export default AnnouncementBar;
