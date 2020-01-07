import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import {
  injectStripe,
  CardCVCElement,
  CardNumberElement,
  CardExpiryElement,
  Elements,
} from 'react-stripe-elements';

import { Block, Btn, InputsRow, Input, CardForm } from './styles';

const createOptions = (fontSize, padding) => ({
  style: {
    base: {
      fontSize,
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
      padding,
      borderBottom: '1px solid rgb(112, 112, 112)',
    },
    invalid: {
      color: '#9e2146',
    },
  },
});

const AddCardForm = ({ buttonText, handleClick, stripe }) => {
  const [elementFontSize, setElementFontSize] = useState(
    window.innerWidth < 450 ? '14px' : '18px',
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && elementFontSize !== '14px') {
        setElementFontSize('14px');
      } else if (window.innerWidth >= 450 && elementFontSize !== '18px') {
        setElementFontSize('18px');
      }
    });

    return () => {};
  });

  const [ownerName, setOwnerName] = useState('');
  const [zipCode, setZipCode] = useState('');

  const onSubmit = (e, handleClick) => {
    handleClick("MY PAYMENT INFO");
    e.preventDefault();
    if (ownerName === '' || zipCode === '') {
      return;
    }
    if (stripe) {
      stripe.createToken({ ownerName, zipCode }).then(payload => {
        if (payload.error) {
          alert(payload.error.message);
          return;
        }
        // call action to update redux
        console.log(payload);
      });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  return (
    <Block>
      <CardForm onSubmit={onSubmit}>
        <InputsRow>
          <Input
            placeholder="Name on card"
            value={ownerName}
            onChange={e => {
              setOwnerName(e.target.value);
            }}
            required
          />
        </InputsRow>
        <InputsRow>
          <label>
            Card number
            <CardNumberElement {...createOptions(elementFontSize)} />
          </label>
        </InputsRow>
        <InputsRow>
          <label>
            Expiration date
            <CardExpiryElement {...createOptions(elementFontSize)} />
          </label>
          <label>
            CVC
            <CardCVCElement {...createOptions(elementFontSize)} />
          </label>
        </InputsRow>
        <InputsRow>
          <div style={{ flexGrow: '1', marginRight: '20px' }}>
            <Input
              placeholder="billing zip code"
              value={zipCode}
              onChange={e => {
                setZipCode(e.target.value);
              }}
              required
              type="number"
            />
            <Form.Check
              checked
              type="radio"
              label="save this card for easier use in future"
            />
          </div>
          <Btn>{buttonText}</Btn>
        </InputsRow>
      </CardForm>
    </Block>
  );
};

AddCardForm.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
  stripe: PropTypes.object.isRequired,
};

const InjectedForm = injectStripe(AddCardForm);

const AddCard = props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
);

export default AddCard;
