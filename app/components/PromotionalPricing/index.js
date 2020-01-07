/**
 *
 * PromotionalPricing
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PriceItem from 'components/PriceItem';

const Container = styled.div`
  background-color: #364650;
  color: #ffffff;
`;

const PromotionItem = styled(PriceItem)`
  background-color: red !important;
`;

const PriceContainer = styled.div`
  padding: 50px 0px;
`;

const PromotionHeader = styled(Col)`
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
  letter-spacing: 2px;
  font-family: Sailec-Regular;
`;

const PromotionBody = styled(Col)`
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
  border: 2px solid #ffffff;
  color: #ffffff;
  margin: 0px;
  font-size: 16px;
  font-family: Sailec-Bold;
  &:hover {
    background-color: #ffffff;
    color: #364650;
    outline: 0;
  }

  a:hover {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
`;

function PromotionalPricing(props) {
  console.log('Promotional Pricing', props.data);
  return (
    <Container>
      {props.data.map(item => {
        if (item.display === 'Hide') return <div />;
        return (
          <PriceContainer>
            <Row>
              <PromotionHeader
                md={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
              >
                <Row>
                  <Title md={10} sm={8} xs={8}>
                    {item.title}
                  </Title>
                  <Price md={2} sm={4} xs={4}>
                    $ {item.price}
                  </Price>
                </Row>
              </PromotionHeader>
            </Row>

            <Row>
              <PromotionBody
                md={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
              >
                {item.description}
              </PromotionBody>
            </Row>

            <Row>
              <Col
                md={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
              >
                <Row>
                  <ExpirationBox md={10} sm={7} xs={7}>
                    <div>Expiration Date </div>
                    <div>{item.expiration}</div>
                  </ExpirationBox>
                  <Col md={2} sm={4} xs={4}>
                    <PurchaseButton href={item.link} color={item.color}>
                      {' '}
                      PURCHASE{' '}
                    </PurchaseButton>
                  </Col>
                </Row>
              </Col>
            </Row>
          </PriceContainer>
        );
      })}
    </Container>
  );
}

PromotionalPricing.propTypes = {};

export default memo(PromotionalPricing);
