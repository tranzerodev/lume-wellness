import React from 'react';
import { device } from 'device';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VisaCard from './visaCard.png';
import MasterCard from './masterCard.png';
import { Block, Text, Row, User, Info, CardInfo, Btn } from './styles';

const CardIcon = styled.div`
    background-size: cover;
  	background-position: center;
  	background-repeat: no-repeat;
  	background-image: url(${props => props.icon});
  	@media ${device.mobileS}{
  		height: 20px;
  		width: 30px;
  		margin: 0px 5px 0px 0px;
  	}
  	@media ${device.mobileM}{
  		height: 20px;
  		width: 30px;
  		margin: 0px 5px 0px 0px;
  	}
  	@media ${device.mobileL}{
  		height: 20px;
  		width: 30px;
  		margin: 0px 5px 0px 0px;
  	}
  	@media ${device.tablet}{
  		height: 20px;
  		width: 30px;
  		margin: 0px 5px 0px 0px;
  	}


    @media ${device.laptop} {
        height: 30px;
        width: 45px;
        margin: 0px 10px 0px 0px;
    }
`

const CardOnFile = ({card, deleteCard, active}) => {
	// const { 
	// 	cardNumber,
	// 	expires,
	// 	isLast
	// } = card;
	return (
		<Block>
			<Text>
				<Row>
					{
						card.brand === "Visa" ? (
							<CardIcon icon={VisaCard} /> 
						):(
  							<CardIcon icon={MasterCard} /> 
  						) 
  					}
					<User>
					 {card.name}
					</User>
					

					{/* 
						{isLast && <Info>(last used card)</Info>}
					*/}
				</Row>
				<Row>
					<CardInfo>**** **** **** {card.last4}</CardInfo>
					<CardInfo>
					    expires: {card.exp_month}/{card.exp_year}
					</CardInfo>
				</Row>
			</Text>
			{active && <Btn onClick={()=> deleteCard(cardNumber)}>Delete</Btn>}
	</Block>
	)
}

CardOnFile.propTypes = {
  card: PropTypes.object,
};

export default CardOnFile;