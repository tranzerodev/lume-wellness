import styled, { css } from 'styled-components';

export const Container = styled.div`
  color: #364650;
  padding: 20px 0 0;
  @media (min-width: 769px) {
    padding: 40px 0;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Sailec-Bold;
  font-size: 18px;
  line-height: 1em;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: -20px;
  @media (max-width: 768px) {
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 10px;
    margin-bottom: -10px;
  }
`;

export const Item = styled.li`
  padding: 0 35px;
  margin-bottom: 20px;
  cursor: pointer;
  span {
    position: relative;
    &:after {
      content: '';
      display: block;
      height: 2px;
      width: 0;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #364650;
      transition: width 0.3s;
    }
  }
  ${p =>
    p.isActive &&
    css`
      span {
        &:after {
          width: 100%;
        }
      }
    `}
  @media (max-width: 768px) {
    padding: 0 13px;
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`;
