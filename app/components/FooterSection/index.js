/**
 *
 * FooterSection
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import axios from 'axios';
import Logo from './Lume-Logo.png';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';

import * as styles from './styles';

const contactLinks = [
  {
    id: 1,
    link: '/location',
    name: 'Location',
  }
];

function FooterSection() {
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [pages, setPages] = useState([]);

  async function getPages() {
    const res = await axios.get(
      CMS_API_URL+
      'api/collections/get/pages?token='+
      CMS_API_TOKEN,
    );
    setPages(res.data.entries);
  }

  async function getServices() {
    const res = await axios.get(
      CMS_API_URL+
      'api/collections/get/Services?token='+
      CMS_API_TOKEN
    );
    setServices(res.data.entries);
  }

  useEffect(() => {
    getServices();
    getPages();
  }, []);

  return (
    <styles.FooterContainer>
      <styles.FooterDivider />

      <styles.FooterMenu>
        <styles.WrapCol col="logo">
          <Link to="/">
            <styles.FooterLogo src={Logo} alt="Lume Wellness" />
          </Link>
        </styles.WrapCol>
        <styles.WrapCol>
          <div>
            <styles.MenuTitle>About</styles.MenuTitle>
            <styles.MenuList>
              {
                pages.map(item => { 
                  if (item.name == "Services") {
                    return <li key={item.id}>
                      <HashLink
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        to="/#featured_services_menu">{item.name}</HashLink>
                    </li>
                  }
                  return <li key={item.id}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  }
                ) 
              }
            </styles.MenuList>
          </div>
          <div>
            <styles.MenuTitle>Services</styles.MenuTitle>
            <styles.MenuList>
              {services.map(item => (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </styles.MenuList>
          </div>
          <div>
            <styles.MenuTitle>Contact</styles.MenuTitle>
            <styles.MenuList>
              {contactLinks.map(item => (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </styles.MenuList>
          </div>
        </styles.WrapCol>
      </styles.FooterMenu>

      <styles.FooterCopyrights>
        <div>© Copyright Lume Wellness 2019</div>
        <styles.Links>
          <Link to="/privacy_policies">Privacy Policy</Link>
          <Link to="/terms_of_services">Terms</Link>
        </styles.Links>
      </styles.FooterCopyrights>
    </styles.FooterContainer>
  );
}

FooterSection.propTypes = {};

export default memo(FooterSection);
