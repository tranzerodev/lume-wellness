/**
 *
 * PrivacyPolicyPage
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
import makeSelectPrivacyPolicyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Container } from './styles';

import {
  getPrivacyPolicesContent,
} from './actions';

export function PrivacyPolicyPage({getPrivacyPolicesContent, privacyPolicyPage}) {
  useInjectReducer({ key: 'privacyPolicyPage', reducer });
  useInjectSaga({ key: 'privacyPolicyPage', saga });

  useEffect(() => {
    getPrivacyPolicesContent();
  }, []);

  const {privacyPoliciesContent = {}} = privacyPolicyPage;

  return (
    <div>
      <Helmet>
        <title>PrivacyPolicyPage</title>
        <meta name="description" content="Description of PrivacyPolicyPage" />
      </Helmet>
      <Row>
        <Container>
          <Col md={{span:'10', offset: '1'}}>
             <div dangerouslySetInnerHTML={{ __html: privacyPoliciesContent.content }} />
          </Col>
        </Container>
      </Row>
    </div>
  );
}

PrivacyPolicyPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  privacyPolicyPage: makeSelectPrivacyPolicyPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getPrivacyPolicesContent },
);

export default compose(
  withConnect,
  memo,
)(PrivacyPolicyPage);
