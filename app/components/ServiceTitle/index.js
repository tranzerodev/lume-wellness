/**
 *
 * ServiceTitle
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
	color: #364650 !important;
	text-align: center;
	width: 100%;
	padding: 50px 20px;
  	margin: 0px;
  	font-size: 32px !important;
  	letter-spacing: 1px !important;
`

function ServiceTitle(props) {
  return (
    <Title> {props.content} </Title>
  );
}

ServiceTitle.propTypes = {};

export default memo(ServiceTitle);
