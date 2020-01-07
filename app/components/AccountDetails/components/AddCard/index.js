import { Block, Btn, InputsRow, Input, CardForm, Zip, Label, CardLabel} from './styles';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  injectStripe,
  CardCVCElement,
  CardNumberElement,
  CardExpiryElement,
  Elements,
} from 'react-stripe-elements';

const cardOptions = (fontSize, padding) => ({
  iconStyle: 'solid',
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

const otherOptions = (fontSize, padding) => ({
  iconStyle: 'solid',
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

const AddCardForm = ({ buttonText, addCard, stripe, user}) => {
  const [card, setCard] = useState({ user: '', zip: '' });
  const [elementFontSize, setElementFontSize] = useState(
    window.innerWidth < 450 ? '14px' : '18px',
  );

  const handleClick = (event, type) => {
    console.log(event.target.value);
    const newObj = {...card, [type]: event.target.value };
    setCard(newObj);
  };

  const addNewCard = (e, addCard) => {
    e.preventDefault();
    if (card.user === '' || card.zip === '') {
      alert("Please add User, Zip");
    }
    if (stripe) {
      stripe.createToken({ card }).then(payload => {
        if (payload.error) {
          alert(payload.error.message);
          return;
        }
        console.log("STRIPE",payload);
      });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  useEffect(() => {
    console.log(
      "Loading User Infor inside Payment Profile",user
    );
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && elementFontSize !== '14px') {
        setElementFontSize('14px');
      } else if (window.innerWidth >= 450 && elementFontSize !== '18px') {
        setElementFontSize('18px');
      }
    });
    return () => {};
  });

  return (
    <Block>
      <CardForm
        onSubmit={e => {
             e.preventDefault();
             addNewCard(e, addCard);
             setCard({ user: '', cardNumber: '', expires: '', cvc: '', zip: '' });
        }}
      >
        <Label> Add New Card </Label>

        <InputsRow>
          <Input required name="user" placeholder="NAME ON CARD" value={card.user} onChange={e => handleClick(e, 'user')} />
        </InputsRow>

        {/* 
          <Input name="cardNumber" placeholder="Card number" value={card.cardNumber} onChange={e => handleClick(e, 'cardNumber')} />
          <Input name="expires" placeholder="exp" value={card.expires} onChange={e => handleClick(e, 'expires')}/>
          <Input name="cvc" placeholder="cvc" value={card.cvc} onChange={e => handleClick(e, 'cvc')}/>
        */}
        <InputsRow>
          <CardLabel width="50%" value={card.cardNumber}>
            <CardNumberElement {...cardOptions(elementFontSize)} />
          </CardLabel>
          <CardLabel width="25%">
            <CardExpiryElement {...otherOptions(elementFontSize)} />  
          </CardLabel>
          <CardLabel width="25%">
            <CardCVCElement {...otherOptions(elementFontSize)} /> 
          </CardLabel>
        </InputsRow>
        <InputsRow>
          <Zip>
            <Input name="zip" placeholder="BILLING ZIP CODE" value={card.zip} onChange={e => handleClick(e, 'zip')}/>
          </Zip>
          <Btn>{buttonText}</Btn>
        </InputsRow>
      </CardForm>
    </Block>
  )
};

AddCardForm.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
  stripe: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const InjectedForm = injectStripe(AddCardForm);

const AddCard = props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
);

export default AddCard;
