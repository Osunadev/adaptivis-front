import React from 'react';

import { Button } from 'antd';

import ElementContainer from 'components/before-login-components/element-container/element-container.component';

import {
  DescriptionText,
  BodyContainer
} from './accept-description-container.styles';

const AcceptDescriptionContainer = ({
  title,
  description,
  btnTitle,
  width,
  onClickHandler
}) => (
  <ElementContainer title={title} width={width}>
    <BodyContainer>
      <DescriptionText>{description}</DescriptionText>
      <Button
        type='primary'
        size='large'
        style={{ width: '40%', height: '36px' }}
        onClick={onClickHandler}
      >
        {btnTitle}
      </Button>
    </BodyContainer>
  </ElementContainer>
);

export default AcceptDescriptionContainer;
