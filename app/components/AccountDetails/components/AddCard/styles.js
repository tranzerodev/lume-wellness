import styled, { css } from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 20px;
`;

export const Btn = styled.button`
  border: 2px solid ${p => p.theme.bg.dark};
  text-transform: uppercase;
  margin-left: auto;
  font-weight: bold;
  color: ${p => p.theme.text.main};
  flex-shrink: 0;
  
  @media ${device.mobileS} {
    padding: 5px 20px;
    font-size: 14px;
    margin-top: 20px;
    align-self: flex-start;
  }
  @media ${device.tablet} {
    padding: 10px 20px;
    font-size: 18px;
    align-self: flex-end;
  }
`;

export const InputsRow = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .form-check {
    padding-top: 20px;
  }
  /* @media ${device.mobileS} {
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
  } */
`;

export const Input = styled.input`
  outline: none;
  border: none;
  color: #424770;
  padding: 0px 0px 5px 20px;
  border-bottom: 1px solid #707070;
  margin-top: 20px;
  width: 100%;
  margin-right: 20px;
  ${p =>
    p.expires &&
    css`
      max-width: 100px !important;
      text-align: center;
    `}
`;

export const CardForm = styled.form`
  width: 100%;
  position: relative;
  
  @media ${device.mobileS} {
    padding-bottom: 60px;
    ${Btn} {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  @media ${device.tablet} {
    padding-right: 200px;
    padding-bottom: 0px;
    margin-bottom: 50px;
    ${Btn} {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export const Zip = styled.div` 
  @media ${device.tablet} {
    flex-grow: 1;
    margin-right: 20px;
  }
`;

export const CardLabel = styled.label`
  height: 50px;
  padding: 20px;
  color: #707070;
  margin: 0px 20px 0px 0px;
  border-bottom: 1px solid #707070;  
  font-size: 11px;

  @media ${device.mobileS}{
    width: 100%;
    font-size: 14px;
  }

  @media ${device.tablet} {
    width: ${props => props.width};
    font-size: 18px;    
  }
`

export const Label = styled.div`
  font-family: Sailec-Bold;

  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
  }
`;