import styled from 'styled-components';
import { Btn, BtnLine } from 'styles/common-styles';

import { device } from 'device';

export const Block = styled.div`
  @media ${device.mobileS} {
    padding: 35px 10px;
  }
  @media ${device.laptop} {
    padding: 20px;
  }
`;

export const UserName = styled.div`
  font-family: Calluna-Sans;
  font-weight: 700;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
    text-align: right;
    margin-bottom: 50px;
    font-size: 18px;
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    margin-bottom: 50px;
  }
`;

export const List = styled.div`
  @media ${device.mobileS} {
    margin-bottom: 40px;
    border-bottom: 1px solid ${p => p.theme.bg.dark};
    padding-bottom: 40px;
    & > div:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media ${device.laptop} {
    margin-bottom: 50px;
    & > div:not(:last-child) {
      margin-bottom: 45px;
    }
  }
`;

export const Button = styled(Btn)`
  @media ${device.mobileS} {
    font-size: 15px;
    padding: 25px 20px 20px;
  }
  @media ${device.tablet} {
    font-size: 22px;
    padding: 25px 30px 20px;
  }
`;
export const ButtonLine = styled(BtnLine)`
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const Btns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: space-between;
  }
  ${Button} {
    margin-bottom: 40px;
  }
  ${ButtonLine} {
    margin-bottom: 40px;
  }
`;

//
