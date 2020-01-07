import { addDuration, getFormattedTime } from 'utils/dateUtil';

export const lefNavItems = [
  { eventKey: 'select_services', label: 'Select service', defaultLink: true },
  { eventKey: 'date_time', label: 'Date/Time' },
  { eventKey: 'payment', label: 'Payment' },
  { eventKey: 'book', label: 'Book it' },];
export const availableCreditLabel = 'Available Credits';
export const availableCreditOption = [
  { text: 'You have 2 IV Drip credits available to use' },
];

export const cardsOnFile = [
  {
    user: 'John Doe',
    cardImg:
      'https://img.pngio.com/visa-inverted-payment-method-icon-png-visa-png-512_320.png',
    cardNumber: '4444 4444 4444 4444',
    expires: '12/21',
    isLast: true,
  },
  {
    user: 'John Doe',
    cardImg:
      'https://i.pinimg.com/originals/b4/aa/10/b4aa10d20a4ab9fc70881fb0b278194e.png',
    cardNumber: '5555 4444 5555 4444',
    expires: '10/25',
    isLast: false,
  },];
export const selectCreditLabel = 'Select a credit option';
export const selectCreditOption = [
  { text: 'Single IV | expiration | $60' },
  { text: '3 pack of IV | expiration | $300' },
  { text: '6 pack of IV | expiration | $600' },];

export const serviceBookedData = () => [
  {
    id: 0,
    name: 'Total',
    duration: '',
    date: '',
    amount: '',
    image:
      'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg',
  },];
export const prepareBookedData = ({
  selectedServiceItem: { id, name, duration, price},
  serviceAppointment: date,
  selectedAddon: addon,
  }) => {
  console.log("PREPARED BOOKING DATA", date, addon.name);
  const defaultBookedData =[];
  defaultBookedData.unshift({
    id: addon.id,
    name: addon.name, 
    duration: addon.duration, 
    date: addDuration({date, duration,format: 'LLLL'}), 
    amount: addon.price,
  });

  defaultBookedData.unshift({
    id,
    name,
    duration,
    date: getFormattedTime({date, format: 'LLLL'}),
    amount: price,
  });


 
  return defaultBookedData;};
