import styled from 'styled-components';

import { device } from 'device';

export const InstagramContainer = styled.div`
  background-color: ${p => p.theme.bg.light};
  color: ${p => p.theme.text.main};
  margin: 0px;
  @media ${device.mobileS} {
    padding: 60px 15px 35px;
  }
  @media ${device.tablet} {
    padding: 80px 15px 40px;
  }
  @media ${device.laptop} {
    padding: 80px 15px 70px;
  }
`;

export const InstagramTitle = styled.h1`
  text-align: center;
  font: 32px Sailec-Bold;
  letter-spacing: 1px;
  color: #364650;
  opacity: 1;

  @media ${device.mobileS} {
    font-size: 28px;
    margin: 0 auto 70px;
  }
  @media ${device.tablet} {
    margin: 0 auto 50px;
  }
  @media ${device.laptop} {
    
    margin: 0 auto 70px;
  }
`;
