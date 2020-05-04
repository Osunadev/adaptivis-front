import React from 'react';

import StudentLanding from 'pages/after-login-pages/student/student-landing/student-landing.page';
import TeacherLanding from 'pages/after-login-pages/teacher-admin/teacher-landing/teacher-landing-page';
import AdminLanding from 'pages/after-login-pages/teacher-admin/admin-landing/admin-landing.page';

const AuthenticatedApp = ({ userType }) => (
  <div>
    {
      {
        student: <StudentLanding />,
        teacher: <TeacherLanding />,
        admin: <AdminLanding />
      }[userType]
    }
  </div>
);

export default AuthenticatedApp;
