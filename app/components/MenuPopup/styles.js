import styled from 'styled-components';
import { device } from 'device';
import { Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export const ModalWrapper = styled(Modal)`
  .modal-content{
    @media ${device.mobileS}{
      padding: 20px;
    }
    @media ${device.laptop}{
      padding: 70px;
    }
  }
  @media ${device.mobileS} {
    .modal-dialog {
      max-width: 90vw;
      margin: .5rem auto;
    }
  }
  @media ${device.laptop} {
    .modal-dialog {
      max-width: 1050px;
    }
  }
`;
export const ModalBody = styled.div``;
export const ModalHeader = styled(Modal.Header)`
  position: relative;
  border-bottom: 2px solid ${p => p.theme.bg.dark};
  padding-bottom: 20px;
  flex-wrap: wrap;
  @media ${device.mobileS}{
    padding: 0 0 10px;
  }
  @media ${device.laptop}{
    padding: 0 190px 20px 0 ;
  }
  .close{
    position: absolute;
    font-weight: 100;
    color: #364650;
    padding: 0;
    opacity: 1;
    @media ${device.mobileS}{
      top: 0px;
      right: 10px;
      font-size: 40px;
    }
    @media ${device.laptop}{
      top: -50px;
      right: -30px;
      font-size: 65px;
    }
  }
`;
export const ModalTitle = styled.div`
  width: 100%;
  font-family: Sailec-Bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media ${device.mobileS}{
    font-size: 22px;
    letter-spacing: 2.4px;
  }
  @media ${device.laptop}{
    font-size: 32px;
    letter-spacing: 2.4px;
  }
`;
export const ModalSubtitle = styled.p`
  width: 100%;
  font-weight: bold;
  font-family: calluna-sans;
  @media ${device.mobileS}{
    font-size: 16px;
    letter-spacing: 1.35px;
  }
  @media ${device.laptop}{
    font-size: 22px;
  }
`;
export const ModalH = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 22px;
  font-family: Sailec-Regular;
  letter-spacing: 1.65px;
  text-transform: uppercase;
  padding-bottom: 20px;
`;
export const ModalDescription = styled.p`
  padding: 20px 0 0;
  font-size: 20px;
`;
export const Benefits = styled.div`
  border-bottom: 2px solid ${p => p.theme.bg.dark};
  @media ${device.mobileS}{
    padding: 20px 0 0;
  }
  @media ${device.tablet}{
    padding: 30px 0 50px;
  }
`;
export const BenefitsRow = styled(Row)`
  margin: 0;
  @media ${device.mobileS}{
    justify-content: space-around;
  }
  @media ${device.laptop}{
    justify-content: space-between;
  }
`;
export const BenefitsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media ${device.mobileS}{
    width: 100%;
    justify-content: flex-start;
    padding: 0 10px 10px;
    text-align: left;
  }
  @media ${device.tablet}{
    width: 120px;
    height: 120px;
    justify-content: center;
    text-align: center;
    padding: 10px;
    background: ${p => p.theme.bg.dark};
  }
  @media ${device.laptop}{
    width: 157px;
    height: 157px;

  }
  span{
    font-family: Sailec-Bold;
    letter-spacing: 1.05px;
    text-transform: uppercase;
    font-size: 14px;
    @media ${device.tablet}{
      color: #fff;
    }
  }

`;
export const Ingredients = styled.div`
  padding: 20px 0 30px;
  border-bottom: 2px solid ${p => p.theme.bg.dark};
`;

export const IngredientsRow = styled(Row)`
  flex-direction: column;
  margin: 0;
`;

export const IngredientsItem = styled.p`
  padding: 0 0 10px;
  font-size: 20px;
`;
export const More = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    span {
      width: 32px;
      height: 32px;
      margin-right: 15px;
    }
  }
`;