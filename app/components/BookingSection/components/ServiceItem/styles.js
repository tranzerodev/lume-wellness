import styled from 'styled-components';

import { device } from 'device';

export const ImgBlock = styled.div`
  flex-shrink: 0;
  background-image: url(${p => p.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${device.mobileS} {
    height: 150px;
    width: 100%;
    margin-bottom: 10px;
  }
  @media ${device.mobileM} {
    width: 30%;
    max-width: 150px;
    margin-bottom: 0;
    height: auto;
  }
`;

export const Block = styled.div`
  width: 100%;
  border: 1px solid ${p => p.theme.bg.dark};
  display: flex;
  color: ${p => p.theme.text.main};
  cursor: pointer;
  @media ${device.mobileS} {
    margin-bottom: 15px;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    margin-bottom: 15px;
    flex-direction: row;
  }
  @media ${device.laptopL} {
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  @media ${device.mobileS} {
    padding: 10px;
  }
  @media ${device.laptop} {
    padding: 25px 25px 10px;
  }
`;

export const ItemTitle = styled.div`
  font-family: Sailec-Bold;
  line-height: 1.1em;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
`;

export const Keys = styled.div`
  font-family: Calluna-Sans;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 9px;
    margin-bottom: 10px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 10px;
    margin-bottom: 10px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;

export const Duration = styled.div`
  font-family: Calluna-Regular;
  & > span {
    &:first-child {
      text-transform: uppercase;
      display: inline-block;
      margin-right: 10px;
    }
  }
  @media ${device.mobileS} {
    font-size: 7px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  ${ItemTitle} {
    padding-right: 10px;
  }
`;

export const Price = styled.div`
  font-family: Sailec-Regular;
  white-space: nowrap;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;
