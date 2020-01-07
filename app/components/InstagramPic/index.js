/**
 *
 * InstagramPic
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InstagramPic() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InstagramPic.propTypes = {};

export default memo(InstagramPic);
