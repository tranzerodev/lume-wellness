/**
 *
 * TestimonialsSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';

import {
  Testimonial,
  TestimonialText,
  TestimonialGuest,
  TestimonialIcon,
  TestimonialContainer,
} from './styles';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
};

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  async function getTestimonials() {
    const res = await axios.get(
      `${CMS_API_URL}api/collections/get/testimonials?token=${CMS_API_TOKEN}`,
    );
    setTestimonials(res.data.entries);
  }

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <TestimonialContainer>
      <Slider {...settings}>
        {testimonials.map(item => (
          <a key={item.id} href={item.link}>
            <Testimonial>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <TestimonialText> {item.content} </TestimonialText>
              <FontAwesomeIcon icon={faQuoteRight} />
              <TestimonialIcon bgImg={CMS_API_URL + item.icon.path} />
              <TestimonialGuest>
                  {item.name}
              </TestimonialGuest>
            </Testimonial>
          </a>
        ))}
      </Slider>
    </TestimonialContainer>
  );
};

TestimonialsSection.propTypes = {};

export default memo(TestimonialsSection);
