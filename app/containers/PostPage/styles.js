import styled from 'styled-components';

import { device } from 'device';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

export const Info = styled.div`
  padding-right: 30px;
  padding-top: 20px;
`;

export const PostBlock = styled.div`
  @media ${device.mobileS} {
    padding: 0 5px;
  }
  @media ${device.mobileM} {
    padding: 0 20px;
  }
  @media ${device.laptop} {
    padding: 20px 0 20px 55px;
    border-left: 1px solid ${p => p.theme.bg.dark};
  }
  @media ${device.laptop} {
    padding: 20px 0 20px 30px;
  }
`;

export const PostWrap = styled.div`
  display: flex;
  @media ${device.mobileS} {
    margin-bottom: 30px;
    ${Info} {
      display: none;
    }
  }
  @media ${device.laptop} {
    margin-bottom: 60px;
    ${Info} {
      display: block;
      flex-shrink: 0;
      max-width: 300px;
    }
    ${PostBlock} {
      width: calc(100% - 300px);
    }
  }
`;

export const InfoTitle = styled.div`
  margin-bottom: 20px;
  font-family: Sailec-Bold;
  letter-spacing: 1.65px;
  font-size: 22px;
  text-transform: uppercase;
`;

export const InfoText = styled.div`
  font-family: Calluna-Regular;
  font-size: 20px;
  p {
    margin-bottom: 30px;
  }
`;

export const PostText = styled.div`
  p {
    margin-bottom: 20px;
    font-family: Calluna-Regular;
  }
  img,
  iframe {
    margin-top: 20px;
    max-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;
    font-family: Sailec-Bold;
    letter-spacing: 1.65px;
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
  @media ${device.mobileS} {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
  }
  @media ${device.tablet} {
    p {
      font-size: 24px;
    }
  }
`;

export const PostListWrap = styled.div`
  overflow: hidden;
  position: relative;
  @media ${device.mobileS} {
    padding: 0;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 5%;
      width: 90%;
      height: 2px;
      background-color: ${p => p.theme.bg.dark};
    }
  }
  @media ${device.mobileM} {
    &:before {
      left: 0%;
      width: 100%;
    }
  }
  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

export const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    padding: 55px 0;
    margin-bottom: -75px;
    & > div {
      width: 100%;
      margin-bottom: 75px;
      &:last-child {
        display: none;
      }
    }
  }
  @media ${device.tablet} {
    margin-right: -70px;
    & > div {
      width: calc(100% / 2 - 70px);
      margin-right: 70px;
    }
  }
  @media ${device.laptop} {
    padding: 90px 0;
    margin-right: -70px;
    & > div {
      width: calc(100% / 3 - 70px);
      margin-right: 70px;
      display: block !important;
    }
  }
`;
