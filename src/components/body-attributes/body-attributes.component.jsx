import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/* It allows us to change the body background of our HTML */
const BodyAttributes = ({ background, noOverflow }) => {
  let style = '';

  if (background) style = `background: ${background}; `;

  style += `overflow-y: ${noOverflow ? 'hidden' : 'auto'};`;

  return (
    <Helmet>
      <style>{`body { ${style} } `}</style>
    </Helmet>
  );
};

BodyAttributes.defaultProps = {
  background: null,
  noOverflow: false
};

BodyAttributes.propTypes = {
  background: PropTypes.string,
  noOverflow: PropTypes.bool
};

export default BodyAttributes;
