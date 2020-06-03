import React from 'react';

import StudentLanding from 'pages/after-login-pages/student-landing/student-landing.page';
import TeacherLanding from 'pages/after-login-pages/teacher-landing/teacher-landing-page';
import AdminLanding from 'pages/after-login-pages/admin-landing/admin-landing.page';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

const AuthenticatedApp = ({ user }) => (
  <div>
    <GlobalStyle bgColor='white' />
    {
      {
        student: <StudentLanding user={user} />,
        teacher: <TeacherLanding user={user} />,
        admin: <AdminLanding user={user} />
      }[user.role]
    }
  </div>
);

export default AuthenticatedApp;
