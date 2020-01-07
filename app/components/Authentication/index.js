/**
 *
 * Authentication
 *
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import PaymentForm from 'components/PaymentForm';
import { useIdentityContext } from 'react-netlify-identity';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import moment from 'moment';

import {
  LoginInput,
  ButtonLine,
  BlockTitle,
  InputWrap,
  BtnLink,
  BtnsWrap,
  ErrorMessage,
  Block,
  Btn,
  LoginForm,
  InputsRow,
  SignUpForm,
  TermsLink,
  TermsWrapper,
} from './styles';

const Authentication = ({ setAuthentication }) => {
  const [isLoginBlock, toggleAuthBlock] = useState(true);
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const { loginUser, signupUser, logoutUser, user } = useIdentityContext();

  const handleToggleClick = () => {
    toggleAuthBlock(!isLoginBlock);
    setMessage('');
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    setMessage('');

    const { email, password } = e.target;

    loginUser(email.value, password.value, true)
      .then(res => {
        setAuthentication(true); // will need some tweaks here as per api response
      })
      .catch(err => {
        setAuthentication(true); // will need some tweaks here as per api response
        setMessage(err.json.error_description || err.json.msg);
      });
  };

  const handleSubmitSignup = e => {
    e.preventDefault();
    setMessage('');

    const { email, password, firstName, lastName, birthday, phone, address, zip } = e.target;
    
    console.log(email.value, password.value, firstName.value, lastName.value, birthday.value, phone.value, address.value, zip.value);
    signupUser(email.value, password.value, {
      firstName: firstName.value,
      lastName: lastName.value,
      birthday: birthday.value,
      phone: phone.value,
      address: address.value,
      zip: zip.value
    })
      .then(() => {
        setMessage('Please, check, confirm your email and log in!');
      })
      .catch(err => {
        setMessage(err.json.error_description || err.json.msg);
      });
  };

  // if (user && user.token)
  //   return (
  //     <Block>
  //       <Btn onClick={logoutUser}> Logout </Btn>
  //       <PaymentForm />
  //     </Block>
  //   );
  // commented temporary to fix crash app.
   
  const calendar = (<Calendar showDateInput={false} />);
  return (
    <React.Fragment>
      {isLoginBlock ? (
        <LoginForm onSubmit={handleSubmitLogin}>
          <Block>
            {/* <BlockTitle tabName>Payment</BlockTitle> */}

            <BlockTitle>Login</BlockTitle>
            <InputWrap>
              <LoginInput type="email" name="email" placeholder="Email" />
              <LoginInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </InputWrap>
            <Btn> sign in </Btn>
          </Block>

          <Block>
            <BlockTitle>New to Lume ?</BlockTitle>
            <ButtonLine onClick={handleToggleClick}>
              Create an account
            </ButtonLine>

            {!!message && <ErrorMessage>{message}</ErrorMessage>}
          </Block>
        </LoginForm>
      ) : (
        <SignUpForm onSubmit={handleSubmitSignup}>
          <Block>
            {/* <BlockTitle tabName>Payment</BlockTitle> */}

            <BlockTitle>Hi, welcome to Lume.</BlockTitle>
            <BlockTitle>please fill out some general information</BlockTitle>
            <InputsRow>
              <Row>
                <Col md={6}>
                  <LoginInput
                    type="text"
                    name="firstName"
                    placeholder="First name"
                  />
                </Col>
                <Col md={6}>
                  <LoginInput
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                  />
                </Col>
              </Row>
            </InputsRow>
            <InputsRow className="mobile">
              <Row>
                <Col md={6}>
                  <DatePicker
                    animation="slide-up"
                    value={time}
                    disabled={false}
                    calendar={calendar}
                    onChange={newTime => setTime(newTime)}
                  >{
                      ({value}) => {
                          return (
                            <LoginInput
                              type="text"
                              name="birthday"
                              value={value ? value.format('MM/DD/YYYY') : ''}
                              placeholder="DOB 00/00/00" />
                          )
                      }
                  }</DatePicker>
                </Col>
                <Col md={6}>
                  <LoginInput
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                  />
                </Col>
              </Row>
            </InputsRow>
            <InputsRow className="mobile">
              <Row>
                <Col md={6}>
                  <LoginInput
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                </Col>
                <Col md={6}>
                  <LoginInput
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                  />
                </Col>
              </Row>
            </InputsRow>

            <InputsRow className="pt-3">
              <Row>
                <Col md={6}>
                  <LoginInput type="email" name="email" placeholder="email" />
                </Col>

                <Col md={6}>
                  <LoginInput
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </Col>
              </Row>
            </InputsRow>

            <InputsRow>
                <Form.Check checked name="keep" type="radio" label="Keep me up to date on Lume exclusive offers, events and happenings." />
            </InputsRow>

            <BtnsWrap>
              <Btn>CREATE ACCOUNT</Btn>
              {/* <BtnLink onClick={handleToggleClick}>Login</BtnLink> */}
            </BtnsWrap>
              
            <InputsRow>
                <TermsWrapper>
                  <Form.Check
                    checked
                    name="terms"
                    type="radio"
                    label="I agree with Lume"
                    feedback="You must agree before submitting."
                  />
                  <TermsLink>Terms</TermsLink>
                </TermsWrapper>  
            </InputsRow>
              
            {!!message && <ErrorMessage>{message}</ErrorMessage>}
          </Block>
        </SignUpForm>
      )}
    </React.Fragment>
  );
};

Authentication.propTypes = {};

export default Authentication;
