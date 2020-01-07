import styled, { css } from 'styled-components';

import Img from 'components/Img';
import { device } from 'device';
import { LineOnHover } from 'styles/common-styles';

export const FooterContainer = styled.div`
  background-color: ${p => p.theme.bg.light};
  margin-top: auto;
  position: relative;
  z-index: 1;
`;

export const FooterDivider = styled.div`
  width: 90vw;
  height: 3px;
  margin: 0px auto;
  background-color: ${p => p.theme.bg.dark};
`;

export const FooterMenu = styled.div`
  display: flex;
  @media ${device.mobileS} {
    margin: 0px;
    padding: 45px 30px;
  }
  @media ${device.tablet} {
    margin: 0px;
    padding: 60px 30px;
  }
`;

export const FooterLogo = styled(Img)`
  display: none;

  @media ${device.tablet} {
    max-width: 190px;
    display: block;
  }

  @media ${device.laptop} {
    max-width: 280px;
    display: block;
  }
`;

export const WrapCol = styled.div`
  ${p =>
    p.col === 'logo'
      ? css`
          width: 45%;
          padding-right: 20px;
          @media ${device.mobileS} {
            display: none;
          }
          @media ${device.tablet} {
            display: block;
            a {
              margin: 0 0 0 8%;
              display: block;
            }
          }
          @media ${device.laptop} {
            a {
              margin: 0 0 0 15%;
            }
          }
        `
      : css`
          display: flex;
          flex-wrap: wrap;
          flex-grow: 1;
          & > div {
            width: calc(100% / 3);

            @media ${device.mobileS} {
              min-width: 170px;
              &:not(:last-child) {
                margin-bottom: 30px;
              }
            }
            @media ${device.tablet} {
              min-width: 0;
              &:not(:last-child) {
                padding-right: 10px;
              }
            }
          }
        `}
`;

export const MenuTitle = styled.div`
  font-family: Sailec-Bold;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 15px;
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

export const MenuList = styled.ul`
  text-align: left;
  font-family: Calluna-Regular;
  letter-spacing: 0.6px;
  color: #364650;
  opacity: 1;
  a {
    ${LineOnHover}
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 19px;
  }
`;

export const FooterCopyrights = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #707070;
  @media ${device.mobileS} {
    font-size: 11px;
    padding: 15px 10px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    padding: 15px 30px;
  }
`;

export const Links = styled.div`
  @media ${device.mobileS} {
    a {
      margin-left: 10px;
    }
  }

  @media ${device.mobileM} {
    a {
      margin-left: 18px;
    }
  }
`;
