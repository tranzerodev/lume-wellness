import styled from 'styled-components';
import { device } from 'device';
import { Row, Col } from 'react-bootstrap';

export const Container = styled.div`
	width: 100%;
	margin: 0px;
    overflow: hidden;
	background-color: #364650;

	@media ${device.mobileS} {
    	padding: 35px 0 50px;
	}
	@media ${device.tablet} {
		padding: 40px 0 75px;
	}
	@media ${device.laptop} {
		padding: 70px 0 75px;
		min-height: 700px;
	}
`
export const CallToAction = styled(Col)`
	padding: 50px 0px 0px 0px;
	font-family: Sailec-Bold;
	text-align: center;
	color: white;
	font-size: 32px;
`
export const Description = styled(Col)`
	padding: 25px 0px 50px 0px;
	font-family: sailec;
	text-align: center;
	color: #ffffff;
	font-size: 20px;
`