import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StudentLanding from 'pages/after-login-pages/student-landing/student-landing.page';
import TeacherLanding from 'pages/after-login-pages/teacher-landing/teacher-landing-page';
import AdminLanding from 'pages/after-login-pages/admin-landing/admin-landing.page';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

import { selectCurrentUser } from 'redux/user-auth/user-auth.selectors';

const AuthenticatedApp = ({ currentUser: { role } }) => (
  <div>
    <GlobalStyle bgColor='white' />
    {
      {
        student: <StudentLanding />,
        professor: <TeacherLanding />,
        admin: <AdminLanding />
      }[role]
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AuthenticatedApp);
