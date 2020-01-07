import styled from 'styled-components';

import Slider from 'react-slick';
import { device } from 'device';

export const Block = styled.div`
  background-color: ${p => p.theme.bg.light};
  @media ${device.mobileS} {
    padding: 50px 0 50px;
  }
  @media ${device.laptop} {
    padding: 50px 0 50px;
  }
`;

export const Container = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  @media ${device.modileS} {
    padding: 0 25px;
  }
  @media ${device.tablet} {
    padding: 0 50px;
  }
`;

export const SliderWrap = styled(Slider)`
  position: relative;
  .slick-list {
    position: static;
  }
  .slick-dots {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    width: auto;
    li {
      width: auto;
      height: auto;
      button {
        padding: 0;
      }
      button:before {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 1;
        background-color: transparent;
        border: 1px solid ${p => p.theme.bg.dark};
      }
      &.slick-active {
        button:before {
          background-color: ${p => p.theme.bg.dark};
        }
      }
    }
  }
  @media ${device.mobileS} {
    .slick-dots {
      top: 0;
      bottom: auto;
      height: 280px;
      left: -18px;
      li {
        margin: 10px 0;
        button {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
  @media ${device.mobileL} {
    .slick-dots {
      left: 0;
    }
  }
  @media ${device.tablet} {
    .slick-dots {
      bottom: 0;
      left: -35px;
      height: 100%;
      li {
        margin: 15px 0;
        button {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  @media ${device.laptopL} {
    .slick-dots {
      left: -60px;
    }
  }
`;

export const DetailTitle = styled.div`
  font-family: Sailec-Bold;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 25px;
    margin-bottom: 30px;
  }
  @media ${device.mobileM} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const DetailImage = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: none;
  background-position: center;
`;

export const DetailDescription = styled.div`
  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`;

export const DetailSlide = styled.div`
  display: flex;
  align-items: center;

  ${DetailImage} {
    width: 100%;
  }

  @media ${device.mobileS} {
    height: 600px;
    flex-direction: column;
    ${DetailImage} {
      height: 300px;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    ${DetailImage} {
      max-width: 560px;
      height: 400px;
      width: 100%;
    }
    ${DetailDescription} {
      padding-left: 40px;
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    ${DetailImage} {
      max-width: 700px !important;
      height: 600px !important;
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  font-family: Sailec-Bold;
  text-transform: uppercase;
  @media ${device.mobileS} {
    padding-top: 25px;
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  font-family: Calluna-Regular;
  @media ${device.mobileS} {
    font-size: 16px;
    height: 300px;
  }
  @media ${device.mobileM} {
    max-width: 700px;
    font-size: 18px;
  }
  @media ${device.laptop} {
    max-width: 900px;
    font-size: 24px;
  }
`;
