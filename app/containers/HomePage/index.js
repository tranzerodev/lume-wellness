/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useRef } from 'react';
import styled from 'styled-components';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ServicesSection from 'components/ServicesSection';
import FeaturedServicesMenu from 'components/FeaturedServicesMenu';
import TestimonialsSection from 'components/TestimonialsSection';
import InstagramSection from 'components/InstagramSection';
import EmailMarketingSection from 'components/EmailMarketingSection';

const MainContainer = styled.div`
  font-family: calluna;
  font-weight: normal;
  font-style: normal;
`;

const HomePage = () => {
  const serviceSectionRef = useRef();
  return (
    <MainContainer fluid="true">
      <HeroSection scrollToEl={serviceSectionRef} />
      <AboutSection />
      <div ref={serviceSectionRef}>
        <FeaturedServicesMenu />
      </div>
      <ServicesSection />
      <TestimonialsSection testimonial="We left feeling less stressed and more centered, and we slept better, too." />
      <InstagramSection />
      <EmailMarketingSection />
    </MainContainer>
  );
};

export default HomePage;
