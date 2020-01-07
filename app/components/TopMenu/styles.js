import { device } from 'device';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

export const TopBar = styled(Navbar)`
  background: #ffffff;
  position: fixed;
  z-index: 200;
  top: 0px;
  left: 0px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  padding: 0 25px !important;
  margin-top: 50px !important;
  justify-content: center;
  @media ${device.mobileS} {
    height: 55px;
    margin-top: 50px !important;
    justify-content: space-between;
  }
  @media ${device.tablet} {
    height: 85px;
    margin-top: 50px !important;
    justify-content: space-between;
  }
`;

export const TopNav = styled(Nav)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TopNavItem = styled(Link)`
  color: ${p => p.theme.text.main};
  padding: 0px 0px;

  @media ${device.mobileS} {
    font-size: 21px;
    margin-left: 10px;
  }

  @media ${device.tablet} {
    font-size: 30px;
    margin-left: 25px;
  }
`;

export const MyToast = styled(ToastContainer)`
  z-index: 99999;
`;

export const NewUserIcon = styled.img`
  width: 26px;
  height: 27px;
  margin: 20px;

  @media ${device.mobileS} {
    height: 21px;
  }

  @media ${device.tablet} {
    height: 27px;
  }
`;

export const CurrentUserIcon = styled.img`
  width: 26px;
  height: 27px;
  margin: 20px;
  @media ${device.mobileS} {
    height: 21px;
  }

  @media ${device.tablet} {
    height: 27px;
  }
`;
