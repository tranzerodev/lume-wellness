/**
 *
 * FeaturedServicesMenu
 *
 */

import React, { memo,useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import {CMS_API_URL, CMS_API_TOKEN } from 'configs';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import axios from 'axios';
import BookingLink from 'components/BookingLink';
import {
	ServiceRow,
	ServiceContainer,
	ServiceItem,
} from './styles';

const services = [
	{ id: 1, 'name':'IV Drips', 'link':'/iv_drip'},
	{ id: 2, 'name':'Infrared Sauna', 'link':'/infrared_sauna'},
	{ id: 3, 'name':'Cryofacial', 'link':'/cryo_therapy'},
	{ id: 4, 'name':'Cryotherapy', 'link':'/cryo_therapy'},
	{ id: 5, 'name':'Booster Shot', 'link':'/im_shots'},
	{ id: 6, 'name':'Massage', 'link':'/massage'}
]


function FeaturedServicesMenu(props) {	
	return (
	<ServiceRow id="featured_services_menu">
		<ServiceContainer>
		{
			services.map(
				item => (
					<ServiceItem
					    lg={{span: '1'}} 
					    md={{span: '2'}} 
					    sm={{span: '3'}} 
					    xs={{span: '3'}} 
					    key={item.id}
					>
						<BookingLink link={item.link} text={item.name} />
					</ServiceItem>			
				)
			)
		}
		</ServiceContainer>
	</ServiceRow>
	);
}

FeaturedServicesMenu.propTypes = {};

export default memo(FeaturedServicesMenu);
