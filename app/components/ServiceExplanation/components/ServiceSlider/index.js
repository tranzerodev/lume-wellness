import PropTypes from 'prop-types';
import React, { memo, useState, useEffect } from 'react';
import { SliderContainer, SliderWrap, SlideImage } from './styles';
import { CMS_API_URL } from 'configs';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
};

function ServiceSlider(props){
  return(
    <SliderContainer>
      <SliderWrap {...settings}>
        {
          props.images && props.images.map(item => (
              <SlideImage img_src={ CMS_API_URL + item.path} />
            )
          )
        }
      </SliderWrap>
    </SliderContainer>
  );
}

export default ServiceSlider;
