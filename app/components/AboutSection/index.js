/**
 *
 * AboutSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { comingSoonLink } from 'constants/routing';
import * as styles from './styles';
import HalfMoon from './HalfMoon.png';
import {CMS_API_URL, CMS_API_TOKEN} from 'configs';

const AboutSection = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    axios
      .get(
        CMS_API_URL+'api/singletons/get/about_section?token='+CMS_API_TOKEN,
      ).then(({ data }) => {
        setAbout(data);
      });
  }, []);

  return (
    <styles.AboutArea>
      <styles.AboutTitle>{about.title}</styles.AboutTitle>

      <styles.Wrap>
        <styles.AboutContent>{about.description}</styles.AboutContent>

        <styles.AboutImage img_source={HalfMoon}>
          <div>
            <styles.AboutDetail>
              <styles.AboutIcon
                icon={
                  about.feel_icon
                    ? `https://fortworth.capital${about.feel_icon.path}`
                    : ''
                }
              />
              <styles.AboutName> The feels </styles.AboutName>
            </styles.AboutDetail>

            <styles.AboutDetail>
              <styles.AboutIcon
                icon={
                  about.look_icon
                    ? `https://fortworth.capital${about.look_icon.path}`
                    : ''
                }
              />
              <styles.AboutName> The looks </styles.AboutName>
            </styles.AboutDetail>

            <styles.AboutDetail>
              <styles.AboutIcon
                icon={
                  about.function_icon
                    ? `https://fortworth.capital${about.function_icon.path}`
                    : ''
                }
              />
              <styles.AboutName> The functions </styles.AboutName>
            </styles.AboutDetail>
          </div>
        </styles.AboutImage>
      </styles.Wrap>

      <styles.AboutButton as={Link} to={comingSoonLink()}>
        Learn More
      </styles.AboutButton>
    </styles.AboutArea>
  );
};

AboutSection.propTypes = {};
export default memo(AboutSection);
