/**
 *
 * MenuDropdown
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MenuDropdown() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MenuDropdown.propTypes = {};

export default memo(MenuDropdown);
