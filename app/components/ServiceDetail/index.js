/**
 *
 * ServiceDetail
 *
 */

import React, { memo } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import {CMS_API_URL} from 'configs';

import Slider from 'react-slick';

import Ingredient1 from 'images/Ingredients/Ingredient1@3x.png';
import Ingredient2 from 'images/Ingredients/Ingredient2@3x.png';
import Ingredient3 from 'images/Ingredients/Ingredient3@3x.png';
import Ingredient4 from 'images/Ingredients/Ingredient4@3x.png';
import Ingredient5 from 'images/Ingredients/Ingredient5@3x.png';
import Ingredient6 from 'images/Ingredients/Ingredient6@3x.png';
import Ingredient7 from 'images/Ingredients/Ingredient7@3x.png';
import Ingredient8 from 'images/Ingredients/Ingredient8@3x.png';
import Ingredient from './components/Ingredient';

import {
  Block,
  Container,
  DetailTitle,
  DetailSubtitle,
  Content,
  Grid,
  SliderWrap,
} from './styles';

const info = [
  {
    image: Ingredient1,
    title: 'B12',
    description:
      'B12 and B complex help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.',
    keywords: 'Fish, Milk, Red Meat, Eggs',
  },
  {
    image: Ingredient2,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient3,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient4,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient5,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient6,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient7,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
  {
    image: Ingredient8,
    title: 'Common Ingredient',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    keywords: 'Keyword, Keyword, Keyword',
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  className: 'center',
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 8000,
};

const ServiceDetail = props => (
  <Block>
    <Container>
      <DetailTitle> {props.title}</DetailTitle>
      <DetailSubtitle> {props.subtitle} </DetailSubtitle>
      <Content>
        <MediaQuery query="(min-device-width: 960px)">
          <Grid>
            {props.ingredients.map((item, index) => (
              <Ingredient
                key={index}
                image={CMS_API_URL + item.image.path}
                title={item.title}
                description={item.description}
                keywords={item.keywords}
              />
            ))}
          </Grid>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 959px)">
          <SliderWrap>
            <Slider {...settings}>
              {props.ingredients.map((item, index) => (
                <div key={index} className="slide-inner">
                  <Ingredient
                    image={CMS_API_URL + item.image.path}
                    title={item.title}
                    description={item.description}
                    keywords={item.keywords}
                  />
                </div>
              ))}
            </Slider>
          </SliderWrap>
        </MediaQuery>
      </Content>
    </Container>
  </Block>
);

ServiceDetail.propTypes = {};

export default memo(ServiceDetail);
