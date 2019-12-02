import React from 'react';
import PropTypes from 'prop-types';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';
import { Spin } from 'antd';
import { Title, Container } from './confirm-container.style';

const ConfirmContainer = ({ title, children, loading }) => {
  return (
    <>
      <BodyAttributes noOverflow />
      <Title>{title}</Title>
      {loading ? (
        <Spin tip='Esperando confirmación...'>
          <Container>{children}</Container>
        </Spin>
      ) : (
        <Container>{children}</Container>
      )}
    </>
  );
};

ConfirmContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ConfirmContainer;
