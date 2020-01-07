import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import { device } from 'device';


const Content = styled(Col)`
  padding: 10px;
  height: 200px;
  text-align: center;
  font-family: Calluna;
  font-style: Regular;
  font-size: 20px;
  letter-spacing: 1px;
  color: #364650;
  background-color: #E7DDD2;
  opacity: 1;

  @media ${device.mobileS}{
    margin: 25px auto;
  }
  
  @media ${device.mobileM}{
    margin: 25px auto;
  }
  
  @media ${device.mobileL}{
    margin: 50px auto;
  }

  @media ${device.tablet}{
    margin: 0px 0px;
  }

  @media ${device.laptop}{
    margin: 20px 0px;
  }

  @media ${device.laptopL}{
    margin: 20px 0px;
  }
`

const FirstPara = styled.p`
  padding: 10px;
`

export default function AboutContent(props) {
	return (
		<Content  
      xl= {3}
      lg= {3}
      md= {12}
      sm= {8}
      xs= {8}
      className={props.style}
    >
			{props.content}
		</Content>
	)
}