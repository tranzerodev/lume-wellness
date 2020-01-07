import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

import { device } from 'device';

export const Block = styled.div`
  flex-shrink: 0;
  width: 100%;
  border-right: 2px solid ${p => p.theme.bg.dark};
  @media ${device.mobileS} {
    position: relative;
    background: ${p => p.theme.bg.dark};
  }

  @media ${device.laptop} {
    height: auto;
    padding: 45px 0 50px 0;
    max-width: 190px;
    background: transparent;
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
      padding: 10px 10px;
      opacity: 0.7;
      font-size: 10px;
      font-weight: bold;
      color: #fff;
      &.active {
        background: transparent;
        border: none;
        opacity: 1;
        color: #fff;
      }
      ${Point} {
        display: none;
      }
    }
  }
  @media ${device.mobileL}{
    .nav-link {
      font-size: 13px;
    }
  }
  @media ${device.laptop} {
    font-size: 22px;
    .nav-link {
      color: ${p => p.theme.bg.dark};
      font-size: inherit;
      padding: 0 15px 33px 0;
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
        color: ${p => p.theme.bg.dark};
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
    border: none;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 0;
    position: static;
    width: auto;
  }
`;
