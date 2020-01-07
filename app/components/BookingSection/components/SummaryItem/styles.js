import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from 'device';

export const Block = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export const ImgBlock = styled.div`
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: gray;

  @media ${device.mobileS} {
    width: 100%;
    min-height: 115px;
    margin-bottom: 10px;
  }
  @media ${device.mobileL} {
    width: 25%;
    margin-bottom: 0;
  }
  @media ${device.laptop} {
    min-height: 150px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileL} {
    padding-left: 10px;
  }
  @media ${device.laptop} {
    padding-left: 35px;
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  text-transform: uppercase;
  line-height: 1.2em;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const Duration = styled.div`
  font-family: Sailec-Regular;
  @media ${device.mobileS} {
    font-size: 13px;
    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Time = styled.div`
  font-family: Sailec-Regular;
  @media ${device.mobileS} {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    font-weight: normal;
    font-size: 22px;
  }
`;

export const InfoLink = styled(Link)`
  font-family: Calluna-Regular;
  align-self: flex-start;
  @media ${device.mobileS} {
    font-size: 10px;
    margin-top: auto;
    margin-bottom: 10px;
    border-bottom: 1px solid ${p => p.theme.bg.dark};
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
