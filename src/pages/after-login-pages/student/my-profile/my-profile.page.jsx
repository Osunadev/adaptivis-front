import React from 'react';

import UserInfoRow from 'components/after-login-components/user-info-row/user-info-row.component';
import UserInfoTable from 'components/after-login-components/user-info-table/user-info-table.component';

import { Typography } from 'antd';
import { USER_DATA } from 'components/after-login-components/user-info-table/user-info-table.data';

import { UserInfoTableHeader, TableHeaderText } from './my-profile.styles';

const { Title } = Typography;

const MyProfilePage = ({ match, history }) => {
  return (
    <>
      <UserInfoRow
        userName='Omar Alonso Osuna Angulo'
        userId='1246437'
        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI1nYFjspVR7xrsltC6cAPtyskl1nb5_enA5ll_8GN6vo3wPVCg&s'
      />
      <UserInfoTableHeader>
        <Title level={3} style={{ fontWeight: 'normal' }}>
          Informacion Básica
        </Title>
        <TableHeaderText onClick={() => history.push(`${match.path}/editar`)}>
          Editar Información
        </TableHeaderText>
      </UserInfoTableHeader>
      <UserInfoTable userData={USER_DATA} />
    </>
  );
};

export default MyProfilePage;
