import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import { postLink } from '../../constants/routing';

import {
  Card,
  BlogImage,
  BlogTitle,
  BlogSummary,
  BlogLink,
  Category,
  RowWrap,
} from './styles';

const propTypes = {
  info: PropTypes.object,
};

const BlogCard = ({ info: { image, title, summary, category, _id } }) => (
  <Card>
    <MediaQuery query="(max-device-width: 768px)">
      <BlogTitle title={title}>{title}</BlogTitle>
    </MediaQuery>

    <RowWrap>
      <BlogImage to={postLink(_id)} image={image} />

      <BlogTitle to={postLink(_id)} title={title}>
        {title}
      </BlogTitle>

      <div>
        <Category>{category}</Category>
        <BlogSummary>{summary}</BlogSummary>
      </div>
    </RowWrap>
    <BlogLink to={postLink(_id)}>Read me</BlogLink>
  </Card>
);

BlogCard.propTypes = propTypes;

export default BlogCard;
