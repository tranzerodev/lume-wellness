import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div``;

export const BookingContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  @media ${device.mobileS} {
  }
  @media ${device.laptop} {
    padding: 0 30px;
  }
  @media ${device.laptopL} {
    padding: 0 50px;
  }
`;

export const Inner = styled.div`
  @media ${device.mobileS} {
  }
  @media ${device.laptop} {
    display: flex;
  }
`;

export const TabWrap = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    padding: 0 15px 50px;
  }
  @media ${device.laptop} {
    padding: 0 0 50px 25px;
  }
`;
