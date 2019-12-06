import React from 'react';

import EditInfoForm from 'components/after-login-components/my-profile/edit-info-form/edit-info-form.component';
import EditPasswordForm from 'components/after-login-components/my-profile/edit-password-form/edit-password-form.component';
import EditChangeImage from 'components/after-login-components/my-profile/edit-change-image/edit-change-image.component';

import {
  EditInfoContainer,
  EditPwdImgContainer
} from './edit-my-profile.styles';

const EditMyProfilePage = () => {
  return (
    <EditInfoContainer>
      <EditInfoForm user='alumno' />
      <EditPwdImgContainer>
        <EditChangeImage />
        <EditPasswordForm />
      </EditPwdImgContainer>
    </EditInfoContainer>
  );
};

export default EditMyProfilePage;
