/**
 *
 * InstagramSection
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import InstagramSlider from 'components/InstagramSlider';
import { InstagramContainer, InstagramTitle } from './styles';

const InstagramSection = () => (
  <InstagramContainer>
    <InstagramTitle>Social Connect</InstagramTitle>
    <InstagramSlider />
  </InstagramContainer>
);

InstagramSection.propTypes = {};

export default memo(InstagramSection);
