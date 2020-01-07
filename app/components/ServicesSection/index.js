import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { loadAllServicesRequest } from './actions';
import saga from './saga';
import reducer from './reducer';

import ServiceRow from '../ServiceRow';
import { ServiceArea, SectionTitle } from './styles';

const ServicesSection = ({ loadAllServicesRequest, servicesList }) => {
  useInjectReducer({ key: 'services', reducer });
  useInjectSaga({ key: 'services', saga });

  useEffect(() => {
    loadAllServicesRequest();
  }, []);

  return (
    <ServiceArea>
      <SectionTitle>Featured Services</SectionTitle>
      <div>
        {servicesList &&
          servicesList.map((item, index) => {
            const isRightAlign = (index + 1) % 2 === 0;
            return (
              <ServiceRow
                key={item._id}
                index={index + 1}
                isRightAlign={isRightAlign}
                content={item}
              />
            );
          })}
      </div>
    </ServiceArea>
  );
};

ServicesSection.propTypes = {
  loadAllServicesRequest: PropTypes.func.isRequired,
  servicesList: PropTypes.array,
};

const mapStateToProps = state => ({
  servicesList: state.services && state.services.servicesList,
});

const withConnect = connect(
  mapStateToProps,
  { loadAllServicesRequest },
);

export default compose(
  withConnect,
  memo,
)(ServicesSection);
