import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 890px;
  margin: 0 auto;
  .slick-arrow {
    top: auto;
    bottom: 0;
  }
`;

export const Block = styled.a`
  cursor: pointer;
  display: block;
  width: 195px;
  height: 195px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:before {
    content: '';
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  &:hover {
    text-decoration: none;
    &:before {
      background-color: rgba(0, 0, 0, 0.6);
    }
    & > div {
      opacity: 1;
    }
  }
  @media screen and (max-width: 420px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 345px) {
    width: 195px;
    height: 195px;
  }
`;

export const Text = styled.div`
  color: #fff;
  z-index: 2;
  opacity: 0;
  font-size: 11px;
  padding: 10px;
`;

export const Img = styled.div`
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
