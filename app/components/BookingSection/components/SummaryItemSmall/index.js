import React from 'react';
import PropTypes from 'prop-types';

import { getValueTime } from 'utils/dateUtil';

import { Block, Title, TextBlock, Price } from './styles';

const SummaryItemSmall = ({ id, name, amount, duration, date }) => (
  <Block>
    <TextBlock>
      <Title>{name}</Title>
      <div>{getValueTime({ date })}</div>
      <div>{duration} minute duration</div>
    </TextBlock>
    <Price>${amount}</Price>
  </Block>
);

SummaryItemSmall.propTypes = {};

export default SummaryItemSmall;
