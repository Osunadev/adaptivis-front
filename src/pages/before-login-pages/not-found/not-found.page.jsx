import React from 'react';

import PropTypes from 'prop-types';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';
import { Result, Button } from 'antd';

const NotFoundPage = ({ history }) => {
  return (
    <>
      <BodyAttributes
        background='linear-gradient(to right, #0083B0, #00B4DB)'
        noOverflow
      />
      <Result
        style={{ marginTop: '54px' }}
        status='404'
        title={<h4 style={{ color: 'white' }}>404</h4>}
        subTitle={
          <p style={{ color: 'white' }}>Lo sentimos, esta página no existe.</p>
        }
        extra={
          <Button type='primary' onClick={() => history.push('/')}>
            Regresar al Inicio
          </Button>
        }
      />
    </>
  );
};

NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default NotFoundPage;
