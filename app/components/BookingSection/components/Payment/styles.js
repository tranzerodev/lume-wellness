import styled, { css } from 'styled-components';

import { device } from 'device';

export const SummaryBlock = styled.div`
  margin-bottom: 20px;
`;

export const ChoosePayment = styled.div`
  border-top: 1px solid #000;
  padding-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${device.mobileS} {
    margin-bottom: 25px;
  }
`;

export const Btn = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: underline;
  white-space: nowrap;
`;

export const List = styled.div`
  @media ${device.mobileS} {
    & > div:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media ${device.laptop} {
    & > div:not(:last-child) {
      margin-bottom: 45px;
    }
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const UserName = styled.div`
  font-family: Calluna-Sans;
  font-weight: 700;
  text-align: right;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    font-size: 18px;
    display: block;
    margin-bottom: 40px;
  }
`;

export const Block = styled.div`
  .pmt-heading {
    text-transform: uppercase;
    font-family: Sailec-Bold;
    letter-spacing: 1.35px;
    padding: 0px 0px 10px;
  }
  @media ${device.mobileS} {
    padding: 30px 0;
    .pmt-heading {
      font-size: 18px;
    }
  }
  @media ${device.laptop} {
    padding: 20px;
    .pmt-heading {
      font-size: 20px;
    }
  }
`;

export const ListWrap = styled.div`
  @media ${device.mobileS} {
    padding: 25px 15px;
    border: 1.5px solid #867f7f !important;
    margin-top: 30px;
  }
  @media ${device.tablet} {
    padding: 25px;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #707070;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
`;

export const PaymentSummary = styled.div`
  margin-bottom: 30px;
`;

export const PromoBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    align-items: flex-start;
    flex-direction: column;
  }
  @media ${device.tablet} {
    padding: 0 10px 20px 20px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    flex-direction: row;
  }
`;

export const PromoInputBlock = styled.div`
  display: flex;

  ${Btn} {
    font-family: Calluna-Sans;
    font-weight: 700;
  }
  label {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1.35px;
    font-family: Calluna-Sans;
    font-weight: 700;
    margin-right: 10px;
    display: inline-block;
    white-space: nowrap;
  }
  @media ${device.mobileS} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    ${Input} {
      min-width: 150px;
    }
    label {
      font-size: 14px;
    }
    ${Btn} {
      font-size: 12px;
      margin-top: 20px;
      margin-left: auto;
    }
  }
  @media ${device.tablet} {
    flex-basis: 400px;
    flex-grow: 1;
  }
  @media ${device.mobileL} {
    width: 70%;
    margin-top: 20px;
    padding-right: 30px;

    flex-direction: row;
    align-items: center;

    ${Btn} {
      font-size: 16px;
      margin-top: 0;
      margin-left: 0;
    }
    label {
      font-size: 18px;
    }
  }
`;

export const TotalBlock = styled.div`
  margin-bottom: -8px;
  table {
    tr {
      td:first-child {
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    td {
      width: 50%;
      padding-bottom: 8px;
    }
  }
  @media ${device.mobileS} {
    padding: 15px 0 10px;
    width: 100%;
    margin-top: 25px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    table {
      margin-left: auto;
      /* width: 30%; */
      min-width: 150px;
      tr {
        td:first-child {
          font-size: 14px;
        }
      }
      td {
        font-size: 16px;
      }
    }
  }
  @media ${device.tablet} {
    padding: 0;
    border: 0;
    margin-top: 20px;
    width: 25%;
    min-width: 150px;
    flex-shrink: 0;
    table {
      width: 100%;
      tr {
        td:first-child {
          font-size: 18px;
        }
      }
      td {
        font-size: 20px;
      }
    }
  }
`;
