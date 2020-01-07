/**
 *
 * TopMenuDropdown
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Route, NavLink, Link, Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {BookingLink} from 'components/BookingLink';
import PropTypes from 'prop-types';
import axios from 'axios';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';

import * as styles from './styles';

const TopMenuItem = props => {
  const [services, setServices] = useState([]);
  const [pages, setPages] = useState([]);

  async function getPages() {
    const res = await axios.get(
      CMS_API_URL+
      'api/collections/get/pages?token='+
      CMS_API_TOKEN
    );
    setPages(res.data.entries);
  }

  async function getServices() {
    const res = await axios.get(
      CMS_API_URL+
      'api/collections/get/Services?token='+
      CMS_API_TOKEN
    );
    console.log("SERVICE MENU ITEM",res.data.entries);
    setServices(res.data.entries);
  }

  useEffect(() => {
    getServices();
    getPages();
  }, []);

  const Item = props.MenuItem;

  const [state, setState] = useState({
    showResults: false,
  });

  const buttonTouched = event => {
    setState({ showResults: true });
  };

  const closeDropdown = () => {
    setState({ showResults: false })
  }

  const dropbtnClassName = state.showResults ? 'dropbtn show' : 'dropbtn'; 
  
  return (
    <styles.Dropdown>
      <div className={dropbtnClassName} onMouseLeave={closeDropdown}>
        <styles.Text onClick={buttonTouched}>{Item}</styles.Text>

        {Item === 'Learn' && (
          <styles.DropdownContentWrap className="dropdown-content">
            <styles.DropdownContent>
              {
                pages.map(item => {
                if (item.name == "Services")
                  return <styles.ListItem onClick={closeDropdown} key={item.id}>
                        <HashLink
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        to="/#featured_services_menu">
                          <styles.LearnItem>{item.name}</styles.LearnItem>
                        </HashLink>
                      </styles.ListItem>
                return <styles.ListItem key={item.id} onClick={closeDropdown}>
                      <Link to={item.link} key={item.id}>
                        <styles.LearnItem>{item.name}</styles.LearnItem>
                      </Link>
                    </styles.ListItem>
                  }
                )
              }
            </styles.DropdownContent>
          </styles.DropdownContentWrap>
        )}

        {Item === 'Book' && (
          <styles.DropdownContentWrap className="dropdown-content">
            <styles.DropdownContent>
              {services.map(item => (
                <styles.ListItem
                  key={item.id}
                  hoverSrc={CMS_API_URL + item.hover.path}
                >
                {item.booking.includes('https://')? (
                  <a
                    target='_blank'
                    href={item.booking}
                  >
                    <styles.ServiceIcon iconSrc={CMS_API_URL + item.icon.path} />
                    <styles.LearnItem>{item.name}</styles.LearnItem>
                  </a>
                  ):(
                  <Link to={item.booking}>
                    <styles.ServiceIcon iconSrc={CMS_API_URL + item.icon.path} />
                    <styles.LearnItem>{item.name}</styles.LearnItem>
                  </Link>
                  )
                }
                </styles.ListItem>
              ))}
            </styles.DropdownContent>
          </styles.DropdownContentWrap>
        )}
      </div>
    </styles.Dropdown>
  );
};

TopMenuItem.propTypes = {};

export default memo(TopMenuItem);
