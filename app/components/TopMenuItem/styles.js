import { LineOnHover } from 'styles/common-styles';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { device } from 'device';

export const Dropdown = styled(Nav)`
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  height: 100%;

  .dropbtn {
    height: 100%;
    letter-spacing: 1.2px;
    position: relative;
    text-align: center;
    ${LineOnHover}
    &:after {
      height: 3px;
      bottom: 1px;
      background-color: #212529;
    }
    @media ${device.mobileS}{
      &.show {
        .dropdown-content {
          display: block;
        }
      }
    }
    @media ${device.tablet} {
      &:hover {
        .dropdown-content {
          display: block;
        }
      }
    }
  }
  @media ${device.mobileS} {
    .dropbtn {
      padding: 0 0px;
      margin: 0 5px;
    }
  }
  @media ${device.tablet} {
    .dropbtn {
      padding: 0 0px;
      margin: 0 0px;
    }
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Calluna-Black;
  font-weight: 700;
  font-style: normal;
  @media ${device.mobileS} {
    font-size: 18px;
    padding: 0;
  }

  @media ${device.tablet} {
    font-size: 24px;
    padding: 0 15px;
  }
`;

export const DropdownContentWrap = styled.div`
  background: #fff;
  box-shadow: 0px 3px 6px #000;
  border-radius: 1px;
  font-family: Sailec-Bold;
  display: none;
  position: fixed;
  width: 100%;
  left: 0px;
  z-index: 2;
  @media ${device.tablet} {
    height: 190px;
  }
`;

export const DropdownContent = styled.ul`
  height: 100%;
  display: flex;
  @media ${device.mobileS} {
    font-size: 16px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 25px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

export const ServiceIcon = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.iconSrc});
  @media ${device.mobileS} {
    height: 50px;
    width: 50px;
  }
  @media ${device.mobileM} {
    height: 70px;
    width: 70px;
  }
  @media ${device.tablet} {
    height: 60px;
    width: 60px;
    margin: 0 auto 25px;
  }
  @media ${device.laptop} {
    height: 75px;
    width: 75px;
  }
`;

export const LearnItem = styled.span`
  position: relative;
  white-space: nowrap;
  ${LineOnHover}
  &:after {
    height: 3px;
    bottom: -4px;
    background-color: #212529;
  }
  @media ${device.mobileS} {
    margin-left: 15px;
  }
  @media ${device.mobileM} {
    margin-left: 30px;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  text-transform: uppercase;
  &:hover {
    ${LearnItem} {
      &:after {
        width: 100%;
      }
    }
    ${ServiceIcon} {
      background-image: url(${props => props.hoverSrc});
    }
  }
  @media ${device.mobileS} {
    padding: 20px 0;
    width: 100%;
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
  @media ${device.tablet} {
    margin: 0px 15px;
    border: none !important;
    padding: 0;
    a {
      display: inline-block;
    }
  }
  @media ${device.laptopL} {
    margin: 0px 25px;
  }
`;

