import React from 'react';
import PropTypes from 'prop-types';

import { Block, Btn, Text } from './styles';

const PaymentCard = ({ text, handleClick, buttonText }) => (
  <Block>
    <Text>{text}</Text>
    
    <Btn onClick={handleClick}>{buttonText}</Btn>
  </Block>
);

PaymentCard.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default PaymentCard;
