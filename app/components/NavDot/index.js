/**
 *
 * NavDot
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomDot = styled.div`
	width: 20px;
	height: 20px;
	color: white;
	border: 1px white solid;
	border-radius: 10px;
	
	li {
		margin: 0px 20px !important;
	}

	&:hover {
		background-color: white;
		margin: 0px auto;
	}
`

const handleClick = () => {
    document.getElementById('nav_dot').set("class", "activeDot");
}

function NavDot() {
  return (
    <CustomDot id="nav_dot" onClick={handleClick}></CustomDot>
  );
}

NavDot.propTypes = {};

export default memo(NavDot);
