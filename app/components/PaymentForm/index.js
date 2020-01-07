import React, { Component, useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Col, Row, Form } from 'react-bootstrap';
import nextId from 'react-id-generator';
import { LAMBDA_API } from 'configs';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

const ServiceSelector = styled.select`
  border: 1px solid blue;
  border-radius: 0px !important;
  padding: 5px;
  width: 250px !important;
  margin: 0px;
  min-height: 40px !important;
  width: 100px;
`;

const Time = styled(DatePicker)`
  border: 1px solid blue;
  padding: 5px;
  margin: 10px 0px;
  min-height: 40px;
  width: 250px;
`;

const CardForm = styled(CardElement)`
  border: 1px solid blue;
  padding: 10px;
  margin: 10px 0px;
  min-height: 40px;
`;

const baseUrl = LAMBDA_API;

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,
      selectedService: {
        name: 'IV Drips', id: "iv_drips", price: 100
      },
      appointmentTime: new Date(),
      services: [ 
        {name: 'IV Drips', id: "iv_drips", price: 100,typeId: 11399119},
        {name: 'Infrared Sauna', id: "infra_sauna", price: 200,typeId: 11382872},
        {name: 'Cryotherapy', id: "cryo_therapy", price: 300, typeId: 11179800},
        {name: 'Massage', id: "massage", price: 400, typeId: 11399140},
        {name: 'Booster Shpt', id: "booster_shot", price: 500, typeId: 11382911}
      ],
      first_name: '',
      last_name: '',
      email: '',
      digit: ''
    };

    this.submit = this.submit.bind(this);
  }

  async submit(ev) {

    let {token} = await this.props.stripe.createToken({
      name: this.first_name + " " + this.last_name,
      email: this.email
    });

    let transactionId = nextId();

    const firstName = this.state.first_name;
    const lastName = this.state.last_name;
    const selectedService = this.state.selectedService;
    const appointmentTime = this.state.appointmentTime;
    const customerEmail = this.state.email;

    let paymentData = {
      "amount":this.state.selectedService.price,
      "source":token.id,
      "email":token.email,
      "description":this.state.selectedService.name,
      "idempotency_key": transactionId
    }

    // const bookApp = async() => {
    let payload = {
      "id": selectedService.typeId,
      "name":selectedService.name,
      "duration":45,
      "date": appointmentTime,
      "amount":selectedService.price,
      "firstName":firstName,
      "lastName":lastName,
      "email": customerEmail
    }

    await axios.post(`${LAMBDA_API}/purchase`, JSON.stringify(paymentData))
      .then(
        await axios.post(`${LAMBDA_API}/booking`, JSON.stringify(payload))
          .then((response) => {
           console.log("BOOKING", response.data);
           const Message = response.data.msg + selectedService.name  + "at "  + appointmentTime; 
           toast(Message);
          }
        )
      )
  }

  handleChange = date => {
    this.setState({
      appointmentTime: date
    })
  }

  handleService = e => {
    const myService = this.state.services.filter(service => service.id === e.target.value);
    console.log("Selected Service", e.target.value, myService[0]);
    this.setState({
      selectedService: myService[0]
    })
  }

  handleFirstName = e => {
    this.setState({
      first_name: e.target.value
    })
  }

  handleLastName = e => {
    this.setState({
      last_name: e.target.value
    })
  }

  handleEmail= e => {
    this.setState({
      email: e.target.value
    })
  }

  handleDigit = e => {
    this.setState({
      digit: e.target.value
    })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div>
        <Row>
          <Col md={{span: '2', offset: '10'}}>
            <ToastContainer/>
          </Col>
        </Row>
        <div className="checkout">
          <p>Would you like to complete the your Booking ??? </p>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Customer Name </Form.Label>
            <Row>
              <Col>
                <Form.Control
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleFirstName}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleLastName}
                />
              </Col>
            </Row>
            <Form.Label>Contact Info</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Cellphone Number"
                  value={this.state.digit}
                  onChange={this.handleDigit}
                />
              </Col>
            </Row>
            <Form.Label>Select Service</Form.Label>
            <br />
            <ServiceSelector
              as="select"
              value={this.state.selectedService.name}
              onChange={this.handleService}
            >
              {
                this.state.services.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))
              }
            </ServiceSelector>
          </Form.Group>

          <div>Pick a time</div>
          <Time
            selected={this.state.appointmentTime}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            value={this.state.appointmentTime}
          />

          <div>Enter payment information</div>
          <CardForm />

          <button onClick={this.submit}>Send</button>
        </div>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
