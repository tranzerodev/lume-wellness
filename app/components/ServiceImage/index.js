/**
 *
 * ServiceImage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { device } from 'device';

const ImageContainer = styled.div`
	width: 375px;
	height: 375px;
	margin: 0px auto;
	z-index: 100;
	display: inline-block;
	background-image: url(${props => props.img_source});
	background-repeat: no-repeat;
	background-position: center center fixed;

	background-size: cover !important;
	-o-background-size: cover !important;
    -moz-background-size: cover !important;
    -webkit-background-size: cover !important;
    

	@media ${device.mobileS}{
		width: 375px;
		height: 375px;
		margin: 0px auto;
	}

	@media ${device.mobileM}{
		width: 420px;
		height: 420px;
	}

	@media ${device.mobileL}{
		width: 500px;
		height: 500px;
	}

	@media ${device.tablet}{
		width: 500px;
		height: 500px;
	}

	@media ${device.laptop}{
		width: 600px;
		height: 600px;
	}

	@media ${device.laptopL}{
		width: 800px;
		height: 800px;
	}
`

function ServiceImage(props) {
  return (
   	<ImageContainer 
   		img_source={props.img_source}
   	/>
  );
}

ServiceImage.propTypes = {};

export default memo(ServiceImage);
