import styled from 'styled-components';

export const ServiceArea = styled.div`
  padding: 90px 0;
  overflow: hidden;
  @media (max-width: 991px) {
    padding: 55px 0 90px;
  }
  @media (max-width: 576px) {
    padding: 55px 0 75px;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  width: 100%;
  font-family: Sailec-Bold;
  font-size: 32px;
  letter-spacing: 1px;
  margin-bottom: 110px;
  @media (max-width: 991px) {
    margin-bottom: 90px;
    font-size: 28px;
  }
  @media (max-width: 576px) {
    margin-bottom: 50px;
    font-size: 30px;
  }
`;
