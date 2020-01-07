import React from 'react';
import SummaryItem from '../SummaryItem';

import {
  Block,
  UserName,
  Title,
  List,
  Btns,
  Button,
  ButtonLine,
} from './styles';

const BookingSummary = ({ bookedData = [], resetBooking,  setActiveKey }) => (
  <Block>
    <UserName>Hi, User Name!</UserName>
    <Title>You're Booked!</Title>
    <List>
      {bookedData.map((item, key) => (
        <SummaryItem {...item} key={key} />
      ))}
    </List>
    <Btns>
      <Button
       onClick={() => {
          resetBooking();
          setActiveKey('select_services');
       }}
      >
        book another treatment
      </Button>
      <ButtonLine
        onClick={() => {
          console.log('Rumor is spreading like wild-fire');
        }}
      >
        refer a friend
      </ButtonLine>
    </Btns>
  </Block>
);

export default BookingSummary;
