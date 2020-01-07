/**
 *
 * EmailMarketingSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';
import EmailForm from 'components/EmailForm';

import {
  EmailContainer,
  Inner,
  EmailInstruction,
  SocialSectionWrap,
  SocialSection,
  SocialIcon,
} from './styles';

const EmailMarketingSection = () => {
  const baseUrl = 'https://fortworth.capital/';
  const [socials, setSocials] = useState([]);

  async function getSocials() {
    const res = await axios.get(
      CMS_API_URL+
      'api/collections/get/social_accounts?token='+
      CMS_API_TOKEN
    );
    setSocials(res.data.entries);
  }

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <EmailContainer>
      <Inner>
        <div>
          <EmailInstruction>Stay up to date with us.</EmailInstruction>
        </div>

        <div>
          <EmailForm background="#364650" color="#ffffff" />

          <SocialSectionWrap>
            <SocialSection>
              {socials.map(item => (
                <a href={item.link} key={item.id} target="_blank">
                  <SocialIcon key={item.id} icon={baseUrl + item.image.path} />
                </a>
              ))}
            </SocialSection>
          </SocialSectionWrap>
        </div>
      </Inner>
    </EmailContainer>
  );
};

EmailMarketingSection.propTypes = {};

export default memo(EmailMarketingSection);
