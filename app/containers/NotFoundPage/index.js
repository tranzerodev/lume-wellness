/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  margin: 0px;
  padding: 0px !important;
  font-family: calluna;
  font-weight: normal;
  font-style: normal;
`;

const NotFoundSection = styled(Row)`
  padding: 200px 10px;
  font-size: 42px;
  text-align: center;
`;

export default function NotFound() {
  return (
    <MainContainer fluid="true">
      <NotFoundSection>
        <Col md={{ span: 6, offset: 3 }}>Page Is Not Found</Col>
      </NotFoundSection>
    </MainContainer>
  );
}
