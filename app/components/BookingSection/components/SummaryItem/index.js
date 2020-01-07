import React from 'react';
import { getValueTime } from 'utils/dateUtil';

import {
  Block,
  Title,
  Duration,
  Time,
  InfoLink,
  ImgBlock,
  TextBlock,
} from './styles';

const SummaryItem = ({ name, duration, image, date }) => (
  <Block>
    <ImgBlock bgImg={image} />
    <TextBlock>
      <Title>{name}</Title>
      <Duration>{duration}</Duration>
      <Time>{getValueTime({ date: date, format: 'LLLL' })}</Time>
      <InfoLink to="/">Everything you need to know about {name}</InfoLink>
    </TextBlock>
  </Block>
);

export default SummaryItem;
