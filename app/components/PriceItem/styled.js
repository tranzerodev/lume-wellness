import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import { LineOnHover } from 'styles/common-styles';

export const PriceContainer = styled.div`
  padding: 50px 0px;
`;

export const PromotionHeader = styled(Col)`
  border-bottom: 3px solid ${props => props.color};
  padding: 0px 0px 20px 0px;
  margin: 0px auto;
  font-size: 28px;
  font-family: Sailec-Bold;
`;

export const Title = styled(Col)`
  letter-spacing: 1px;
  display: flex;
  align-items: flex-start;
  line-height: 34px;
`;

export const TitleIcon = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-top: -2px;
  img {
    max-width: 100%;
  }
`;

export const Price = styled(Col)`
  letter-spacing: 2px;
  font-family: Sailec-Regular;
`;

export const PromotionBody = styled(Col)`
  font-family: Calluna;
  font-style: regular;
  font-size: 22px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
  opacity: 1;
  padding: 50px 0px;
`;
export const ExpirationBox = styled(Col)`
  font-family: Calluna;
  font-style: regular;
  font-size: 22px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
  padding: 0px;
`;

export const LearnMoreBox = styled(Col)`
  font-size: 15px !important;
  font-family: Sailec-Bold !important;
  text-transform: uppercase !important;
  letter-spacing: 1.13px !important;
  padding: 0px;
  margin: 0px;

  a {
    text-decoration: none;
    transition: color 0.3s;
    padding: 10px 0;
    ${LineOnHover}
    &:after {
      bottom: 8px;
      height: 2px;
    }
  }

  &:hover {
  }
`;

export const PurchaseButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  min-width: 125px;
  width: auto;
  padding: 0px;
  line-height: 50px;
  height: 50px;
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
