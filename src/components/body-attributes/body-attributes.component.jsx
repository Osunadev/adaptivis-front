import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/* It allows us to change the body background of our HTML */
const BodyAttributes = ({ background, noOverflow }) => {
  let style;

  if (background) style = `background: ${background}; `;
  style += `overflow-y: ${noOverflow ? 'hidden' : 'auto'};`;

  return (
    <Helmet>
      <style>{`body { ${style} } `}</style>
    </Helmet>
  );
};

BodyAttributes.defaultProps = {
  noOverflow: false
};

BodyAttributes.propTypes = {
  background: PropTypes.string.isRequired,
  noOverflow: PropTypes.bool
};

export default BodyAttributes;
