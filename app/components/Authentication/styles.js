import styled, { css } from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    padding: 20px 5px;
  }
  @media ${device.mobileM} {
    padding: 20px 10px;
  }
  @media ${device.laptop} {
    padding: 70px 35px 70px;
  }
`;

export const LoginForm = styled.form`
  text-align: center;
  @media ${device.mobileS} {
    ${Block} {
      &:first-child {
        border-bottom: 2px solid #707070;
      }
    }
  }
  @media ${device.tablet} {
    ${Block} {
      &:first-child {
        border-bottom: 1px solid ${p => p.theme.bg.dark};
      }
    }
  }
`;

export const LoginInput = styled.input`
  height: 50px;
  border: 1px solid ${p => p.theme.bg.dark};
  width: 100%;
  padding: 0px 10px;
  margin: 0 auto;
  font-family: Calluna-Sans;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  @media ${device.mobileS} {
  }
  @media ${device.tablet} {
    max-width: 365px;
  }
`;

export const InputsRow = styled.div`
  ${LoginInput} {
    margin-bottom: 20px;
    max-width: none;
  }
  &.mobile{
    @media ${device.mobileS} {
      padding: 1rem 0 0;
    }
    @media ${device.tablet} {
      padding: 0;
    }
  }
`;

export const Btn = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: ${p => p.theme.bg.dark};
  font-family: Sailec-Bold;
  padding: 10px 20px;
  font-size: 18px;
  display: block;
  min-width: 100px;
  @media ${device.mobileS} {
    margin: 0 auto 20px;
  }
  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

export const ButtonLine = styled.button`
  padding: 0 0 5px;
  border-bottom: 3px solid ${p => p.theme.bg.dark};
  text-transform: uppercase;
  font-family: Sailec-Bold;
  color: ${p => p.theme.bg.dark};
  display: block;
  letter-spacing: 1.35px;
  @media ${device.mobileS} {
    font-size: 18px;
    margin: 40px auto 0px;
  }
  @media ${device.tablet} {
    font-size: 22px;
    margin: 20px auto 0px;
  }
`;

export const BlockTitle = styled.div`
  text-transform: uppercase;
  font-family: calluna-sans;
  font-weight: 700;
  padding-bottom: 20px;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 22px;
    ${p =>
    p.tabName &&
      css`
        display: none;
      `}
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    margin-bottom: 45px;
  }
`;

export const BtnLink = styled.div`
  font-size: 25px;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

export const BtnsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Btn} {
    margin: 0;
  }
  @media ${device.mobileS} {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 15px;
`;
export const SignUpForm = styled.form`
  ${BlockTitle}{
    text-align: center;
    font-size: 18px;
  }
  .form-check-label{
    font-family: Sailec-regular;
    font-size: 12px;
  }
`;
export const TermsLink = styled.a`

`;
export const TermsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  .form-check-label{
    text-transform: uppercase;
  }
  a{
    font-family: Sailec-regular;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    border-bottom: 1px solid;
    margin: 5px 0 0 2px;
  }
`;