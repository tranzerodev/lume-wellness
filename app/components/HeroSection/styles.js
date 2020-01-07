import styled from 'styled-components';

import Button from 'components/Button';

export const Block = styled.div`
  min-height: 630px;
  display: flex;
  background-image: url(${props => props.img_source});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 2500px) {
    background-size: auto auto;
    background-attachment: fixed;
  }
  @media (max-width: 991px) {
    min-height: 500px;
  }
  @media (max-width: 576px) {
    padding: 45px 50px;
    min-height: 450px;
  }
  @media (max-width: 370px) {
    padding: 45px 15px;
  }
`;

export const HeroLeftImage = styled.div`
  background-image: url(${props => props.img_source});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 40px;
  width: 40%;
  flex-shrink: 0;

  @media (max-width: 2500px) {
    background-attachment: fixed;
    background-size: 50% auto;
  }

  @media (max-width: 1200px) {
    background-size: 60% auto;
  }

  @media (max-width: 991px) {
    background-size: 60% auto;
  }

  @media (max-width: 768px) {
    background-size: 70% auto;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HeroDescription = styled.div`
  flex-grow: 1;
  background-color: ${p => p.theme.bg.dark};
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 25px;
  }
  @media (max-width: 370px) {
    padding: 15px;
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  letter-spacing: 4.13px;
  margin-bottom: 25px;
  margin-top: auto;
  font-size: 55px;
  color: #ffffff;

  @media (max-width: 991px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    letter-spacing: 2.69px;
    text-align: center;
  }
  @media (max-width: 370px) {
    font-size: 30px;
    letter-spacing: 2.12px;
  }
`;

export const Subtitle = styled.div`
  font-family: Regular Calluna;
  color: ${p => p.theme.text.light};
  font-size: 23px;
  max-width: 592px;
  margin-top: 130px;
  letter-spacing: 1px;
  color: #e7ddd2;
  @media (max-width: 991px) {
    margin-top: 90px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroButton = styled(Button)`
  letter-spacing: 2px !important;
  text-transform: uppercase;
  align-self: flex-start;
  transition: 0.3s;
  font-size: 14px;
  margin: 0;
  /* button size fix */
  padding-top: 15px;

  @media (max-width: 768px) {
    align-self: center;
  }

  &:hover {
    background-color: rgba(231, 221, 210) !important;
    border: 2px solid rgba(231, 221, 210) !important;
    color: #364650 !important;
  }
`;
