import styled, { css } from 'styled-components';
import { device } from 'device';

export const Block = styled.div`
  background-color: #fff;
  color: ${p => p.theme.text.main};
  overflow: hidden;
  @media ${device.mobileS} {
    padding: 35px 0 80px;
  }
  @media ${device.laptop} {
    padding: 75px 0 80px;
  }
`;

export const Container = styled.div`
  max-width: 1130px;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.tablet} {
    padding: 0 40px;
  }
`;

export const MenuRow = styled.div`
  width: 100%;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${MenuRow} {
    margin-bottom: 35px;
  }
  @media ${device.mobileS} {
    ${MenuRow} {
      &:not(:last-child) {
        border-bottom: 2px solid ${p => p.theme.bg.dark};
      }
    }
  }
  @media ${device.laptop} {
    ${MenuRow} {
      border-bottom: 0 !important;
    }
    ${p =>
      p.isCeil
        ? css`
            margin-right: -35px;
            ${MenuRow} {
              padding-top: 30px;
              width: calc(50% - 35px);
              margin-right: 35px;
              position: relative;
              &:after,
              &:before {
                content: '';
                display: block;
                background-color: ${p => p.theme.bg.dark};
                position: absolute;
                z-index: 1;
              }

              &:after {
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
              }

              &:before {
                width: 2px;
                height: 90%;
                top: 0;
                right: -17px;
              }
              &:nth-child(2n + 1) {
              }
              &:nth-child(2n) {
                &:before {
                  display: none;
                }
              }
            }
          `
        : css`
            ${MenuRow} {
              border-bottom: 2px solid ${p => p.theme.bg.dark} !important;
            }
          `}
  }
`;

export const MenuTitle = styled.div`
  font-family: Sailec-Bold;
  text-align: center;
  letter-spacing: 1px;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 40px;
  }
  @media ${device.mobileM} {
    font-size: 30px;
    margin-bottom: 60px;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
`;
