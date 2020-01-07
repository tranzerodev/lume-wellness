import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MoreLink } from 'styles/common-styles';

export const FeaturedContainer = styled.div`
  width: 100%;
  color: #364650;
`;

export const RowWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageBlock = styled(Link)`
  width: 100%;
  flex-shrink: 0;
  max-width: 385px;
  height: 385px;
  margin-right: 8%;
  @media (max-width: 991px) {
    margin-right: 6%;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0%;
  }
  @media (max-width: 400px) {
    height: 90vw;
  }
`;

export const TextBlock = styled.div``;

export const Text = styled.p`
  font-size: 24px;
  line-height: 1.3em;
  font-family: Calluna;
  font-weight: normal;
  font-style: normal;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Title = styled(Link)`
  font-size: 36px;
  line-height: 1.1em;
  margin-bottom: 20px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.div`
  font-size: 18px;
  line-height: 1.05em;
  margin-bottom: 10px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
`;

export const FeaturedImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: none;
  height: 100%;
  width: 100%;
`;

export const FeaturedSummary = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const More = styled(MoreLink)`
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;
