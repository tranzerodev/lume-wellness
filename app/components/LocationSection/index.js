/**
 *
 * LocationPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CMS_API_URL } from 'configs';

import MySpa from './img/Lume-location.jpg';

import {
  Title,
  Block,
  Container,
  Content,
  ImgBlock,
  Text,
  TextTitle,
  TextBlock,
} from './styles';

function LocationSection({ data }) {
  return (
    <Block>
      <Container>
        <Title> Our Location </Title>
        <Content>
          <ImgBlock bgImg={MySpa} />
          <Text>
            <TextTitle> LUME WELLNESS RIVER NORTH </TextTitle>
            <TextBlock>
              <p>{data.address}</p>

              <p>
                Phone: (312) 285-2004
                <br />
                Email: hello@lume-wellness.com
              </p>

              <p>
                HOURS <br />
                {data.business_hour} <br />
              </p>
            </TextBlock>
          </Text>
        </Content>
      </Container>
    </Block>
  );
}

LocationSection.propTypes = {};

export default LocationSection;
