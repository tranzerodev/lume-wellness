import styled, { css } from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  background-color: ${p => p.theme.bg.dark};
  @media ${device.mobileS} {
    padding: 0 0 50px;
    overflow: hidden;
  }
  @media ${device.tablet} {
    padding: 150px 0 100px;
    overflow: inherit;
    margin-bottom: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

export const Content = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column-reverse;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const TextBlock = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: calc(100% - 400px - 20px);
  }
  @media ${device.laptop} {
    width: calc(100% - 500px - 20px);
  }
`;

export const Img = styled.div`
  background-image: url(${p => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${p =>
    p.big
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          width: 215px;
          height: 215px;
          position: absolute;
          top: -100px;
          right: 0;
          @media ${device.mobileS} {
            display: none;
          }
          @media ${device.tablet} {
            display: block;
          }
        `}
`;

export const ImgsBlock = styled.div`
  @media ${device.mobileS} {
    height: 250px;
    width: 100vw;
    margin-left: -15px;
    margin-bottom: 30px;
  }
  @media ${device.tablet} {
    margin-bottom: 0px;
    max-width: 500px;
    width: 100%;
    margin-left: 0;
    height: 400px;
    position: absolute;
    right: -50px;
    bottom: -180px;
    transform: scale(0.8);
  }
  @media ${device.laptop} {
    transform: scale(1);
    right: 0;
  }
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Sailec-Bold;
  line-height: 1.1em;
  @media ${device.mobileS} {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media ${device.tablet} {
    font-size: 55px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  text-align: center;
  color: ${p => p.theme.text.light};
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;
