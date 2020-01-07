import React from 'react';
import PropTypes from 'prop-types';

import { TabContent } from 'react-bootstrap';
import { Container, ServiceTitle, TabsWrap, Content } from './styles';

const ServiceTabs = props => (
  <Container>
    <ServiceTitle>{props.title}</ServiceTitle>
    <TabsWrap
      defaultActiveKey="benifits"
      transition={false}
      id="service_benifits"
    >
      <TabContent eventKey="benifits" title="BENEFITS">
        <Content>
          <div dangerouslySetInnerHTML={{ __html: props.benifits }} />
        </Content>
      </TabContent>

      <TabContent eventKey="how_it_works" title="HOW IT WORKS">
        <Content>
          <div dangerouslySetInnerHTML={{ __html: props.how_it_works }} />
        </Content>
      </TabContent>
    </TabsWrap>
  </Container>
);

export default ServiceTabs;
