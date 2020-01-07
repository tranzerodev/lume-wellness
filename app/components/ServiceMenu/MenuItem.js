import React from 'react'
import {Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BookingLink from 'components/BookingLink';


const ItemContainer = styled(Col)`
	min-height: 420px;
	height: auto;
	width: auto;
	margin: 50px;
	background-color: white;
	border-bottom: 1px solid #364650;
`

const ItemTitle = styled.div`
	color: #364650;
	font-size: 30px;
	font-family: Sailec-Bold;
`

const ItemSubtitle = styled.div`
	color: #364650;
	font-size: 21px;
	font-family: Sailec-Regular;
`

const ItemPrice = styled.div`
	color: #364650;
	font-size: 21px;
	font-family: Sailec-Regular;
`

const ItemDescription = styled.div`
	padding: 40px 0px;
	color: #364650;
	font-size: 21px;
	font-family: Calluna-Regular;
`

const MoreinfoIcon = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	border: 1px solid #364650;
	margin: 0px 10px;
	display: inline-block;
`
const ItemMoreinfo = styled.div`
	color: #364650;
	font-size: 21px;
	font-family: Sailec-Regular;
	text-decoration: none !important;
	padding: 0px 10px;
	margin: 0px auto !important;

	a {
		text-decoration: none !important;
	}
`

const ItemMoreinfoText = styled.div`
	text-decoration: none !important;
	font-size: 25px;
	margin: 10px 0px 0px -10px;
	color: #364650;
	max-width: 116px;

	text-align: center;
	&:hover {
		border-bottom: 2px solid  #364650;
	}
`
const ItemBook = styled.button`
	font-size: 24px;
	font-family: Sailec-Bold;
	text-transform: uppercase;
	background-color: #364650;
	color: white;
	padding: 10px;
	margin: 5px 0px;
	min-width: 137px;
	min-height: 53px;
`


const ActionRow = styled(Row)`
	position: absolute;
	bottom: 0px;
	width: 100%;
	padding-bottom: 20px;
`
export default function MenuItem(props) {
	return (
		<ItemContainer>
			<Row>
				<Col md={{span: 8, offset: 1}}>
					<ItemTitle>
						{props.item_title}
					</ItemTitle>
					<ItemSubtitle>
						{props.item_subtitle}
					</ItemSubtitle>
				</Col> 
				<Col md={2} >
					<ItemPrice>
						{props.item_price}
					</ItemPrice>
				</Col> 
			</Row>
			<Row>
				<Col md={{span: 10, offset: 1}}>
					<ItemDescription>
						{props.item_description}
					</ItemDescription>
				</Col>
			</Row>
			<ActionRow>
				<Col md={{span: 3, offset: 1}}>
					<ItemMoreinfo>
						<a href={props.item_info}>
						<Row>
							<MoreinfoIcon></MoreinfoIcon>
							<MoreinfoIcon></MoreinfoIcon>
							<MoreinfoIcon></MoreinfoIcon>
						</Row>
						<ItemMoreinfoText> 
							More Info 
						</ItemMoreinfoText> 
						</a>
					</ItemMoreinfo>
				</Col>
				<Col md={{span: 2, offset: 5}} >
					<ItemBook>
						Book
					</ItemBook>
				</Col>
			</ActionRow>
		</ItemContainer>
	)
}