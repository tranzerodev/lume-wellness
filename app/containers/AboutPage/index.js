/**
 *
 * AboutPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { Col } from 'react-bootstrap';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';

import TeamSlider from 'components/TeamSlider';
import AboutBanner from 'components/AboutBanner';

import { getAssetsAPI } from 'utils';

import topImage from './Image/small-image.jpg';
import bottomImage from './Image/Lume-plants.jpg';

import saga from './saga';
import reducer from './reducer';
import { getTeamMembers, getAboutValues, getAboutPage } from './actions';

import makeSelectAboutPage from './selectors';

import {
  SectionBox,
  TeamContainer,
  StaffName,
  StaffImage,
  StatementTitle,
  StatementDescription,
  StaffDescription,
  ValueTitle,
  ValueDescription,
  Container,
  Ceil,
  CeilWrap,
} from './styles';

const AboutPage = ({
  aboutPage: { aboutValues = [], members = [], aboutContent = {} },
  getTeamMembers,
  getAboutValues,
  getAboutPage,
}) => {
  useInjectReducer({ key: 'aboutPage', reducer });
  useInjectSaga({ key: 'aboutPage', saga });

  useEffect(() => {
    getTeamMembers();
    getAboutValues();
    getAboutPage();
  }, []);

  const { mission = {}, banner = {} } = aboutContent;

  return (
    <div>
      <Helmet>
        <title>AboutPage</title>
        <meta name="description" content="Description of AboutPage" />
      </Helmet>

      <AboutBanner
        data={{
          bigImg: bottomImage,
          smallImg: topImage,
        }}
        bannerInfo={banner}
      />

      <SectionBox>
        <Container>
          <StatementTitle>Our Medical Team</StatementTitle>

          <TeamContainer>
            {members.map(({ name, image, bio, _id }) => (
              <Col md={4} sm={6} key={_id}>
                <StaffImage imgSource={getAssetsAPI(image.path)} />
                <StaffName>{name}</StaffName>
                <StaffDescription>{bio}</StaffDescription>
              </Col>
            ))}
          </TeamContainer>
        </Container>
      </SectionBox>

      {mission && (
        <SectionBox bgColor="#E7DDD2">
          <Container>
            <StatementTitle>{mission.title}</StatementTitle>

            <StatementDescription>{mission.description}</StatementDescription>
          </Container>
        </SectionBox>
      )}

      <SectionBox>
        <Container>
          <StatementTitle>Our Values</StatementTitle>

          <CeilWrap>
            {aboutValues.map(({ title, description }) => (
              <Col md={6}>
                <Ceil>
                  <ValueTitle>{title}</ValueTitle>
                  <ValueDescription>{description}</ValueDescription>
                </Ceil>
              </Col>
            ))}
          </CeilWrap>
        </Container>
      </SectionBox>

      <SectionBox bgColor="#364650">
        <StatementTitle color="#fff">Our Team</StatementTitle>
        <TeamSlider />
      </SectionBox>

      <InstagramSection />
      <EmailMarketingSection />
    </div>
  );
};

AboutPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  aboutPage: makeSelectAboutPage(),
});

const withConnect = connect(
  mapStateToProps,
  { getTeamMembers, getAboutValues, getAboutPage },
);

export default compose(
  withConnect,
  memo,
)(AboutPage);
