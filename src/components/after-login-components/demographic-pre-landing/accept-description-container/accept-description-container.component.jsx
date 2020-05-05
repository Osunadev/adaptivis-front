import React from 'react';

import { Button } from 'antd';

import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';

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
  <GeneralContainer title={title} width={width}>
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
  </GeneralContainer>
);

export default AcceptDescriptionContainer;
