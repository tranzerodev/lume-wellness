import React from 'react';
import PropTypes from 'prop-types';

import {
  Block,
  Container,
  Title,
  Category,
  TitleName,
  ImageBlock,
} from './styles';

const TitleBlock = ({ title, category, image }) => (
  <Block>
    <Container>
      <Title>
        <Category>{category}</Category>
        <TitleName>{title}</TitleName>
        <ImageBlock bgImg={image} />
      </Title>
    </Container>
  </Block>
);

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TitleBlock;
