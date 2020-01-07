import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const EmailInput = styled(FormControl)`
  height: 100%;
  color: #364650;
  font-size: 20px;
  padding: 20px;
  border-radius: 0;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const EmailButton = styled(Button)`
  height: 100%;
  width: 60px;
  color: ${props => props.color};
  font-weight: bold;
  border-radius: 0px;
  background-color: ${props => props.background};
`;

export const InputWrap = styled(InputGroup)`
  height: 70px;
  @media (max-width: 991px) {
    height: 60px;
  }
`;
