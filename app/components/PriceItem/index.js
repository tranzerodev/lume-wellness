/**
 *
 * PriceItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { getAssetsAPI } from 'utils';
import {
  PriceContainer,
  PromotionHeader,
  Title,
  Price,
  PromotionBody,
  ExpirationBox,
  LearnMoreBox,
  PurchaseButton,
  TitleIcon,
} from './styled';

PriceItem.propTypes = {
  data: PropTypes.object,
  color: PropTypes.string,
};

function PriceItem(props) {
  console.log(props);
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
              {props.data.icon ? (
                <TitleIcon>
                  <img src={getAssetsAPI(props.data.icon.path)} alt="icon" />
                </TitleIcon>
              ) : null}
              {props.data.title}
            </Title>
            <Price md={2} sm={4} xs={4}>
              $ {props.data.price}
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
          {props.data.description}
        </PromotionBody>
      </Row>

      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <Row>
            <LearnMoreBox md={10} sm={7} xs={7}>
              <a href={props.data.link}>
                Learn More About {props.data.title} Service
              </a>
            </LearnMoreBox>
            <Col md={2} sm={4} xs={4}>
              <PurchaseButton href={props.data.booking} color={props.color}>
                {' '}
                BOOK{' '}
              </PurchaseButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </PriceContainer>
  );
}

export default memo(PriceItem);
