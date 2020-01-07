import React from 'react';
import PropTypes from 'prop-types';

import { Block, Btn, Input } from './styles';

const GiftCard = ({ buttonText, handleClick }) => (
  <Block>
    <Input type="text" placeholder="enter gift card number" />
    <Btn onClick={handleClick}>{buttonText}</Btn>
  </Block>
);

GiftCard.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default GiftCard;
