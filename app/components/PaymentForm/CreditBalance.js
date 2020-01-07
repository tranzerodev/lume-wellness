import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const Container = styled.div`
	border: 1px solid black;
	padding: 40px;
	margin: 20px 0px;
`

const Balance = styled(Row)`
	font-size: 21px;
`

const UseButton = styled.button`
	border: 1px solid black;
	background-color: white;
	padding: 10px;
	width: 100px;
`
const AvailableCreditMessage = styled(Col)`
	margin: 0px;
	padding: 10px 0px;
`

export default function CreditBalance(props) {
	return (
		<Container>
			<Row>
				<h4> Available Credits </h4>
			</Row>

			<Balance>
				<AvailableCreditMessage md={9}>
					You have {props.balance} IV Drop credits available to use
				</AvailableCreditMessage>
				<Col md={3}>
					<UseButton> USE </UseButton>
				</Col>
			</Balance>
		</Container>
	)
}