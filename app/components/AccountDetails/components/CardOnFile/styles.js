import styled, { css } from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileS} {
    margin-top: -20px;
    width: 100%;
    padding: 10px 20px;
  }
`;

export const Text = styled.div`
  font-family: Calluna-Sans;
  @media ${device.mobileS} {
    font-size: 16px;
    flex-basis: 280px;
    flex-grow: 1;
    margin-top: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  img {
    display: block;
  }
  .form-check {
    padding-top: 20px;
  }
  @media ${device.mobileS} {
    img {
      margin-right: 10px;
      max-width: 50px;
      max-height: 20px;
    }
  }
  @media ${device.tablet} {
    img {
      margin-right: 20px;
      max-width: 80px;
      max-height: 25px;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #707070;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
  ${p =>
    p.expires &&
    css`
      max-width: 100px !important;
      text-align: center;
    `}
`;

export const InputsRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .form-check {
    padding-top: 20px;
  }
  @media ${device.mobileS} {
    flex-wrap: wrap;
    ${Input} {
      max-width: none;
    }
  }
  @media ${device.tablet} {
    flex-wrap: nowrap;
    ${Input} {
      max-width: 50%;
    }
  }
`;

export const User = styled.div`
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const CardInfo = styled.div`
  margin-right: 10px;
  line-height: 1em;
  white-space: nowrap;
  align-self: flex-end;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const Info = styled.div`
  color: grey;
  align-self: flex-end;
  margin-left: 8px;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;
export const Btn = styled.button`
  border: 2px solid ${p => p.theme.bg.dark};
  text-transform: uppercase;
  margin-left: auto;
  font-weight: bold;
  color: ${p => p.theme.text.main};
  flex-shrink: 0;
  align-self: flex-end;
  @media ${device.mobileS} {
    padding: 5px 20px;
    font-size: 16px;
    margin-top: 20px;
  }
  @media ${device.tablet} {
    padding: 10px 20px;
    font-size: 18px;
  }
`;