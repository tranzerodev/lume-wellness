/**
 *
 * VerticalDetail
 *
 */

import React, { memo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CMS_API_URL } from 'configs';

import Oval from './img/Oval.png';
import Oval2 from './img/Oval2.png';
import Oval3 from './img/Oval3.png';
import Oval4 from './img/Oval4.png';
import Oval5 from './img/Oval.png';

import {
  Block,
  Container,
  SliderWrap,
  DetailTitle,
  DetailImage,
  DetailDescription,
  DetailSlide,
  Title,
  Text,
} from './styles';

function VerticalDetail(props) {
  const detailItems = [
    {
      id: 0,
      image: Oval,
      title: 'SLIDE TITLE 1',
      description:
        'Lorem Ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh dolor sit.',
    },
    {
      id: 1,
      image: Oval2,
      title: 'SLIDE TITLE 2',
      description:
        'Lorem Ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh dolor sit.',
    },
    {
      id: 2,
      image: Oval3,
      title: 'SLIDE TITLE 3',
      description:
        'Lorem Ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh dolor sit.',
    },
    {
      id: 3,
      image: Oval4,
      title: 'SLIDE TITLE 4',
      description:
        'Lorem Ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh dolor sit.',
    },
    {
      id: 4,
      image: Oval,
      title: 'SLIDE TITLE 5',
      description:
        'Lorem Ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh dolor sit.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    afterChange: function (currentSlide) {
      const slidesLength = detailItems.length - 1;
      if (slidesLength === currentSlide) {
      }
    }
  };

  return (
    <Block id="VerticalDetail">
      <Container>
        <DetailTitle> {props.title} </DetailTitle>
        <SliderWrap {...settings}>
          {props.detailItems.map(item => (
            <div key={item.id}>
              <DetailSlide>
                <DetailImage image={CMS_API_URL + item.image.path} />
                <DetailDescription>
                  <Title> {item.title} </Title>
                  <Text> {item.description} </Text>
                </DetailDescription>
              </DetailSlide>
            </div>
          ))}
        </SliderWrap>
      </Container>
    </Block>
  );
};

VerticalDetail.propTypes = {
  title: PropTypes.string,
  detailItems: PropTypes.array,
  settings: PropTypes.object
};

export default memo(VerticalDetail);
