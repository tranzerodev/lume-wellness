import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import {
	Section,
	Block,
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardBody,
	CardEdit
} from './styles';

export default function AvailableCredits() {
	return (
		<Section>
			<Block>
				<Card>
					<CardHeader>
						<Col><CardTitle>CREDITS</CardTitle> </Col>
					</CardHeader>
					<CardBody>
						<CardContent>
							<Col xs={1}>1</Col>
							<Col xs={2}>9/20/20 exp.</Col>
							<Col xs={7}>
								60 minute Massage
							</Col>
							<Col xs={2}>
								<CardEdit>USE</CardEdit>
							</Col>
						</CardContent>
						<CardContent>
							<Col xs={1}>2</Col>
							<Col xs={2}>9/20/20 exp.</Col>
							<Col xs={7}>
								Booster Shot
							</Col>
							<Col xs={2}>
								<CardEdit>USE</CardEdit>
							</Col>
						</CardContent>
						<CardContent>
							<Col xs={1}>3</Col>
							<Col xs={2}>9/20/20 exp.</Col>
							<Col xs={7}>
							IV Drip
							</Col>
							<Col xs={2}>
								<CardEdit>USE</CardEdit>
							</Col>
						</CardContent>
						<CardContent>
							<Col xs={1}>3</Col>
							<Col xs={2}>9/20/20 exp.</Col>
							<Col xs={7}>
							Cryotherapy
							</Col>
							<Col xs={2}>
								<CardEdit>USE</CardEdit>
							</Col>
						</CardContent>
					</CardBody>
				</Card>
			</Block>
		</Section>
	)
}