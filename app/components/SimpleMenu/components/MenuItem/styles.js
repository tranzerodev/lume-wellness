import styled from 'styled-components';

import { device } from 'device';

export const ItemContainer = styled.div`
  background-color: #fff;
  color: ${p => p.theme.text.main};
  @media ${device.mobileS} {
    padding: 0 0px 35px;
  }
  @media ${device.laptop} {
    padding: 0 15px 35px;
  }
`;

export const Header = styled.div`
  @media ${device.mobileS} {
    margin-bottom: 15px;
  }
  @media ${device.laptop} {
    margin-bottom: 20px;
  }
`;

export const ItemTitle = styled.div`
  font-family: Sailec-Bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  text-transform: uppercase;
  span {
    display: inline-block;
    margin-right: 10px;
  }
  @media ${device.mobileS} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
`;

export const ItemSubtitle = styled.div`
  font-family: Sailec-Regular;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
`;

export const ItemPrice = styled.div`
  font-family: Sailec-Regular;
  @media ${device.mobileS} {
    font-size: 20px;
    min-width: 60px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    min-width: 80px;
  }
`;

export const ItemDescription = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    margin-bottom: 40px;
  }
`;

export const ItemMoreinfoText = styled.div`
  font-family: Sailec-Regular;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 18px;
  }
`;

export const ItemBook = styled.button`
  font-family: Sailec-Bold;
  background-color: ${p => p.theme.bg.dark};
  color: #fff;
  transition: 0.3s;
  border: 2px solid ${p => p.theme.bg.dark};

  @media ${device.mobileS} {
    font-size: 18px;
    text-transform: uppercase;
    padding: 5px 30px;
  }
  @media ${device.mobileM} {
    font-size: 24px;
    padding: 5px 40px;
  }
  @media ${device.laptop} {
    padding: 5px 25px;
  }

  &:hover {
    background-color: white;
    border: 2px solid ${p => p.theme.bg.dark};
    color: ${p => p.theme.bg.dark};
  }
`;

export const More = styled.div`
  margin-right: 30px;
  @media ${device.mobileS} {
    span {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid ${p => p.theme.bg.dark};
      margin-right: 5px;
    }
  }
  @media ${device.laptop} {
    span {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid ${p => p.theme.bg.dark};
      margin-right: 15px;
    }
  }
`;

export const ItemMoreinfo = styled.div`
  flex-grow: 1;
  button {
    display: flex;
    cursor: pointer;
    color: ${p => p.theme.text.main};
  }
  @media ${device.mobileS} {
    button {
      flex-direction: column;
      align-items: flex-start;
      ${ItemMoreinfoText} {
        margin-top: 10px;
      }
    }
  }
  @media ${device.laptop} {
    button {
      flex-direction: row;
      align-items: center;
      ${ItemMoreinfoText} {
        margin-top: 0;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  ${ItemMoreinfo} {
    margin-right: auto;
  }
`;
