import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  background-color: #fff;
  @media ${device.mobileS} {
    padding: 25px 0 40px;
  }
  @media ${device.laptop} {
    padding: 50px 0 100px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.laptop} {
    padding: 0 30px;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const ImgBlock = styled.div`
  background-image: url(${p => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Text = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
  }
  @media ${device.tablet} {
    padding-left: 30px;
  }
  @media ${device.laptopL} {
    padding-left: 50px;
  }
`;

export const TextTitle = styled.div`
  font-family: Sailec-Bold;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

export const TextBlock = styled.div`
  font-family: Calluna-Regular;
  p {
    &:not(:last-child) {
      padding-bottom: 25px;
    }
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    ${ImgBlock} {
      width: 100%;
      height: 250px;
      margin-bottom: 30px;
    }
  }
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    ${ImgBlock} {
      width: 100%;
      max-width: 420px;
      height: 420px;
      margin-bottom: 0;
    }
  }
`;
