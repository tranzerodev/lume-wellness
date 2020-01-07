import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { device } from 'device';

export const Section = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    padding-top: 30px;
  }
  @media ${device.laptopL} {
    padding-left: 30px;
    padding-top: 50px;
    min-height: 500px;
  }
`;

export const Block = styled.div`
  width: 100%;
  border: 1px solid ${p => p.theme.bg.dark};
  display: flex;
  flex-wrap: wrap;
  color: ${p => p.theme.text.main};
  @media ${device.mobileS} {
    margin-bottom: 15px;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    margin-bottom: 15px;
    flex-direction: row;
  }
  @media ${device.laptopL} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 14px;
    margin-bottom: 20px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
    margin-bottom: 40px;
  }
`;

export const Card = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
`
export const CardTitle = styled.h2`
  font-family: calluna-sans;
  font-weight: bold;
  @media ${device.mobileS}{
    font-size: 15px;
    line-height: 25px;
  }
  @media ${device.tablet}{
    font-size: 18px;
    line-height: 28px;
  }
`;
export const CardEdit = styled.a`
  display: block;
  text-align: right;
  font-family: calluna-sans;
  font-weight: bold;
  text-decoration: underline!important;
  &:hover{
    text-decoration: none!important;
  }
  @media ${device.mobileS}{
    font-size: 15px;
  }
  @media ${device.tablet}{
    font-size: 18px;
  }
`;
export const CardHeader = styled(Row)`
  padding: 11px 0px;
  margin: 0px;
  border-bottom: 1px solid black;
  text-align: left;
  letter-spacing: 0.9px;
  color: #364650;
  text-transform: uppercase;
  opacity: 1;
  flex-wrap: nowrap;
  @media ${device.mobileS}{
    padding: 8px 0px;
  }
  @media ${device.tablet}{
    padding: 11px 0px;
  }
`

export const CardContent = styled(Row)`
  margin: 0px;
  width: 100%;
  align-items: center;
  @media ${device.mobileS}{
    padding: 10px 0;
  }
  @media ${device.tablet}{
    padding: 20px 0;
  }
  .label {
    letter-spacing: 0.9px;
    color: #364650;
    text-transform: uppercase;
    opacity: 1;
    text-align: right;
    @media ${device.mobileS}{
      font: Bold 11px/23px calluna-sans;
    }
    @media ${device.tablet}{
      font: Bold 16px/27px calluna-sans;
    }
  }
  *:not(.label){
    @media ${device.mobileS}{
      font-size: 13px;
    }
    @media ${device.tablet}{
      font-size: 18px;
    }
  }
`
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  color: ${p => p.theme.bg.dark};
  background: transparent;
  &:disabled{
    border-bottom-color: transparent;
    pointer-events: none;
  }
`;