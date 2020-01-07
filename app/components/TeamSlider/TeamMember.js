import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberCard = styled.div`
	background-color: white;
	min-height: 100px;
	height: auto;
	width: 100px;
`

const MemberImage = styled.img`
	height: 300px;
	width: 500px;
	margin: 10px auto;
`

const MemberTitle = styled.h1`
	background-color: red;
`

const MemberDescription = styled.div``
export default function TeamMember(props) {
	return (
		<MemberCard>
      		<MemberImage src={props.img_src} />
      		<MemberTitle> {props.name}</MemberTitle>
      	</MemberCard>
	)
}