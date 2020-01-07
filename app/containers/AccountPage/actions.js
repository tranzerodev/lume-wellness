import  * as constants from './constants';

// Create New User
export const createNewUser = () => ({
	type: constants.CREATE_NEW_USER_REQUEST,
});

export const newUserCreated = payload => ({
	type: constants.CREATE_NEW_USER_SUCCESS,
	payload,
}); 

// Load User Information
export const loadAllUserInfo = email => ({
	type: constants.LOAD_USER_INFO_REQUEST,
	email,
});

export const allUserInfoLoaded = payload => ({
	type: constants.LOAD_USER_INFO_SUCCESS,
	payload,
});

// Update User Information
export const updateAllUserInfo = () => ({
	type: constants.UPDATE_USER_INFO_REQUEST,
});

export const userInfoUpdated = payload => ({
	type: constants.UPDATE_USER_INFO_SUCCESS,
	payload,
});


// Add New Credit Card
export const addNewCreditCard = () => ({
	type: constants.ADD_NEW_CREDIT_CARD_REQUEST, 
});

export const newCreditCardAdded = payload => ({
	type: constants.ADD_NEW_CREDIT_CARD_SUCCESS,
	payload,
});


// Delete Credit Card
export const deleteCreditCard = () => ({
	type: constants.DELETE_CREDIT_CARD_REQUEST,
});

export const creditCardDeleted = payload => ({
	type: constants.DELETE_CREDIT_CARD_SUCCESS,
	payload,
});


// Load Credit Cards
export const loadAllCreditCards = customer_id => ({
	type: constants.LOAD_CREDIT_CARDS_REQUEST,
	customer_id,
});

export const allCreditCardsLoaded = payload => ({
	type: constants.LOAD_CREDIT_CARDS_SUCCESS,
	payload,
});


// Appointments
export const loadAllAppointments = email => ({
	type: constants.LOAD_APPOINTMENTS_REQUEST,	
	email,
});

export const allAppointmentsLoaded = payload => ({
	type: constants.LOAD_APPOINTMENTS_SUCCESS,
	payload,
});