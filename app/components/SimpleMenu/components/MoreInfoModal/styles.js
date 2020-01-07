import styled from 'styled-components';
import { device } from 'device';
import Close from './Close.png';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row } from 'react-bootstrap';

export const Popup = styled(Modal)`
	dialogClassName {
		width: 90%;
	}

	.modal-content {
		font-family: Calluna;
		font-size: 20px;
		font-color: #364650;
		border-radius: 0px;
		border: none;
		width: 1000px !important;	
	}

	.modal-header {
		font-family: Sailec-Bold;
		font-size: 32px;
		font-size: 32px;
		font-color: #364650;
		margin: 0% 7%;
		padding: 30px 0px;
	}

	.modal-body {
		margin: 0 7%;
		padding: 0px;
	}

	.close {
		color: #364650;
		height: 42px;
		width: auto;
	}
`

export const BodySection = styled.div`
	border-top: 2px solid #364650 !important;
	margin: 0px;
	padding: 20px 0px;
	width: 100%;
`

export const ClosePopup = styled.div`
	background-image: url(${Close});
	background-size: cover;
	background-repeat: none;
	height: 42px;
	width: 42px;
`

export const Keywords = styled.div`
	text-transform: uppercase;
	font-family: Calluna-Sans;
	font-weight: 700;
	color: #364650;
	font-size: 22px;
`

export const BenifitTitle = styled.div`
	font-familiy: Calluna-Sans;
	font-weight: 700;
	font-size: 22px;
	text-transform: uppercase;
	padding: 0px;
`

export const BenifitContent = styled.div`
	font-familiy: Calluna;
	font-size: 20x;
	padding: 30px 00px;
`

export const BenifitButton = styled.div`
	font-family: Sailec-Bold !important;
	@media ${device.mobileS} {
		font-size: 15px;
		margin: 10px auto;
		width: 100%;
		text-align: left;
		color:  #364650;
		font-weight: 700;
		padding: 0px 20px;
	}

	@media ${device.laptop} {
		background-color: #364650;
		color: white;
		text-align: center;
		height: 120px;
		width: 120px;
		border-radius:60px;
		line-height: 120px;
		font-size: 11px;
		margin: 10px auto;
	}

	@media ${device.laptopL} {
		margin: 40px auto;
		height: 160px;
		width: 160px;
		border-radius:80px;
		line-height: 160px;
	}
`

