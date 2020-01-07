import styled from 'styled-components';

import { device } from 'device';

export const Block = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const TextBlock = styled.div`
  font-family: Sailec-Regular;
  font-size: 16px;
`;

export const Price = styled.div`
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
`;
