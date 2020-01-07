import React from 'react';
import PropTypes from 'prop-types';

import {
  Block,
  Inner,
  ImgWrap,
  IngredientImage,
  IngredientTitle,
  IngredientDescription,
  IngredientKeyword,
  TextWrap,
} from './styles';

const Ingredient = props => (
  <Block>
    <Inner>
      <ImgWrap>
        <IngredientImage src={props.image} />
      </ImgWrap>

      <TextWrap>
        <IngredientTitle>{props.title}</IngredientTitle>
        <IngredientDescription>{props.description}</IngredientDescription>
        <IngredientKeyword>Found in: {props.keywords}</IngredientKeyword>
      </TextWrap>
    </Inner>
  </Block>
);

export default Ingredient;
