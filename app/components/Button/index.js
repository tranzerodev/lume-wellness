/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClickMe = styled.button`
  min-width: 190px;
  padding: 10px;
  border: 2px solid white;
  color: white;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  font-size: 15px;
  line-height: 1em;
  font-weight: 700;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
`;

const Button = ({ content, ...rest }) => <ClickMe {...rest}>{content}</ClickMe>;

Button.propTypes = {};

export default memo(Button);
