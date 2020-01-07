import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import { device } from 'device';

export const EmailContainer = styled(Row)`
  width: 100%;
  background-color: ${p => p.theme.bg.light};
  margin: 0px;
  @media ${device.mobileS} {
    padding: 35px 0 50px;
  }
  @media ${device.tablet} {
    padding: 40px 0 75px;
  }
  @media ${device.laptop} {
    padding: 70px 0 75px;
  }
`;

export const Inner = styled.div`
  max-width: 890px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex-grow: 1;
    &:last-child {
      min-width: 250px;
    }
  }
  @media ${device.mobileS} {
    padding: 0 20px;
  }
  @media ${device.tablet} {
    padding: 0 30px;
  }
  @media ${device.laptop} {
    padding: 0 50px;
  }
`;

export const EmailInstruction = styled.h3`
  margin: 0px;
  padding: 20px 0px;
  margin-right: 10px;
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    text-align: center;
    font-size: 20px;
  }
  @media ${device.tablet} {
    text-align: left;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
`;

export const SocialSectionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialSection = styled.div`
  margin: 20px auto 0;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  display: inline-block;
  background-image: url(${props => props.icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 30px;
`;
