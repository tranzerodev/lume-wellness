/**
 *
 * EmailForm
 *
 */

import React, { memo, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { CMS_API_URL, CMS_API_TOKEN, LAMBDA_API } from 'configs';

import 'react-toastify/dist/ReactToastify.css';

import { EmailInput, EmailButton, InputWrap } from './styles';

function EmailForm(props) {
  const baseUrl = 'https://fortworth.capital/';
  const [email, setEmail] = useState([]);

  function success_notify() {
    toast(`Successfully signing you up with email: ${email}`);
  }

  function try_again(error) {
    toast(error);
  }

  function submitEmail() {
    const payload = {
      "contact": {
        "email":email
      }
    }
    const result = axios
      .post(LAMBDA_API+'/targets',payload)
      .then(function (response) {
        const {code , msg} = response.data
        if (code === 200) {
          success_notify();
        }
        else
        {
          try_again(msg)
        }
        setEmail('');
      })
      .catch(function (error) {
        try_again(error);
      });
  }

  return (
    <InputWrap className="mb-3">
      <EmailInput
        placeholder="Enter your email"
        aria-label="Enter your email"
        aria-describedby="basic-addon2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputGroup.Append>
        <EmailButton variant="outline-secondary" onClick={submitEmail} background={props.background} color={props.color}>
          <span>></span>
        </EmailButton>
      </InputGroup.Append>
    </InputWrap>
  );
}

EmailForm.propTypes = {};

export default memo(EmailForm);
