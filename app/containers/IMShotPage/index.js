/**
 *
 * IMShotPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import messages from './messages';

import ServiceExplanation from 'components/ServiceExplanation';
import ServiceMenu from 'components/ServiceMenu';
import SimpleMenu from 'components/SimpleMenu';
import ServiceDetail from 'components/ServiceDetail';
import ServiceQuestion from 'components/ServiceQuestion';

import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';
import saga from './saga';
import reducer from './reducer';
import makeSelectIMShotPage from './selectors';

import {
  getBoosterShotInfo, 
  getBoosterShotOptions, 
  getBoosterShotQAs, 
  getBoosterShotIngredients
} from './actions';

import { LAMBDA_API } from 'configs';
import axios from 'axios';

export function IMShotPage({getBoosterShotInfo, getBoosterShotQAs, getBoosterShotOptions, getBoosterShotIngredients, imshotPage}) {
  useInjectReducer({ key: 'imshotPage', reducer });
  useInjectSaga({ key: 'imshotPage', saga });

  const [offers, setOffers] = useState([]);

  async function getOfferings(service){
    const res = await axios.get(LAMBDA_API+'/services');
    const offers = res.data;
    const boosters = offers.filter(offer => offer.category == "Booster Shots");
    console.log("Booster Shots", boosters);
    setOffers(boosters);
  }

  const {
     boosterShotInfo = {},
     boosterShotQAs = [],
     boosterShotOptions = [],
     boosterShotIngredients = [],
  } = imshotPage;

  useEffect(()=> {
    getBoosterShotQAs();
    getBoosterShotInfo();
    getBoosterShotOptions();
    getBoosterShotIngredients();
  }, []);

  const questions = [
    {
      id: '0',
      question: 'How long will it take to start feeling benefits?',
      answer:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    },
    {
      id: '1',
      question: 'Sed diam nonummy nibh euismod tincidunt?',
      answer:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    },
    {
      id: '2',
      question: 'Sed diam nonummy nibh euismod tincidunt?',
      answer:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    },
    {
      id: '3',
      question: 'Sed diam nonummy nibh euismod tincidunt?',
      answer:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    },
    {
      id: '4',
      question: 'Sed diam nonummy nibh euismod tincidunt?',
      answer:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{boosterShotInfo.title}</title>
        <meta name="description" content="Massage Services" />
      </Helmet>

      <ServiceExplanation 
        how_it_works={boosterShotInfo.how_it_works}
        benifits={boosterShotInfo.benifits}
        gallery={boosterShotInfo.gallery}
        title={boosterShotInfo.title}
      />
      
      <SimpleMenu title={boosterShotInfo.menu_title} info={boosterShotOptions}/>

      <ServiceDetail
        title={boosterShotInfo.service_detail_title}
        subtitle={boosterShotInfo.service_detail_subtitle}
        ingredients={boosterShotIngredients}
      />

      <ServiceQuestion
        title={boosterShotInfo.service_question_title}
        subtitle={boosterShotInfo.service_question_subtitle}
        note={boosterShotInfo.faq_note}
        questions={boosterShotQAs}
      />

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

IMShotPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  imshotPage: makeSelectIMShotPage(),
});

const withConnect = connect(
  mapStateToProps,
  {getBoosterShotInfo, getBoosterShotIngredients, getBoosterShotOptions, getBoosterShotQAs},
);

export default compose(
  withConnect,
  memo,
)(IMShotPage);
