import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFormattedTime } from 'utils/dateUtil';

import {
  Section,
  Block,
  Text,
  SelectedService,
  AddOnInput,
  AddOnButton,
  Title,
  TitleQ,
  AddOnSummary,
  InputContainer,
  Btns,
} from './styles';

const AddOn = ({ selectedServiceItem, serviceAppointment, addons, handleSelectAddon, setActiveKey }) => {
  const [select, setSelect] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    handleSelectAddon(select);
    setActiveKey('payment');
  };

  return (
    <Section>
      <Block>
        <Title>You're booking</Title>

        <SelectedService>
          <div>{selectedServiceItem.name}</div>
          <div>
            {getFormattedTime({ date: serviceAppointment, format: 'LLLL' })}
          </div>
        </SelectedService>

        <Text>
          Service notes go here Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>

        <AddOnSummary>
          SERVICE DURATION: {selectedServiceItem.duration} Minutes
        </AddOnSummary>
      </Block>

      <Block>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <TitleQ>Would you like to add anything to your visit ?</TitleQ>
            <AddOnInput
              name="addOnSelect"
              value={select}
              onChange={e => {
                setSelect(e.target.value);
              }}
            >
              { 
                addons.map(
                  item => (
                    <option value={item.id} key={item.id}>
                      {item.name}, {item.duration} mins, $ {item.price}
                    </option>
                  )
                )
              }
            </AddOnInput>
          </InputContainer>

          <Btns>
            <AddOnButton>
              Continue to payment
            </AddOnButton>
          </Btns>
        </form>
      </Block>
    </Section>
  );
};

AddOn.propTypes = {
  selectedServiceItem: PropTypes.object,
  serviceAppointment: PropTypes.object,
  handleSelectAddon: PropTypes.func,
  setActiveKey: PropTypes.func,
  addons: PropTypes.array,
};

export default AddOn;
