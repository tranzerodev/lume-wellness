/**
 *
 * Title
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from 'device';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const TitleContent = styled.p`
	margin: auto 40px; 
	width: 400px;
	color: #f1f1f1;
	font-family: Sailec-Bold;
	font-weight: normal;
	font-style: normal;
	text-align: left !important;

	@media ${device.mobileS} {
		margin: 5px 40px;
		font-size: 35px;
		text-align: left !important;
	}

	@media ${device.mobileM} {
		font-size: 40px;
		margin: 0px 40px;
		text-align: left !important;
	}

	@media ${device.mobileL} {
		font-size: 40px !important;
		margin: 0px 50px;
		text-align: left !important;
	}

	@media ${device.tablet} {
		font-size: 50px !important;
		margin: 0px 50px;
	}

	@media ${device.laptop} {
		font-size: 60px;
		margin: 30px 50px;
	}

	@media ${device.laptopL} {

	}
`
function Title(props) {
  return (
    <TitleContent> {props.content} </TitleContent>
  );
}

Title.propTypes = {};

export default memo(Title);
