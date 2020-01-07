import { device } from 'device';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { LineOnHover } from 'styles/common-styles';


export const ServiceRow = styled.div`
	width: 100%;
	background-color: #364650;
	padding: 0px;
	margin: 0px;
	@media ${device.mobileS}{
		padding: 10px 0px;
		height: 170px;
	}
	@media ${device.tablet} {
		padding: 0px;
		height: 75px;
	}
	@media ${device.laptop} {
		height: 100px;
	}
`

export const ServiceContainer = styled.div`
	margin: 0px auto !important;

	@media ${device.mobileS}{
		width: 100%;
	}
	@media ${device.ipad}{
		width: 90%;
	}
	@media ${device.laptop}{
		width: 70%;
	}
	@media ${device.laptopL}{
		width: 50%;
	}
`

export const ServiceItem = styled.div`
	display: inline-block;
	text-align: center;
	color: white;
	font-family: Sailec-Bold;
	text-align: center;
	position: relative;
	white-space: nowrap;
	height: 50px;
	
	${LineOnHover}
	&:after {
		height: 3px;
		bottom: -15px;
		background-color: white;

		@media ${device.mobileS}{		
			bottom: 0px;
			display: none;
		}

		@media ${device.tablet}{
			display: block;
			bottom: -5px;
		}
		@media ${device.laptop}{
			display: block;
			bottom: -15px;
		}
	}
	
	@media ${device.mobileS}{
		font-size: 13px;
		line-height: 50px;
		width: calc(100% / 2);
	}
	@media ${device.tablet} {
		font-size: 13px;
		line-height: 75px;
		width: calc(100% / 6);
	}

	@media ${device.laptop} {
		font-size: 16px;
		line-height: 100px;
		width: calc(100% / 6);
	}
`