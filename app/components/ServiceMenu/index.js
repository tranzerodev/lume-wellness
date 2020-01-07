/**
 *
 * ServiceMenu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import MenuItem from './MenuItem';

const Container = styled(Row)`
  min-height: 500px;
  background-color: #ffffff;
`;

const MenuTitle = styled(Col)`
  font-family: Sailec-Bold;
  font-weight: normal;
  color: #364650;
  text-align: center;
  font-size: 42px;
  padding: 50px 0px;
`;

const MenuRow = styled(Row)`
  min-height: 420px;
  margin: 10px 0px;
  width: 100%;
`;

const MenuDivider = styled.div`
  height: 420px;
  width: 1px;
  margin: 20px auto;
  color: #364650;
  background-color: #364650;
`;

function ServiceMenu(props) {
  return (
    <Container>
      <MenuTitle md={{ span: 6, offset: 3 }}>{props.title} Menu</MenuTitle>
      <MenuRow>
        <MenuItem
          md={5}
          item_title="IMMUNITY"
          item_subtitle="MOOD, ENERGY, HYDRATION"
          item_price="$160"
          item_description="Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity."
          item_info=""
          item_booking="/booking"
        />
        <MenuDivider />
        <MenuItem
          md={5}
          item_title="DRIP #2"
          item_subtitle="KEYWORD, KEYWORD, KEYWORD"
          item_price="$160"
          item_description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim.Ut wisi enim."
          item_info=""
          item_booking="/booking"
        />
      </MenuRow>

      <MenuRow>
        <MenuItem
          md={5}
          item_title="IMMUNITY"
          item_subtitle="MOOD, ENERGY, HYDRATION"
          item_price="$160"
          item_description="Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity."
          item_info=""
          item_booking="/booking"
        />
        <MenuDivider />
        <MenuItem
          md={5}
          item_title="DRIP #2"
          item_subtitle="KEYWORD, KEYWORD, KEYWORD"
          item_price="$160"
          item_description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim."
          item_info=""
          item_booking="/booking"
        />
      </MenuRow>

      <MenuRow>
        <MenuItem
          md={5}
          item_title="IMMUNITY"
          item_subtitle="MOOD, ENERGY, HYDRATION"
          item_price="$160"
          item_description="Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity."
          item_info=""
          item_booking="/booking"
        />
        <MenuDivider />
        <MenuItem
          md={5}
          item_title="DRIP #2"
          item_subtitle="KEYWORD, KEYWORD, KEYWORD"
          item_price="$160"
          item_description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim."
          item_info=""
          item_booking="/booking"
        />
      </MenuRow>
      
    </Container>
  );
}

ServiceMenu.propTypes = {};

export default memo(ServiceMenu);
