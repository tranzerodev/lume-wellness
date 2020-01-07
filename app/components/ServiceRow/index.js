import React, { memo, useRef } from 'react';
import { animated } from 'react-spring';
import MediaQuery from 'react-responsive';

import PropTypes from 'prop-types';

import { getAssetsAPI } from 'utils';
import waveDivider from 'images/waveDivider.png';

import ServiceCard from '../ServiceCard';
import { useRowAnimate } from './hooks';

import {
  Block,
  RowWrap,
  RowContainer,
  RowInner,
  Image,
  Text,
  WaveRow,
  WaveDivider,
  Gif,
  DesktopImage
} from './styles';

const AnimatedImage = Image;
const AnimatedText = animated(Text);

const ServiceRow = ({
  index,
  isRightAlign,
  content: { image, gif, ...rest },
}) => {
  const refRow = useRef();

  const animateSettingsImage = useRowAnimate(refRow, index);
  const animateSettingsText = useRowAnimate(refRow, index, true);

  return (
    <Block ref={refRow}>
      <RowWrap>
        <RowContainer>
          <RowInner isRightAlign={isRightAlign}>
            <MediaQuery query="(min-device-width: 769px)">
              <DesktopImage src={getAssetsAPI(image.path)}/>
              {/* <AnimatedImage
                bgImg={getAssetsAPI(image.path)}
                style={{
                  transform: animateSettingsImage,
                }}
              /> */}
              <AnimatedText
                style={{
                  transform: animateSettingsText,
                }}
              >
                <ServiceCard content={rest} />
              </AnimatedText>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 768px)">
              <Image bgImg={getAssetsAPI(image.path)} />
              <Text>
                <ServiceCard content={rest} />
              </Text>
            </MediaQuery>
          </RowInner>
          <Gif
            bgImg={getAssetsAPI(gif.path)}
            isRightAlign={isRightAlign}
          />
        </RowContainer>
      </RowWrap>
      <WaveRow>
        <WaveDivider
          img_source={waveDivider}
          isRightAlign={isRightAlign}
        />
      </WaveRow>
    </Block>
  );
};

ServiceRow.propTypes = {
  index: PropTypes.number,
  isRightAlign: PropTypes.bool,
  content: PropTypes.object,
};

export default memo(ServiceRow);
