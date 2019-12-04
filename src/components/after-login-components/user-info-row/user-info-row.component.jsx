import React from 'react';

import { Avatar } from 'antd';

import {
  UserInfoContainer,
  UserInfoRowContainer
} from './user-info-row.styles';

const UserInfoRow = ({ userName, userId, imgSrc }) => (
  <UserInfoRowContainer>
    {imgSrc ? (
      <Avatar size={100} src={imgSrc} />
    ) : (
      <Avatar size={100} icon='user' />
    )}
    <UserInfoContainer>
      <span>{userName}</span>
      <span>{userId}</span>
    </UserInfoContainer>
  </UserInfoRowContainer>
);

export default UserInfoRow;
