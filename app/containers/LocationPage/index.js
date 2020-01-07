/**
 *
 * LocationPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import InstagramSection from 'components/InstagramSection';
import LocationSection from 'components/LocationSection';
import EmailMarketingSection from 'components/EmailMarketingSection';
import InfoSection from 'components/InfoSection';

import { getLocationInfo, getExperience, getHelpInfo } from './actions';

import saga from './saga';
import reducer from './reducer';
import makeSelectLocationPage from './selectors';

import LumeLocation  from './img/Lume-location.jpg';
import LumePerk from './img/Lume-perks.jpg';

import { InfoBlock, Container, Banner } from './styles';

export function LocationPage({ getLocationInfo, getExperience, getHelpInfo, locationPage }) {
  useInjectReducer({ key: 'locationPage', reducer });
  useInjectSaga({ key: 'locationPage', saga });
  

  useEffect(() => {
    getLocationInfo();
    getExperience();
    getHelpInfo();
  }, []);

  const { locationInfo = {}, experience = [], helpInfo = [] } = locationPage;
  
  return (
    <div>
      <Helmet>
        <title>Lume Wellness Location</title>
        <meta name="description" content="Lume Wellness Location" />
      </Helmet>

      <LocationSection data={locationInfo} locationImage={LumeLocation} />

      <InfoBlock bgLight>
        <Container>
          <Banner bgImg={LumePerk} />
          <InfoSection blockTitle="The Lume Experience" data={experience} />
        </Container>
      </InfoBlock>

      <InfoBlock>
        <Container>
          <InfoSection blockTitle="Helpful Information" data={helpInfo} />
        </Container>
      </InfoBlock>

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
}

LocationPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  locationPage: makeSelectLocationPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getExperience, getHelpInfo, getLocationInfo },
);

export default compose(
  withConnect,
  memo,
)(LocationPage);
