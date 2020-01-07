import React from 'react';
import styled from 'styled-components';

const AvailableTimeBox = styled.button`
  border: 1px solid black;
  height: 50px;
  width: 100%;
  font-size: 21px;
  color: black;
  baclground-color: yellow;
  text-align: center;
  padding: 10px 0px;
  margin: 10px auto;
  cursor: pointer;
`;

const BookedTimeBox = styled.div`
  border: 1px solid rgb(192, 192, 192, 0.3);
  height: 50px;
  width: 100%;
  font-size: 21px;
  color: rgb(192, 192, 192, 0.3);
  opacity: 60%;
  text-align: center;
  padding: 10px 0px;
  margin: 10px auto;
`;

export default function TimeSelector({
  status = 'available',
  time = 'sometime',
}) {
  if (status == 'available') {
    return <AvailableTimeBox>{time}</AvailableTimeBox>;
  }
  return <BookedTimeBox>{time}</BookedTimeBox>;
}
