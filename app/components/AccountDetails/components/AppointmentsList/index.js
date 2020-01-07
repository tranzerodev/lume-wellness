import React from 'react'
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import {
	Section,
	Block,
	Card,
	CardHeader,
	CardContent,
	CardTitle,
} from './styles';


const UpcomingAppointment = ({appointments}) => {	
	return(
		<Card>
			<CardHeader>
				<Col>
				    <CardTitle>UPCOMING APPOINTMENTS</CardTitle>
				</Col>
			</CardHeader>

			{
				appointments.map((item, key) => (
					<CardContent key={key}>
						<Col xs={4}> {item.date}</Col>
						<Col xs={2}> {item.time}</Col>
						<Col xs={6}> {item.type}</Col>
					</CardContent>
				))
			}

		</Card>
	)
}

const PassAppointment = ({appointments}) => {
	return(	
	<Card>
		<CardHeader>
			<Col><CardTitle>PAST APPOINTMENTS</CardTitle>  </Col>
		</CardHeader>
		{
			appointments.map((item, key) => (
				<CardContent key={key}>
					<Col xs={4}> {item.date}</Col>
					<Col xs={2}> {item.time}</Col>
					<Col xs={6}> {item.type}</Col>
				</CardContent>
			))
	    }
	</Card>
	)
}


export default function AppointmentList({appointments = []}) {
	const now = moment();
	const pastAppointments = appointments.filter(
		appointment => moment(appointment.datetime) < now
	);

	const comingAppointments = appointments.filter(
		appointment => moment(appointment.datetime) >= now
	);

	return (
		<Section>
			<Block>
				<UpcomingAppointment appointments={comingAppointments} />
			</Block>

			<Block>
			<PassAppointment appointments={pastAppointments}  />
			</Block>
		</Section>
	)
}


