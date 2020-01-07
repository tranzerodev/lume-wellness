import React, {useState} from 'react';
import MenuPopup from '../../../MenuPopup';
import {BookingLink} from 'components/BookingLink';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const MenuItem = props => {
  const itemData = props.item;
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <styles.ItemContainer>
      <styles.Header>
        <styles.ItemTitle>
          <span>{itemData.name}</span>
          <styles.ItemPrice>{itemData.price}</styles.ItemPrice>
        </styles.ItemTitle>
        <styles.ItemSubtitle>{itemData.subtitle}</styles.ItemSubtitle>
      </styles.Header>
      <styles.ItemDescription>{itemData.description}</styles.ItemDescription>
      <styles.Footer>
          <styles.ItemMoreinfo>
           {/* 
            <button>
              
              <styles.More>
                <span />
                <span />
                <span />
              </styles.More> 
           
              <styles.ItemMoreinfoText onClick={handleShow}>More Info</styles.ItemMoreinfoText>
            </button>
          */}
          </styles.ItemMoreinfo>
        <styles.ItemBook>
          {
            itemData.booking_link.includes('http') ? (
            <a target='_blank' href={itemData.booking_link}>
              Book
            </a>
            ):(
            <Link to={itemData.booking_link}>
              Book
            </Link>
            )
          }

        </styles.ItemBook>
      </styles.Footer>
      {show && <MenuPopup
        data={itemData}
        close={handleClose}
        open={handleShow}
        show={show}
      />}
    </styles.ItemContainer>
  )
};

MenuItem.propTypes = {
  props: PropTypes.object
};

export default MenuItem;
