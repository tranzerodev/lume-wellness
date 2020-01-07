import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  background-color: ${p => p.theme.bg.light};
  @media ${device.mobileS} {
    padding: 55px 0;
  }
  @media ${device.laptop} {
    padding: 90px 0 100px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

export const DetailTitle = styled.div`
  font-family: Sailec-Bold;
  text-align: center;
  letter-spacing: 1px;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 15px;
  }
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const DetailSubtitle = styled.div`
  font-family: Sailec-Regular;
  text-align: center;
  font-size: 25px;
  padding: 10px 100px !important;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 15px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 50px;
  }
`;

export const Content = styled.div``;
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media ${device.tablet} {
    margin-right: -20px;
    & > div {
      width: calc(100% - 20px);
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
 

  @media ${device.laptop} {
    margin-right: -20px;
    & > div {
      width: calc(50% - 20px);
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }


`;

export const SliderWrap = styled.div`
  .slick-slide {
    padding: 0 5px;
  }
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-slide {
    float: none;
    height: auto;
    align-self: stretch;
    & > div,
    .slide-inner,
    .slide-inner > div {
      height: 100%;
    }
  }
`;
