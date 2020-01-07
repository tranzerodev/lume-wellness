/**
 *
 * BookingPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BookingSection from 'components/BookingSection';
import queryString from 'query-string';
import axios from 'axios';
import makeSelectBookingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { data } from './MockData';
import { LAMBDA_API } from 'configs';
import {
  getWeekOf,
} from 'utils/dateUtil';

BookingPage.defaultProps = {
  serviceList: data,
};

export function BookingPage({ location, serviceList }) {
  useInjectReducer({ key: 'BookingPage', reducer });
  useInjectSaga({ key: 'BookingPage', saga });

  const baseUrl = LAMBDA_API;
  const params = queryString.parse(location.search);

  const [availabilities, setAvailabilities] = useState({});
  const [categories, setCategories] = useState({});
  const [services, setServices] = useState({});
  const [addons, setAddons] = useState([]);

  const [selectedAddon, setSelectedAddon] = useState({});
  const [selectedService, setSelectedService] = useState([]);
  const [selectedServiceItem, setSelectedServiceItem] = useState({});
  const [appointmentsData,setAppData] = useState([])
  
  const handleSelectAddon = id => {
    console.log("Filter among addons", addons, "for addon id", id);
    const [addonItem = {}] = addons.filter(item => item.id === parseInt(id));
    setSelectedAddon(addonItem);
  };

  const handleSelectService = name => {
    getServices(name);
  };

  const handleSelectServiceItem = id => {
    const [serviceItem = {}] = selectedService.filter(item => item.id === id);
    setSelectedServiceItem(serviceItem);
    getCalData(serviceItem,null);
  };

  const getNewWeek = (newWeek) => {
    getCalData(selectedServiceItem,newWeek);
  }

  const getCalData = async (serviceItem,newWeek) => {
    console.log('service item',serviceItem,'weeeeek',newWeek,'week',getWeekOf())
    const payload = {
      date: newWeek ? newWeek : getWeekOf(),
      appointmentTypeID: serviceItem.id,
      calendarId: serviceItem.calendarIDs[0]
    };
  
    const response = await axios.post(`${LAMBDA_API}/availability`,JSON.stringify(payload))
    console.log('response123123123123123123',response)
    setAppData(response.data.data)
  }

  const resetBooking = () => {
    console.log("Clearing out the Old, Make Space for the New");
    setSelectedServiceItem({});
    setSelectedService([]);
    setSelectedAddon({});
    setAppData([]);
  }
  
  async function getServices(category){
    if (!category){
      setSelectedService([]);
    } else {
      const data = await axios.post(`${baseUrl}/services`); 
      const selectedServices = data.data.filter(
        service => service.category === category
      )
      setSelectedService(selectedServices);
    }
  }

  async function getCategories() {
    const data = await axios.get(`${baseUrl}/services`);   
    const categories = new Set(
      data.data.map(service => service.category)
    ); 
    setCategories(categories);
  }

  async function getAddOns() {
    const data = await axios.get(`${baseUrl}/addons`);
    console.log("My Addons", data.data);
    console.log("CALLING API FROM", {baseUrl});

    setAddons(data.data);
  }

  useEffect(() => {
    getServices();
    getCategories();
    getAddOns();
  }, []);

  return (
    <>
      <Helmet>
        <title> Lume Wellness Booking Page </title>
        <meta name="description" content="Lume Wellness Client Account" />
      </Helmet>
      <BookingSection
        addons={addons}
        resetBooking={resetBooking}
        selectedAddon={selectedAddon}
        serviceList={serviceList}
        selectedService={selectedService}
        serviceItems={selectedService.serviceItems}
        selectedServiceItem={selectedServiceItem}
        handleSelectServiceItem={handleSelectServiceItem}
        handleSelectService={handleSelectService}
        handleSelectAddon={handleSelectAddon}
        services={services}
        appointmentsData={appointmentsData}
        getNewWeek={getNewWeek}
      />
    </>
  );
}

BookingPage.propTypes = {
  serviceList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  BookingPage: makeSelectBookingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BookingPage);
