import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Container = styled.div`
  border: 1px solid black;
  padding: 40px;
  font-size: 18px;
`;
const CreditOptionItem = styled(Col)`
  height: 60px;
  font-size: 21px;
  margin: 10px 0px;
`;
const CreditOptionButton = styled.button`
  height: 60px;
  border: 1px solid black;
  background-color: white;
  width: 125px;
`;
const ItemDetail = styled.div`
  display: inline-block;
  padding: 0px 20px;
  width: 170px;
  font-size: 21px;
`;
export default function CreditOption(props) {
  return (
    <Container>
      <Row>
        <h4> Select a credit option </h4>
      </Row>

      <Row>
        {props.options.map((item, index) => (
          <CreditOptionItem md="12" key={index}>
            <ItemDetail>{item.name} </ItemDetail> |
                <ItemDetail>{item.expiration} </ItemDetail> |
                <ItemDetail>$ {item.price}</ItemDetail>
                <CreditOptionButton value={item.value}> SELECT </CreditOptionButton>
          </CreditOptionItem>
        ))}
      </Row>
    </Container>
  );
}
