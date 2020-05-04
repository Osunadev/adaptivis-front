import React from 'react';

import PropTypes from 'prop-types';

import { Result, Button } from 'antd';

const NotFoundPage = ({ history }) => {
  return (
    <>
      <Result
        style={{ paddingTop: '64px' }}
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
