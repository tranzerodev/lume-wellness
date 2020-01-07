/**
 *
 * CryoPage
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

import ServiceExplanation from 'components/ServiceExplanation';
import SimpleMenu from 'components/SimpleMenu';
import VerticalDetail from 'components/VerticalDetail';

import ServiceDetail from 'components/ServiceDetail';
import ServiceQuestion from 'components/ServiceQuestion';

import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';
import messages from './messages';
import saga from './saga';
import reducer from './reducer';
import makeSelectCryoPage from './selectors';

import { LAMBDA_API } from 'configs';
import axios from 'axios';

import {
  getCryoTherapyInfo, 
  getCryoTherapyOptions, 
  getCryoTherapySlides,
  getCryoTherapyQAs,
} from './actions';

export function CryoPage({getCryoTherapyInfo, getCryoTherapyQAs, getCryoTherapyOptions, getCryoTherapySlides, cryoPage}) {
  useInjectReducer({ key: 'cryoPage', reducer });
  useInjectSaga({ key: 'cryoPage', saga });

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
    },];
  
  const info = [
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },
    {
      name: 'IMMUNITY',
      subtitle: 'MOOD, ENERGY, HYDRATION',
      price: '$160',
      description:
        'Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity.',
      info: '',
      benefits: [
        'hidration',
        'faster illness recovery',
        'increase immune function',
        'cell healing & repair',
        'benefit'
      ],
      ingredients: [
        {
          title: 'Zinc',
          description: 'helps with gene expression, enzyme functions, and to prevent infection.It is used in cell growth, cell division, and wound healing.'
        },
        {
          title: 'B12 + B Complex',
          description: 'help create energy by acting as cofactors in the metabolism of food to help alleviate fatigue.Vitamin'
        },
        {
          title: 'C',
          description: 'Helps in the production of nearly all immune system cells and functions when pathogens are detected.'
        },
        {
          title: 'Magnesium',
          description: 'helps with DNA & RNA and helps increase cellular absorption.'
        }
      ],
    },];

  const {
    cryoTherapyInfo = {}, 
    cryoTherapyOptions = [], 
    cryoTherapyQAs = [], 
    cryoTherapySlides = [], 
  } = cryoPage;

  const [offers, setOffers] = useState([]);

  async function getOfferings(service){
    const res = await axios.get(LAMBDA_API+'/services');
    const offers = res.data;
    const cryo = offers.filter(offer => offer.category == "CRYOTHERAPY");
    console.log("My CRYO", cryo);
    setOffers(cryo);
  }

  useEffect(()=> {
    getCryoTherapyQAs();
    getCryoTherapyOptions();
    getCryoTherapySlides();
    getCryoTherapyInfo();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{cryoTherapyInfo.title}</title>
        <meta name="description" content="Description of CryoPage" />
      </Helmet>

      <ServiceExplanation 
        how_it_works={cryoTherapyInfo.how_it_works}
        benifits={cryoTherapyInfo.benifits}
        gallery={cryoTherapyInfo.gallery}
        title={cryoTherapyInfo.title}
      />

      <SimpleMenu title={cryoTherapyInfo.menu_title} info={cryoTherapyOptions} />
      <VerticalDetail title={cryoTherapyInfo.service_detail_title} detailItems={cryoTherapySlides} />

      <ServiceQuestion
        title={cryoTherapyInfo.service_question_title}
        subtitle={cryoTherapyInfo.service_question_subtitle}
        note={cryoTherapyInfo.faq_note}
        questions={cryoTherapyQAs}
      />

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

CryoPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  cryoPage: makeSelectCryoPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getCryoTherapyInfo, getCryoTherapySlides, getCryoTherapyQAs, getCryoTherapyOptions},
);

export default compose(
  withConnect,
  memo,
)(CryoPage);
