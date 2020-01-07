import styled from 'styled-components';
import RightArrow from './RightArrow.png';
import LeftArrow from './LeftArrow.png';

export const MemberCard = styled.div`
  overflow: hidden;
  margin: 0 10%;
  @media screen and (max-width: 992px) {
    margin: 0 50px;
  }
`;

export const MemberImage = styled.div`
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0px auto;
  display: block;
  height: 400px;
  @media screen and (max-width: 576px) {
    height: 300px;
  }
`;

export const MemberTitle = styled.h1`
  margin: 20px auto;
  font-family: Sailec-Bold;
  font-size: 22px;
  text-align: center;
  color: white;
  width: 100%;
`;

export const MemberDescription = styled.div`
  margin: 20px auto;
  font-family: Calluna;
  font-family: Regular;
  font-size: 18px;
  text-align: center;
  color: white;
  margin: 10px auto;
  width: 100%;
`;

export const Wrap = styled.div`
  width: 100%;
  .slick-arrow {
    z-index: 2;
    width: 45px;
    height: 50px;
    color: red;
    top: calc(400px / 2);
    font-size: 0px;
    display: none;
  }
  .slick-arrow.slick-prev {
    left: calc(150px + 50px);
    background-image: url(${LeftArrow});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .slick-arrow.slick-next {
    right: calc(150px + 50px);
    background-image: url(${RightArrow});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 0px;
  }

  @media screen and (max-width: 992px) {
    .slick-arrow.slick-prev {
      left: 0;
    }
    .slick-arrow.slick-next {
      right: 0;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 0px;
    }
  }
  
  @media screen and (max-width: 576px) {
    .slick-arrow {
      top: calc(300px / 2);
      width: 36px;
      height: 40px;
    }
  }
`;
