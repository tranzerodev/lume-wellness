/**
 *
 * Demo
 *
 */

import React, {Component} from 'react';
import styled from 'styled-components';
import {Elements, StripeProvider} from  'react-stripe-elements';
import PaymentForm from 'components/PaymentForm';
import {Col, Row, Form, Button } from 'react-bootstrap';

const Container = styled(Col)`
  border: 1px solid black;
  margin: 50px;
  padding: 20px;
`

class Demo extends Component {
  render() {
    return (
      <Row>
        <Container md={{span: 6, offset: 3}} sm={{span: 10, offset: 1}}> 
          <StripeProvider apiKey="pk_test_m3tVmGXmLg0cJ5KIhPS4mnTf00hwIkxBWG">
            <div className="example">
              <h1>Lume Booking Prototype</h1>
                <Elements>
                  <PaymentForm />
                </Elements>
            </div>
          </StripeProvider>
        </Container>
      </Row>
    );
  }
}

export default Demo;
 