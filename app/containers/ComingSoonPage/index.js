/**
 *
 * ComingSoonPage
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
import makeSelectComingSoonPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import InstagramSection from 'components/InstagramSection';
import InstagramTargeting from 'components/InstagramTargeting';

export function ComingSoonPage() {
  useInjectReducer({ key: 'comingSoonPage', reducer });
  useInjectSaga({ key: 'comingSoonPage', saga });

  return (
    <div>
      <Helmet>
        <title>ComingSoonPage</title>
        <meta name="description" content="Description of ComingSoonPage" />
      </Helmet>
      <InstagramTargeting />
      <InstagramSection  />
    </div>
  );
}

ComingSoonPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comingSoonPage: makeSelectComingSoonPage(),
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
)(ComingSoonPage);
