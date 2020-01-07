/**
 *
 * GiftCetificate
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PriceItem from 'components/PriceItem';
import { device } from 'device';

const Container = styled.div`
  color: #364650;
`;
const GiftItem = styled(PriceItem)`
  letter-spacing: 2px;
`;

const PriceContainer = styled.div`
  padding: 50px 35px;
  margin: 30px 5%;

  width: auto;
  border: 1px solid #364650;
  @media ${device.mobileS} {
    margin: 30px 5%;
    padding: 50px 25px;
  }

  @media ${device.laptopL} {
    margin: 30px 10%;
    padding: 50px 0px;
  }
`;

const GiftHeader = styled(Col)`
  border-bottom: 3px solid ${props => props.color};
  padding: 0px 0px 20px 0px;
  margin: 0px auto;
  font-size: 28px;
  font-family: Sailec-Bold;
`;
const Title = styled(Col)`
  letter-spacing: 1px;
`;
const Price = styled(Col)`
  font-family: Sailec-Regular;
`;
const GiftBody = styled(Col)`
  font-family: Calluna;
  font-style: regular;
  font-size: 22px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
  opacity: 1;
  padding: 50px 0px;
`;

const ExpirationBox = styled(Col)`
  font-family: Calluna;
  font-style: regular;
  font-size: 22px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
  padding: 0px;
`;

const PurchaseButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  min-width: 125px;
  height: 50px;
  line-height: 50px;
  padding: 0px;
  border: 2px solid #364650;
  color: #364650;
  margin: 0px;
  font-size: 16px;
  font-family: Sailec-Bold;

  &:hover {
    background-color: #364650;
    color: #ffffff;
  }
`;

function GiftCetificate(props) {
  console.log('Gift Certificate', props.data);
  return (
    <Container>
      {props.data.map(item => (
        <PriceContainer>
          <Row>
            <GiftHeader
              md={{ span: 10, offset: 1 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
            >
              <Row>
                <Title md={10} sm={8} xs={8}>
                  {item.title}
                </Title>
                <Price md={2} sm={4} xs={4}>
                  $ {item.price}
                </Price>
              </Row>
            </GiftHeader>
          </Row>

          <Row>
            <GiftBody
              md={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 10, offset: 1 }}
            >
              {item.description}
            </GiftBody>
          </Row>

          <Row>
            <Col
              md={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 10, offset: 1 }}
            >
              <Row>
                <ExpirationBox md={10} sm={7} xs={7}>
                  <div>Expiration Date </div>
                  <div>{item.expiration}</div>
                </ExpirationBox>
                <Col md={2} sm={4} xs={4}>
                  <PurchaseButton color={item.color} href={item.link}>
                    PURCHASE
                  </PurchaseButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </PriceContainer>
      ))}
    </Container>
  );
}

GiftCetificate.propTypes = {};

export default memo(GiftCetificate);
