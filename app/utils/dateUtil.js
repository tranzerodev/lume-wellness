import moment from 'moment';
import axios from 'axios';

export const days = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export const getFormattedTime = ({ date = new Date(), format = 'h:mma' }) => moment(date).format(format);
export const getValueTime = ({ date = new Date(), format = 'MMMM Do YYYY, h:mm a' }) => moment(date).format(format);
export const addDuration = ({ date = new Date(), duration, format = 'MMMM Do YYYY, h:mm a' }) => moment(date).add(duration, 'minutes').format(format);

export const getWeekOf = (data = {}, direction) => {
  let startOfWeek = moment(data).startOf('isoWeek');

  if (direction === 'next') {
    startOfWeek = moment(data)
      .add(1, 'weeks')
      .startOf('isoWeek');
  } else if (direction === 'prev') {
    startOfWeek = moment(data)
      .subtract(1, 'weeks')
      .startOf('isoWeek');
  }

  return getFormattedTime({ date: startOfWeek.toDate(), format: 'M/D/YYYY' });
};

export const getCurrentWeekDateSlotArray = (selectedServiceItem) => {
  // const availSlot = askAcuityForAvailability(selectedServiceItem);

  const startOfWeek = moment().startOf('isoWeek');
  const weekDateSlotArray = [];
  const day = startOfWeek;
  let slotsArray = [];
  let slot = '';
  let dayCount = 0;
  let date = '';
  while (dayCount < 7) {
    let i = 0;
    slot = day.clone().add(dayCount + 7, 'hours');
    slot = slot.clone().add(dayCount, 'd');
    while (i < 7) {
      // slot = slot.clone().add(1, 'd');
      date = day.clone().add(i + 7, 'hours');
      slotsArray.push(
        {
          time: date.toDate(),
          slotsAvailable: i % 2 === 0,
          static: true
        }
      );
      //slot = slot.clone().add(1, 'd');
      ++i;
    }
    weekDateSlotArray.push(slotsArray);
    // slot = '';
    slotsArray = [];
    ++dayCount;
  }
  return weekDateSlotArray;
};

async function askAcuityForAvailability(selectedServiceItem) {
  const baseUrl = 'http://localhost:9000';
  const data = await axios.get(
    `${baseUrl}/availability`,
    {
      "date": "2019-10-05",
      "appointmentTypeID": "11179778",
      "calendarID": "3198931"
    }
  );
  return data
}
