import styled from 'styled-components';

import { LineOnHover } from 'styles/common-styles';

export const CardMain = styled.div`
  font-family: Calluna-Regular !important;
  font-size: 20px;
  border-bottom: 2px solid #fff;
  letter-spacing: 1px;
  text-align: center;
  padding: 40px 0;
  color: #ffffff;
  opacity: 1;

  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    padding: 30px 0;
  }
`;

export const Card = styled.div`
  background-color: ${p => p.theme.bg.dark};
  color: white;
  display: inline-block;
  padding: 40px 30px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${CardMain} {
    flex-grow: 1;
  }
  @media (max-width: 1030px) {
    padding: 30px 25px 20px;
  }
  @media (max-width: 576px) {
    padding: 20px 10px 15px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 25px;
  border-bottom: 2px solid #fff;
  @media (max-width: 576px) {
    padding: 0 20px 20px;
  }
`;

export const CardTitle = styled.div`
  line-height: 1em;
  margin-top: 0.2em;
  text-align: left;
  font: 28px/47px Sailec-Bold;
  letter-spacing: 2.1px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  padding-right: 10px;
  @media (max-width: 1030px) {
    font-size: 20px;
  }
`;

export const CardIcon = styled.object`
  width: 60px;
  height: 60px;
  img {
    max-width: 100%;
  }
  @media (max-width: 1030px) {
    width: 35px;
    height: 35px;
  }
`;

export const CardButton = styled.div`
  font: 20px/33px Sailec-Bold;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  text-align: center;
  color: #ffffff;
  opacity: 1;
  a {
    color: #fff;
    font-family: Sailec-Bold;
    padding: 10px 0;
    transition: color 0.3s;
    ${LineOnHover}
    &:after {
      bottom: 8px;
      height: 2px;
      background-color: ${p => p.theme.bg.light};
    }
    &:hover {
      color: ${p => p.theme.text.light};
      text-decoration: none;
    }
  }
  @media (max-width: 1030px) {
    font-size: 15px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  padding-top: 20px;
  & > div {
    width: 50%;
    text-align: center;
    &:first-child {
      border-right: 2px solid #fff;
    }
  }
`;
