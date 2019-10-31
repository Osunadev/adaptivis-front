import React from 'react';

import PropTypes from 'prop-types';

import BodyAttributes from 'components/body-attributes/body-attributes.component';
import { Result, Button } from 'antd';

const NotFound = ({ history }) => {
  return (
    <>
      <BodyAttributes
        background='linear-gradient(to left bottom, #5428b0, #006feb, #009deb, #00c2be, #25e087)'
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

NotFound.propTypes = {
  history: PropTypes.object.isRequired
};

export default NotFound;
