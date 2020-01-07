/**
 *
 * ServiceExplanation
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ServiceTabs from './components/ServiceTabs';
import ServiceSlider from './components/ServiceSlider';

import { Container, Inner, Col } from './styles';

function ServiceExplanation(props){
  return (
    <Container>
      <Inner>
        <Col text>
          <ServiceTabs 
            title={props.title} 
            how_it_works={props.how_it_works}
            benifits={props.benifits}
          />
        </Col>
        <Col>
          <ServiceSlider images={props.gallery} />
        </Col>
      </Inner>
    </Container>
  );
}

ServiceExplanation.propTypes = {};

export default memo(ServiceExplanation);
