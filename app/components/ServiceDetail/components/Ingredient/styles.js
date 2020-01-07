import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  background-color: #fff;
  color: ${p => p.theme.text.main};
  padding: 20px;
`;

export const Inner = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    height: 100%;
  }
`;

export const ImgWrap = styled.div`
  max-width: 140px;
  width: 100%;
  margin: 0 auto;

  @media ${device.mobileS} {
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    margin: 15px 10px 0 0;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IngredientImage = styled.img`
  max-width: 140px;
  height: 140px;
  display: block;
`;

export const IngredientTitle = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const IngredientDescription = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 25px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
`;

export const IngredientKeyword = styled.div`
  font-family: Calluna-Sans;
  color: #707070;
  text-transform: uppercase;
  margin-top: auto;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
`;
