import React from 'react';
import PropTypes from 'prop-types';

import { Container, List, Item } from './styles';

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  onChangeCategory: PropTypes.func,
  activeCategory: PropTypes.string,
};

const CategoryList = ({ categories, activeCategory, onChangeCategory }) => (
  <Container>
    <List>
      {categories.map(item => (
        <Item
          key={item}
          isActive={activeCategory === item}
          onClick={() => onChangeCategory(item)}
        >
          <span>{item}</span>
        </Item>
      ))}
    </List>
  </Container>
);

CategoryList.propTypes = propTypes;

export default CategoryList;
