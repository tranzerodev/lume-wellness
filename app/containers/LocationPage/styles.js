import styled, { css } from 'styled-components';
import { CMS_API_URL } from 'configs';

import { device } from 'device';

export const InfoBlock = styled.div`
  ${p =>
    p.bgLight &&
    css`
      background-color: ${p.theme.bg.light};
    `}

  @media ${device.mobileS} {
    padding: 50px 0;
  }
  @media ${device.laptop} {
    padding: 100px 0;
  }
`;

export const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.laptop} {
    padding: 0 30px;
  }
`;

export const Banner = styled.div`
  background-image: url(${p => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;

  @media ${device.mobileS} {
    height: 250px;
    margin-bottom: 50px;
  }
  @media ${device.laptop} {
    height: 415px;
    margin-bottom: 100px;
  }
`;
