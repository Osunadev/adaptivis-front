import React from 'react';

import { Avatar } from 'antd';

import { ContainerHeaderInfo, UserInfoText } from './user-header-info.styles';

const UserHeaderInfo = ({ userName, userId, imgSrc }) => (
  <ContainerHeaderInfo>
    <UserInfoText>{`${userName}  (${userId})`}</UserInfoText>
    {imgSrc ? <Avatar src={imgSrc} /> : <Avatar icon='user' />}
  </ContainerHeaderInfo>
);

export default UserHeaderInfo;
