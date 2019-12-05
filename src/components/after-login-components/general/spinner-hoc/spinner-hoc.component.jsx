import React from 'react';

import { Spin, Icon } from 'antd';

const antIcon = <Icon type='loading' style={{ fontSize: 64 }} spin />;

const SpinnerHOC = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
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
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
export default SpinnerHOC;
