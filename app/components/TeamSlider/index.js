/**
 *
 * TeamSlider
 *
 */

import React, { memo, Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import axios from 'axios';
import RightArrow from './RightArrow.png';
import LeftArrow from './LeftArrow.png';
import {CMS_API_URL, CMS_API_TOKEN} from 'configs';
import {
  Wrap,
  MemberCard,
  MemberImage,
  MemberTitle,
  MemberDescription,
} from './styles';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', backgroundImage: RightArrow }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', backgroundImage: LeftArrow }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '200px',
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TeamSlider = () => {
  const [teams, setTeam] = useState([]);

  async function getTeams() {
    const res = await axios.get(
      `${CMS_API_URL}api/collections/get/team_gallery?token=${CMS_API_TOKEN}`,
    );
    console.log(res.data.entries);
    setTeam(res.data.entries);
  }

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <Wrap>
      <Slider {...settings}>
        {teams.map(item => (
          <div key={item.id}>
            <MemberCard>
              <MemberImage bgImg={CMS_API_URL + item.image.path} />
              <MemberTitle> {item.name} </MemberTitle>
              <MemberDescription>{item.description}</MemberDescription>
            </MemberCard>
          </div>
        ))}
      </Slider>
    </Wrap>
  );
};

TeamSlider.propTypes = {};

export default memo(TeamSlider);
