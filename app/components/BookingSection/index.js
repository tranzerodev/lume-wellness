/**
 *
 * BookingSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tab, TabContainer } from 'react-bootstrap';

import {
  days,
  getCurrentWeekDateSlotArray,
  getWeekOf,
  getFormattedTime,
} from 'utils/dateUtil';

import '@fortawesome/fontawesome-free/css/all.min.css';

import {  
  lefNavItems,
  availableCreditLabel,
  availableCreditOption,
  selectCreditLabel,
  selectCreditOption,
  prepareBookedData,
  cardsOnFile,
} from './Data';

import { getTabContentConfig } from './BookingConfig';
import LeftNav from './components/LeftNav';
import { Block, BookingContainer, Inner, TabWrap } from './styles';

const TabContentPane = props => {
  const config = getTabContentConfig({ ...props });
  const tabElements = config.map(({ eventKey, MyComponent, props }, key) => (
    <Tab.Pane eventKey={eventKey} key={`${key}`}>
      <MyComponent {...props} />
    </Tab.Pane>
  ));
  return <Tab.Content>{tabElements}</Tab.Content>;
};

const BookingSection = ({
  serviceList,
  addons,
  selectedAddon,
  selectedService,
  resetBooking,
  selectedServiceItem,
  handleSelectService,
  handleSelectServiceItem, 
  handleSelectAddon,
  appointmentsData,
  getNewWeek
}) => {
  // for toggle tab
  const [activeKey, setActiveKey] = useState('select_services');
  
  // const [activeKey, setActiveKey] = useState('payment');
  const [serviceAppointment, setServiceAppointment] = useState(null);

  // for calendar
  const [currentWeek, changeCurrentWeek] = useState(getWeekOf());
  const [selectedDay, setSelectedDay] = useState(moment());
  const [availableTimeSlots, setAvailableTimeSlots] = useState(
    getCurrentWeekDateSlotArray(selectedServiceItem)
  );

  const handleChangeWeek = direction => {
    changeCurrentWeek(getWeekOf(currentWeek, direction));
    console.log('ashdjkasgdhjasgdjhasdg123123',getWeekOf(currentWeek, direction))
    getNewWeek(getWeekOf(currentWeek, direction));
  };

  const handleChangeDay = value => {
    setSelectedDay(value);
  };

  const handleServiceAppointment = value => {
    console.log({ value });
    setServiceAppointment(value);
  };

  const handleAddOn = value => {
    console.log('option', value);
    setActiveKey('payment');
  };

  useEffect(() => {
    console.log('change week, day - will get availableTimeSlots', {});
    return () => {};
  }, [currentWeek, selectedDay]);

  return (
    <Block>
      <BookingContainer>
        <Inner>
          <TabContainer
            id="booking-tab"
            defaultActiveKey={activeKey}
            activeKey={activeKey}
            onSelect={() => true}
          >
            <LeftNav setActiveKey={setActiveKey} activeKey={activeKey} data={lefNavItems} />
            <TabWrap>
              <TabContentPane
                addons={addons}
                serviceList={serviceList}
                handleSelectService={handleSelectService}
                resetBooking={resetBooking}
                selectedService={selectedService}
                selectedServiceItem={selectedServiceItem}
                selectedAddon={selectedAddon}
                setActiveKey={setActiveKey}
                handleSelectServiceItem={handleSelectServiceItem}
                //
                days={days}
                availableTimeSlots={availableTimeSlots}
                selectedDay={selectedDay}
                currentWeek={currentWeek}
                serviceAppointment={serviceAppointment}
                handleServiceAppointment={handleServiceAppointment}
                handleChangeWeek={handleChangeWeek}
                handleChangeDay={handleChangeDay}
                handleSelectAddon={handleSelectAddon}
                //
                cardsOnFile={cardsOnFile}
                availableCreditLabel={availableCreditLabel}
                availableCreditOption={availableCreditOption}
                selectCreditLabel={selectCreditLabel}
                selectCreditOption={selectCreditOption}
                bookedData={prepareBookedData({
                  selectedServiceItem,
                  selectedAddon,
                  serviceAppointment,
                  appointmentsData
                })}
                appointmentsData={appointmentsData}
              />
            </TabWrap>
          </TabContainer>
        </Inner>
      </BookingContainer>
    </Block>
  );
};

BookingSection.propTypes = {
  serviceList: PropTypes.array,
  selectedService: PropTypes.array,
  selectedServiceItem: PropTypes.object,
  selectedAddon: PropTypes.object,
  setSelectedAddon: PropTypes.func, 
  resetBooking: PropTypes.func, 
  handleSelectService: PropTypes.func,
  handleSelectServiceItem: PropTypes.func,
  handleSelectAddon: PropTypes.func,
};

export default memo(BookingSection);
