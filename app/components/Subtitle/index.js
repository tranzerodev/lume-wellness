/**
 *
 * Subtitle
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import messages from './messages';

const SubtitleContent = styled.p`
	width: 500px;
	margin: 50px 40px;
	font-size: 21px;
	text-align: left;
	font: Regular 20px/28px Calluna;
	letter-spacing: 1px;
	color: #E7DDD2;
	opacity: 1;

	@media only screen and (max-width: 600px){
		{
			display: none;
		}
	}
`

function Subtitle(props) {
  return (
    <SubtitleContent>
    	{props.content}
    </SubtitleContent>
  );
}

Subtitle.propTypes = {};

export default memo(Subtitle);
