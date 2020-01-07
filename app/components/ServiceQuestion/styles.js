import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { device } from 'device';

export const Block = styled.div`
  background-color: #fff;
  width: 100%;
  @media ${device.mobileS} {
    padding: 50px 0;
  }
  @media ${device.laptop} {
    padding: 50px 0 100px;
  }
`;

export const Container = styled.div`
  max-width: 975px;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  @media ${device.mobileM} {
    padding: 0 25px;
  }
`;

export const QuestionTitle = styled.div`
  text-align: center;
  font-family: Sailec-Bold;
  line-height: 1.3em;
  letter-spacing: 1px;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 15px;
  }
  @media ${device.mobileM} {
    font-size: 32px;
    margin-bottom: 25px;
  }
`;

export const QuestionSubtitle = styled.div`
  text-align: center;
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 50px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 85px;
  }
`;

export const QuestionContent = styled.div`
  font-family: Sailec-Bold;
`;

export const QuestionIcon = styled(FontAwesomeIcon)``;

export const QuestionAccordion = styled(Accordion)`
  .card {
    background-color: #fff;
    opacity: 1;
    border: 0;
    border-bottom: 2px solid ${p => p.theme.bg.dark} !important;
  }
  .card-header {
    background-color: #fff;
    position: relative;
    padding: 0;
    background-color: #fff;
    opacity: 1;
    border: 0;
    border-bottom: none !important;
  }
  .card-body {
    padding: 0;
  }
  ${QuestionIcon} {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-top: -2px;
  }
  @media ${device.mobileS} {
    margin-bottom: 40px;
    .card-header {
      font-size: 16px;
      padding-bottom: 10px;
      padding-top: 10px;
      padding-right: 30px;
      border-bottom: none !important;
    }
    .card-body {
      padding-top: 0px;
      padding-bottom: 15px;
      font-size: 14px;
    }
    ${QuestionIcon} {
      right: 10px;
    }
  }
  @media ${device.mobileM} {
    .card-header {
      font-size: 18px;
      border-bottom: none !important;
    }
  }
  @media ${device.laptop} {
    margin-bottom: 80px;
    .card-header {
      padding-bottom: 20px;
      padding-top: 20px;
      padding-right: 35px;
      font-size: 22px;
      border-bottom: none !important;
    }
    .card-body {
      padding-top: 0px;
      padding-bottom: 15px;
      font-size: 18px;
    }
    ${QuestionIcon} {
      right: 15px;
    }
  }
`;

export const EmailInstruction = styled.div`
  font-family: Calluna-Sans;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;
