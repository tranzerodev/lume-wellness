import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  background-color: ${p => p.theme.bg.light};
`;

export const Container = styled.div`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

export const ImageBlock = styled.div`
  background-image: url(${p => p.bgImg});
  background-color: grey;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Title = styled.div`
  text-align: center;
  position: relative;
  ${ImageBlock} {
    position: absolute;
    left: 0;
    transform: translate(0, 100%);
  }
  @media ${device.mobileS} {
    padding: 45px 0 210px;
    margin-bottom: calc(175px + 20px);
    ${ImageBlock} {
      height: 385px;
      bottom: 210px;
    }
  }
  @media ${device.tablet} {
    padding: 75px 0 150px;
    margin-bottom: calc(300px + 30px);
    ${ImageBlock} {
      height: 445px;
      bottom: 150px;
    }
  }
  @media ${device.laptop} {
    padding: 75px 0 150px;
    margin-bottom: calc(420px + 40px);
    ${ImageBlock} {
      height: 570px;
      bottom: 150px;
    }
  }
`;

export const Category = styled.div`
  text-transform: uppercase;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export const TitleName = styled.div`
  text-transform: uppercase;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    margin-bottom: 10px;
    font-size: 25px;
  }
  @media ${device.mobileM} {
    font-size: 30px;
  }
`;
