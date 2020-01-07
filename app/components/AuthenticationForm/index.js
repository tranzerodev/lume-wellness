/**
 *
 * AuthenticationForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AuthenticationForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AuthenticationForm.propTypes = {};

export default memo(AuthenticationForm);
