/**
 *
 * SaunaPage
 *
 */

import React, { memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import messages from './messages';

import SimpleMenu from 'components/SimpleMenu';
import ServiceDetail from 'components/ServiceDetail';
import VerticalDetail from 'components/VerticalDetail';
import ServiceQuestion from 'components/ServiceQuestion';
import InstagramSection from 'components/InstagramSection';
import ServiceExplanation from 'components/ServiceExplanation';
import EmailMarketingSection from 'components/EmailMarketingSection';

import reducer from './reducer';
import saga from './saga';

import makeSelectSaunaPage from './selectors';

import {
  getSaunaInfo, 
  getSaunaOptions, 
  getSaunaSlides, 
  getSaunaQAs,
} from './actions';

import { LAMBDA_API } from 'configs';
import axios from 'axios';

export function SaunaPage({getSaunaInfo, getSaunaQAs, getSaunaOptions, getSaunaSlides, saunaPage}) {
  useInjectReducer({ key: 'saunaPage', reducer });
  useInjectSaga({ key: 'saunaPage', saga });

  const [offers, setOffers] = useState([]);

  const {
    saunaQAs = [],
    saunaInfo = {}, 
    saunaOptions = [],
    saunaSlides=[],
  } = saunaPage;

  async function getOfferings(service){
    const res = await axios.get(LAMBDA_API+'/services');
    const offers = res.data;
    const sauna = offers.filter(offer => offer.category == "Sauna");

    console.log("My SAUNA", offers);
    setOffers(sauna);
  }

  useEffect(() => {
    getSaunaInfo();
    getSaunaQAs();
    getSaunaOptions();
    getSaunaSlides();
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
        <title>{saunaInfo.title}</title>
        <meta name="description" content="Description of SaunaPage" />
      </Helmet>
      
      <ServiceExplanation 
        how_it_works={saunaInfo.how_it_works}
        benifits={saunaInfo.benifits}
        gallery={saunaInfo.gallery}
        title={saunaInfo.title}
      />
      
      <SimpleMenu title={saunaInfo.menu_title} info={saunaOptions} />
      <VerticalDetail title={saunaInfo.service_detail_title} detailItems={saunaSlides} />

      <ServiceQuestion
        title={saunaInfo.service_question_title}
        subtitle={saunaInfo.service_question_subtitle}
        note={saunaInfo.faq_note}
        questions={saunaQAs}
      />

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

SaunaPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  saunaPage: makeSelectSaunaPage(),
});

const withConnect = connect(
  mapStateToProps,
  {getSaunaInfo, getSaunaSlides, getSaunaQAs, getSaunaOptions },
);

export default compose(
  withConnect,
  memo,
)(SaunaPage);
