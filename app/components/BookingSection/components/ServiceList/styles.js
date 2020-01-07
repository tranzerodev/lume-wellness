import styled from 'styled-components';

import { device } from 'device';

export const ServiceListBlock = styled.ul`
  color: #fff;
  font-family: Sailec-Bold;
  letter-spacing: 1.35px;
  text-transform: uppercase;
  max-width: 655px;
  width: 100%;
  li {
    cursor: pointer;
    background-color: ${p => p.theme.bg.dark};
  }
  @media ${device.mobileS} {
    font-size: 18px;
    li {
      margin-bottom: 20px;
      padding: 25px 25px 15px;
    }
  }
  @media ${device.mobileM} {
    li {
      padding: 35px 35px 25px;
    }
  }
  @media ${device.tablet} {
    font-size: 22px;
    li {
      padding: 40px 35px 30px;
    }
  }
`;

export const Item = styled.li``;

export const Section = styled.div`
  @media ${device.mobileS} {
    padding-top: 30px;
  }
  @media ${device.laptopL} {
    padding-left: 30px;
    padding-top: 50px;
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 14px;
    margin-bottom: 20px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
    margin-bottom: 40px;
  }
`;
export const Back = styled.div`
  font-size: 14px;
  font-family: Sailec-Bold;
  margin-bottom: 20px;
  cursor: pointer;
`;