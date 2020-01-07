/**
 *
 * TermsofServicesPage
 *
 */

import React, { memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col } from 'react-bootstrap';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTermsofServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Container } from './styles';

import {
  getTermsofServicesContent,
} from './actions';

export function TermsofServicesPage({getTermsofServicesContent, termsofServicesPage}) {
  useInjectReducer({ key: 'termsofServicesPage', reducer });
  useInjectSaga({ key: 'termsofServicesPage', saga });

  useEffect(() => {
    getTermsofServicesContent();
  }, []);

  const {termsOfServicesContent = {}} = termsofServicesPage;

  return (
    <div>
      <Helmet>
        <title>Terms of Services</title>
        <meta name="description" content="Description of TermsofServicesPage" />
      </Helmet>
      <Row>
        <Container>
          <Col md={{span:'8', offset: '2'}} sm={{span:'10', offset: '1'}} xs={{span:'10', offset: '1'}}>
            <div dangerouslySetInnerHTML={{ __html: termsOfServicesContent.content }} />
          </Col>
        </Container>
      </Row>
    </div>
  );
}

TermsofServicesPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  termsofServicesPage: makeSelectTermsofServicesPage(),
});

const withConnect = connect(
  mapStateToProps,
  {getTermsofServicesContent},
);

export default compose(
  withConnect,
  memo,
)(TermsofServicesPage);
