import React from 'react';
import PropTypes from 'prop-types';

import ServiceItem from '../ServiceItem';

import { Section, Title, ServiceListBlock, Item, Back } from './styles';

const ServiceList = ({
  serviceList,
  selectedService,
  handleSelectService,
  handleSelectServiceItem,
  setActiveKey,
}) => (
  <Section>
    <Title>Select a service</Title>
    {
      selectedService.length === 0 ? (
      <ServiceListBlock>
        {serviceList.map(({ name, id }) => (
          <Item key={id} onClick={() => handleSelectService(name)}>
            {name}
          </Item>
        ))}
      </ServiceListBlock>
    ) : (
      <>
        <Back onClick={() => handleSelectService('')}>back</Back>
        {selectedService.map(item => (
          <ServiceItem
            key={item.id}
            onClick={() => {
              handleSelectServiceItem(item.id);
              setActiveKey('date_time');
            }}
            {...item}
          />
        ))}
      </>
    )}
  </Section>
);

ServiceList.propTypes = {
  serviceList: PropTypes.array,
  selectedService: PropTypes.array,
  handleSelectService: PropTypes.func,
  handleSelectServiceItem: PropTypes.func,
  setActiveKey: PropTypes.func,
};

export default ServiceList;
