/**
 *
 * BookingLink
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LinkStyle = styled.div`
	color: white;
`

function BookingLink({link, text}) {
  if (link.includes("http")){
  	return (
  		<LinkStyle>
  			<Redirect to={link}>
          {text} 
        </Redirect>
  		</LinkStyle>
  	)
  } else {
  	return (
  		<LinkStyle>
  			<Link to={link}> {text} </Link>
  		</LinkStyle>
  	)
  }
}

BookingLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

export default memo(BookingLink);
