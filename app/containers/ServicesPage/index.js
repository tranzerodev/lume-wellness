/**
 *
 * ServicesPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import makeSelectServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ServicesPage() {
  useInjectReducer({ key: 'servicesPage', reducer });
  useInjectSaga({ key: 'servicesPage', saga });

  return (
    <div>
      <Helmet>
        <title>ServicesPage</title>
        <meta name="description" content="Description of ServicesPage" />
      </Helmet>
    </div>
  );
}

ServicesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  servicesPage: makeSelectServicesPage(),
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
)(ServicesPage);
