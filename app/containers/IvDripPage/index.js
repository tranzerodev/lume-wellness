/**
 *
 * IvDripPage
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
import ServiceMenu from 'components/ServiceMenu';
import SimpleMenu from 'components/SimpleMenu';
import ServiceDetail from 'components/ServiceDetail';
import ServiceQuestion from 'components/ServiceQuestion';

import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';
import messages from './messages';

import { 
  getIVDripsInfo, 
  getIVDripsOptions, 
  getIVDripsIngredients, 
  getIVDripsQA,
} from './actions';

import saga from './saga';
import reducer from './reducer';
import makeSelectIvDripPage from './selectors';

import { LAMBDA_API } from 'configs';
import axios from 'axios';

export function IvDripPage({getIVDripsInfo, getIVDripsOptions, getIVDripsIngredients, getIVDripsQA, ivDripPage}) {
  useInjectReducer({ key: 'ivDripPage', reducer });
  useInjectSaga({ key: 'ivDripPage', saga });
  
  async function getOfferings(service){
    const res = await axios.get(LAMBDA_API+'/services');
    const offers = res.data;
    const iv = offers.filter(offer => offer.category == "IV DRIP");
    console.log("IV DRIP", iv);
    setOffers(iv);
  }

  useEffect(()=> {
    getIVDripsInfo();
    getIVDripsOptions();
    getIVDripsIngredients();
    getIVDripsQA();
  }, []);

  const [offers, setOffers] = useState([]);
  
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
    },
  ];
  
  const {
    ivDripsQAs= [],
    ivDripsInfo = {}, 
    ivDripsOptions = [], 
    ivDripsIngredients = [], 
  } = ivDripPage;
  
  return (
    <div>
      <Helmet>
        <title>{ivDripsInfo.title}</title>
        <meta name="description" content="IV Drips Services" />
      </Helmet>
      
      <ServiceExplanation 
        how_it_works={ivDripsInfo.how_it_works}
        benifits={ivDripsInfo.benifits}
        gallery={ivDripsInfo.gallery}
        title={ivDripsInfo.title}
      />

      <SimpleMenu title={ivDripsInfo.menu_title} info={ivDripsOptions} />

      <ServiceDetail
        title={ivDripsInfo.service_detail_title}
        subtitle={ivDripsInfo.service_detail_subtitle}
        ingredients={ivDripsIngredients}
      />

      <ServiceQuestion
        title={ivDripsInfo.service_question_title}
        subtitle={ivDripsInfo.service_question_subtitle}
        note={ivDripsInfo.faq_note}
        questions={ivDripsQAs}
      />

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

IvDripPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  ivDripPage: makeSelectIvDripPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getIVDripsInfo, getIVDripsOptions, getIVDripsIngredients, getIVDripsQA },
);

export default compose(
  withConnect,
  memo,
)(IvDripPage);
