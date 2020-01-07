import React from 'react';
import PropTypes from 'prop-types';

import { Block, Btn, Text, Row, User, Info, CardInfo } from './styles';

const CardOnFile = ({
  buttonText,
  handleClick,
  user,
  cardImg,
  cardNumber,
  expires,
  isLast,
}) => (
  <Block>
    <Text>
      <Row>
        <img src={cardImg} alt="card icon" />

        <User>{user}</User>
        {isLast && <Info>(last used card)</Info>}
      </Row>
      <Row>
        <CardInfo>{cardNumber}</CardInfo>
        <CardInfo>expires: {expires}</CardInfo>
      </Row>
    </Text>
    <Btn onClick={handleClick}>{buttonText}</Btn>
  </Block>
);

CardOnFile.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CardOnFile;
