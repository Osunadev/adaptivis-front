import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/* It allows us to change the body background of our HTML */
const BodyBackground = ({ background, overflow }) => {
  return (
    <Helmet
      bodyAttributes={{
        style: `background: ${background}; overflow-y: ${
          overflow ? 'hidden' : 'auto'
        }`
      }}
    />
  );
};

BodyBackground.propTypes = {
  background: PropTypes.string.isRequired
};

export default BodyBackground;
