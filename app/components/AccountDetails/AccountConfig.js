import MyInfo from './components/MyInfo';
import AppointmentsList from './components/AppointmentsList';
import AvailableCredits from './components/AvailableCredits';
import MyWellness from './components/MyWellness';

export const getTabContentConfig = ({
	personalInfo,
  appointments,
	user,
	editInfo,
	cards,
	addCard,
	deleteCard,
	editPassword,
	password
}) => [
  {
  	MyComponent: MyInfo, 
  	eventKey: 'personal_info',
		props: {
			personalInfo,
			user,
			editInfo,
			cards,
			editPassword,
			password,
			addCard,
			deleteCard,},
  },
  {
  	MyComponent: AppointmentsList, 
  	eventKey: 'appointment_list',
  	props: {
      appointments,
    },
  },
  {
  	MyComponent: AvailableCredits, 
  	eventKey: 'available_credits',
  	props: {},
  },
  {
  	MyComponent: MyWellness, 
  	eventKey: 'my_wellness',
  	props: {},
  },
];