import React from 'react';
import MediaQuery from 'react-responsive';
import Calendar from 'rc-calendar';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css'

import { getWeekOf, getFormattedTime, getValueTime } from 'utils/dateUtil';

import CurrentWeek from './CurrentWeek';
import TableHead from './TableHead';
import TableBody from './TableBody';
import AddOn from '../AddOn';

import {
  Block,
  Title,
  TableWrap,
  Info,
  SelectedDay,
  TimeSlots,
  Item,
} from './styles';

const disabledDate = current => {
  if (!current) {
    return false;
  }

  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.valueOf() < date.valueOf();
};

const CustomCalendar = ({
  days,
  addons,
  availableTimeSlots,
  handleChangeWeek,
  handleChangeDay,
  selectedDay,
  serviceAppointment,
  handleServiceAppointment,
  handleSelectAddon,
  selectedServiceItem,
  selectedAddon,
  currentWeek,
  setActiveKey,
  appointmentsData
}) => {
  if (serviceAppointment) {
    return (
      <AddOn
        selectedServiceItem={selectedServiceItem}
        serviceAppointment={serviceAppointment}
        selectedAddon={selectedAddon}
        handleSelectAddon={handleSelectAddon}
        addons={addons}
        setActiveKey={setActiveKey}
      />
    );
  }

  return (
    <>
      {
        selectedServiceItem.name && (
          <Info>
            <span>You're booking</span>
            <strong>{selectedServiceItem.name}</strong>
          </Info>
        )
      }
      <Block>
        <Title>Select DAY/TIME</Title>
        <MediaQuery query="(min-device-width: 750px)">
          <CurrentWeek
            currentWeek={currentWeek}
            handleChangeWeek={handleChangeWeek}
            isAvailablePrev={currentWeek !== getWeekOf()}
          />

          <TableWrap>
            <table className="table-borderless customViewCss">
              <TableHead days={days} />
              <TableBody
                timeSlots={appointmentsData.length===0?availableTimeSlots:appointmentsData}
                handleServiceAppointment={handleServiceAppointment}
              />
            </table>
          </TableWrap>
          
        </MediaQuery>

        <MediaQuery query="(max-device-width: 749px)">
          <Calendar
            onChange={value => {
              handleChangeDay(value);
            }}
            disabledDate={disabledDate}
            showDateInput={false}
            value={selectedDay}
          />

          {selectedDay && (
            <>
              <SelectedDay>
                {getValueTime({
                  date: selectedDay.toDate(),
                  format: 'LL',
                })}
              </SelectedDay>
              <TimeSlots>
                {availableTimeSlots[0].map(({ time }, index) => (
                  <Item
                    onClick={() => {
                      handleServiceAppointment(time);
                    }}
                    key={index}
                  >
                    {getFormattedTime({ date: time })}
                  </Item>
                ))}
              </TimeSlots>
            </>
          )}
        </MediaQuery>
      </Block>
    </>
  );
};

CustomCalendar.propTypes = {
  addons: PropTypes.array,
  handleSelectAddon: PropTypes.func,
  days: PropTypes.arrayOf(PropTypes.string),
  availableTimeSlots: PropTypes.array,
  handleChangeWeek: PropTypes.func,
  setActiveKey: PropTypes.func,
  setServiceAppointment: PropTypes.func,
  selectedAddon: PropTypes.object,
  selectedServiceItem: PropTypes.object,
  currentWeek: PropTypes.string,
};

export default CustomCalendar;
