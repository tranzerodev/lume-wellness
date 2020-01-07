import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedTime } from 'utils/dateUtil';

import { Button, Td } from './styles';

const TableBody = ({ timeSlots = [], handleServiceAppointment }) => {
  let initialVal = 9
  let date = new Date();
  let count = 0

  date.setHours(9, 0)
  let lengths = timeSlots.reduce(function (a, i, ii) {
    if (ii === 1) {
      return a
    };
    if (i.length > a.length) {
      return i
    }
    return a
  })
  let maxLen = lengths.length

  const renderData = (slot) => {
    count = 0;
    if (maxLen > 0) {
      return <React.Fragment>{slot.length === 0 ? <React.Fragment>
        {
          lengths.map((el, i) => {
            return <Td key={i}>{count < 2 ? <Button
              disabled={true}>{i === 0 ? date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) : generateDate(i)}
            </Button> : null}</Td>
          })
        }
      </React.Fragment> : <React.Fragment>
          {lengths.map((el, i) => (
            <Td key={i}>
              {slot[i] && !slot[i].static ? <Button
                disabled={slot[i].slotsAvailable ? false : true}
                onClick={() => {
                  handleServiceAppointment(slot[i].time);
                }}>
                {getFormattedTime({ date: slot[i].time })}
              </Button> : <Button
                disabled={true}>{i === 0 ? date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) : generateDate(i)}
                </Button>}
            </Td>
          ))}
        </React.Fragment>}</React.Fragment>
    }
  }

  const generateDate = (i) => {
    let value = i + initialVal
    console.log('vaue', value)
    if (value === 11 || value === 23) {
      count = count + 1
    }
    let date = new Date();
    date.setHours((value), 0)
    return date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
  }

  const rowElements = timeSlots.map((slot, i) => (
    <tr key={i}>
      {renderData(slot)}
    </tr>
  ));
  return <tbody>{rowElements}</tbody>;
}

TableBody.propTypes = {
  handleServiceAppointment: PropTypes.func,
  timeSlots: PropTypes.array,
};

export default TableBody;