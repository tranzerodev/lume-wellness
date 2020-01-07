import React from 'react';
import PropTypes from 'prop-types';

import { Day } from './styles';

const TableHead = ({ days }) => (
  <thead>
    <tr>
      {days.map((day, i) => (
        <Day key={i}>{day}</Day>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string),
};

export default TableHead;
