import React, {useEffect} from 'react';
import Authentication from 'components/Authentication';
import { useIdentityContext } from 'react-netlify-identity';
import { LAMBDA_API } from 'configs';
import axios from 'axios';
import moment from 'moment';

import {
  Title,
  Block,
  UserName,
  List,
  ListWrap,
  Header,
  Btn,
  SummaryBlock,
  PromoBlock,
  TotalBlock,
  PromoInputBlock,
  Input,
  PaymentSummary,
  ChoosePayment,
} from './styles';

import PaymentCard from '../Cards/PaymentCard';
import GiftCard from '../Cards/GiftCard';
import CardOnFile from '../Cards/CardOnFile';
import AddCard from '../Cards/AddCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SummaryItemSmall from '../SummaryItemSmall';

const Payment = ({
  availableCreditLabel,
  availableCreditOption,
  selectCreditLabel,
  selectCreditOption,
  setActiveKey,
  bookedData,
  cardsOnFile,
}) => {
  const [isAuthenticated, setAuthentication] = React.useState(true); // false
  const [payment, setPayment] = React.useState(null); // false
  const {loginUser, signupUser, logoutUser, user } = useIdentityContext();

  async function tryBooking(){
    const serviceData = bookedData[0];
    const addonData = bookedData[1];
    const userData = user;
    const serviceDate = moment(serviceData.date).format();

    const servicePayload = {
      "datetime": serviceDate,
      "appointmentTypeID": serviceData.id,
      "firstName": userData.user_metadata.firstName,
      "lastName": userData.user_metadata.lastName,
      "email": userData.email
    };    

    console.log("Attempting the Booking with data", servicePayload);
    const serviceBooking = await axios.post(`${LAMBDA_API}/booking`, servicePayload); 

    console.log("Sending Booking data", serviceBooking);
  }

  const success_notify = (msg) => {
    toast(msg);
  }

  const bookApp = async(paymentInfo) => {
    console.log(paymentInfo);
    let payload = {
      ...bookedData[0],
      firstName: user.user_metadata.firstName,
      lastName: user.user_metadata.lastName,
      email: user.email
    }
    console.log('booked data', bookedData[0])
    const response = await axios.post(`${LAMBDA_API}/booking`, JSON.stringify(payload))
    console.log('resssssssssss', response)
    const { code, msg } = response.data
    if (code === 200)
    {
      setActiveKey('book');
    }
    else
    {
      console.log(msg)
      success_notify(msg);
    }
  }

  return (
    <>
      <ToastContainer/>
      {isAuthenticated ? (
        <Block>
          <UserName>
            Hi, {user.user_metadata.firstName}  {user.user_metadata.lastName} 
          </UserName>
          <SummaryBlock>
            <Header>
              <Title>Booking Summary</Title>
              <Btn>Edit</Btn>
            </Header>
            {
              bookedData.map(
                item => (
                <SummaryItemSmall {...item} key={item.id} />
                )
              )
            }
          </SummaryBlock>

          {payment ? (
            <>
              <PromoBlock>
                <PromoInputBlock>
                  <label>Promo code:</label>
                  <Input />
                  <Btn>Enter</Btn>
                </PromoInputBlock>
                <TotalBlock>
                  <table>
                    <tbody>
                      <tr>
                        <td>Taxes:</td>
                        <td>$56</td>
                      </tr>
                      <tr>
                        <td>Total:</td>
                        <td>$56</td>
                      </tr>
                    </tbody>
                  </table>
                </TotalBlock>
              </PromoBlock>

              <PaymentSummary>
                <label className="pmt-heading">Payment Summary</label>

                <List>
                  {cardsOnFile.slice(0, 1).map((item, i) => (
                    <CardOnFile
                      key={i}
                      {...item}
                      buttonText="book"
                      handleClick={(payment_info) => {
                        setActiveKey('book');
                        bookApp("May Payment Info");
                      }}
                    />
                  ))}
                </List>
              </PaymentSummary>
            </>
          ) : (
            <ChoosePayment>
              <Header>
                <Title>How would you like to pay?</Title>
              </Header>

              <ListWrap>
                <label className="pmt-heading">{availableCreditLabel}</label>
                <List>
                  {availableCreditOption.map((item, i) => (
                    <PaymentCard
                      key={i}
                      {...item}
                      buttonText="use"
                      handleClick={() => {
                        setPayment(true);
                        //setActiveKey('book');
                      }}
                    />
                  ))}
                </List>
              </ListWrap>
              <ListWrap className="border">
                <label className="pmt-heading">{selectCreditLabel}</label>
                <List>
                  {selectCreditOption.map((item, i) => (
                    <PaymentCard
                      key={i}
                      {...item}
                      buttonText="select"
                      handleClick={() => {
                        //setActiveKey('book');
                        setPayment(true);
                      }}
                    />
                  ))}
                </List>
              </ListWrap>
              <ListWrap>
                <label className="pmt-heading">Use a Gift Card</label>
                <GiftCard
                  buttonText="use"
                  handleClick={() => {
                    //setActiveKey('book');
                    setPayment(true);
                  }}
                />
              </ListWrap>

              <ListWrap>
                <label className="pmt-heading">Card on file</label>

                <List>
                  {cardsOnFile.map((item, i) => (
                    <CardOnFile
                      key={i}
                      {...item}
                      buttonText="use"
                      handleClick={() => {
                        setPayment(true);
                        // tryBooking();
                        // setActiveKey('book');
                      }}
                    />
                  ))}
                </List>
              </ListWrap>
              <ListWrap>
                <label className="pmt-heading">Add Card</label>

                <AddCard
                  buttonText="use"
                  handleClick={() => {
                    setPayment(true);
                    // setActiveKey('book');
                  }}
                />
              </ListWrap>
            </ChoosePayment>
          )}
        </Block>
      ) : (
        <Authentication setAuthentication={setAuthentication} />
      )}
    </>
  );
};

export default Payment;
