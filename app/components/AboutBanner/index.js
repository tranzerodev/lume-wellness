import React from 'react';
import PropTypes from 'prop-types';
import { CMS_API_URL,CMS_API_TOKEN} from 'configs';

import {
  Block,
  Container,
  Content,
  TextBlock,
  ImgsBlock,
  Title,
  Text,
  Img,
} from './styles';

const AboutBanner = ({ data, bannerInfo }) => (
  <Block>
    <Container>
      <Content>
        <TextBlock>
          <Title>{bannerInfo.title}</Title>
          <Text>{bannerInfo.description}</Text>
        </TextBlock>
        <ImgsBlock>
          <Img bgImg={data.bigImg} big />
          <Img bgImg={data.smallImg} />
        </ImgsBlock>
      </Content>
    </Container>
  </Block>
);

AboutBanner.propTypes = {};

export default AboutBanner;
