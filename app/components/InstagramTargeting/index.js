/**
 *
 * InstagramTargeting
 *
 */


import messages from './messages';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Container, CallToAction, Description } from './styles';
import styled from 'styled-components';


import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import EmailForm from 'components/EmailForm';

function InstagramTargeting() {
  return (
    <Container>
    	<Row>
    		<CallToAction md={{span: '8', offset: '2'}} sm={{span: '10', offset: '1'}} xs={{span: '10', offset: '1'}}>
    			Booking is coming soon !
    		</CallToAction>
    		<Description md={{span: '4', offset: '4'}} sm={{span: '10', offset: '1'}} xs={{span: '10', offset: '1'}}>
    			Be the first to know when we are
                open for bookings...
    		</Description>
    	</Row>

    	<Row>
    		<Col md={{span: '4', offset: '4'}} sm={{span: '8', offset: '2'}} xs={{span: '8', offset: '2'}}>
    			<EmailForm background="#E7DDD2" color="#364650" />
    		</Col>
    	</Row>
    </Container>
  );
}

InstagramTargeting.propTypes = {};

export default memo(InstagramTargeting);
