import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from 'react-bootstrap';

import { Block, Inner, Point, LeftNavItem, Title, TabsNav } from './styles';

const LeftNav = ({ setActiveKey, data, activeKey }) => (
  <Block>
    <Inner>
      <Title>Book a Service</Title>
      <TabsNav variant="tabs">
        {data.map(({ eventKey, label, defaultLink }, i) => (
          <LeftNavItem
            key={i}>
            <Nav.Link
              onClick={() => {
                setActiveKey(eventKey);
              }}
              eventKey={eventKey}
              disabled={!(defaultLink || activeKey === eventKey)}
            >
              <Point className="verticle-point" icon="circle" />
              {label}
            </Nav.Link>
          </LeftNavItem>
        ))}
      </TabsNav>
    </Inner>
  </Block>
);

export default LeftNav;
