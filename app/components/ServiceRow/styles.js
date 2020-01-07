import styled, { css } from 'styled-components';
import { device } from 'device';

export const Wrap = styled.div``;

export const RowWrap = styled.div`
  padding-bottom: 80px;
  position: relative;
  @media (max-width: 576px) {
    padding-bottom: 0;
  }
`;

export const RowContainer = styled.div`
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  @media (max-width: 1280px) {
    padding: 0 10vw;
  }
  @media (max-width: 991px) {
    padding: 0 5vw;
  }
  @media (max-width: 576px) {
    padding: 0 7vw;
  }
`;

export const Image = styled.div`
  max-width: 635px;
  width: 100%;
  height: 635px;
  position: relative;
  z-index: 2;
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1450px) {
    width: calc(100% - 510px + 80px);
    max-width: none;
  }
  @media (max-width: 768px) {
    background-attachment: fixed;
  }
  @media (max-width: 576px) {
    max-width: none;
    width: 100vw;
    height: 420px;
    background-attachment: initial;
  }
`;
export const DesktopImage = styled.img`
  width: 60%;
`;
export const Text = styled.div`
  flex-shrink: 0;
  z-index: 3;
  display: flex;
  & > div {
    min-height: 100%;
  }
  @media (min-width: 577px) {
    max-width: 380px;
    min-height: inherit;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  @media (max-width: 576px) {
    margin-top: -70px;
    width: 100%;
  }
  @media (min-width: 1030px) {
    max-width: 50%;
  }
`;

export const Gif = styled.div`
  display: none;
  min-width: 225px;
  height: 220px;
  width: calc(100vw - 1060px - 1060px / 2 + 80px);
  position: absolute;
  bottom: -70px;
  z-index: 1;
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 577px) {
    display: block;
  }
  ${p =>
    p.isRightAlign
    ? css`
      @media (min-width: 768px) {
        left: 0;
      }
      @media (min-width: 1300px) {
        left: -100px
      }
      @media (min-width: 1900px) {
        left: calc(-100vw + 1060px + 1060px / 2 + 10px);
      }
    `
    : css`
        @media (min-width: 768px) {
          right: 0;
        }
        @media (min-width: 1300px) {
          right: -100px
        }
        @media (min-width: 1900px) {
          right: calc(-100vw + 1060px + 1060px / 2 + 10px);
        }
    `}
`;

export const Block = styled.div`
  @media (max-width: 576px) {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

export const RowInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${p =>
    p.isRightAlign
      ? css`
          justify-content: flex-end;
          ${Text} {
            left: 0;
            @media (min-width: 768px) {
              left: -48%;
              right: 0;
              margin: 0 auto;
            }
          }
        `
      : css`
          ${Text} {
            right: 0;
            @media (min-width: 768px) {
              left: 0;
              right: -48%;
              margin: auto;
            }
          }
        `}
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const WaveRow = styled.div`
  width: 100%;
  position: relative;
  height: 115px;
  margin: 20px 0;
  display: none;
  @media (min-width: 577px) {
    display: block;
  }
`;

export const WaveDivider = styled.div`
  background-image: url(${props => props.img_source});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 210px;
  height: 100%;
  position: absolute;
  ${p =>
    p.isRightAlign
      ? css`
          right: -2px;
          background-position: right center;
        `
      : css`
          left: -2px;
          background-position: left center;
        `}
`;
