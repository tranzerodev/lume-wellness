import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  text-align: center;
  margin: 0px auto;
  a {
    color: #364650;
  }
`;

export const Section = styled.div`
  margin-bottom: 60px;
  border: 1px solid transparent;

  &:first-of-type {
    margin-top: 75px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 35px;
    &:first-of-type {
      margin-top: 55px;
      position: relative;
      &:after {
        content: '';
        display: block;
        height: 3px;
        background-color: #fff;
        width: 100%;
        position: absolute;
        bottom: -35px;
        left: 0;
      }
    }
  }
`;

export const TitleBlock = styled.div`
  margin-bottom: 60px;
  @media (max-width: 576px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-size: 55px;
  line-height: 1.05em;
  margin-bottom: 15px;
  font-family: Sailec-Bold;
  font-weight: normal;
  font-style: normal;
  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  font-size: 24px;
  line-height: 1.05em;
  font-family: Calluna;
  font-weight: normal;
  font-style: normal;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const ListWrap = styled.div`
  @media (min-width: 992px) {
    overflow: hidden;
    padding-bottom: 5px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;
  position: relative;
  margin-right: -75px;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

export const CardWrap = styled.div`
  width: calc(100% / 3 - 75px);
  margin: 0 75px 100px 0;
  @media (min-width: 1500px) {
    width: calc(100% / 4 - 75px);
  }
  @media (max-width: 991px) {
    width: calc(100% / 2);
    margin: 0 0 70px 0;
    & > div {
      max-width: 330px;
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    & > div {
      max-width: none;
    }
  }
`;

export const Empty = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
