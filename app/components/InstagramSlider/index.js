/**
 *
 * InstagramSlider
 *
 */

import React, { memo, useState, useEffect } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Wrap, Block, Text, Img } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 655,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 345,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


function InstagramSlider() {
  //const baseUrl = "http://localhost:9000";
  const baseUrl = "https://thenorthstar.netlify.com/.netlify/functions";
  const [grams, setGrams] = useState([]);
  
  async function getGrams(){
    let res = await axios.get(baseUrl+'/instagram');
    setGrams(res.data)
  }

  useEffect(() => {
    getGrams();
  },[]);

  return (
    <Wrap>
      <Slider {...settings}>
        {grams.map(item => (
          <div key={item.id}>
            <Block href={item.link} target="_blank">
              <Img bgImg={item.link+'media/?size=l'} />
              <Text></Text>  
            </Block>
          </div>
        ))}
      </Slider>
    </Wrap>
  );
}

InstagramSlider.propTypes = {};

export default memo(InstagramSlider);
