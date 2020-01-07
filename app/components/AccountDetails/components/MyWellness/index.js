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
	CardEdit,
} from './styles';

export default function MyWellness() {
	return (
		<Section>
			<Block>
				<Card>
					<CardHeader>
						<Col md={10}><CardTitle>WELLNESS</CardTitle></Col>
						<Col md={2}>
							<CardEdit>EDIT</CardEdit>
						</Col>
					</CardHeader>
					<CardContent>
						<Col xs={12}>Wellness Content</Col>
					</CardContent>
				</Card>
			</Block>
		</Section>
	)
}