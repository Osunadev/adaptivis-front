import React from 'react';

import PropTypes from 'prop-types';

import {
  LogoContainer,
  CardContainer,
  TitleContainer
} from './card-user-logo.styles';

const CardUserLogo = ({ onClick, imgSrc, cardTitle }) => (
  <CardContainer onClick={onClick}>
    <LogoContainer src={imgSrc} alt={`img-${cardTitle}`} />
    <TitleContainer>{cardTitle}</TitleContainer>
  </CardContainer>
);

CardUserLogo.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired
};

export default CardUserLogo;
