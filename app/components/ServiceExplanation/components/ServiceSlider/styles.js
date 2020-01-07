import styled from 'styled-components';
import Slider from 'react-slick';

import { device } from 'device';

export const SliderContainer = styled.div`
  position: relative;
  @media ${device.laptop} {
    padding-bottom: 50px;
  }
`;

export const SliderWrap = styled(Slider)`
  position: static;

  .slick-dots {
    display: flex !important;
    justify-content: center;
    transform: translate(0, -100%);

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
        background-color: transparent !important;
      }

      &.slick-active {
        background-color: #fff !important;
        border-radius: 50%;
      }
    }
  }

  @media ${device.mobileS} {
    .slick-dots {
      bottom: 10px;
      li {
        button {
          width: 12px;
          height: 12px;
        }
        button:before {
          border: 1px solid ${p => p.theme.bg.dark};
        }
        &.slick-active {
          button:before {
            background-color: ${p => p.theme.bg.dark};
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    .slick-dots {
      bottom: -40px;
      li {
        button {
          width: 16px;
          height: 16px;
        }
        button:before {
          border: 1px solid #fff;
        }
        &.slick-active {
          button:before {
            background-color: #fff;
          }
        }
      }
    }
  }
  @media ${device.laptop} {
    .slick-dots {
      bottom: 0;
    }
  }
`;

export const SlideImage = styled.div`
  background-image: url(${props => props.img_src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media ${device.mobileS} {
    width: 100vw;
    height: 30vh;
  }

  @media ${device.mobileL} {
    width: 100vw;
    height: 40vh;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 360px;
  }
  @media ${device.laptop} {
    height: 460px;
  }
`;
