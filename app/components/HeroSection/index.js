/**
 *
 * HeroSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import scrollToComponent from 'react-scroll-to-component';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';

import LayerOne from 'images/hero_banner.png';

import {
  Block,
  HeroLeftImage,
  HeroDescription,
  HeroButton,
  Title,
  Subtitle,
} from './styles';

const HeroSection = ({ scrollToEl }) => {
  const [hero, setHero] = useState({});

  async function getHero() {
    const res = await axios.get(
      CMS_API_URL+'api/singletons/get/hero_section?token='+CMS_API_TOKEN,
    );
    setHero(res.data);
  }

  const scrollTo = () => {
    scrollToComponent(scrollToEl.current, {
      offset: 0,
      align: 'center',
      duration: 1500,
    });
  };

  useEffect(() => {
    getHero();
  }, []);

  return (
    <Block img_source={LayerOne}>
      <HeroLeftImage img_source={LayerOne} />
      <HeroDescription>
        <Title>{hero.title}</Title>
        <HeroButton content="explore services" onClick={scrollTo} />
        <Subtitle>{hero.subtitle}</Subtitle>
      </HeroDescription>
    </Block>
  );
};

HeroSection.propTypes = {
  scrollToEl: PropTypes.object,
};

export default memo(HeroSection);
