/**
 *
 * AccountPage
 *
 */

import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import React, { memo, useState, useEffect} from 'react';

import saga from './saga';
import reducer from './reducer';
import { AuthenticationWrapper } from './styles';

import makeSelectAccountPage from './selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useIdentityContext } from 'react-netlify-identity';

import Authentication from 'components/Authentication';
import AccountDetails from 'components/AccountDetails';
import InstagramSection  from 'components/InstagramSection';
import EmailMarketingSection  from 'components/EmailMarketingSection';

import {
  loadAllUserInfo,
  loadAllAppointments,
  loadAllCreditCards, 
  addNewCreditCard,
} from './actions';

export function AccountPage({loadAllUserInfo, loadAllAppointments, loadAllCreditCards, addNewCreditCard, accountPage}) {
  useInjectReducer({ key: 'accountPage', reducer });
  useInjectSaga({ key: 'accountPage', saga });
  
  const [isAuthenticated, setAuthentication] = useState(false);
  const {loginUser, signupUser, logoutUser, user } = useIdentityContext();

  const checkStatus = () => {
    console.log("USER TOKEN Account Page", user.email, user.token);
  };

  const {
    userInfo = {},
    appointments = [],
    creditCards = [],
  } = accountPage;

  useEffect(() => {
    loadAllAppointments(user.email);
    loadAllUserInfo(user.email);
    loadAllCreditCards(user.payment_id);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Client Account</title>
        <meta name="description" content="Lume Wellness Client Account" />
      </Helmet>
      {  
        user == undefined ? 
        (
          <AuthenticationWrapper>
            <Authentication setAuthentication={setAuthentication} />
          </AuthenticationWrapper>
        ):(
          <AccountDetails 
            userInfo={userInfo} 
            appointments={appointments} 
            creditCards={creditCards}
            addCard={addNewCreditCard}
          />
        )
      }
      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

AccountPage.propTypes = {
  loadAllUserInfo: PropTypes.func,
  loadAllAppointments: PropTypes.func,
  loadAllCreditCards: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  accountPage: makeSelectAccountPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  {
    loadAllUserInfo, 
    loadAllAppointments, 
    loadAllCreditCards,
    addNewCreditCard
  },
);

export default compose(
  withConnect,
  memo,
)(AccountPage);
