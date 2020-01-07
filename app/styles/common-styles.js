import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 30px;
  flex-grow: 1;
  background-color: ${props => props.bgColor || 'white'};
  margin-bottom: -5px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  border-top: 1px solid transparent;
  @media (max-width: 1280px) {
    max-width: 1080px;
  }
`;

export const MoreLink = styled(Link)`
  border-bottom: 3px solid #364650;
  text-align: left;
  font-size: 21px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  padding-bottom: 4px;
  text-transform: uppercase;
  line-height: 1.1em;
  letter-spacing: 1.35px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// button
export const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  text-align: center;
  display: inline-block;
  align-self: flex-start;
  min-width: 190px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-family: Sailec-Bold;
  font-size: 15px;
    ${p =>
      p.border &&
      css`
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
      `}
    ${p =>
      p.dark &&
      css`
        border-color: ${p.theme.bg.dark};
        color: ${p.theme.bg.dark};
      `}
    ${p =>
    p.white &&
      css`
        border-color: #fff;
        color: #fff;
      `};

`;

export const Btn = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: ${p => p.theme.bg.dark};
  font-family: Sailec-Bold;
  padding: 25px 30px 20px;
  font-size: 22px;
  display: block;
  line-height: 1em;
  white-space: nowrap;
  min-width: 100px;
`;

export const BtnLine = styled.button`
  padding: 0 0 5px;
  border-bottom: 3px solid ${p => p.theme.bg.dark};
  text-transform: uppercase;
  font-family: Sailec-Bold;
  color: ${p => p.theme.bg.dark};
  display: block;
  letter-spacing: 1.35px;
  font-size: 22px;
`;

// effects
export const LineOnHover = css`
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    transition: width 0.3s;
    width: 0;
    height: 1px;
    background-color: black;
    bottom: 3px;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
