import React from 'react';
import styled from 'styled-components';
import { device } from 'device';

import Logo from './LUME_web-logo.png';
import MobileLogo from './LUME_web-logo3.jpg';

const ImgBlock = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.mobileS} {
    background-image: url(${MobileLogo});
    height: 35px;
    width: 70px;
  }

  @media ${device.tablet} {
    background-image: url(${Logo});
    height: 40px;
    width: 180px;
  }

  @media ${device.laptop} {
    background-image: url(${Logo});
    height: 40px;
    width: 200px;
  }
`;

export default function Brand() {
  return <ImgBlock className="LogoBrand" alt="Lume Wellness Logo" />;
}
