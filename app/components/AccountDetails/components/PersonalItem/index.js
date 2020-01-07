import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import {
	Card,
  	CardHeader,
  	CardTitle,
  	CardContent,
	CardEdit,
	Input
} from '../MyInfo/styles';

const PersonalItem = ({ name, address, phone_number, email, user, editInfo }) => {
	const [active, setActive] = useState(false);
	const [data, setData] = useState({ name, address, phone_number, email });
	const handleEdit = () => {
		setActive(true);
	}
	const handleSave = () => {
		setActive(false);
		editInfo(data);
	}

	const handleChange = (event, type) => {
		const newObj = {...data, [type]: event.target.value };
		setData(newObj);
	}
	const edit = active ? <CardEdit onClick={handleSave}>Save</CardEdit> : <CardEdit onClick={handleEdit}>EDIT</CardEdit>;

	const EditableItem = (type, name) => {
		const item = active ?
			<Input type="text" name={type} value={data[type]} onChange={(e) => handleChange(e, type)}/>
		:
			<>{name}</>
			;
		return item;
	}

	return (
		<Card>
			<CardHeader>
				<Col md={10}>
					<CardTitle>MY INFO</CardTitle>
				</Col>
				<Col md={2}>
					{edit}
				</Col>
			</CardHeader>
			<CardContent>
				<Col xs={4} md={2} className="label">NAME</Col>
				<Col xs={8} md={10}>{EditableItem('name', name)}</Col>
				
				<Col xs={4} md={2} className="label">ADDRESS</Col>
				<Col xs={8} md={10}>{EditableItem('address', address)}</Col>

				<Col xs={4} md={2} className="label">PHONE</Col>
				<Col xs={8} md={10}>{EditableItem('phone_number', phone_number)}</Col>

				<Col xs={4} md={2} className="label">EMAIL</Col>
				<Col xs={8} md={10}>{EditableItem('email', email)}</Col>
				
			</CardContent>
		</Card>
	)
}

export default PersonalItem;