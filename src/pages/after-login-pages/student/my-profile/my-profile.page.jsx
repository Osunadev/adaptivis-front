import React from 'react';

import UserInfoRow from 'components/after-login-components/user-info-row/user-info-row.component';
import UserInfoTable from 'components/after-login-components/user-info-table/user-info-table.component';
import TitledWrapper from 'components/after-login-components/titled-wrapper/titled-wrapper.component';

import { USER_DATA } from 'components/after-login-components/user-info-table/user-info-table.data';

const MyProfilePage = () => {
  return (
    <>
      <UserInfoRow
        nickname='omar.osuna'
        userName='Omar Alonso Osuna Angulo'
        userId='1246437'
        imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI1nYFjspVR7xrsltC6cAPtyskl1nb5_enA5ll_8GN6vo3wPVCg&s'
      />
      <TitledWrapper title='Información Básica'>
        <UserInfoTable userData={USER_DATA} />
      </TitledWrapper>
    </>
  );
};

export default MyProfilePage;
