import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { device } from 'device';

export const SectionBox = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  width: 100%;
  margin: 0px;
  @media ${device.mobileS} {
    padding: 50px 0;
  }
  @media ${device.tablet} {
    padding: 80px 0;
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

export const ImgCol = styled(Col)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatementTitle = styled.div`
  color: ${p => p.color || p.theme.text.main};
  font-family: Sailec-Bold;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 70px;
  }
`;

export const CeilWrap = styled(Row)`
  @media (min-width: 768px) {
    overflow: hidden;
    & > div {
      position: relative;
      &:before,
      &:after {
        content: '';
        display: block;
        background-color: ${p => p.theme.bg.dark};
        position: absolute;
      }
      &:after {
        width: 90%;
        height: 1px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      &:before {
        width: 1px;
        height: 90%;
        right: 0;
        top: 20px;
      }
      &:nth-child(2n) {
        &:before {
          display: none;
        }
      }
      &:last-child(2) {
        &:before,
        &:after {
          display: none;
        }
      }
    }
  }
`;

export const Ceil = styled.div``;

export const StatementDescription = styled.div`
  text-align: center;
  letter-spacing: 1.2px;
  font-family: Calluna;
  letter-spacing: 1.2px;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    padding: 0px 100px;
  }
`;

export const TeamContainer = styled(Row)`
  & > div {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media ${device.laptop} {
    padding: 0px 100px;
  }
`;

export const StaffImage = styled.div`
  background-image: url(${props => props.imgSource});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0px auto;
  height: 100px;
  width: 100px;

  @media ${device.mobileS} {
    height: 150px;
    width: 150px;
  }

  @media ${device.mobileL} {
    height: 200px;
    width: 200px;
  }

  @media ${device.laptop} {
    height: 210px;
    width: 210px;
  }

  @media ${device.laptopL} {
    height: 300px;
    width: 300px;
  }
`;

export const StaffName = styled.div`
  font-weight: 700px;
  text-align: center;
  font-family: Sailec-Bold;
  letter-spacing: 1.65px;
  text-transform: uppercase;
  @media ${device.mobileS} {
    margin: 10px auto;
    font-size: 16px;
  }
  @media ${device.laptop} {
    margin: 25px auto;
    font-size: 22px;
  }
`;

export const StaffDescription = styled.div`
  font-weight: 300px;
  text-align: center;
  font-family: Calluna-Regular;
  letter-spacing: 0.9px;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

export const ValueTitle = styled.div`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-family: Sailec-Bold;
  letter-spacing: 1.65px;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    font-size: 22px;
    margin: 50px auto;
  }
`;

export const ValueDescription = styled.div`
  text-align: center;
  font-family: Calluna-Regular;
  letter-spacing: 0.6px;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 35px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    padding: 0 20px;
    margin: 50px auto;
  }

  @media ${device.laptop} {
    padding: 0px 100px;
  }
`;
