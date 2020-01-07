import styled from 'styled-components';
import { device } from 'device';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    padding-top: 105px;
  }
  @media ${device.tablet} {
    padding-top: 135px;
  }
  &.booking-page {
    padding-top: 0;
  }
`;
