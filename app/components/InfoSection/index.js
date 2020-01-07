import React from 'react';
import PropTypes from 'prop-types';

import { getAssetsAPI } from 'utils';

import {
  Block,
  Title,
  Content,
  Item,
  IconWrap,
  Icon,
  ItemTitle,
  Text,
} from './styles';

const InfoSection = ({ blockTitle, data }) => (
  <Block>
    {blockTitle && <Title> {blockTitle} </Title>}

    <Content>
      {data.map(({ icon, title, description, _id }) => (
        <Item key={_id}>
          <IconWrap>
            <Icon icon={icon.path && getAssetsAPI(icon.path)} />
          </IconWrap>
          <ItemTitle>{title}</ItemTitle>
          <Text>{description}</Text>
        </Item>
      ))}
    </Content>
  </Block>
);

InfoSection.propTypes = {};

export default InfoSection;
