/**
 *
 * Description
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Description(props) {
  return (
    <div>
     	{ props.content }
    </div>
  );
}

Description.propTypes = {};

export default memo(Description);
