import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

import { device } from 'device';

export const Block = styled.div`
  flex-shrink: 0;
  width: 100%;
  background-color: ${p => p.theme.bg.light};

  @media ${device.mobileS} {
    height: 75px;
    position: relative;
  }

  @media ${device.laptop} {
    height: auto;
    padding: 50px 50px 50px 0;
    max-width: 290px;

    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100%;
      min-height: 100vh;
      background-color: ${p => p.theme.bg.light};
      z-index: 1;
    }
  }
`;

export const Inner = styled.div`
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.laptop} {
    position: relative;
    z-index: 2;
    padding: 0;
  }
`;

export const Point = styled(MDBIcon)`
  position: absolute;
  visibility: hidden;
`;

export const LeftNavItem = styled(Nav.Item)`
  font-family: Calluna-Sans;
  text-transform: uppercase;
  background-color: transparent;
  .nav-link {
    position: relative;
    border: 0;
  }
  @media ${device.mobileS} {
    font-size: 22px;
    .nav-link {
      font-size: 0;
      padding: 0;
      height: 16px;
      width: 16px;
      background-color: #fff !important;
      border-radius: 50%;
      border: 2px solid ${p => p.theme.bg.dark} !important;
      opacity: 1;
      margin-bottom: -8px;
      &.active {
        background-color: ${p => p.theme.bg.dark} !important;
      }
      ${Point} {
        display: none;
      }
    }
  }
  @media ${device.laptop} {
    font-size: 22px;
    .nav-link {
      font-size: inherit;
      padding: 14px 15px 14px 0;
      background-color: transparent !important;
      font-weight: bold;
      opacity: 0.5;
      height: auto;
      width: auto;
      border: 0 !important;
      border-radius: 0;
      &.active {
        background-color: transparent !important;
        opacity: 1;
        ${Point} {
          visibility: inherit !important;
        }
      }
      ${Point} {
        display: block;
        top: 50%;
        color: #fff;
        margin: 0;
        z-index: 1;
        right: -13px;
        margin-top: -2px;
        transform: translate(0, -50%);
      }
    }
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    font-size: 22px;
    margin-bottom: 20px;
    display: block;
  }
`;

export const TabsNav = styled(Nav)`
  @media ${device.mobileS} {
    display: flex;
    border-bottom: 3px solid ${p => p.theme.bg.dark};
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 15px;
    width: calc(100% - 30px);
  }
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    border-right: 3px solid #fff;
    border-bottom: 0;
    position: static;
    width: auto;
  }
`;
