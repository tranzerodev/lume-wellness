import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import PasswordManagement from '../PasswordManagement';
import PersonalItem from '../PersonalItem';
import PaymentMethod from '../PaymentMethod';
import {
	Section,
	Block,
} from './styles';

const MyInfo = ({personalInfo, user, editInfo, cards, addCard, deleteCard, editPassword, password}) => (
	<Section>
		<Block>
			{
				personalInfo.map((item, key) => (
					<PersonalItem {...item} user={user} editInfo={editInfo} key={key} />
				))
			}
		</Block>
		<Block>
			<PaymentMethod 
			    cards={cards} 
			    addCard={addCard} 
			    deleteCard={deleteCard}
			    user={user}
			/>
		</Block>
		<Block>
			<PasswordManagement editPassword={editPassword} password={password}/>
		</Block>
	</Section>
)

MyInfo.propTypes = {
	personalInfo: PropTypes.array,
	user: PropTypes.object,
	editInfo: PropTypes.func,
	editCards: PropTypes.func,
	cards: PropTypes.array,
	editPassword: PropTypes.func
};

export default MyInfo;
