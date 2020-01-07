/**
 *
 * SimpleMenu
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './components/MenuItem';
import { Block, Container, MenuRow, CardWrap, MenuTitle } from './styles';

function SimpleMenu(props) {
  return (
    <Block>
      {console.log(props)}
      <Container>
        <MenuTitle>{props.title}</MenuTitle>
        <CardWrap isCeil={props.title =='IV Drips' || props.title =='IM SHOTS'}>
          {props.info.map((item, index) => (
            <MenuRow key={index}>
              <MenuItem
                item={item}
              />
            </MenuRow>
          ))}
        </CardWrap>
      </Container>
    </Block>
  )
};

SimpleMenu.propTypes = {};

export default memo(SimpleMenu);
