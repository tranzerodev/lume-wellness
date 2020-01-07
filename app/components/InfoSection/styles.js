import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div``;

export const Title = styled.div`
  text-align: center;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
    margin-bottom: 90px;
  }
`;

export const Item = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    ${Item} {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    margin-right: -20px;
    ${Item} {
      width: calc(100% / 3 - 20px);
      margin-right: 20px;
    }
  }
`;

export const ItemTitle = styled.div`
  text-transform: uppercase;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-bottom: 15px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
    margin-bottom: 30px;
  }
`;

export const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 30px;
  &&& svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = styled.div`
  background-image: url(${p => p.icon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;

export const Text = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
