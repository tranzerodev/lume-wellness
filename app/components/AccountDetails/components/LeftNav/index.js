import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Block, Inner, Point, LeftNavItem, Title, TabsNav } from './styles';

const LeftNav = ({ data, activeKey, setActiveKey }) => (
  <Block>
    <Inner>
      {/* <Title>My Account</Title> */}
      <TabsNav variant="tabs">
        {data.map(({ eventKey, label, defaultLink }, i) => (
          <LeftNavItem key={i}>
            <Nav.Link
              eventKey={eventKey}
              onSelect={() => (
                  setActiveKey(eventKey)
                )
              }
            >
              {/* <Point className="verticle-point" icon="circle" /> */}
              {label}
            </Nav.Link>
          </LeftNavItem>
        ))}
      </TabsNav>
    </Inner>
  </Block>
);

export default LeftNav;
