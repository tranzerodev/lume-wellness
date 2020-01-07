import React from 'react';
import PropTypes from 'prop-types';

import {
  Block,
  ImgBlock,
  Description,
  ItemTitle,
  Keys,
  Text,
  Duration,
  Header,
  Price,
} from './styles';

const ServiceItem = ({
  name,
  description,
  duration,
  addonIDs,
  price,
  ...rest
}) => (
  <Block {...rest}>
    <Description>
      <Header>
        <ItemTitle>{name}</ItemTitle>
        <Price>${price}</Price>
      </Header>
      <Keys>{addonIDs}</Keys>
      <Text>{description}</Text>
      <Duration>
        <span>Service Duration:</span>
        <span>{duration} Minutes</span>
      </Duration>
    </Description>
  </Block>
);

ServiceItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keys: PropTypes.string,
  duration: PropTypes.number,
  price: PropTypes.string,
};

export default ServiceItem;
