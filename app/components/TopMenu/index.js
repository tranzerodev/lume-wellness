/**
 *
 * TopMenu
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIdentityContext } from 'react-netlify-identity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Brand from 'components/Brand';
import TopMenuItem from 'components/TopMenuItem';
import Unfullfilled from './icons/user_icon.svg';
import Fullfilled from './icons/current_user.svg';

import {
  TopBar,
  TopNav,
  TopNavItem,
  MyToast,
  NewUserIcon,
  CurrentUserIcon,
  ListItem,
} from './styles';

const TopMenu = props => {
  const identity = useIdentityContext();
  return (
    <>
      <TopBar>
        <Link to="/">
          <Brand />
        </Link>
        <TopNav className="justify-content-end">
          {/* <TopMenuItem MenuItem="Learn" /> */}
          {/* <TopMenuItem MenuItem="Book" /> */}
          <a href="https://lumebooking.as.me/schedule.php" target="_blank">
            Book
          </a>
          {/* <TopNavItem to="/coming_soon">
            {identity.user == undefined ? (
              < NewUserIcon src={Unfullfilled } />
              ) : (
              < CurrentUserIcon src={Fullfilled} />
              )
            }
            </TopNavItem> */}
        </TopNav>
      </TopBar>
      <MyToast autoClose={8000} />
    </>
  );
};

TopMenu.propTypes = {};

export default TopMenu;
