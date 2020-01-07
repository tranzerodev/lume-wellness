/**
 *
 * FaqPage
 *
 */

import React, { memo, useState, useEffect, Link } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFaqPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import axios from 'axios';
import { CMS_API_URL, CMS_API_TOKEN } from 'configs';

import ServiceQuestion from 'components/ServiceQuestion';
import { Col, Row } from 'react-bootstrap';
import NorthPole from './NorthPole.png';

const HeroSection = styled(Row)`
  min-height: 420px;
  width: 100%;
  margin: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: none;
`;

export function FaqPage() {
  useInjectReducer({ key: 'faqPage', reducer });
  useInjectSaga({ key: 'faqPage', saga });

  const baseUrl = 'https://fortworth.capital/api';
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    const res = await axios.get(
      CMS_API_URL +
        'api/collections/get/frequent_asked_questions?token=' +
        CMS_API_TOKEN,
    );
    console.log(res.data.entries);
    setQuestions(res.data.entries);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <Helmet>
        <title>FaqPage</title>
        <meta
          name="description"
          content="Frequent Asked Questions for Services"
        />
      </Helmet>

      <HeroSection image={NorthPole} />

      <ServiceQuestion title="Questions" subtitle="" questions={questions} />
    </div>
  );
}

FaqPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  faqPage: makeSelectFaqPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FaqPage);
