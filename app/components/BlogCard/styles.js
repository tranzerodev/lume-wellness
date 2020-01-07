import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from 'device';
import { MoreLink } from 'styles/common-styles';

export const Card = styled.div`
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #364650;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

export const BlogImage = styled(Link)`
  width: 100%;
  margin: 0px auto 20px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BlogTitle = styled(Link)`
  margin: 10px 0;
  font-size: 22px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  @media (min-width: 769px) {
    height: 62px;
    overflow: hidden;
  }
`;

export const Category = styled.div`
  font-size: 12px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const RowWrap = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    ${BlogImage} {
      height: 130px;
    }
    ${BlogTitle} {
      display: none;
    }
  }
  @media ${device.mobileL} {
    flex-direction: row;
    ${BlogImage} {
      margin-right: 15px;
      max-width: 130px;
      flex-shrink: 0;
    }
  }
  @media ${device.tablet} {
    display: block;
    ${BlogTitle} {
      display: block;
    }
    ${BlogImage} {
      max-width: none;
      height: 300px;

      flex-shrink: 0;
    }
  }
`;

export const BlogSummary = styled.div`
  margin-bottom: 20px;
  line-height: 1.5em;
  font-family: Calluna;
`;

export const BlogLink = styled(MoreLink)`
  @media ${device.mobileS} {
    margin-left: auto;
    font-size: 14px;
  }
  @media ${device.tablet} {
    margin-top: auto;
    font-size: 18px;
  }
`;
