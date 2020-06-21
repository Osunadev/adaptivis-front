import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StudentLanding from 'pages/after-login-pages/student-landing/student-landing.page';
import TeacherLanding from 'pages/after-login-pages/teacher-landing/teacher-landing-page';
import AdminLanding from 'pages/after-login-pages/admin-landing/admin-landing.page';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

import { selectCurrentUserRole } from 'redux/user-auth/user-auth.selectors';

/**
 * Authenticated part of the app, rendering a different component based on the user role
 * @param {Object} props - AuthenticatedApp props
 * @param {string} props.userRole - The user role: 'student', 'admin', 'teacher'
 */
const AuthenticatedApp = ({ userRole }) => (
  <div>
    <GlobalStyle
      // @ts-ignore
      bgColor='white'
    />
    {
      {
        student: <StudentLanding />,
        professor: <TeacherLanding />,
        admin: <AdminLanding />
      }[userRole]
    }
  </div>
);

AuthenticatedApp.propTypes = {
  userRole: PropTypes.oneOf(['student', 'admin', 'teacher']).isRequired
};

const mapStateToProps = createStructuredSelector({
  userRole: selectCurrentUserRole
});

export default connect(mapStateToProps)(AuthenticatedApp);
