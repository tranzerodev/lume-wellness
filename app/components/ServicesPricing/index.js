/**
 *
 * ServicesPricing
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PriceItem from 'components/PriceItem';

const Container = styled.div`
	background-color: #FFFFFF;
	color:  #364650;
`

const color = "red"

function ServicesPricing(props) {
  console.log("Price Item", props.data);
  return (
    <Container>
      	{
      		props.data.map(item => (
      			<PriceItem key={item.id} data={item}/>
      		))
      	}
    </Container>
  );
}

ServicesPricing.propTypes = {};

export default memo(ServicesPricing);
