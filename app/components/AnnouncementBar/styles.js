import { device } from 'device';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export const Text = styled.p`
  color: #fff;
  font-family: Sailec-regular;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const BoldText = styled.p`
  color: #ffffff;
  font-family: Sailec-Bold;
  border-bottom: 2px solid #fff;
  &:hover {
    color: #ffffff;
  }
  @media ${device.mobileS} {
    font-size: 8px;
    margin-left: 0px;
  }
  @media ${device.tablet} {
    font-size: 12px;
    margin-left: 15px;
    line-height: 22px;
  }
`;

export const Bar = styled(Navbar)`
  background: #364650;
  position: fixed;
  height: 50px;
  z-index: 200;
  top: 0px;
  left: 0px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  padding: 0 25px !important;
  a {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media ${device.mobileS} {
    height: 50px;
    padding: 0 !important;
    a {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }
  @media ${device.tablet} {
    height: 50px;
    a {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;
