/**
 *
 * SectionContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row} from 'react-bootstrap';
import {device} from 'device';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ResponsiveContainer = styled(Row)`
	background-color: ${props => props.color};
	height: ${props => props.height };
	width: 100%;
	margin: 0px;
`

function SectionContainer(props) {
  return (
    <ResponsiveContainer color={props.color} height={props.height} />
  );
}

SectionContainer.propTypes = {};

export default SectionContainer;
