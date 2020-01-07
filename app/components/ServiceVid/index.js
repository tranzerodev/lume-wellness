/**
 *
 * ServiceVid
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const VideoContainer = styled.div`
	width: 300px;
	height: 300px;
	z-index: 0;
	background-image: url(${props => props.vidSource});
	background-repeat: no-repeat;
	background-position: center-center;
  background-size: cover;
  background-color: blue;

  @media (max-width: 350px){
    display: none;
  }
`
function ServiceVid(props) {
  return (
    <VideoContainer vidSource={props.vidSource}/>
  );
}

ServiceVid.propTypes = {};

export default memo(ServiceVid);
