import React, {useState} from 'react';
import CardOnFile from '../CardOnFile';
import AddCard from '../AddCard';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import {
  CardEdit,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '../MyInfo/styles';

const PaymentMethod = ({cards, user, addCard, deleteCard}) => {
	const [active, setActive] = useState(false);
	const handleEdit = () => {
		setActive(true);
	}
	const handleSave = () => {
		setActive(false);
  }
	const edit = active ? <CardEdit onClick={handleSave}>Save</CardEdit> : <CardEdit onClick={handleEdit}>EDIT</CardEdit>;

  return (
    <>
		<Card>
			<CardHeader>
				<Col md={10}>
					<CardTitle>Card On File</CardTitle>
				</Col>
				<Col md={2}>
					{edit}
				</Col>
			</CardHeader>
			<CardContent>
				{
					cards.map((card, index) => (
            			<CardOnFile key={index} card={card} active={active} deleteCard={deleteCard}/>
					))
						}
		    </CardContent>
		</Card>
        <AddCard user={user} addCard={addCard} buttonText="Add Card"/>
    </>
	)
}
PaymentMethod.propTypes = {
    cards: PropTypes.array,
    user: PropTypes.object,
    addCard: PropTypes.function,
    deleteCard: PropTypes.function,
}
export default PaymentMethod;