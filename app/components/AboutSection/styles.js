import styled from 'styled-components';

export const AboutArea = styled.div`
  background-color: rgba(231, 221, 210, 0.72);
  justify-content: center;
  flex-direction: column;
  min-height: 700px;
  padding: 50px 120px;
  display: flex;
  @media (max-width: 768px) {
    padding: 70px 20px;
    min-height: auto;
  }

  @media (max-width: 400px) {
    padding: 50px 20px;
  }
`;

export const AboutTitle = styled.h1`
  color: #364650;
  text-align: center;
  width: 100%;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 1px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1060px;
  margin: 0 auto;
  & > div {
    width: 50%;
    align-self: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

export const AboutImage = styled.div`
  height: 300px;
  flex-shrink: 0;
  min-width: 350px;
  text-align: center;
  background-image: url(${props => props.img_source});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  & > div {
    align-self: center;
    margin-bottom: -25px;
  }
  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 60px;
    min-width: auto;
  }
  @media (max-width: 400px) {
    background-color: #f6f3ee;
    background-image: none;
    & > div {
      margin-bottom: 0;
    }
  }
`;

export const AboutContent = styled.div`
  text-align: center;
  font-family: Calluna;
  font-style: Regular;
  font-size: 20px;
  letter-spacing: 1px;
  color: #364650;
  @media (max-width: 991px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const AboutDetail = styled.div`
  font-size: 13px;
  letter-spacing: 1.5px;
  line-height: 1em;
  font-family: Sailec-Bold;
  color: #364650;
  padding: 25px 0;
  padding-left: 70px;

  text-align: left;
  position: relative;

  &:not(:last-child) {
    border-bottom: 2px solid #364650;
  }
  @media (max-width: 1170px) {
    padding: 15px 0 15px 50px;
    font-size: 13px;
  }
  @media (max-width: 991px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    padding-left: 40px;
  }
`;

export const AboutIcon = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 0px;
  top: 50%;
  margin-top: -2px;
  transform: translate(0, -50%);
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AboutName = styled.div`
  text-transform: uppercase;
`;

export const AboutButton = styled.button`
  margin: 70px auto 0 !important;
  padding-top: 5px;
  width: 200px;
  line-height: 50px;
  letter-spacing: 2px;
  font-weight: 700;
  font-family: Sailec-Bold;
  border: 2px solid #364650;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.3s;

  @media (max-width: 991px) {
    margin: 30px auto 0;
  }
  @media (max-width: 768px) {
    margin: 30px auto 0;
  }

  &:hover {
    background-color: #364650 !important;
    color: #f6f3ee !important;
  }
`;
