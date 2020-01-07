import styled from 'styled-components';
import { Tabs } from 'react-bootstrap';

import { device } from 'device';
import { LineOnHover } from 'styles/common-styles';

export const Container = styled.div`
  color: #fff;
`;

export const ServiceTitle = styled.div`
  font-family: 'Sailec-Bold';
  @media ${device.mobileS} {
    letter-spacing: 1px;
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 55px;
    text-align: left;
  }
`;

export const TabsWrap = styled(Tabs)`
  font-family: 'Sailec-Bold' !important;
  border: 0;

  .nav-link {
    padding: 0;
    border: 0;
    text-decoration: none;
    color: #fff;
    opacity: 0.44;

    ${LineOnHover}
    &:after {
      height: 2px;
      background-color: #fff;
      bottom: -3px;
    }
    &:hover {
      border: 0;
      opacity: 1;
    }
    &.active {
      opacity: 1;
      background-color: transparent !important;
      color: #fff;
      border: 0px;

      &:after {
        width: 100%;
      }
    }
  }

  @media ${device.mobileS} {
    display: flex;
    font-size: 16px;
    align-items: flex-start;
    justify-content: center;
    .nav-link {
      &:not(:last-child) {
        margin: 0px 45px 20px 0px;
      }
    }
  }

  @media ${device.laptop} {
    justify-content: flex-start;
    font-size: 22px;

    .nav-link {
      margin: 0px 30px 20px 0px;
    }
  }
`;

export const Content = styled.div`
  background-color: transparent !important;
  > * {
    font-family: Calluna !important;
    padding: 10px 0px;
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`;
