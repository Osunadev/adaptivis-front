import React from 'react';

import { Spin, Icon } from 'antd';

const antIcon = <Icon type='loading' style={{ fontSize: 64 }} spin />;

const LoadingSpinner = () => {
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
};

export default LoadingSpinner;
