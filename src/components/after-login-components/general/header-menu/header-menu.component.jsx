import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { withRouter } from 'react-router-dom';

import {
  selectCurrentUserImage,
  selectCurrentUserName,
  selectCurrentUserType,
  selectCurrentUserIde
} from 'redux/user/user.selectors';

import { removeCurrentUser } from 'redux/user/user.actions';

import { createStructuredSelector } from 'reselect';

import { deleteToken } from 'utils/token-helper';

import { Layout } from 'antd';

import UserHeaderInfo from 'components/after-login-components/general/user-header-info/user-header-info.component';

import StudentMenuGroup from './student-menu-group.component';
import TeacherMenuGroup from './teacher-menu-group.component';
import AdminMenuGroup from './admin-menu-group.component';

const { Header, Content, Sider } = Layout;

const HeaderMenu = ({
  children,
  userType,
  userName,
  userImgSrc,
  userIde,
  removeUser,
  history
}) => {
  const handleClick = e => {
    const keyPath = e.key;

    let routeTo = '/';

    if (keyPath === 'cerrar-sesion') {
      // Deleting token from Local Storage
      deleteToken();
      removeUser();
    } else {
      routeTo = `/${userType}/${keyPath}`;
    }

    history.push(routeTo);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          background: '#2D2D2D'
        }}
      >
        <UserHeaderInfo
          userName={userName}
          userId={userIde}
          imgSrc={userImgSrc}
        />
      </Header>
      <Layout>
        <Sider
          width={235}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            top: '48px',
            paddingTop: '1rem'
          }}
        >
          {
            {
              alumno: <StudentMenuGroup onMenuItemClick={handleClick} />,
              profesor: <TeacherMenuGroup onMenuItemClick={handleClick} />,
              admin: <AdminMenuGroup onMenuItemClick={handleClick} />
            }[userType]
          }
        </Sider>
        <Layout
          style={{
            marginLeft: 235,
            marginTop: 48
          }}
        >
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: '1rem 2rem' }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  userImgSrc: selectCurrentUserImage,
  userName: selectCurrentUserName,
  userType: selectCurrentUserType,
  userIde: selectCurrentUserIde
});

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeCurrentUser())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HeaderMenu);
