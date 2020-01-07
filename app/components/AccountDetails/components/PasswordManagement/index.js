import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardEdit,
  Input
} from '../MyInfo/styles';

const PasswordManagement = ({ password, editPassword }) => {
	
	const [active, setActive] = useState(false);
	const [pass, setPass] = useState('');

	useEffect(() => {
		setPass(password);
	}, [password])

	const handleEdit = () => {
		setActive(true);
	}
	const handleSave = () => {
		setActive(false);
		editPassword(pass);
	}
	const handleChange = e => {
		setPass(e.target.value);
	}
	const edit = active ? <CardEdit onClick={handleSave}>Save</CardEdit> : <CardEdit onClick={handleEdit}>EDIT</CardEdit>;
	return (
		<Card>
			<CardHeader>
				<Col md={10}>
					<CardTitle>PASSWORD</CardTitle>
				</Col>
				<Col md={2}>
					{edit}
				</Col>
			</CardHeader>
			<CardContent>
				<Col xs={6}><CardTitle>CURRENT PASSWORD</CardTitle></Col>
				<Col xs={6}><Input type={active ? 'text' : 'password'} value={pass} disabled={!active} onChange={handleChange}/></Col>
			</CardContent>
		</Card>
	)
}

export default PasswordManagement;