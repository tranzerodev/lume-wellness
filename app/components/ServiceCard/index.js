import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAssetsAPI } from 'utils';
import { bookingLink } from 'constants/routing';

import {
  Card,
  CardTop,
  CardTitle,
  CardIcon,
  CardMain,
  CardButton,
  CardFooter,
} from './styles';

const ServiceCard = ({
  content: { title, icon, link, booking, description },
}) => (
  <Card>
    <CardTop>
      <CardTitle>{title}</CardTitle>
      <CardIcon>
        <img src={getAssetsAPI(icon.path)} alt="icon" />
      </CardIcon>
    </CardTop>
    <CardMain>{description}</CardMain>
    <CardFooter>
      <CardButton>
        <Link to={link}>Learn</Link>
      </CardButton>
      <CardButton>
        <a href={booking}>Book</a>
      </CardButton>
    </CardFooter>
  </Card>
);

ServiceCard.propTypes = {
  content: PropTypes.object,
};

export default memo(ServiceCard);
