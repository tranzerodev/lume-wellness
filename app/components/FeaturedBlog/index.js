import React from 'react';
import PropTypes from 'prop-types';

import { postLink } from '../../constants/routing';

import {
  FeaturedContainer,
  RowWrap,
  FeaturedImage,
  FeaturedSummary,
  More,
  ImageBlock,
  TextBlock,
  Title,
  Subtitle,
  Text,
} from './styles';

const propTypes = {
  blog: PropTypes.object,
};

const FeatureBlog = ({
  blog: { image, title, category = '', summary, _id },
}) => (
  <FeaturedContainer>
    <RowWrap>
      <ImageBlock to={postLink(_id)}>
        <FeaturedImage image={image} />
      </ImageBlock>
      <TextBlock>
        <FeaturedSummary>
          <Subtitle>{category}</Subtitle>
          <Title to={postLink(_id)}>{title}</Title>
          <Text>{summary}</Text>
          <More to={postLink(_id)}>read more</More>
        </FeaturedSummary>
      </TextBlock>
    </RowWrap>
  </FeaturedContainer>
);

FeatureBlog.propTypes = propTypes;

export default FeatureBlog;
