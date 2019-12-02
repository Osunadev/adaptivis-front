import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import ElementContainer from 'components/before-login-components/element-container/element-container.component';
import CardUserLogo from 'components/before-login-components/card-user-logo/card-user-logo.component';

const SelectUser = ({ userCardData, history }) => (
  <ElementContainer
    title='Registro de cuenta'
    specs={{ height: '450px', width: '700px' }}
  >
    {userCardData.map(({ userImgSrc, userTitle }) => (
      <CardUserLogo
        key={`card-${userTitle}`}
        onClick={() => history.push(`/registro/${userTitle.toLowerCase()}`)}
        imgSrc={userImgSrc}
        cardTitle={userTitle}
      />
    ))}
  </ElementContainer>
);

SelectUser.propTypes = {
  userCardData: PropTypes.arrayOf(
    PropTypes.shape({
      userTitle: PropTypes.string.isRequired,
      userImgSrc: PropTypes.string.isRequired
    })
  ).isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(SelectUser);
