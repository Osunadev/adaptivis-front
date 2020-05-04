import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import GeneralContainer from 'components/general-use-components/general-container/general-container.component';
import CardUserLogo from 'components/before-login-components/register/card-user-logo/card-user-logo.component';

const SelectUser = ({ userCardData, history }) => (
  <GeneralContainer
    title='Registro de cuenta'
    width='700px'
    height='450px'
    transparent
  >
    {userCardData.map(({ userImgSrc, userTitle }) => (
      <CardUserLogo
        key={`card-${userTitle}`}
        onClick={() => history.push(`/registro/${userTitle.toLowerCase()}`)}
        imgSrc={userImgSrc}
        cardTitle={userTitle}
      />
    ))}
  </GeneralContainer>
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
