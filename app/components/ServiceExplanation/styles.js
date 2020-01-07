import styled, { css } from 'styled-components';
import { device } from 'device';

export const Container = styled.div`
  background-color: ${p => p.theme.bg.dark};

  display: flex;
  align-items: center;
  @media ${device.mobileS} {
  }
  @media ${device.tablet} {
    padding: 50px 35px;
    min-height: 552px;
  }
  @media ${device.laptop} {
    padding: 50px 90px;
    min-height: 685px;
  }
`;

export const Inner = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    flex-direction: column-reverse;
    & > div {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    flex-direction: row;
    & > div {
      width: 50%;
    }
  }
`;

export const Col = styled.div`
  ${p =>
    p.text &&
    css`
      @media ${device.mobileS} {
        padding: 0 25px 40px;
        margin-top: 30px;
      }
      @media ${device.laptop} {
        padding: 0 35px 0 0;
        margin-top: 0px;
      }
    `}
`;
