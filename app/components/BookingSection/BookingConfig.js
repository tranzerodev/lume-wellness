import PaymentForm from 'components/PaymentForm';
import Authentication from 'components/Authentication';
import Payment from './components/Payment';
import CustomCalendar from './components/CustomCalendar';
import ServiceList from './components/ServiceList';
import BookingSummary from './components/BookingSummary';

export const getTabContentConfig = ({
  addons,
  serviceList,
  selectedService,
  selectedAddon,
  selectedServiceItem,
  handleSelectService,
  handleSelectServiceItem,
  setActiveKey,
  resetBooking, 
  days,
  availableTimeSlots,
  currentWeek,
  selectedDay,
  serviceAppointment,
  handleChangeWeek,
  handleChangeDay,
  handleServiceAppointment,
  handleSelectAddon,
  availableCreditLabel,
  availableCreditOption,
  selectCreditLabel,
  selectCreditOption,
  bookedData,
  cardsOnFile,
  appointmentsData
}) => [
  {
    MyComponent: ServiceList,
    eventKey: 'select_services',
    props: {
      serviceList,
      selectedService,
      handleSelectServiceItem,
      handleSelectService,
      setActiveKey,
    },
  },

  {
    MyComponent: CustomCalendar,
    eventKey: 'date_time',
    props: {
      days,
      addons,
      availableTimeSlots,
      currentWeek,
      selectedDay,      
      selectedServiceItem,
      selectedAddon,
      serviceAppointment,
      handleChangeWeek,
      handleChangeDay,
      handleServiceAppointment,
      handleSelectAddon,
      setActiveKey,
      appointmentsData
    },
  },

  {
    MyComponent: Payment,
    eventKey: 'payment',
    props: {
      setActiveKey,
      availableCreditLabel,
      availableCreditOption,
      selectCreditLabel,
      selectCreditOption,
      serviceAppointment,
      bookedData,
      cardsOnFile,
    },
  },

  {
    MyComponent: BookingSummary,
    eventKey: 'book',
    props: {
      bookedData,
      resetBooking, 
      setActiveKey,
    },
  },
];
