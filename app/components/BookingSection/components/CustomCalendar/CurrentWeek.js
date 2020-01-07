import React from 'react';
import PropTypes from 'prop-types';

import { MDBIcon } from 'mdbreact';

import { Header, Week, CurrentDay } from './styles';

const CurrentWeek = ({ currentWeek, handleChangeWeek, isAvailablePrev }) => (
  <Header>
    <div>
      <Week
        onClick={() => {
          handleChangeWeek('prev');
        }}
        disabled={!isAvailablePrev}
      >
        <MDBIcon className="icon" icon="caret-left" />
        <span>PREVIOUS WEEK</span>
      </Week>
    </div>
    <div>
      <CurrentDay>WEEK OF {currentWeek}</CurrentDay>
    </div>
    <div>
      <Week
        next
        onClick={() => {
          handleChangeWeek('next');
        }}
      >
        <span>NEXT WEEK</span>
        <MDBIcon className="icon" icon="caret-right" />
      </Week>
    </div>
  </Header>
);

CurrentWeek.propTypes = {
  currentWeek: PropTypes.string,
  handleChangeWeek: PropTypes.func,
  isAvailablePrev: PropTypes.bool,
};

export default CurrentWeek;
