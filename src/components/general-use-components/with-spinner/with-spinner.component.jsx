import React from 'react';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';

const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <LoadingSpinner /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
