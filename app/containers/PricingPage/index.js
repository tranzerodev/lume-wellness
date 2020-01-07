/**
 *
 * PricingPage
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

import makeSelectPricingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import PromotionalPricing from 'components/PromotionalPricing';
import ServicesPricing from 'components/ServicesPricing';
import GiftCertificate from 'components/GiftCertificate';
import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';

import {getPricing} from './data';
import {
  getPromotionalPacks, 
  getServicesPricing, 
  getGiftCertificates,
} from './actions';

export function PricingPage({getPromotionalPacks, getServicesPricing, getGiftCertificates, pricingPage}) {
  useInjectReducer({ key: 'pricingPage', reducer });
  useInjectSaga({ key: 'pricingPage', saga });

  const {
    promotionalPacks = [], 
    servicesPricing = [],
    giftCertificates = [],
  } = pricingPage;

  // var promotion = {
  //   title: 'Promotional Pack',
  //   description: 'Promotional copy. Pricing details and terms. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  //   price: '212', 
  //   expiration: '02/21/2021'
  // };

  // var gift = {
  //   title: 'Purchase A Gift Certificate',
  //   description: 'Promotional copy. Pricing details and terms. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  //   price: '212', 
  //   expiration: '02/21/2021'
  // };

  // var servicesPricing = [
  //   {
  //     id: 1,
  //     title: 'IV Drips',
  //     description: 'Do all kind of stuffs and other intesting stuffs',
  //     price: '212', 
  //     link: '/iv_drip',
  //     icon: 'assets/website/IV_Dark.svg',
  //   }, 
  //   {
  //     id: 2,
  //     title: 'Cryotherapy',
  //     description: 'Whatever you want and whatever you like',
  //     price: '212', 
  //     link: '/cryo_therapy',
  //     icon: 'assets/website/Lume_Cryo.svg',
  //   }, 
  //   {
  //     id: 3,
  //     title: 'Massage',
  //     description: 'Promotional copy. Pricing details and terms. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  //     price: '212', 
  //     link: '/massage',
  //     icon: 'assets/website/Lume_Massage.svg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Infrared Sauna',
  //     description: 'Promotional copy. Pricing details and terms. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  //     price: '212', 
  //     link: '/infrared_sauna',
  //     icon: 'assets/website/Lume_Sauna.svg',
  //   },
  //   {
  //     id: 5,
  //     title: 'Booster Shots',
  //     description: 'Promotional copy. Pricing details and terms. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  //     price: '212', 
  //     link: '/im_shots',
  //     icon: 'assets/website/Lume_Shot_Dark.png',
  //   }
  // ];

  useEffect(() => {
    getPromotionalPacks();
    getServicesPricing();
    getGiftCertificates();
  }, []);

  return (
    <div>
      <Helmet>
        <title>PricingPage</title>
        <meta name="description" content="Description of PricingPage" />
      </Helmet>
      <PromotionalPricing data={promotionalPacks} />
      <ServicesPricing data={servicesPricing} />
      <GiftCertificate data={giftCertificates} />
      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

PricingPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  pricingPage: makeSelectPricingPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getGiftCertificates, getServicesPricing, getPromotionalPacks },
);

export default compose(
  withConnect,
  memo,
)(PricingPage);
