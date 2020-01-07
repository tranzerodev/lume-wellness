import styled from 'styled-components';

import { Btn } from 'styles/common-styles';
import { device } from 'device';

export const Section = styled.div``;

export const Block = styled.div`
  @media ${device.mobileS} {
    padding: 30px 5px;
    &:first-child {
      border-bottom: 1px solid black;
    }
  }
  @media ${device.laptop} {
    padding: 50px 20px;
  }
`;

export const SelectedService = styled.div`
  font-family: Sailec-Bold;
  @media ${device.mobileS} {
    font-size: 24px;
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
`;

export const AddOnInput = styled.select`
  height: 50px;
  max-width: 400px;
  width: 100%;
  font-size: 18px;
  border: 1px solid black;
  padding: 10px;
  background-color: transparent;
  @media ${device.mobileS} {
    margin: 0 0px 40px;
  }
  @media ${device.laptop} {
    margin: 0 0px 55px;
  }
`;

export const AddOnButton = styled(Btn)`
  font-size: 18px;
  padding: 15px 20px 10px;
  @media ${device.mobileS} {
    margin: 0 auto;
  }
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-family: Calluna-Sans;
  font-weight: 700;
  text-transform: uppercase;
  @media ${device.mobileS} {
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    margin-bottom: 25px;
  }
`;

export const Btns = styled.div``;

export const TitleQ = styled.div`
  font-family: Calluna-Sans;
  font-weight: 700;
  @media ${device.mobileS} {
    margin-bottom: 20px;
    font-size: 16px;
    text-transform: uppercase;
  }
  @media ${device.laptop} {
    font-size: 18px;
    text-transform: initial;
    margin-bottom: 40px;
  }
`;

export const AddOnSummary = styled.div`
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  @media ${device.mobileS} {
    font-size: 14px;
    margin-bottom: 25px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const InputContainer = styled.div`
  font-size: 25px;
  padding: 10px 0px;
`;
