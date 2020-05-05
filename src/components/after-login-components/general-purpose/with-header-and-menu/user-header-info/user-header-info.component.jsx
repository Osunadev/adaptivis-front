import React from 'react';

import { Avatar } from 'antd';

import { ContainerHeaderInfo, UserInfoText } from './user-header-info.styles';

const UserHeaderInfo = ({ userName, userId = null, imgSrc }) => {
  const userIdText = userId ? `(${userId})` : '';

  return (
    <ContainerHeaderInfo>
      <UserInfoText>{`${userName}  ${userIdText} `}</UserInfoText>
      {imgSrc ? <Avatar src={imgSrc} /> : <Avatar icon='user' />}
    </ContainerHeaderInfo>
  );
};

export default UserHeaderInfo;
