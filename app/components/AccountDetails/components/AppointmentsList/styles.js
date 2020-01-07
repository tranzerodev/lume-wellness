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
  color: ${p => p.theme.text.main};
  cursor: pointer;
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

export const CardHeader = styled(Row)`
  padding: 20px 0px;
  margin: 0px;
  border-bottom: 1px solid black;
  text-align: left;
  font: Bold 18px/22px Calluna Sans;
  letter-spacing: 0.9px;
  color: #364650;
  text-transform: uppercase;
  opacity: 1;
`

export const CardContent = styled(Row)`
  margin: 0px;
  width: 100%;
  @media ${device.mobileS}{
    padding: 20px 10px 10px;
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
      font-size: 10px;
      padding: 0 5px 10px;
    }
    @media ${device.tablet}{
      font-size: 18px;
      padding: 0 15px 10px;
    }
  }
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