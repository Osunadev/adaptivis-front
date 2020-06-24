import React from 'react';
import { Link } from 'react-router-dom';

import { Spin, Icon, Result, Button } from 'antd';

const antIcon = <Icon type='loading' style={{ fontSize: 64 }} spin />;

const withHandleResponse = WrappedComponent => ({
  isLoading,
  hasServerError,
  ...componentProps
}) => {
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh'
        }}
      >
        <Spin indicator={antIcon} />
      </div>
    );
  }

  if (hasServerError) {
    return (
      <Result
        status='500'
        title='Error'
        subTitle='Lo sentimos, error del servidor inténtelo más tarde.'
        extra={
          <Link to='/'>
            <Button type='primary'>Regresar al inicio</Button>
          </Link>
        }
      />
    );
  }

  return <WrappedComponent {...componentProps} />;
};

export default withHandleResponse;
