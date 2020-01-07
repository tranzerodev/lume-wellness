 /**
 *
 * MassagePage
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
import VerticalDetail from 'components/VerticalDetail';
import ServiceQuestion from 'components/ServiceQuestion';

import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';
import saga from './saga';
import reducer from './reducer';
import makeSelectMassagePage from './selectors';

import {
  getMassageQAs,
  getMassageInfo,
  getMassageOptions,
  getMassageSlides,
  getMassageIngredients, 
} from './actions';

import { LAMBDA_API } from 'configs';
import axios from 'axios';

export function MassagePage({getMassageQAs, getMassageInfo, getMassageIngredients, getMassageSlides, getMassageOptions, massagePage}) {
  useInjectReducer({ key: 'massagePage', reducer });
  useInjectSaga({ key: 'massagePage', saga });

  const [offers, setOffers] = useState([]);
  const { 
    massageQAs=[],
    massageInfo={}, 
    massageOptions = [],
    massageSlides = [],
    massageIngredients = [],
  } = massagePage;

  async function getOfferings(service){
    const res = await axios.get(LAMBDA_API+'/services');
    const offers = res.data;
    console.log("OFFER", offers);
    const massage = offers.filter(offer => offer.category == "MASSAGE");
    console.log("MASSAGE", massage);
    setOffers(massage);
  }

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

  useEffect(() => {
    getMassageInfo();
    getMassageOptions();
    getMassageSlides();
    // getMassageIngredients();
    getMassageQAs();
  }, []);

 

  return (
    <div>
      <Helmet>
        <title>{massageInfo.title}</title>
        <meta name="description" content="Massage Services" />
      </Helmet>

      <ServiceExplanation 
        how_it_works={massageInfo.how_it_works}
        benifits={massageInfo.benifits}
        gallery={massageInfo.gallery}
        title={massageInfo.title}
      />

      <SimpleMenu title={massageInfo.menu_title} info={massageOptions}/>
      <VerticalDetail title={massageInfo.service_detail_title} detailItems={massageSlides} />
      

      <ServiceQuestion
        title={massageInfo.service_question_title}
        subtitle={massageInfo.service_question_subtitle}
        note={massageInfo.faq_note}
        questions={massageQAs}
      />

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

MassagePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  massagePage: makeSelectMassagePage(),
});

const withConnect = connect(
  mapStateToProps,
  {getMassageInfo, getMassageOptions, getMassageQAs, getMassageSlides, getMassageIngredients},
);

export default compose(
  withConnect,
  memo,
)(MassagePage);
