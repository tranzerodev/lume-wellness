/**
 *
 * AccountDetails
 *
 */

import React, { memo, useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { 
  Row, 
  Col, 
  TabContainer, 
  TabContent, 
  TabPane,
  Tab,
  Tabs,
  Sonnet, 
  Nav
} from 'react-bootstrap';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { Block, AccountContainer, Inner, TabWrap } from './styles';
import { leftNavItems, personalInfo } from './Data';
import LeftNav from './components/LeftNav';
import { getTabContentConfig } from './AccountConfig';

const TabContentPane = props => {
  const config = getTabContentConfig({ ...props });
  const tabElements = config.map(({ eventKey, MyComponent, props }, key) => (
    <Tab.Pane eventKey={eventKey} key={`${key}`}>
      <MyComponent {...props} />
    </Tab.Pane>
  ));
  return <Tab.Content>{tabElements}</Tab.Content>;
};

const AccountDetails = ({appointments, userInfo, creditCards, addCard}) => {
  const [activeKey, setActiveKey] = useState('personal_info');
  const [cards, setCards] = useState([]);
  const [password, setPassword] = useState([]);
 
  const checkStatus = () => {
    console.log("All User Info ", userInfo);
    console.log("All User Cards", creditCards);
  };

  useEffect(() => {
    checkStatus();
    setCards(creditCards);
    setPassword('qwerty');
  }, []);

  const editInfo = (data) => {
    console.log("New Data: ", data);
  }

  const editPassword = (password) => {
    setPassword(password);
  }

  // const addCard = (card) => {
  //   card.cardImg = 'https://i.pinimg.com/originals/b4/aa/10/b4aa10d20a4ab9fc70881fb0b278194e.png';
  //   const newCards = [...cards, card];
  //   setCards(newCards);
  // }
  
  const deleteCard = (cardID) => {
    const newCards = cards.filter(card => card.cardNumber !== cardID);
    setCards(newCards);
  }

  return (
    <Block>
      <AccountContainer>
      	<Inner>
	        <TabContainer 
            id="account-info" 
            defaultActiveKey={activeKey}
          >
              <LeftNav activeKey={activeKey} data={leftNavItems} setActiveKey={setActiveKey} />
              <TabWrap>
                <TabContentPane 
                  editInfo={editInfo}
                  editPassword={editPassword}
                  cards={creditCards}
                  addCard={addCard}
                  deleteCard={deleteCard}
                  personalInfo={[userInfo]}
                  password={password}
                  user={userInfo}
                  appointments={appointments}
                />
              </TabWrap>
          </TabContainer>
      	</Inner>
      </AccountContainer>
    </Block>
  );}

AccountDetails.propTypes = {
   userInfo: PropTypes.object,
   appointments: PropTypes.array,
   creditCards: PropTypes.array,
   addCard: PropTypes.function,
};

export default memo(AccountDetails);
